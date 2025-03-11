interface Property {
  _id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  slug: string;
  image: string;
  categories: { value: string }[];
}