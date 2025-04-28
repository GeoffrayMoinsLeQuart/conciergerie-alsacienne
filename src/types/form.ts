export enum Activity {
  GestionLocative = 'gestion-locative',
  Conciergerie = 'conciergerie',
  Transformation = 'transformation',
}

export enum FormuleGestionLocative {
  Essentielle = 'essentielle',
  Serenite = 'serenite',
  Premium = 'premium',
}

export enum FormuleConciergerie {
  Standard = 'standard',
  Premium = 'premium',
  Exclusive = 'exclusive',
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  availability: string;
  serviceType: Activity;
  formule?: FormuleConciergerie | FormuleGestionLocative | string;
  address: string;
  city: string;
  postalCode: string;
  propertyType: string;
  surface: string;
  budget: string;
  message: string;
  consent: boolean;
  // Anti-spam field (hidden from users)
  honeypot?: string;
  // Timestamp for submission tracking
  submissionTime?: string;
}
