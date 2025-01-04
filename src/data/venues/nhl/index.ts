import { amalieArenaVenue } from './amalieArena';
import { amerantBankArenaVenue } from './amerantBankArena';
import { bellCentreVenue } from './bellCentre';
import { bridgestoneArenaVenue } from './bridgestoneArena';
import { canadaLifeCentreVenue } from './canadaLifeCentre';
import { canadianTireCentreVenue } from './canadianTireCentre';
import { climatePledgeArenaVenue } from './climatePledgeArena';
import { enterpriseCenterVenue } from './enterpriseCenter';
import { hondaCenterVenue } from './hondaCenter';
import { keyBankCenterVenue } from './keyBankCenter';
import { lenovoCenterVenue } from './lenovoCenter';
import { nationwideArenaVenue } from './nationwideArena';
import { ppgPaintsArenaVenue } from './ppgPaintsArena';
import { prudentialCenterVenue } from './prudentialCenter';
import { rogersArenaVenue } from './rogersArena';
import { rogersPlaceVenue } from './rogersPlace';
import { sapCenterVenue } from './sapCenter';
import { scotiabankSaddledomeVenue } from './scotiabankSaddledome';
import { tMobileArenaVenue } from './tMobileArena';
import { ubsArenaVenue } from './ubsArena';
import { xcelEnergyCenterVenue } from './xcelEnergyCenter';

// Import shared venues from NBA
import { americanAirlinesCenterVenue } from '../nba/americanAirlinesCenter';
import { ballArenaVenue } from '../nba/ballArena';
import { capitalOneArenaVenue } from '../nba/capitalOneArena';
import { cryptoArenaVenue } from '../nba/cryptoArena';
import { deltaCenterVenue } from '../nba/deltaCenter';
import { littleCaesarsArenaVenue } from '../nba/littleCaesarsArena';
import { madisonSquareGardenVenue } from '../nba/madisonSquareGarden';
import { scotiabankArenaVenue } from '../nba/scotiabankArena';
import { tdGardenVenue } from '../nba/tdGarden';
import { unitedCenterVenue } from '../nba/unitedCenter';
import { wellsFargoCenterVenue } from '../nba/wellsFargoCenter';

export const nhlVenues = [
  amalieArenaVenue,
  amerantBankArenaVenue,
  americanAirlinesCenterVenue,
  ballArenaVenue,
  bellCentreVenue,
  bridgestoneArenaVenue,
  canadaLifeCentreVenue,
  canadianTireCentreVenue,
  capitalOneArenaVenue,
  climatePledgeArenaVenue,
  cryptoArenaVenue,
  deltaCenterVenue,
  enterpriseCenterVenue,
  hondaCenterVenue,
  keyBankCenterVenue,
  lenovoCenterVenue,
  littleCaesarsArenaVenue,
  madisonSquareGardenVenue,
  nationwideArenaVenue,
  ppgPaintsArenaVenue,
  prudentialCenterVenue,
  rogersArenaVenue,
  rogersPlaceVenue,
  sapCenterVenue,
  scotiabankArenaVenue,
  scotiabankSaddledomeVenue,
  tdGardenVenue,
  tMobileArenaVenue,
  ubsArenaVenue,
  unitedCenterVenue,
  wellsFargoCenterVenue,
  xcelEnergyCenterVenue,
];

export const getNHLVenueById = (id: string) => {
  return nhlVenues.find(venue => venue.id === id);
};