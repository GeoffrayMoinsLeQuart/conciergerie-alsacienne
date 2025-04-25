const propertyType = {
  name: 'propertyType',
  title: 'Property Type',
  type: 'document',
  liveEdit: true,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'imagePrincipale',
      title: 'Image Principale',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'createdAt',
      title: 'created at',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      type: 'array',
      name: 'galleryImage',
      title: 'Gallery Image',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              // Option isHighlighted supprimée
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'modeGestion',
      title: 'Mode de gestion',
      type: 'string',
      options: {
        list: ['Conciergerie', 'Gestion Locative'],
        layout: 'radio',
      },
    },
    {
      name: 'surface',
      title: 'Surface (m²)',
      type: 'number',
    },
    {
      name: 'revenuMensuel',
      title: 'Revenu Mensuel Estimé (€)',
      type: 'number',
      hidden: ({ document }) => document?.modeGestion === 'Gestion Locative',
    },
    {
      name: 'occupation',
      title: "Taux d'occupation (%)",
      type: 'number',
      hidden: ({ document }) => document?.modeGestion === 'Gestion Locative',
    },
    {
      name: 'loyer',
      title: 'Loyer mensuel (€)',
      type: 'number',
      hidden: ({ document }) => document?.modeGestion === 'Conciergerie',
    },
    {
      name: 'nbChambres',
      title: 'Nombre de chambres',
      type: 'number',
    },
    {
      name: 'coordinates',
      title: 'Localisation',
      type: 'geopoint',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'imagePrincipale', // Attention, 'image' a été changé pour 'imagePrincipale'
    },
  },
};

export default propertyType;
