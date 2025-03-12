const propertyType = {
  name: "propertyType",
  title: "Property Type",
  type: "document",
  liveEdit: true,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "string",
    },
    {
      name: "longDescription",
      title: "Long Description",
      type: "text",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "imagePrincipale",
      title: "Image Principale",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      type: "array",
      name: "galleryImage",
      title: "Gallery Image",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
              // Option isHighlighted supprimée
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "object",
          name: "category",
          fields: [
            {
              name: "value",
              title: "Value",
              type: "string",
              options: {
                list: ["Studio", "T1", "T2", "T3"],
                layout: "radio",
              },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "imagePrincipale", // Attention, 'image' a été changé pour 'imagePrincipale'
    },
  },
};

export default propertyType;