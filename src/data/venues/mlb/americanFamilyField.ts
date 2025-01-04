import type { VenueDetails } from '../../../types/venue';

export const americanFamilyFieldVenue: VenueDetails = {
  id: 'american-family-field',
  name: 'American Family Field',
  type: 'stadium',
  metadata: {
    title: 'American Family Field Bag Policy: Guide + Images | Milwaukee Brewers',
    description: 'American Family Field enforces a single-compartment bag policy. Non-clear bags up to 9" x 5" x 2" and clear bags up to 12" x 12" x 6" are permitted.',
  },
  capacity: 41900,
  location: {
    address: '1 Brewers Way',
    city: 'Milwaukee',
    state: 'WI',
    zip: '53214',
    coordinates: {
      latitude: 43.028194,
      longitude: -87.971111,
    },
    website: 'https://www.mlb.com/brewers/ballpark/security',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=American+Family+Field+Milwaukee&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Cleveland_Guardians_vs._Milwaukee_Brewers_August_2024_02_%28American_Family_Field%29.jpg/640px-Cleveland_Guardians_vs._Milwaukee_Brewers_August_2024_02_%28American_Family_Field%29.jpg'
  },
  teams: [
    {
      name: 'Milwaukee Brewers',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {

    description: 'Allowed bags include **non-clear single-compartment bags up to 9" x 5" x 2", clear single-compartment bags up to 12" x 12" x 6", and one-gallon clear resealable bags**. Diaper bags (maximum size: 16" x 16" x 8") and medical bags are permitted with proper documentation. All bags are subject to inspection.',
    allowedBags: ['clutch','wristlet', 'clear', 'clear_plastic'],
    prohibitedBags: ['backpack', 'purse', 'tote', 'fanny_pack'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does American Family Field provide bag storage?',
      answer: 'No it does not provide bag storage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at American Family Field?',
      answer: 'The following items are prohibited at American Family Field:\n\n' +
        '• Aerosol cans (including sunscreen and hairspray)\n' +
        '• Alcohol, CBD, or illegal substances\n' +
        '• All backpacks (regardless of size or style)\n' +
        '• Multi-compartment bags\n' +
        '• Brooms, broomsticks, and poles\n' +
        '• Camera lenses exceeding 8 inches in length\n' +
        '• Cans, glass containers, and metal containers (including Yeti-type bottles)\n' +
        '• Coolers (hard and soft-sided)\n' +
        '• Drawstring bags and non-clear tote bags\n' +
        '• Full-sized baseball bats\n' +
        '• Laser pointers\n' +
        '• Monopods and tripods\n' +
        '• Noise makers (including whistles)\n' +
        '• Non-factory sealed plastic bottles\n' +
        '• Pepper spray\n' +
        '• Pets (except service animals)\n' +
        '• Stainless steel reusable drinking straws\n' +
        '• Throwing items (except baseballs for autographs)\n' +
        '• Weapons/firearms (including pocket knives)\n' +
        '• Any other items deemed dangerous or inappropriate'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at American Family Field?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags up to 16" x 16" x 8" are also allowed when accompanied by an infant.'
    }
  ],
};