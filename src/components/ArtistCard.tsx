import Image from 'next/image';
import Link from 'next/link';
import { ExtendedArtist } from '@/data/mockArtists';

interface ArtistCardProps {
  artist: ExtendedArtist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Portfolio Preview */}
      <div className="grid grid-cols-2 gap-0.5 bg-gray-100">
        {artist.portfolio.slice(0, 2).map((image, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={image}
              alt={`${artist.name}'s work ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Artist Info */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <Link href={`/artists/${artist.id}`}>
              <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600">{artist.name}</h3>
            </Link>
            <p className="text-gray-600 text-sm">{artist.shopName}</p>
          </div>
          <span className={`
            px-3 py-1 rounded-full text-sm font-medium
            ${artist.availability === 'Available' ? 'bg-green-100 text-green-800' : ''}
            ${artist.availability === 'Booked' ? 'bg-red-100 text-red-800' : ''}
            ${artist.availability === 'Guest Spot' ? 'bg-blue-100 text-blue-800' : ''}
          `}>
            {artist.availability}
          </span>
        </div>

        <div className="mt-3">
          <p className="text-gray-600 text-sm line-clamp-2">{artist.bio}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {artist.specialties.map((specialty) => (
            <span
              key={specialty}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
            >
              {specialty}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-gray-600">{artist.priceRange}</span>
          {artist.instagram && (
            <a
              href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              {artist.instagram}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
