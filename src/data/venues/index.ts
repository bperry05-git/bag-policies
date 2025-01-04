import { nbaVenues } from './nba';

export const venues = [
  ...nbaVenues,
];

export const getVenueById = (id: string) => {
  return venues.find(venue => venue.id === id);
};