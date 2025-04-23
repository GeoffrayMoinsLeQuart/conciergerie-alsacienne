import PageTitle from "@/components/Common/PageTitle";
import BlogClient from "./BlogClient"; // ✅ PAS DE dynamic ici
import { Suspense } from "react";

// Définition des metadata pour la page Blog
export const metadata = {
  title:
    "Blog | Votre Source d'Information sur l'Immobilier et la Gestion Locative",
  description:
    "Explorez notre blog pour des articles sur l'immobilier, la gestion locative, Airbnb, la rentabilité locative et bien plus. Tenez-vous informé des dernières tendances et optimisez vos investissements.",
};

export default function BlogPage() {
  return (
    <>
      <PageTitle
        pageTitle="Notre Blog"
        pageDescription="Découvrez nos articles sur les services de conciergerie en Alsace et les meilleures adresses de la région."
        showMenu={true}
      />
      <Suspense
        fallback={
          <div className="py-12 text-center">Chargement du blog...</div>
        }
      >
        <BlogClient />
      </Suspense>
    </>
  );
}
