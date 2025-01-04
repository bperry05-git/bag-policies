import type { VenueDetails } from '../../../types/venue';

export const redBullArenaVenue: VenueDetails = {
  id: 'red-bull-arena',
  name: 'Red Bull Arena',
  type: 'stadium',
  metadata: {
    title: 'Red Bull Arena Bag Policy: Guide + Images | NY Red Bulls',
    description: 'Red Bull Arena allows bags up to 14" x 14" x 6". Backpacks prohibited. Bag lockers available for $5.',
  },
  capacity: 25000,
  location: {
    address: '600 Cape May Street',
    city: 'Harrison',
    state: 'NJ',
    zip: '07029',
    coordinates: {
      latitude: 40.736667,
      longitude: -74.150278,
    },
    website: 'https://www.newyorkredbulls.com/redbullarena/policies',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Red+Bull+Arena+Harrison&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Red_Bull_Arena%3B_NYRB_4-1_NYCFC.jpg/640px-Red_Bull_Arena%3B_NYRB_4-1_NYCFC.jpg'
  },
  teams: [
    {
      name: 'New York Red Bulls',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: '**Bags up to 14" x 14" x 6"** permitted. No backpacks allowed. Medical/baby bags allowed with X-Ray search at Gate B1. $5 lockers available at Gate B1.',
    allowedBags: ['purse', 'fanny_pack', 'clutch'],
    prohibitedBags: ['backpack', 'tote','duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Red Bull Arena provide bag storage?',
      answer: 'Yes, secure bag lockers are available for rent for $5 next to Gate B1.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Red Bull Arena?',
      answer: 'The following items are prohibited:\n\n' +
        '• Firearms and weapons\n' +
        '• Bottles, cans, coolers\n' +
        '• Noisemakers and musical instruments\n' +
        '• Fireworks and smoke devices\n' +
        '• Pets (except service animals)\n' +
        '• Professional camera equipment\n' +
        '• Selfie sticks and laser pointers\n' +
        '• Toy weapons and water guns\n' +
        '• Beach balls and frisbees\n' +
        '• Skateboards and hoverboards\n' +
        '• Streamers and confetti\n' +
        '• Large strollers'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Red Bull Arena?',
      answer: 'Yes, medical and baby bags are permitted but must undergo X-Ray search at Gate B1.'
    }
  ],
};