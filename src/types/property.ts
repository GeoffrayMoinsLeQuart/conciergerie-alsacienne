export interface Property {
  _id: string;
  slug: {
    _type: string;
    current: string;
  };
  name?: string | null;
  shortDescription?: string | null;
  longDescription?: string | null;
  imagePrincipale?: any; // Image Sanity
  galleryImage?: {
    asset: any;
    caption?: string;
  }[] | null;
  categories?: {
    value: string;
  }[] | null;
}