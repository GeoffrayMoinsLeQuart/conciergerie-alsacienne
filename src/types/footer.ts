export type FooterLink = {
  id: string | number;
  title: string;
  href: string;
  external?: boolean;
};

export type FooterSocial = {
  label: string;
  id: string | number;
  title: string;
  href: string;
  icon: JSX.Element;
};
