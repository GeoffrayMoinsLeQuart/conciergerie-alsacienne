export type Prestation = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  icon: string;
  slug: string;
  details?: JSX.Element | string;
};
