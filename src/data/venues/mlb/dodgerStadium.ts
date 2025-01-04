import type { VenueDetails } from '../../../types/venue';

export const dodgerStadiumVenue: VenueDetails = {
  id: 'dodger-stadium',
  name: 'Dodger Stadium',
  type: 'stadium',
  metadata: {
    title: 'Dodger Stadium Bag Policy: Guide + Images | LA Dodgers',
    description: 'Dodger Stadium allows only clear bags up to 12"x12"x6" and small clutches up to 5"x8"x2". Most bags, including backpacks and large purses, are prohibited.',
  },
  capacity: 56000,
  location: {
    address: '1000 Vin Scully Avenue',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90012',
    coordinates: {
      latitude: 34.073611,
      longitude: -118.24,
    },
    website: 'https://www.mlb.com/dodgers/ballpark/information/guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Dodger+Stadium+Los+Angeles&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dodger_Stadium.jpg/640px-Dodger_Stadium.jpg'
  },
  teams: [
    {
      name: 'Los Angeles Dodgers',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Only clear plastic bags smaller than 12"x12"x6" and non-clear wristlets/clutches no larger than 5"x8"x2" are permitted**. Most bags, including backpacks, beach bags, coolers, and large purses, are prohibited. Adult diaper bags and diaper bags accompanying infants are permitted. All permitted bags are subject to search.',
    allowedBags: ['clear', 'clear_plastic', 'wristlet', 'clutch'],
    prohibitedBags: ['backpack', 'fanny_pack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Dodger Stadium provide bag storage?',
      answer: 'Dodger Stadium does not provide storage for bags that do not meet size requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Dodger Stadium?',
      answer: 'The following items are prohibited at Dodger Stadium:\n\n' +
        '• Identity-concealing masks\n' +
        '• Large bags (backpacks, suitcases, beach bags)\n' +
        '• Cannabis and cannabis products\n' +
        '• Tobacco products (including e-cigarettes, vape pens)\n' +
        '• Alcoholic beverages\n' +
        '• Weapons and explosives\n' +
        '• Water guns and replica weapons\n' +
        '• Knives (over 2 inches)\n' +
        '• Umbrellas\n' +
        '• Glass bottles and metal cans\n' +
        '• Fireworks and slingshots\n' +
        '• Professional camera/video equipment\n' +
        '• Tripods and monopods\n' +
        '• Drones and flying objects\n' +
        '• Noise-making devices\n' +
        '• Beach balls and inflatables\n' +
        '• Frisbees and balloons\n' +
        '• Brooms\n' +
        '• Skateboards and roller blades'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Dodger Stadium?',
      answer: 'Yes, adult diaper bags and diaper bags accompanying infants are permitted. All bags will be subject to search upon entry.'
    }
  ],
};