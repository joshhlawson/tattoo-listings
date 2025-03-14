'use client';

import { useState } from 'react';
import ShopCard from '@/components/ShopCard';
import ShopFilters from '@/components/ShopFilters';
import { mockShops } from '@/data/mockShops';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function ShopsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');

  const filteredShops = mockShops.filter(shop => {
    const matchesSearch = shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStyle = selectedStyle === 'All' || shop.styles.includes(selectedStyle);
    const matchesCity = selectedCity === 'All' || shop.city === selectedCity;
    
    return matchesSearch && matchesStyle && matchesCity;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tattoo Shops</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search shops by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <ShopFilters
              selectedStyle={selectedStyle}
              selectedCity={selectedCity}
              onStyleChange={setSelectedStyle}
              onCityChange={setSelectedCity}
            />
          </div>

          {/* Shop Grid */}
          <div className="lg:col-span-3">
            {filteredShops.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No shops found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredShops.map((shop) => (
                  <ShopCard key={shop.id} shop={shop} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
