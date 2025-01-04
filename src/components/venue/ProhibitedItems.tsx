import React from 'react';
import { Ban } from 'lucide-react';
import type { VenueDetails } from '../../types/venue';

interface ProhibitedItemsProps {
  venue: VenueDetails;
}

export default function ProhibitedItems({ venue }: ProhibitedItemsProps) {
  return (
    <section className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Prohibited Items at {venue.name}</h2>
          <p className="mt-2 text-gray-600">The following items are not permitted inside {venue.name}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {venue.policies.prohibitedGeneral.map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <Ban className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{category.category}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}