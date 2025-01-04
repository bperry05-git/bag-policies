import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Users, Search } from 'lucide-react';
import { nbaVenues } from '../data/venues/nba';
import { nflVenues } from '../data/venues/nfl';
import { mlbVenues } from '../data/venues/mlb';
import { mlsVenues } from '../data/venues/mls';
import { nhlVenues } from '../data/venues/nhl';
import type { VenueDetails } from '../types/venue';
import { updateMetadata } from '../utils/metadata';

const leagueInfo = {
  nfl: { name: 'National Football League' },
  nba: { name: 'National Basketball Association' },
  mlb: { name: 'Major League Baseball' },
  nhl: { name: 'National Hockey League' },
  mls: { name: 'Major League Soccer' },
};

interface Filters {
  search: string;
  team: string;
  state: string;
}

export default function LeagueVenuesPage() {
  const { league } = useParams<{ league: keyof typeof leagueInfo }>();
  const info = league ? leagueInfo[league] : null;
  const [filters, setFilters] = useState<Filters>({
    search: '',
    team: '',
    state: '',
  });

  useEffect(() => {
    if (info) {
      updateMetadata(
        `${info.name} Venue Bag Policies - Stadium Guidelines`,
        `Find bag policies for all ${info.name} venues. Check size restrictions, prohibited items, and storage options before your next game.`
      );
    }
  }, [info]);

  if (!info) {
    return <div>League not found</div>;
  }

  // Get all venues for this league
  const leagueVenues = useMemo(() => {
    const venues = league === 'nba' ? nbaVenues : 
                  league === 'nfl' ? nflVenues :
                  league === 'mlb' ? mlbVenues :
                  league === 'mls' ? mlsVenues :
                  league === 'nhl' ? nhlVenues : [];
    
    return venues
      .filter(venue => venue.teams.some(team => team.league === league.toUpperCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [league]);

  // Get unique teams and states for filter dropdowns
  const teams = useMemo(() => {
    const teamSet = new Set<string>();
    leagueVenues.forEach(venue => {
      venue.teams
        .filter(team => team.league === league.toUpperCase())
        .forEach(team => teamSet.add(team.name));
    });
    return Array.from(teamSet).sort();
  }, [leagueVenues, league]);

  const states = useMemo(() => {
    const stateSet = new Set<string>();
    leagueVenues.forEach(venue => stateSet.add(venue.location.state));
    return Array.from(stateSet).sort();
  }, [leagueVenues]);

  // Apply filters
  const filteredVenues = useMemo(() => {
    return leagueVenues.filter(venue => {
      const matchesSearch = filters.search === '' || 
        venue.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        venue.location.city.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesTeam = filters.team === '' ||
        venue.teams.some(team => team.name === filters.team);
      
      const matchesState = filters.state === '' ||
        venue.location.state === filters.state;

      return matchesSearch && matchesTeam && matchesState;
    });
  }, [leagueVenues, filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-white shadow overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800">
            {/* Static floodlights */}
            <div className="absolute -top-20 -left-20 w-[80vh] h-[80vh] bg-gradient-to-br from-white/30 via-white/5 to-transparent rotate-45 origin-top-left"></div>
            <div className="absolute -top-20 -right-20 w-[80vh] h-[80vh] bg-gradient-to-bl from-white/30 via-white/5 to-transparent -rotate-45 origin-top-right"></div>
            
            {/* Static camera flashes */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-white/30 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              ></div>
            ))}
            
            {/* Static light particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              ></div>
            ))}

            {/* Dynamic patterns */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-12"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,rgba(0,0,0,0)_100%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative text-white">
            <h1 className="text-4xl sm:text-5xl font-bold">{info.name}</h1>
            <p className="text-xl text-blue-100 mt-2">Bag policies for all {info.name} venues</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-t border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search venues..."
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:flex gap-4">
              <select
                value={filters.team}
                onChange={(e) => setFilters(prev => ({ ...prev, team: e.target.value }))}
                className="rounded-lg border border-gray-300 py-3 pl-4 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base bg-white"
              >
                <option value="">Teams</option>
                {teams.map(team => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>

              <select
                value={filters.state}
                onChange={(e) => setFilters(prev => ({ ...prev, state: e.target.value }))}
                className="rounded-lg border border-gray-300 py-3 pl-4 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base bg-white"
              >
                <option value="">States</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredVenues.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No venues found matching your filters.</p>
          </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredVenues.map((venue: VenueDetails) => (
            <Link
              key={venue.id}
              to={`/venues/${venue.id}`}
              className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 duration-200 overflow-hidden group"
            >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={venue.location.imageUrl}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-xl font-semibold">{venue.name}</h2>
                  </div>
                </div>
                <div className="p-4">
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{venue.location.city}, {venue.location.state}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{venue.capacity.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {venue.teams
                    .filter(team => team.league === league.toUpperCase())
                    .map(team => (
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
        )}
      </div>
    </div>
  );
}