import PageTitle from "@/components/Common/PageTitle";
import BlogClient from "./BlogClient"; // ✅ PAS DE dynamic ici
import { Suspense } from "react";

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
