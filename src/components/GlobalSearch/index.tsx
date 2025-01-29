import algoliasearch from "algoliasearch";
import { useEffect } from "react";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch";
import CustomHits from "./CustomHits";
import { integrations, messages } from "../../../integrations.config";

const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_PROJECT_ID as string;
const API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string;
const INDEX = process.env.NEXT_PUBLIC_ALGOLIA_INDEX as string;

const algoliaClient = algoliasearch(APP_ID, API_KEY);

type Props = {
  searchModalOpen: boolean;
  setSearchModalOpen: (value: boolean) => void;
};

const GlobalSearchModal = (props: Props) => {
  const { searchModalOpen, setSearchModalOpen } = props;

  useEffect(() => {
    // closing modal while clicking outside
    function handleClickOutside(event: any) {
      if (!event.target.closest(".modal-content")) {
        setSearchModalOpen(false);
      }
    }

    if (searchModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchModalOpen, setSearchModalOpen]);

  return (
    <>
      {searchModalOpen && (
        <div className="backdrop-filter-sm visible fixed left-0 top-0 z-[9999999] flex h-full min-h-screen w-full justify-center  bg-[rgba(0,0,0,0.25)] px-4 py-7 opacity-100 backdrop-blur-sm sm:px-8">
          <div className="modal-content relative w-full max-w-[680px] scale-100 transform rounded-[15px] bg-white transition-all">
            <button
              onClick={() => setSearchModalOpen(false)}
              className="text-dark-text absolute -right-6 -top-6 z-[9999] flex h-11 w-11 items-center justify-center rounded-full border-2 border-stroke bg-white text-body-color hover:text-dark"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9983 10.586L17.9483 5.63603L19.3623 7.05003L14.4123 12L19.3623 16.95L17.9483 18.364L12.9983 13.414L8.04828 18.364L6.63428 16.95L11.5843 12L6.63428 7.05003L8.04828 5.63603L12.9983 10.586Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <div className="flex h-full max-h-[calc(100vh-70px)] flex-col overflow-y-auto">
              <InstantSearch
                // insights={false}
                searchClient={algoliaClient}
                indexName={INDEX}
              >
                <SearchBox
                  autoFocus
                  placeholder="Search Entire Site | Products, Docs, Pages ..."
                  classNames={{
                    form: "sticky top-0 z-[999] border-b",
                    input:
                      "h-[74px] w-full bg-white rounded-t-lg pl-[60px] pr-5 text-dark outline-none",
                    submitIcon:
                      "absolute left-0 top-0 flex h-[74px] w-[60px] p-5 items-center justify-center fill-dark-text",
                    reset: "hidden",
                    resetIcon: "hidden",
                    loadingIndicator: "hidden",
                    loadingIcon: "hidden",
                  }}
                />

                <div className="h-full rounded-b-lg bg-white">
                  {integrations?.isSanityEnabled ? (
                    <Hits
                      hitComponent={(props) => (
                        <CustomHits
                          {...props}
                          setSearchModalOpen={setSearchModalOpen}
                        />
                      )}
                    />
                  ) : (
                    <p className="text-center">{messages?.algolia}</p>
                  )}
                </div>
              </InstantSearch>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GlobalSearchModal;
