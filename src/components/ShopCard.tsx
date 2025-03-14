import Image from 'next/image';
import Link from 'next/link';
import { TattooShop } from '@/types/shop';
import { StarIcon } from '@heroicons/react/20/solid';

interface ShopCardProps {
  shop: TattooShop;
}

export default function ShopCard({ shop }: ShopCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 w-full bg-gray-100">
        <Image
          src={shop.imageUrl}
          alt={shop.name}
          fill
          className="object-cover"
          priority={false}
          onError={(e: any) => {
            e.target.src = 'https://images.unsplash.com/photo-1590246814979-f05ac21a3805?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
          }}
        />
      </div>
      <div className="p-4">
        <Link href={`/shops/${shop.id}`}>
          <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600">{shop.name}</h3>
        </Link>
        <p className="mt-1 text-gray-500 line-clamp-2">{shop.description}</p>
        <div className="mt-2 flex items-center">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-5 w-5 ${
                i < shop.rating ? 'text-yellow-400' : 'text-gray-200'
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">{shop.rating.toFixed(1)}</span>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          <p>{shop.city}</p>
          <p className="mt-1">Styles: {shop.styles.slice(0, 3).join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
