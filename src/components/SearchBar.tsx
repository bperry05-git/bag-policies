import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { nbaVenues } from '../data/venues/nba';
import { nflVenues } from '../data/venues/nfl';
import { mlbVenues } from '../data/venues/mlb';
import { mlsVenues } from '../data/venues/mls';
import { nhlVenues } from '../data/venues/nhl';
import { useNavigate } from 'react-router-dom';

// Deduplicate venues based on ID
const allVenues = Array.from(
  new Map([...nbaVenues, ...nflVenues, ...mlbVenues, ...mlsVenues, ...nhlVenues].map(venue => [venue.id, venue]))
  .values()
);

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Array<{id: string, name: string, location: {city: string, state: string}}>>([]);
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length > 2) {
      const searchTerm = value.toLowerCase();
      const filtered = allVenues
        .filter(venue => 
          venue.name.toLowerCase().includes(searchTerm) ||
          venue.location.city.toLowerCase().includes(searchTerm) ||
          venue.teams.some(team => team.name.toLowerCase().includes(searchTerm))
        )
        .slice(0, 5); // Limit to 5 suggestions
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (venueId: string) => {
    navigate(`/venues/${venueId}`);
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Find Your Venue"
          className="w-full px-6 py-5 pl-14 text-lg rounded-2xl border border-gray-200 bg-white shadow-lg text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
        />
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
      
      {suggestions.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-10">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => handleSelect(suggestion.id)}
              className="w-full px-6 py-4 text-left text-gray-800 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none first:rounded-t-xl last:rounded-b-xl transition-colors"
            >
              <div className="font-medium">{suggestion.name}</div>
              <div className="text-sm text-gray-500">{suggestion.location.city}, {suggestion.location.state}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}