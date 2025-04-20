const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "metadata",
      title: "Metadata",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        unique: true,
        slugify: (input: any) => {
          return input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");
        },
      },
      validation: (Rule: any) =>
        Rule.required().custom((fields: any) => {
          if (
            fields?.current !== fields?.current?.toLowerCase() ||
            fields?.current.split(" ").includes("")
          ) {
            return "Slug must be lowercase and not be included space";
          }
          return true;
        }),
    },
    {
      name: "category",
      title: "Catégories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Conciergerie", value: "conciergerie" },
          { title: "Gestion locative", value: "gestion-locative" },
          { title: "Fiscalité", value: "fiscalite" },
          { title: "LMNP", value: "LMNP" },
          { title: "Location courte durée", value: "location-courte-duree" },
          { title: "Location longue durée", value: "location-longue-duree" },
          { title: "Airbnb", value: "airbnb" },
          { title: "Rentabilité", value: "rentabilité" },
          { title: "Investissement", value: "investissement" },
          { title: "Réglementation", value: "réglementation" },
          { title: "Autres", value: "autres" },
        ],
        layout: "checkbox",
      },
      validation: (Rule: any) =>
        Rule.required().min(1).error("Sélectionnez au moins une catégorie"),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "text",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection: any) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
export default post;
