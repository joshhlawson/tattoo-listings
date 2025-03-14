import { Artist } from '@/types/shop';

export interface ExtendedArtist extends Artist {
  bio: string;
  yearsOfExperience: number;
  shopId: string;
  shopName: string;
  availability: 'Available' | 'Booked' | 'Guest Spot';
  priceRange: string;
}

export const mockArtists: ExtendedArtist[] = [
  {
    id: 'a1',
    name: 'Sarah Chen',
    specialties: ['Japanese', 'Traditional'],
    portfolio: [
      'https://images.unsplash.com/photo-1612271598100-5443d0095025?w=800',
      'https://images.unsplash.com/photo-1542717819-a9e0e43f9c7e?w=800'
    ],
    instagram: '@sarahchentattoo',
    bio: 'Specializing in Japanese and Traditional styles with 8 years of experience. Known for bold lines and vibrant colors.',
    yearsOfExperience: 8,
    shopId: '1',
    shopName: 'Ink & Iron Studio',
    availability: 'Available',
    priceRange: '$150-300/hr'
  },
  {
    id: 'a2',
    name: 'Mike Rivers',
    specialties: ['Neo-traditional', 'Color'],
    portfolio: [
      'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800',
      'https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=800'
    ],
    instagram: '@mikerivers',
    bio: 'Award-winning artist specializing in neo-traditional designs. Creating unique, colorful pieces that tell stories.',
    yearsOfExperience: 12,
    shopId: '2',
    shopName: 'Electric Dreams Tattoo',
    availability: 'Booked',
    priceRange: '$200-400/hr'
  },
  {
    id: 'a3',
    name: 'Luna Park',
    specialties: ['Fine Line', 'Geometric'],
    portfolio: [
      'https://images.unsplash.com/photo-1590246814979-f05ac21a3805?w=800',
      'https://images.unsplash.com/photo-1621112904887-419379ce6824?w=800'
    ],
    instagram: '@lunaparktattoo',
    bio: 'Minimalist tattoo artist focusing on precise, delicate designs. Bringing geometric perfection to every piece.',
    yearsOfExperience: 5,
    shopId: '3',
    shopName: 'Minimalist Ink',
    availability: 'Guest Spot',
    priceRange: '$180-350/hr'
  },
  {
    id: 'a4',
    name: 'Alex Black',
    specialties: ['Black and Grey', 'Realism'],
    portfolio: [
      'https://images.unsplash.com/photo-1607762470741-d0b61c171b37?w=800',
      'https://images.unsplash.com/photo-1610925877803-1a2a3ad8b166?w=800'
    ],
    instagram: '@alexblacktattoo',
    bio: 'Master of black and grey realism. Creating stunning portraits and detailed artwork that comes to life on skin.',
    yearsOfExperience: 15,
    shopId: '1',
    shopName: 'Ink & Iron Studio',
    availability: 'Available',
    priceRange: '$250-500/hr'
  }
];
