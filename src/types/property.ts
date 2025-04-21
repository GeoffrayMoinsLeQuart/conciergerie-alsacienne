export interface Property {
  _id: string;
  slug: {
    _type: string;
    current: string;
  };
  title?: string | null;
  mainImage?: string | null;
  image?: string | null; // si utilisé ailleurs
  shortDescription?: string | null;
  price?: number | null;
  surface?: number | null;
  bedrooms?: number | null;
  bathrooms?: number | null;
  address?: string | null;
  description?: string | null;
  features?: string[] | null;
  owner?: string | null;
  propertyType?: string | null;
  images?: string[] | null;
}
