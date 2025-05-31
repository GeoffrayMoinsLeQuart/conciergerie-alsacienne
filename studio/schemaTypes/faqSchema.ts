import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Réponse',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Contexte / Type de service',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Conciergerie', value: 'conciergerie' },
          { title: 'Gestion locative', value: 'gestion-locative' },
          { title: 'Fiscalité', value: 'fiscalite' },
          { title: 'Technique', value: 'technique' },
          { title: 'Client', value: 'client' },
          { title: 'Autres', value: 'autres' },
        ],
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'topic',
      title: 'Thématique',
      type: 'string',
      options: {
        list: [
          { title: 'Loyers', value: 'loyers' },
          { title: 'Travaux & maintenance', value: 'travaux' },
          { title: 'Accès / Serrures', value: 'acces' },
          { title: 'Ménage & linge', value: 'menage' },
          { title: 'Rentabilité', value: 'rentabilite' },
          { title: 'Fiscalité', value: 'fiscalite' },
          { title: 'Calendrier & réservations', value: 'calendrier' },
          { title: 'Sécurité', value: 'securite' },
          { title: 'Relations locataires', value: 'relations-locataires' },
          { title: 'Baux & contrats', value: 'baux' },
          { title: 'Déclarations & obligations', value: 'obligations' },
          { title: 'Autres', value: 'autres' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icône personnalisée (optionnelle)',
      type: 'string',
      description: "Emoji ou nom d'icône à afficher pour cette question si besoin",
    }),
    defineField({
      name: 'order',
      title: "Ordre d'affichage",
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'isActive',
      title: 'Actif',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'topic',
    },
  },
});
