import { getPosts, getCategories } from "@/sanity/sanity-utils";
import SingleBlog from "@/components/Blog/SingleBlog";
import PageTitle from "@/components/Common/PageTitle";
import BlogFilters from "@/components/Blog/BlogFilters";
import Pagination from "@/components/Blog/Pagination";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Blog Page | ${siteName}`,
  description: "This is Blog page description",
  // other metadata
};

export const revalidate = 60;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Récupérer les paramètres de l'URL
  const page = Number(searchParams.page) || 1;
  const categoriesParam = searchParams.categories as string;
  const categories = categoriesParam ? categoriesParam.split(',') : [];
  const search = searchParams.search as string || "";
  
  // Récupérer les posts avec pagination et filtrage
  const { posts, pagination } = await getPosts({
    page,
    limit: 9,
    categories,
    search,
  });

  console.log(posts)
  
  // Récupérer toutes les catégories pour le filtre
  const allCategories = await getCategories();

  return (
    <>
      <PageTitle
        pageTitle="Blog Grids"
        pageDescription="Autem, molestias eum voluptatibus quaerat praesentium laboriosam, eaque accusantium quam ratione veritatis magni ab."
        showMenu={true}
      />
      <section className="bg-white pb-20 pt-[90px]">
        <div className="container">
          {/* Filtres */}
          <BlogFilters categories={allCategories} />
          
          {/* Liste des articles */}
          <div className="mx-[-16px] flex flex-wrap">
            {posts.length > 0 ? (
              posts.map((blog) => (
                <SingleBlog key={blog?._id} blog={blog} />
              ))
            ) : (
              <div className="w-full px-4 py-10 text-center">
                <h3 className="text-xl font-semibold text-black mb-2">
                  Aucun article trouvé
                </h3>
                <p className="text-body-color">
                  Essayez de modifier vos critères de recherche ou de filtrage.
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="mx-[-16px] flex flex-wrap">
            <Pagination 
              currentPage={pagination.page} 
              totalPages={pagination.pages} 
            />
          </div>
        </div>
      </section>
    </>
  );
}
