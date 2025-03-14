'use client';

import { useState } from 'react';
import { mockArtists } from '@/data/mockArtists';
import ArtistCard from '@/components/ArtistCard';
import ArtistFilters from '@/components/ArtistFilters';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function ArtistsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedAvailability, setSelectedAvailability] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');

  const getExperienceRange = (years: number) => {
    if (years < 5) return '0-5 years';
    if (years < 10) return '5-10 years';
    return '10+ years';
  };

  const filteredArtists = mockArtists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.shopName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecialty = selectedSpecialty === 'All' || 
      artist.specialties.includes(selectedSpecialty);
    
    const matchesAvailability = selectedAvailability === 'All' || 
      artist.availability === selectedAvailability;
    
    const matchesExperience = selectedExperience === 'All' || 
      getExperienceRange(artist.yearsOfExperience) === selectedExperience;
    
    return matchesSearch && matchesSpecialty && matchesAvailability && matchesExperience;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tattoo Artists</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search artists by name, style, or shop..."
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
            <ArtistFilters
              selectedSpecialty={selectedSpecialty}
              selectedAvailability={selectedAvailability}
              selectedExperience={selectedExperience}
              onSpecialtyChange={setSelectedSpecialty}
              onAvailabilityChange={setSelectedAvailability}
              onExperienceChange={setSelectedExperience}
            />
          </div>

          {/* Artist Grid */}
          <div className="lg:col-span-3">
            {filteredArtists.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No artists found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                {filteredArtists.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
