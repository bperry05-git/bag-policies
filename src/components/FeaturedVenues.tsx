import React from 'react';
import { MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Featured venues - most popular/iconic venues
const featuredVenues = [
  {
    id: 'madison-square-garden',
    name: 'Madison Square Garden',
    city: 'New York',
    state: 'NY',
    capacity: 19812,
    teams: [
      { name: 'New York Knicks', league: 'NBA' },
      { name: 'New York Rangers', league: 'NHL' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Madison_Square_Garden_%28MSG%29_-_Full_%2848124330357%29.jpg/640px-Madison_Square_Garden_%28MSG%29_-_Full_%2848124330357%29.jpg'
  },
  {
    id: 'sofi-stadium',
    name: 'SoFi Stadium',
    city: 'Inglewood',
    state: 'CA',
    capacity: 70240,
    teams: [
      { name: 'Los Angeles Rams', league: 'NFL' },
      { name: 'Los Angeles Chargers', league: 'NFL' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/SoFi_Stadium_2023.jpg/640px-SoFi_Stadium_2023.jpg'
  },
  {
    id: 'yankee-stadium',
    name: 'Yankee Stadium',
    city: 'Bronx',
    state: 'NY',
    capacity: 46537,
    teams: [
      { name: 'New York Yankees', league: 'MLB' },
      { name: 'New York City FC', league: 'MLS' }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/YankeeStadium-9-21-22-1.jpg/640px-YankeeStadium-9-21-22-1.jpg'
  }
];

export default function FeaturedVenues() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Featured Venues</h2>
          <p className="mt-2 text-gray-600">Check out these popular venues and their bag policies</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVenues.map((venue) => (
            <Link
              key={venue.id}
              to={`/venues/${venue.id}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-200 overflow-hidden border border-gray-100"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{venue.name}</h3>
                  <p className="text-sm text-white/90">{venue.city}, {venue.state}</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{venue.city}, {venue.state}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{venue.capacity.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {venue.teams.map((team) => (
                    <span
                      key={team.name}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {team.name}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}