import { GetStaticProps } from "next";
import { useState, useMemo } from "react";
import { getFAQs } from "@/sanity/sanity-utils";
import FAQ, { FAQItem } from "@/components/FAQ";
import Head from "next/head";
import { useRouter } from "next/router";

interface FAQPageProps {
  faqs: FAQItem[];
  categories: string[];
}

const categoryLabels: Record<string, string> = {
  "conciergerie": "Conciergerie",
  "gestion-locative": "Gestion locative",
  "fiscalite": "Fiscalité",
  "technique": "Technique",
  "client": "Client",
  "autres": "Autres",
};

const categoryIcons: Record<string, string> = {
  "conciergerie": "\uD83D\uDEBA", // 🧳
  "gestion-locative": "\uD83C\uDFE1", // 🏡
  "fiscalite": "\uD83D\uDCB0", // 💰
  "technique": "\uD83D\uDD27", // 🛠️
  "client": "\uD83D\uDC65", // 👥
  "autres": "\u2753", // ❓
};

export default function FAQPage({ faqs, categories }: FAQPageProps) {
  const router = useRouter();
  const initialCategory = (router.query.category as string) || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [search, setSearch] = useState<string>("");

  const filteredFaqs = useMemo(() => {
    return faqs.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.type.includes(selectedCategory);
      const matchesSearch = item.question.toLowerCase().includes(search.toLowerCase()) ||
                            item.answer.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqs, selectedCategory, search]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    router.push(`/faq?category=${category}`, undefined, { shallow: true });
  };

  return (
    <>
      <Head>
        <title>FAQ - Toutes vos questions | Conciergerie Alsacienne</title>
        <meta name="description" content="Retrouvez les réponses aux questions les plus courantes sur la conciergerie, la gestion locative, la fiscalité et plus encore." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          })
        }} />
      </Head>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-4">FAQ</h1>
          <p className="text-center text-gray-600 mb-10">
            Retrouvez toutes les réponses aux questions fréquentes sur nos services de conciergerie, gestion locative, fiscalité et plus.
          </p>

          {/* Search Input */}
          <div className="mb-10">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher une question…"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Category Filter Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <button
              onClick={() => handleCategoryClick("all")}
              className={`p-4 rounded-lg border transition flex flex-col items-center hover:shadow-md ${
                selectedCategory === "all" ? "bg-primary text-white" : "bg-gray-50"
              }`}
            >
              <span className="text-3xl mb-2">\u2B50</span>
              <span className="font-medium text-center">Toutes les catégories</span>
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`p-4 rounded-lg border transition flex flex-col items-center hover:shadow-md ${
                  selectedCategory === cat ? "bg-primary text-white" : "bg-gray-50"
                }`}
              >
                <span className="text-3xl mb-2">{categoryIcons[cat]}</span>
                <span className="font-medium text-center">{categoryLabels[cat] || cat}</span>
              </button>
            ))}
          </div>

          {/* Filtered FAQs */}
          {filteredFaqs.length > 0 ? (
            <FAQ
              items={filteredFaqs}
              title="Questions fréquentes"
              subtitle={`Filtré par : ${selectedCategory === "all" ? "Toutes les catégories" : categoryLabels[selectedCategory]}`}
              mainTitle="FAQ"
              center={true}
            />
          ) : (
            <div className="text-center text-gray-500 italic">Aucune question trouvée pour ces critères.</div>
          )}
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const faqs = await getFAQs();
  const allTypes = faqs.flatMap((faq) => faq.type);
  const uniqueCategories = [...new Set(allTypes)];

  return {
    props: {
      faqs,
      categories: uniqueCategories,
    },
    revalidate: 60, // Rebuild toutes les 60 secondes si contenu modifié dans Sanity
  };
};