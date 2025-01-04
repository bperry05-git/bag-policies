import React from 'react';
import type { VenueDetails } from '../../types/venue';

interface VenueTeamsProps {
  venue: VenueDetails;
}

export default function VenueTeams({ venue }: VenueTeamsProps) {
  return (
    <div className="bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Home Teams</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {venue.teams.map((team) => (
            <div
              key={team.name}
              className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
            >
              <div className="font-medium text-gray-900">{team.name}</div>
              <div className="text-sm text-gray-500">{team.league}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}