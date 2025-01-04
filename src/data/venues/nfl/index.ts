import { acrisureStadiumVenue } from './acrisureStadium';
import { allegiantStadiumVenue } from './allegiantStadium';
import { arrowheadStadiumVenue } from './arrowheadStadium';
import { attStadiumVenue } from './attStadium';
import { bankOfAmericaStadiumVenue } from './bankOfAmericaStadium';
import { caesarsSuperdomeVenue } from './caesarsSuperdome';
import { empowerFieldVenue } from './empowerField';
import { everbankStadiumVenue } from './everbankStadium';
import { fordFieldVenue } from './fordField';
import { gilletteStadiumVenue } from './gilletteStadium';
import { hardRockStadiumVenue } from './hardRockStadium';
import { highmarkStadiumVenue } from './highmarkStadium';
import { huntingtonBankFieldVenue } from './huntingtonBankField';
import { lambeauFieldVenue } from './lambeauField';
import { levisStadiumVenue } from './levisStadium';
import { lincolnFinancialFieldVenue } from './lincolnFinancialField';
import { lucasOilStadiumVenue } from './lucasOilStadium';
import { lumenFieldVenue } from './lumenField';
import { mtBankStadiumVenue } from './mtBankStadium';
import { mercedesBenzStadiumVenue } from './mercedesBenzStadium';
import { metLifeStadiumVenue } from './metLifeStadium';
import { nissanStadiumVenue } from './nissanStadium';
import { northwestStadiumVenue } from './northwestStadium';
import { nrgStadiumVenue } from './nrgStadium';
import { paycorStadiumVenue } from './paycorStadium';
import { raymondJamesStadiumVenue } from './raymondJamesStadium';
import { sofiStadiumVenue } from './sofiStadium';
import { soldierFieldVenue } from './soldierField';
import { stateFarmStadiumVenue } from './stateFarmStadium';
import { usBankStadiumVenue } from './usBankStadium';

export const nflVenues = [
  acrisureStadiumVenue,
  allegiantStadiumVenue,
  arrowheadStadiumVenue,
  attStadiumVenue,
  bankOfAmericaStadiumVenue,
  caesarsSuperdomeVenue,
  empowerFieldVenue,
  everbankStadiumVenue,
  fordFieldVenue,
  gilletteStadiumVenue,
  hardRockStadiumVenue,
  highmarkStadiumVenue,
  huntingtonBankFieldVenue,
  lambeauFieldVenue,
  levisStadiumVenue,
  lincolnFinancialFieldVenue,
  lucasOilStadiumVenue,
  lumenFieldVenue,
  mtBankStadiumVenue,
  mercedesBenzStadiumVenue,
  metLifeStadiumVenue,
  nissanStadiumVenue,
  northwestStadiumVenue,
  nrgStadiumVenue,
  paycorStadiumVenue,
  raymondJamesStadiumVenue,
  sofiStadiumVenue,
  soldierFieldVenue,
  stateFarmStadiumVenue,
  usBankStadiumVenue,
];

export const getNFLVenueById = (id: string) => {
  return nflVenues.find(venue => venue.id === id);
};