export interface Property {
  _id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  slug: string;
  image: string;  // Ceci représente imagePrincipale transformée
  categories?: { value: string }[];
  galleryImage?: Array<{
    url: string;     // URL de l'image transformée
    caption?: string;
  }>;
}