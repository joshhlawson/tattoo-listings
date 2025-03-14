import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative h-[500px] -mt-8 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Find Your Perfect Tattoo Artist</h1>
          <p className="text-xl mb-8 max-w-2xl">Discover talented artists and renowned tattoo shops in your area. Browse portfolios, read reviews, and book your next piece with confidence.</p>
          
          {/* Search Bar */}
          <div className="w-full max-w-2xl relative">
            <input
              type="text"
              placeholder="Search by city, style, or artist name..."
              className="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
              <MagnifyingGlassIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Image src="/search.svg" alt="Search" width={32} height={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
          <p className="text-gray-600">Find the perfect artist based on style, location, and reviews</p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Image src="/portfolio.svg" alt="Portfolio" width={32} height={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Browse Portfolios</h3>
          <p className="text-gray-600">Explore artist portfolios and find the style that matches your vision</p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Image src="/book.svg" alt="Book" width={32} height={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Direct Booking</h3>
          <p className="text-gray-600">Connect directly with shops and schedule your consultation</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Next Tattoo Artist?</h2>
          <Link 
            href="/shops" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse Shops
          </Link>
        </div>
      </div>
    </div>
  );
}
