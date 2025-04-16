"use client";

import { navbarData } from "@/static-data/navbar";
import { onScroll } from "@/utils/scrollActive";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import GlobalSearchModal from "../GlobalSearch";

export default function Navbar() {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const pathUrl = usePathname();

  const navigationHandler = () => {
    setNavigationOpen(!navigationOpen);
  };

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  // ==== onePage nav active ====
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${stickyMenu ? "sticky-navbar" : ""} header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent transition`}
      >
        <div className="mx-auto w-full px-4 xl:container">
          <div className="text-3xl mx-auto pt-5 w-full px-4 font-semibold text-black xl:container sm:text-4xl md:text-3xl ">
            Contactez nous au : 06 21 47 19 22
          </div>
          <div className="relative mx-[-16px] flex items-center justify-between">
            <div className="w-52 max-w-full px-4 xl:w-60">
              <Link href="/" className="header-logo block w-full py-6 lg:py-8">
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={175}
                  height={40}
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navigationHandler}
                  name="navbarToggler"
                  aria-label="navbarToggler"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-[6px] block h-[2px] w-[30px] bg-dark ${navigationOpen ? "top-[7px] rotate-45" : ""}`}
                  ></span>
                  <span
                    className={`relative my-[6px] block h-[2px] w-[30px] bg-dark ${navigationOpen ? "opacity-0" : ""}`}
                  ></span>
                  <span
                    className={`relative my-[6px] block h-[2px] w-[30px] bg-dark ${navigationOpen ? "top-[-8px] rotate-[135deg]" : ""}`}
                  ></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className={`${!navigationOpen ? "hidden lg:block" : ""} absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white p-5 py-5 shadow-lg max-lg:max-h-[350px] max-lg:overflow-y-auto lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none xl:px-6`}
                >
                  <ul className="block lg:flex">
                    {navbarData.map((item) => (
                      <li
                        key={item?.id}
                        className={`group relative lg:px-5 ${item?.submenu ? "submenu-item" : ""}`}
                      >
                        {item?.href ? (
                          <Link
                            href={
                              item?.href
                                ? item?.external
                                  ? item.href
                                  : item?.href
                                    ? `/${item.href}`
                                    : "/"
                                : "/"
                            }
                            onClick={navigationHandler}
                            className={`${pathUrl === `/${item?.href}` ? "text-primary" : ""} flex py-2 text-base text-black group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${item?.href?.startsWith("#") ? "menu-scroll" : ""}`}
                          >
                            {item?.title}
                          </Link>
                        ) : (
                          <>
                            <button
                              onClick={() =>
                                setDropdownToggler(!dropdownToggler)
                              }
                              className="flex w-full items-center justify-between py-2 text-base text-black group-hover:text-primary lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {item?.title}

                              <span className="pl-3">
                                <svg
                                  width="14"
                                  height="8"
                                  viewBox="0 0 14 8"
                                  className={`fill-current duration-200 lg:group-hover:-scale-y-100 ${dropdownToggler ? "max-lg:-scale-y-100" : ""}`}
                                >
                                  <path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z" />
                                </svg>
                              </span>
                            </button>
                            {item?.submenu && (
                              <ul
                                className={`${dropdownToggler ? "" : "hidden lg:block"} submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full`}
                              >
                                {item?.submenu.map((item) => (
                                  <li key={item?.id}>
                                    <Link
                                      href={item?.href}
                                      onClick={navigationHandler}
                                      className={`block rounded px-4 py-[10px] text-sm ${pathUrl === item?.href ? "text-primary" : "text-black hover:text-primary"}`}
                                    >
                                      {item?.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="hidden items-center justify-end gap-4 pr-16 sm:flex lg:pr-0">
                {/* <button
                  onClick={() => setSearchModalOpen(true)}
                  className="hidden h-10 w-10 items-center justify-center rounded-full text-body-color sm:flex"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 18 18"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_369_1884)">
                      <path
                        d="M16.9347 15.3963L12.4816 11.7799C14.3168 9.26991 14.1279 5.68042 11.8338 3.41337C10.6194 2.19889 9.00003 1.52417 7.27276 1.52417C5.54549 1.52417 3.92617 2.19889 2.71168 3.41337C0.201738 5.92332 0.201738 10.0256 2.71168 12.5355C3.92617 13.75 5.54549 14.4247 7.27276 14.4247C8.91907 14.4247 10.4574 13.804 11.6719 12.6975L16.179 16.3409C16.287 16.4219 16.4219 16.4759 16.5569 16.4759C16.7458 16.4759 16.9077 16.3949 17.0157 16.26C17.2316 15.9901 17.2046 15.6122 16.9347 15.3963ZM7.27276 13.2102C5.86935 13.2102 4.5739 12.6705 3.57532 11.6719C1.52418 9.62076 1.52418 6.30116 3.57532 4.27701C4.5739 3.27843 5.86935 2.73866 7.27276 2.73866C8.67617 2.73866 9.97162 3.27843 10.9702 4.27701C13.0213 6.32815 13.0213 9.64775 10.9702 11.6719C9.99861 12.6705 8.67617 13.2102 7.27276 13.2102Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_369_1884">
                        <rect
                          width="17.2727"
                          height="17.2727"
                          fill="white"
                          transform="translate(0.363647 0.363647)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button> */}
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-8 py-3 text-base font-bold text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-signUp md:px-9 lg:px-8 xl:px-9"
                >
                  Contactez nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {searchModalOpen && (
        <GlobalSearchModal
          searchModalOpen={searchModalOpen}
          setSearchModalOpen={setSearchModalOpen}
        />
      )}
    </>
  );
}
