import SingleBlog from "@/components/Blog/SingleBlog";
import PageTitle from "@/components/Common/PageTitle";
import { getPosts } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Blog Page | ${siteName}`,
  description: "This is Blog page description",
  // other metadata
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <PageTitle
        pageTitle="Blog Grids"
        pageDescription=" Autem, molestias eum voluptatibus quaerat praesentium laboriosam, eaque accusantium quam ratione veritatis magni ab."
        showMenu={true}
      />
      <section className="bg-white pb-20 pt-[90px]">
        <div className="container">
          <div className="mx-[-16px] flex flex-wrap">
            {posts.length > 0 &&
              posts.map((blog: Blog) => (
                <SingleBlog key={blog?._id} blog={blog} />
              ))}
          </div>

          {/* ====== Pagination ====== */}
          {/* <div className="mx-[-16px] flex flex-wrap">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-sm bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-sm bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-sm bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-sm bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#"
                    className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-sm bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color"
                  >
                    ...
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-sm bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-sm bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
