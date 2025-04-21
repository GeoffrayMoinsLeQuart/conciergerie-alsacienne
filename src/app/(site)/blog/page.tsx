import { getPosts, getCategories } from "@/sanity/sanity-utils";
import SingleBlog from "@/components/Blog/SingleBlog";
import PageTitle from "@/components/Common/PageTitle";
import BlogFilters from "@/components/Blog/BlogFilters";
import Pagination from "@/components/Blog/Pagination";
import { Metadata } from "next";
import { Category } from "@/types/blog";

const siteName = process.env.SITE_NAME || "Conciergerie Alsacienne";

export const metadata: Metadata = {
  title: `Blog | ${siteName}`,
  description: "Découvrez nos articles sur les services de conciergerie en Alsace et les meilleures adresses de la région",
  openGraph: {
    title: `Blog | ${siteName}`,
    description: "Découvrez nos articles sur les services de conciergerie en Alsace et les meilleures adresses de la région",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${siteName}`,
    description: "Découvrez nos articles sur les services de conciergerie en Alsace et les meilleures adresses de la région",
  }
};

export const revalidate = 60;

// Définition des types pour les paramètres de recherche
type SearchParams = {
  page?: string;
  categories?: string;
  search?: string;
  [key: string]: string | undefined;
};

const BlogPage = async (props: { searchParams: Promise<SearchParams> }) => {
  // Récupérer les paramètres de l'URL
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const categoriesParam = searchParams.categories;
  const categories = categoriesParam ? categoriesParam.split(',') : [];
  const search = searchParams.search || "";
  
  // Récupérer toutes les catégories pour le filtre
  const allCategories = await getCategories() as Category[];
  
  // Récupérer les posts avec pagination et filtrage
  const { posts, pagination } = await getPosts({
    page,
    limit: 9,
    categories,
    search,
  });

  // Déterminer le titre de la page en fonction des filtres
  let pageTitle = "Notre Blog";
  let pageDescription = "Découvrez nos articles sur les services de conciergerie en Alsace et les meilleures adresses de la région.";
  
  if (categories.length > 0 && allCategories.length > 0) {
    const categoryNames = categories.map(slug => {
      const category = allCategories.find(cat => cat.slug === slug);
      return category ? category.title : slug;
    });
    pageTitle = `Articles sur ${categoryNames.join(', ')}`;
  }
  
  if (search) {
    pageTitle = `Recherche: "${search}"`;
    pageDescription = `Résultats de recherche pour "${search}" dans notre blog.`;
  }

  console.log("Posts récupérés:", posts?.length || 0);

  return (
    <>
      <PageTitle
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        showMenu={true}
      />
      <section className="bg-white pb-20 pt-[90px]">
        <div className="container">
          {/* Filtres */}
          <BlogFilters categories={allCategories} />
          
          {/* Liste des articles */}
          <div className="mx-[-16px] flex flex-wrap">
            {posts && posts.length > 0 ? (
              posts.map((blog) => (
                blog && <SingleBlog key={blog?._id} blog={blog} />
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
          {pagination && pagination.pages > 1 && (
            <div className="mx-[-16px] flex flex-wrap">
              <Pagination 
                currentPage={pagination.page} 
                totalPages={pagination.pages} 
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
