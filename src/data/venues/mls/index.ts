import { allianzFieldVenue } from './allianzField';
import { americaFirstFieldVenue } from './americaFirstField';
import { audiFieldVenue } from './audiField';
import { bcPlaceVenue } from './bcPlace';
import { bmoFieldVenue } from './bmoField';
import { bmoStadiumVenue } from './bmoStadium';
import { chaseStadiumVenue } from './chaseStadium';
import { childrensMercyParkVenue } from './childrensMercyPark';
import { dicksSportingGoodsParkVenue } from './dicksSportingGoodsPark';
import { dignityHealthSportsParkVenue } from './dignityHealthSportsPark';
import { cityparkStadiumVenue } from './cityparkStadium';
import { geodisParkVenue } from './geodisPark';
import { interCoStadiumVenue } from './interCoStadium';
import { lowerDotComFieldVenue } from './lowerDotComField';
import { paypalParkVenue } from './paypalPark';
import { providenceParkVenue } from './providencePark';
import { q2StadiumVenue } from './q2Stadium';
import { redBullArenaVenue } from './redBullArena';
import { saputoStadiumVenue } from './saputoStadium';
import { shellEnergyStadiumVenue } from './shellEnergyStadium';
import { subaruParkVenue } from './subaruPark';
import { toyotaStadiumVenue } from './toyotaStadium';
import { tqlStadiumVenue } from './tqlStadium';

// Import shared venues from NFL/MLB
import { bankOfAmericaStadiumVenue } from '../nfl/bankOfAmericaStadium';
import { gilletteStadiumVenue } from '../nfl/gilletteStadium';
import { lumenFieldVenue } from '../nfl/lumenField';
import { mercedesBenzStadiumVenue } from '../nfl/mercedesBenzStadium';
import { soldierFieldVenue } from '../nfl/soldierField';
import { yankeeStadiumVenue } from '../mlb/yankeeStadium';

export const mlsVenues = [
  allianzFieldVenue,
  americaFirstFieldVenue,
  audiFieldVenue,
  bankOfAmericaStadiumVenue,
  bcPlaceVenue,
  bmoFieldVenue,
  bmoStadiumVenue,
  chaseStadiumVenue,
  childrensMercyParkVenue,
  dicksSportingGoodsParkVenue,
  dignityHealthSportsParkVenue,
  cityparkStadiumVenue,
  geodisParkVenue,
  gilletteStadiumVenue,
  interCoStadiumVenue,
  lowerDotComFieldVenue,
  lumenFieldVenue,
  mercedesBenzStadiumVenue,
  paypalParkVenue,
  providenceParkVenue,
  q2StadiumVenue,
  redBullArenaVenue,
  saputoStadiumVenue,
  shellEnergyStadiumVenue,
  soldierFieldVenue,
  subaruParkVenue,
  toyotaStadiumVenue,
  tqlStadiumVenue,
  yankeeStadiumVenue,
];

export const getMLSVenueById = (id: string) => {
  return mlsVenues.find(venue => venue.id === id);
};