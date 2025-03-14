import { FunnelIcon } from '@heroicons/react/20/solid';

interface ShopFiltersProps {
  onStyleChange: (style: string) => void;
  onCityChange: (city: string) => void;
  selectedStyle: string;
  selectedCity: string;
}

const styles = ['All', 'Japanese', 'Traditional', 'Neo-traditional', 'Fine Line', 'Geometric', 'Color', 'Black and Grey', 'Minimalist'];
const cities = ['All', 'Los Angeles', 'San Francisco', 'New York', 'Miami', 'Chicago'];

export default function ShopFilters({ onStyleChange, onCityChange, selectedStyle, selectedCity }: ShopFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <FunnelIcon className="h-5 w-5 text-gray-500" />
        <h3 className="font-semibold">Filters</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="style" className="block text-sm font-medium text-gray-700 mb-1">
            Style
          </label>
          <select
            id="style"
            value={selectedStyle}
            onChange={(e) => onStyleChange(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {styles.map((style) => (
              <option key={style} value={style}>
                {style}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <select
            id="city"
            value={selectedCity}
            onChange={(e) => onCityChange(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
