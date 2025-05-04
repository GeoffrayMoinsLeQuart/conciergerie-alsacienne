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
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: Activity;
  formule?: FormuleConciergerie | FormuleGestionLocative | string;
  address: string;
  city: string;
  postalCode: string;
  propertyType: string;
  surface: string;
  message: string;
  consent: boolean;
  // Anti-spam field (hidden from users)
  honeypot?: string;
  // Timestamp for submission tracking
  submissionTime?: string;
  preferredChannel: 'email' | 'whatsapp';
}
