import type { VenueDetails } from '../../../types/venue';

export const tropicanaFieldVenue: VenueDetails = {
  id: 'tropicana-field',
  name: 'Tropicana Field',
  type: 'stadium',
  metadata: {
    title: 'Tropicana Field Bag Policy: Guide + Images | Tampa Bay Rays',
    description: 'Tropicana Field prohibits backpacks, coolers and bags exceeding 16"x8". Small personal bags, medical bags, and diaper bags are permitted.',
  },
  capacity: 25000,
  location: {
    address: '1 Tropicana Drive',
    city: 'St. Petersburg',
    state: 'FL',
    zip: '33705',
    coordinates: {
      latitude: 27.768333,
      longitude: -82.653333,
    },
    website: 'https://www.mlb.com/rays/ballpark/information/guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Tropicana+Field+St+Petersburg&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tropicana_Field_in_Tampa%2C_Florida_2024.jpg/640px-Tropicana_Field_in_Tampa%2C_Florida_2024.jpg'
  },
  teams: [
    {
      name: 'Tampa Bay Rays',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Personal bags smaller than 16"x8", including purses, fanny packs, and clutches not permitted**. Bags larger than this size are not allowed. Medical device bags and diaper bags accompanying a young child are permitted. All items subject to security inspection.',
    allowedBags: ['purse', 'fanny_pack','clutch', 'wristlet'],
    prohibitedBags: ['backpack','tote','duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Tropicana Field provide bag storage?',
      answer: 'No, prohibited items will not be stored. Items must be returned to your vehicle or discarded.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Tropicana Field?',
      answer: 'The following items are prohibited at Tropicana Field:\n\n' +
        '• Alcoholic beverages\n' +
        '• Weapons (including firearms, knives)\n' +
        '• Chemical sprays over .5 oz\n' +
        '• Fireworks and explosives\n' +
        '• Potential projectiles\n' +
        '• Cameras with 12"+ lenses\n' +
        '• Bullhorns and excessive noisemakers\n' +
        '• Percussion instruments\n' +
        '• Air horns\n' +
        '• Lasers\n' +
        '• Brooms over 3\'\n' +
        '• View-obstructing items\n' +
        '• Wrapped packages\n' +
        '• Wheeled footwear\n' +
        '• Any items posing safety risks\n' +
        'Note: Prohibited items cannot be stored and must be returned to vehicle or discarded.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Tropicana Field?',
      answer: 'Yes, medical device bags and diaper bags accompanying a young child are permitted. All bags are subject to security inspection.'
    }
  ],
};