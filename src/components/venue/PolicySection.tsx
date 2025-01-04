import React from 'react';
import { ShieldCheck, Ban, Check } from 'lucide-react';
import type { VenueDetails } from '../../types/venue';
import { BAGS } from '../../types/bags';
import type { VenueAllowedBag } from '../../types/venue';

interface PolicySectionProps {
  venue: VenueDetails;
}

const formatDimensions = (dimensions?: { width: number; height: number; depth: number; unit: string } | undefined) => {
  if (!dimensions) return null;
  return `${dimensions.width}" × ${dimensions.height}" × ${dimensions.depth}"`;
};

export default function PolicySection({ venue }: PolicySectionProps) {
  // Handle both string array and object array formats
  const allowedBags = Array.isArray(venue.policies.allowedBags) 
    ? (typeof venue.policies.allowedBags[0] === 'string' 
      ? venue.policies.allowedBags.map(bagId => ({ type: bagId }))
      : venue.policies.allowedBags as VenueAllowedBag[])
    : [];

  const prohibitedBags = venue.policies.prohibitedBags
    .map(bagId => BAGS.find(b => b.id === bagId))
    .filter((bag): bag is NonNullable<typeof bag> => bag !== undefined);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          <section>
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">Approved Bags</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {allowedBags.map((bag) => (
              <div
                key={typeof bag === 'string' ? bag : bag.type}
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  {BAGS.find(b => b.id === (typeof bag === 'string' ? bag : bag.type))?.icon ? (
                    <div className="text-black">
                      {React.createElement(BAGS.find(b => b.id === (typeof bag === 'string' ? bag : bag.type))!.icon!)}
                    </div>
                  ) : (
                    <div className="w-full h-full rounded-lg bg-gray-100 flex items-center justify-center">
                      <span className="text-4xl">{(typeof bag === 'string' ? bag : bag.type)[0].toUpperCase()}</span>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2 justify-center">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    {BAGS.find(b => b.id === (typeof bag === 'string' ? bag : bag.type))?.name || (typeof bag === 'string' ? bag : bag.type)}
                  </h3>
                  {typeof bag !== 'string' && bag.dimensions && (
                    <p className="text-sm font-medium text-gray-600">
                      {formatDimensions(bag.dimensions)}
                    </p>
                  )}
                </div>
              </div>
            ))}
            </div>
          </section>

          <section>
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">Prohibited Bags</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {prohibitedBags.map((bag) => (
              <div
                key={bag.id}
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 mb-4">
                  {bag.icon ? (
                    <div className="text-black">
                      <bag.icon />
                    </div>
                  ) : (
                    <div className="w-full h-full rounded-lg bg-gray-100 flex items-center justify-center">
                      <span className="text-4xl">{bag.name[0]}</span>
                    </div>
                  )}
                </div>
                <div className="text-center">
                <h3 className="font-medium text-gray-900 flex items-center gap-2 justify-center">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                    <Ban className="w-3 h-3 text-red-600" />
                  </div>
                  {bag.name}
                </h3>
                </div>
              </div>
            ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}