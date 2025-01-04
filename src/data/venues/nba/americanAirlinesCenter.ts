import type { VenueDetails } from '../../../types/venue';

export const americanAirlinesCenterVenue: VenueDetails = {
  id: 'american-airlines-center',
  name: 'American Airlines Center',
  type: 'arena',
  metadata: {
    title: 'American Airlines Center Bag Policy: Guide + Images | Mavericks & Stars',
    description: 'American Airlines Center bag policy allows small bags up to 4.5” x 6.5” at all entrances. Larger bags require X-ray screening. Clear bags are optional.',
  },
  capacity: 19200,
  location: {
    address: '2500 Victory Avenue',
    city: 'Dallas',
    state: 'TX',
    zip: '75219',
    coordinates: {
      latitude: 32.790556,
      longitude: -96.810278,
    },
    website: 'https://www.americanairlinescenter.com/plan-your-visit/arena-faq',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=American+Airlines+Center+Dallas&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/American_Airlines_Center_%286246886325%29.jpg/640px-American_Airlines_Center_%286246886325%29.jpg"
  },
  teams: [
    {
      name: 'Dallas Mavericks',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    },
    {
      name: 'Dallas Stars',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'The American Airlines Center bag policy allows **wristlets, wallets, and clutches up to 4.5” x 6.5” at all entrances without restrictions**, making it easy for fans attending Dallas Mavericks or Dallas Stars games. Larger purses up to 14” x 14” x 6” must go through X-ray inspection at the North, East, West, or South entrances. Medical and diaper bags under 14” x 14” x 6” are permitted at all entrances but will be subject to security inspection. Clear bags are allowed but not required. All approved bags are subject to inspection to ensure a safe experience for everyone.',
    allowedBags: ['wristlet','clutch','purse','fanny_pack'],
    prohibitedBags: ['backpack', 'duffel', 'camera_bag', 'briefcase', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does American Airlines Center provide an area to store luggage?',
      answer: 'American Airlines Center does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at American Airlines Center?',
  answer: 'The following items are prohibited at American Airlines Center:\n\n' + 
    '• Alcoholic beverages and illegal drugs\n' +
    '• Outside food and drinks\n' +
    '• Drones\n' +
    '• Professional cameras, flash photography, tripods, and monopods\n' +
    '• Video and audio recorders\n' +
    '• Glass, plastic, metal containers, and flasks\n' +
    '• Fireworks and flares\n' +
    '• Laser pointers\n' +
    '• Coolers (hard or soft side)\n' +
    '• Knives and weapons of any kind\n' +
    '• Baby seats or carriers\n' +
    '• Artificial noise makers (air horns, drums, whistles)\n' +
    '• Glitter and confetti\n' +
    '• Balloons\n' +
    '• Glow sticks\n' +
    '• Frisbees\n' +
    '• Permanent markers and spray paint\n' +
    '• Streamers\n' +
    '• Beach balls\n' +
    '• Parcels or packages\n' +
    '• Inflatables\n' +
    '• Brooms\n' +
    '• Chairs and stools\n' +
    '• Pamphlets and product samples\n' +
    '• Skateboards, rollerblades, bicycles, and helmets\n' +
    '• Laptop and tablet computers\n' +
    '• Two-way radios\n' +
    '• Flashlights\n' +
    '• Backpacks and bags (except those meeting size requirements)\n' +
    '• Any other items deemed dangerous or inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at American Airlines Center?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};