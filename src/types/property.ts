export interface Property {
  _id: string;
  slug: {
    _type: string;
    current: string;
  };
  name?: string;
  shortDescription?: string;
  longDescription?: string;
  imagePrincipale?: any;
  galleryImage?: {
    asset: any;
    caption?: string;
  }[];
  categories?: {
    value: string;
  }[];
  modeGestion?: 'Conciergerie' | 'Gestion Locative';
  surface?: number;
  revenuMensuel?: number;
  occupation?: number;
  loyer?: number;
  nbChambres?: number;
  nbSdb?: number;
  coordinates?: {
    lat: number;
    lng: number;
  };
  createdAt: Date;
}
