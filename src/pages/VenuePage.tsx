import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import VenueHeader from '../components/venue/VenueHeader';
import PolicyOverview from '../components/venue/PolicyOverview';
import PolicySection from '../components/venue/PolicySection';
import StoragePartner from '../components/venue/StoragePartner';
import FAQSection from '../components/venue/FAQSection';
import { updateMetadata } from '../utils/metadata';
import { nbaVenues } from '../data/venues/nba';
import { nflVenues } from '../data/venues/nfl';
import { mlbVenues } from '../data/venues/mlb';
import { mlsVenues } from '../data/venues/mls';
import { nhlVenues } from '../data/venues/nhl';
import type { VenueDetails } from '../types/venue';

export default function VenuePage() {
  const { id } = useParams();

  // Find venue by ID across all leagues
  const venue = [...nbaVenues, ...nflVenues, ...mlbVenues, ...mlsVenues, ...nhlVenues]
    .find((v): v is VenueDetails => v.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (venue) {
      updateMetadata(
        `${venue.name} Bag Policy - Clear Bag Rules & Guidelines`,
        `Official ${venue.name} bag policy and guidelines for ${venue.teams.map(t => t.name).join(', ')} games. Learn what bags are allowed, size restrictions, and prohibited items.`
      );
    }
  }, [venue]);

  if (!venue) {
    return <div>Venue not found</div>;
  }

  // Handle slug redirects
  if (venue.metadata?.slug && venue.metadata.slug !== id) {
    return <Navigate to={`/venues/${venue.metadata.slug}`} replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <VenueHeader venue={venue} />
      <PolicyOverview venue={venue} />
      <PolicySection venue={venue} />
      <StoragePartner venue={venue} />
      <FAQSection venue={venue} />
    </div>
  );
}