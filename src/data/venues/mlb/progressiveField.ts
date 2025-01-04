import type { VenueDetails } from '../../../types/venue';

export const progressiveFieldVenue: VenueDetails = {
  id: 'progressive-field',
  name: 'Progressive Field',
  type: 'stadium',
  metadata: {
    title: 'Progressive Field Bag Policy: Guide + Images | Cleveland Guardians',
    description: 'Progressive Field allows diaper bags, medical bags, clutches, and small bags up to 16"x16"x8". Most other bags are prohibited.',
  },
  capacity: 34830,
  location: {
    address: '2401 Ontario Street',
    city: 'Cleveland',
    state: 'OH',
    zip: '44115',
    coordinates: {
      latitude: 41.495833,
      longitude: -81.685278,
    },
    website: 'https://www.mlb.com/guardians/ballpark/information/guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Progressive+Field+Cleveland&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Progressive_Field%2C_June_2019_%285%29.jpg/640px-Progressive_Field%2C_June_2019_%285%29.jpg'
  },
  teams: [
    {
      name: 'Cleveland Guardians',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Only clutches, and small bags not exceeding 16"x16"x8" are permitted**. Fanny packs and small handheld clutches or clutches with a strap are allowed. Most other bags are prohibited. Special policies apply to Premium Seating areas regarding food and beverages.',
    allowedBags: ['clutch', 'wristlet','fanny_pack', 'clear'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Progressive Field provide bag storage?',
      answer: 'Progressive Field does not provide storage for bags that do not meet size requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Progressive Field?',
      answer: 'The following items are prohibited at Progressive Field:\n\n' +
        '• Action sports equipment (skateboards, etc.)\n' +
        '• Alcoholic beverages and illegal drugs\n' +
        '• Most bags (except those specifically allowed)\n' +
        '• Brooms\n' +
        '• Butterfly nets or field interference devices\n' +
        '• Cameras with lenses over 100mm\n' +
        '• Cans, glass, squeeze bottles, thermos bottles\n' +
        '• Tobacco products\n' +
        '• E-cigarettes and vaping devices\n' +
        '• Weapons (including pocket knives)\n' +
        '• Outside food/beverages in Premium areas\n' +
        '• Cultural appropriation items\n' +
        '• Pets\n' +
        '• Poles and sticks\n' +
        '• Laser pointers\n' +
        '• Wrapped presents\n' +
        'Note: Premium Seating areas have additional restrictions.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Progressive Field?',
      answer: 'Yes, manufactured medical bags are permitted. All bags will be subject to inspection upon entry.'
    }
  ],
};