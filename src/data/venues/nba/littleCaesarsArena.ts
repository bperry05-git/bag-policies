import type { VenueDetails } from '../../../types/venue';

export const littleCaesarsArenaVenue: VenueDetails = {
  id: 'little-caesars-arena',
  name: 'Little Caesars Arena',
  type: 'arena',
  metadata: {
    title: 'Little Caesars Arena Bag Policy: Guides + Images | Pistons & Red Wings',
    description: 'Little Caesars Arena prohibits bags larger than 4" x 6" x 1.5". Medical and diaper bags up to 14" x 14" x 6" permitted with X-ray screening at specific entrances.',
  },
  capacity: 20332,
  location: {
    address: '2645 Woodward Avenue',
    city: 'Detroit',
    state: 'MI',
    zip: '48201',
    coordinates: {
      latitude: 42.341111,
      longitude: -83.055,
    },
    website: 'https://www.313presents.com/venue/little-caesars-arena/little-caesars-rules-policies',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Little+Caesars+Arena+Detroit&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Detroit_December_2018_11_%28Little_Caesars_Arena%29.jpg/640px-Detroit_December_2018_11_%28Little_Caesars_Arena%29.jpg"
  },
  teams: [
    {
      name: 'Detroit Pistons',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    },
    {
      name: 'Detroit Red Wings',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: '**Single compartment bags, wallets & clutches smaller than 4" x 6" x 1.5" with or without a handle strap are permitted**. Exceptions include medical necessity bags and diaper bags (must be smaller than 14" x 14" x 6") which require X-ray screening at either the Meijer Entry NW or Comerica Entry NE.',
    allowedBags: ['clutch', 'wristlet',],
    prohibitedBags: ['backpack', 'fanny_pack', 'purse', 'camera_bag'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Little Caesars Arena provide an area to store luggage?',
      answer: 'Little Caesars Arena does not provide an area to check oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Little Caesars Arena?',
      answer: 'The following items are prohibited at Little Caesars Arena:\n\n' +
        '• Air horns, fog horns, bullhorns, cowbells, bells, horns, kazoos, whistles, vuvuzelas, didgeridoos\n' +
        '• Aerosol cans and pressurized items (including hairspray, mace, pepper spray)\n' +
        '• Alcoholic beverages\n' +
        '• Animals (except approved service animals)\n' +
        '• Banners, signs, flags larger than 11" x 17"\n' +
        '• Bags larger than 4" x 6" x 1.5"\n' +
        '• Baseball bats, hockey sticks, golf clubs, poles, brooms, selfie-sticks\n' +
        '• Beverages (except for religious, dietary or medical necessity)\n' +
        '• Bottles, glass, aluminum, or metal containers\n' +
        '• Cameras with detachable lenses longer than 8 inches\n' +
        '• Inappropriate clothing or garments\n' +
        '• Coolers (except for religious, dietary or medical necessity)\n' +
        '• Drones and unmanned aircraft\n' +
        '• Fireworks or explosives\n' +
        '• Laser pointers or optical illusion devices\n' +
        '• Marijuana, illegal narcotics and related paraphernalia\n' +
        '• Outside food and beverage (except for religious, dietary or medical necessity)\n' +
        '• Poster tubes\n' +
        '• Skateboards, scooters, rollerblades (ADA vehicles permitted)\n' +
        '• Video/sound recording devices including tripods, GoPro, Google Glass\n' +
        '• Weapons of any kind\n' +
        '• Any items violating Guest Code of Conduct Policy'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Little Caesars Arena?',
      answer: 'Yes, bags needed for medical necessity (including diaper bags, breast pumps, oxygen, insulin, epi-pens and other medical devices) are permitted if smaller than 14" x 14" x 6". These must be X-rayed upon entry at either the Meijer Entry NW or Comerica Entry NE.'
    }
  ],
};