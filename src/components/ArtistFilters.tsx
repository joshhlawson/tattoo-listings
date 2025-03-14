import { FunnelIcon } from '@heroicons/react/20/solid';

interface ArtistFiltersProps {
  onSpecialtyChange: (specialty: string) => void;
  onAvailabilityChange: (availability: string) => void;
  onExperienceChange: (experience: string) => void;
  selectedSpecialty: string;
  selectedAvailability: string;
  selectedExperience: string;
}

const specialties = [
  'All',
  'Japanese',
  'Traditional',
  'Neo-traditional',
  'Fine Line',
  'Geometric',
  'Black and Grey',
  'Realism',
  'Color'
];

const availabilities = ['All', 'Available', 'Booked', 'Guest Spot'];
const experienceLevels = ['All', '0-5 years', '5-10 years', '10+ years'];

export default function ArtistFilters({
  onSpecialtyChange,
  onAvailabilityChange,
  onExperienceChange,
  selectedSpecialty,
  selectedAvailability,
  selectedExperience
}: ArtistFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <FunnelIcon className="h-5 w-5 text-gray-500" />
        <h3 className="font-semibold">Filters</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
            Specialty
          </label>
          <select
            id="specialty"
            value={selectedSpecialty}
            onChange={(e) => onSpecialtyChange(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
            Availability
          </label>
          <select
            id="availability"
            value={selectedAvailability}
            onChange={(e) => onAvailabilityChange(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {availabilities.map((availability) => (
              <option key={availability} value={availability}>
                {availability}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
            Experience
          </label>
          <select
            id="experience"
            value={selectedExperience}
            onChange={(e) => onExperienceChange(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {experienceLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
