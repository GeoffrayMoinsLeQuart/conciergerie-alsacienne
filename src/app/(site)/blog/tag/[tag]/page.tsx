import SingleBlog from "@/components/Blog/SingleBlog";
import PageTitle from "@/components/Common/PageTitle";
import { postQueryByTag } from "@/sanity/sanity-query";
import { getPostByTag, sanityFetch } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";

type Props = {
  params: Promise<{ tag: string }>;
};

const siteName = process.env.SITE_NAME;
const authorName = process.env.AUTHOR_NAME;

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { tag } = params;

  const formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1);

  if (tag) {
    return {
      title: ` ${formattedTag} | ${siteName}`,
      description: `This is the Tag page for ${siteName}`,
      author: authorName,

      robots: {
        index: false,
        follow: false,
        nocache: true,
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No tag has been found",
    };
  }
}

export default async function TagSlugPage(props: Props) {
  const params = await props.params;
  const { tag } = params;
  const formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1);

  const posts : Blog[] = await getPostByTag(tag);

  return (
    <>
      <PageTitle
        pageTitle={`${formattedTag}`}
        pageDescription="Autem, molestias eum voluptatibus quaerat praesentium laboriosam, eaque accusantium quam ratione veritatis magni ab."
      />
      <section className="bg-white pb-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {posts.length > 0 &&
              posts.map((post, key) => <SingleBlog key={key} blog={post} />)}
          </div>
        </div>
      </section>
    </>
  );
}
