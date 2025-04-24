export enum Activity {
  GestionLocative = "gestion-locative",
  Conciergerie = "conciergerie",
}

export enum FormuleConciergerie {
  Standard = "standard",
  Premium = "premium",
  Exclusive = "exclusive",
}

export enum FormuleGestionLocative {
  Essentielle = "essentielle",
  Serenite = "serenite",
  Premium = "premium",
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  availability: string;
  serviceType: Activity;
  formule?: FormuleConciergerie | FormuleGestionLocative;
  address: string;
  city: string;
  postalCode: string;
  propertyType: string;
  surface: string;
  budget: string;
  message: string;
  consent: boolean;
}
