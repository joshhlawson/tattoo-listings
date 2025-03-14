export interface TattooShop {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  website?: string;
  instagram?: string;
  rating: number;
  imageUrl: string;
  artists: Artist[];
  styles: string[];
}

export interface Artist {
  id: string;
  name: string;
  specialties: string[];
  portfolio: string[];
  instagram?: string;
}
