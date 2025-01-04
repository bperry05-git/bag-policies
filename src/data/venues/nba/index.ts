import { americanAirlinesCenterVenue } from './americanAirlinesCenter';
import { ballArenaVenue } from './ballArena';
import { barclaysCenterVenue } from './barclaysCenter';
import { capitalOneArenaVenue } from './capitalOneArena';
import { chaseCenterVenue } from './chaseCenterVenue';
import { cryptoArenaVenue } from './cryptoArena';
import { deltaCenterVenue } from './deltaCenter';
import { fedExForumVenue } from './fedExForum';
import { fiservForumVenue } from './fiservForum';
import { footprintCenterVenue } from './footprintCenter';
import { frostBankCenterVenue } from './frostBankCenter';
import { gainbridgeFieldhouseVenue } from './gainbridgeFieldhouse';
import { golden1CenterVenue } from './golden1Center';
import { intuitDomeVenue } from './intuitDome';
import { kaseyaCenterVenue } from './kaseyaCenter';
import { kiaCenterVenue } from './kiaCenter';
import { littleCaesarsArenaVenue } from './littleCaesarsArena';
import { madisonSquareGardenVenue } from './madisonSquareGarden';
import { modaCenterVenue } from './modaCenter';
import { paycomCenterVenue } from './paycomCenter';
import { rocketMortgageFieldhouseVenue } from './rocketMortgageFieldhouse';
import { scotiabankArenaVenue } from './scotiabankArena';
import { smoothieKingCenterVenue } from './smoothieKingCenter';
import { spectrumCenterVenue } from './spectrumCenter';
import { stateFarmArenaVenue } from './stateFarmArena';
import { targetCenterVenue } from './targetCenter';
import { tdGardenVenue } from './tdGarden';
import { toyotaCenterVenue } from './toyotaCenter';
import { unitedCenterVenue } from './unitedCenter';
import { wellsFargoCenterVenue } from './wellsFargoCenter';

export const nbaVenues = [
  americanAirlinesCenterVenue,
  ballArenaVenue,
  barclaysCenterVenue,
  capitalOneArenaVenue,
  chaseCenterVenue,
  cryptoArenaVenue,
  deltaCenterVenue,
  fedExForumVenue,
  fiservForumVenue,
  footprintCenterVenue,
  frostBankCenterVenue,
  gainbridgeFieldhouseVenue,
  golden1CenterVenue,
  intuitDomeVenue,
  kaseyaCenterVenue,
  kiaCenterVenue,
  littleCaesarsArenaVenue,
  madisonSquareGardenVenue,
  modaCenterVenue,
  paycomCenterVenue,
  rocketMortgageFieldhouseVenue,
  scotiabankArenaVenue,
  smoothieKingCenterVenue,
  spectrumCenterVenue,
  stateFarmArenaVenue,
  targetCenterVenue,
  tdGardenVenue,
  toyotaCenterVenue,
  unitedCenterVenue,
  wellsFargoCenterVenue,
];

export const getNBAVenueById = (id: string) => {
  return nbaVenues.find(venue => venue.id === id);
};