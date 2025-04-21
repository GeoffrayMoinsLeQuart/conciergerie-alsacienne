import { getPosts } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import SingleBlog from "./SingleBlog";

export default async function HomeBlogSection() {
  const result = await getPosts();
  // Vérifier si posts est un tableau ou un objet avec une propriété posts
  const posts = Array.isArray(result) ? result : result.posts || [];

  return (
    <section id="news" className="bg-[#f8f9ff] py-20 lg:pt-[120px]">
      <div className="container">
        <div className="mx-[-16px] flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[50px] max-w-[600px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                BLOG
              </span>
              <h2 className="mb-5 text-3xl font-bold text-black sm:text-4xl md:text-[45px]">
                Latest Blogs
              </h2>
              <p className="text-lg font-medium text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {posts.slice(0, 3).map((blog: Blog) => (
            <SingleBlog blog={blog} key={blog?._id} />
          ))}
        </div>
      </div>
    </section>
  );
}
