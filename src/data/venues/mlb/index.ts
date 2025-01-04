import { americanFamilyFieldVenue } from './americanFamilyField';
import { angelStadiumVenue } from './angelStadium';
import { buschStadiumVenue } from './buschStadium';
import { chaseFieldVenue } from './chaseField';
import { citiFieldVenue } from './citiField';
import { citizensBankParkVenue } from './citizensBankPark';
import { comericaParkVenue } from './comericaPark';
import { coorsFieldVenue } from './coorsField';
import { dodgerStadiumVenue } from './dodgerStadium';
import { fenwayParkVenue } from './fenwayPark';
import { globeLifeFieldVenue } from './globeLifeField';
import { greatAmericanBallParkVenue } from './greatAmericanBallPark';
import { guaranteedRateFieldVenue } from './guaranteedRateField';
import { kauffmanStadiumVenue } from './kauffmanStadium';
import { loanDepotParkVenue } from './loanDepotPark';
import { minuteMaidParkVenue } from './minuteMaidPark';
import { nationalsParkVenue } from './nationalsPark';
import { oracleParkVenue } from './oraclePark';
import { orioleParkVenue } from './oriolePark';
import { petcoParkVenue } from './petcoPark';
import { pncParkVenue } from './pncPark';
import { progressiveFieldVenue } from './progressiveField';
import { rogersCentreVenue } from './rogersCentre';
import { sutterHealthParkVenue } from './sutterHealthPark';
import { tMobileParkVenue } from './tMobilePark';
import { targetFieldVenue } from './targetField';
import { truistParkVenue } from './truistPark';
import { tropicanaFieldVenue } from './tropicanaField';
import { wrigleyFieldVenue } from './wrigleyField';
import { yankeeStadiumVenue } from './yankeeStadium';

export const mlbVenues = [
  americanFamilyFieldVenue,
  angelStadiumVenue,
  buschStadiumVenue,
  chaseFieldVenue,
  citiFieldVenue,
  citizensBankParkVenue,
  comericaParkVenue,
  coorsFieldVenue,
  dodgerStadiumVenue,
  fenwayParkVenue,
  globeLifeFieldVenue,
  greatAmericanBallParkVenue,
  guaranteedRateFieldVenue,
  kauffmanStadiumVenue,
  loanDepotParkVenue,
  minuteMaidParkVenue,
  nationalsParkVenue,
  oracleParkVenue,
  orioleParkVenue,
  petcoParkVenue,
  pncParkVenue,
  progressiveFieldVenue,
  rogersCentreVenue,
  sutterHealthParkVenue,
  tMobileParkVenue,
  targetFieldVenue,
  truistParkVenue,
  tropicanaFieldVenue,
  wrigleyFieldVenue,
  yankeeStadiumVenue,
];

export const getMLBVenueById = (id: string) => {
  return mlbVenues.find(venue => venue.id === id);
};