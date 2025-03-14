import { TattooShop } from '@/types/shop';

export const mockShops: TattooShop[] = [
  {
    id: '1',
    name: 'Ink & Iron Studio',
    description: 'Premier tattoo studio specializing in custom designs and traditional Japanese artwork. Our experienced artists bring your vision to life in a clean, modern environment.',
    address: '123 Main St',
    city: 'Los Angeles',
    phone: '(323) 555-0123',
    email: 'contact@inkandiron.com',
    website: 'https://inkandiron.com',
    instagram: '@inkandiron',
    rating: 4.8,
    imageUrl: '/shops/shop1.jpg',
    artists: [
      {
        id: 'a1',
        name: 'Sarah Chen',
        specialties: ['Japanese', 'Traditional'],
        portfolio: ['/portfolio/sarah1.jpg', '/portfolio/sarah2.jpg'],
        instagram: '@sarahchentattoo'
      }
    ],
    styles: ['Japanese', 'Traditional', 'Black and Grey']
  },
  {
    id: '2',
    name: 'Electric Dreams Tattoo',
    description: 'Contemporary tattoo studio focusing on colorful neo-traditional and illustrative designs. Known for our unique custom pieces and welcoming atmosphere.',
    address: '456 Sunset Blvd',
    city: 'Los Angeles',
    phone: '(323) 555-0124',
    email: 'info@electricdreams.com',
    website: 'https://electricdreamstattoo.com',
    instagram: '@electricdreamstattoo',
    rating: 4.9,
    imageUrl: '/shops/shop2.jpg',
    artists: [
      {
        id: 'a2',
        name: 'Mike Rivers',
        specialties: ['Neo-traditional', 'Color'],
        portfolio: ['/portfolio/mike1.jpg', '/portfolio/mike2.jpg'],
        instagram: '@mikerivers'
      }
    ],
    styles: ['Neo-traditional', 'Color', 'Illustrative']
  },
  {
    id: '3',
    name: 'Minimalist Ink',
    description: 'Specializing in fine line, minimalist, and geometric tattoos. Our artists create elegant, precise designs in a serene studio environment.',
    address: '789 Venice Beach',
    city: 'Los Angeles',
    phone: '(323) 555-0125',
    email: 'hello@minimalistink.com',
    website: 'https://minimalistink.com',
    instagram: '@minimalistink',
    rating: 4.7,
    imageUrl: '/shops/shop3.jpg',
    artists: [
      {
        id: 'a3',
        name: 'Luna Park',
        specialties: ['Fine Line', 'Geometric'],
        portfolio: ['/portfolio/luna1.jpg', '/portfolio/luna2.jpg'],
        instagram: '@lunaparktattoo'
      }
    ],
    styles: ['Fine Line', 'Minimalist', 'Geometric']
  }
];
