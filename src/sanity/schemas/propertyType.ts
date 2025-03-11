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
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageButtons",
      type: "object",
      title: "Image Buttons",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          type: "array",
          name: "image",
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
                  options: {
                    isHighlighted: true, // <-- make this field easily accessible
                  },
                },
              ],
            },
          ],
          options: {
            layout: "grid",
          },
        },
      ],
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
      media: "image",
    },
  },
};

export default propertyType;
