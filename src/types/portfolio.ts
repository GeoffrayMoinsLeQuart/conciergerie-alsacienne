import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type Portfolio = {
  id: string | number;
  title: string;
  slug: string;
  sortDescription: string;
  image: string | StaticImport;
  tags: string[];
  categories?: string[];
  website?: string;
  location?: string;
  completedDate?: string;
  details?: JSX.Element;
};
