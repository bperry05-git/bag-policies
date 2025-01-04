import React from 'react';
import { MapPin, Users } from 'lucide-react';
import type { VenueDetails } from '../../types/venue';

interface VenueHeaderProps {
  venue: VenueDetails;
}

export default function VenueHeader({ venue }: VenueHeaderProps) {
  return (
    <div>
      <div className="relative text-white min-h-[200px]">
        <div className="absolute inset-0">
          <img
            src={venue.location.imageUrl || `https://images.unsplash.com/photo-1495695911455-19054a55f92f?auto=format&fit=crop&q=80&w=1200`}
            alt={`${venue.name} exterior`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              {venue.name}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/90 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{venue.location.city}, {venue.location.state}</span>
              </div>
              <div className="hidden sm:block text-white/40">•</div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Capacity: {venue.capacity.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {venue.teams.map((team) => (
                <span
                  key={team.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm bg-white/10 backdrop-blur-sm border border-white/10"
                >
                  {team.name} ({team.league})
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}