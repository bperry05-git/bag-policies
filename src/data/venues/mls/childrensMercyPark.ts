import type { VenueDetails } from '../../../types/venue';

export const childrensMercyParkVenue: VenueDetails = {
  id: 'childrens-mercy-park',
  name: "Children's Mercy Park",
  type: 'stadium',
  metadata: {
    title: "Children's Mercy Park Bag Policy: Guide + Images | Sporting KC",
    description: "Children's Mercy Park requires clear bags up to 12\" x 12\" x 6\" or small clutch purses up to 4.5\" x 6.5\". No backpacks of any kind permitted.",
  },
  capacity: 18467,
  location: {
    address: '1 Sporting Way',
    city: 'Kansas City',
    state: 'KS',
    zip: '66111',
    coordinates: {
      latitude: 39.121389,
      longitude: -94.823056,
    },
    website: 'https://www.sportingkc.com/stadium/know-before-you-go/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Childrens+Mercy+Park+Kansas+City&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Children%27s_Mercy_Park_Aerial.jpg/640px-Children%27s_Mercy_Park_Aerial.jpg'
  },
  teams: [
    {
      name: 'Sporting Kansas City',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: '**Clear bags up to 12" x 12" x 6"** and **small clutch purses up to 4.5" x 6.5"** are permitted after inspection. No backpacks of any kind allowed, including clear or drawstring bags. Medical and diaper bags allowed with inspection and tagging.',
    allowedBags: ['clutch', 'wristlet', 'clear', 'clear_plastic',],
    prohibitedBags: ['backpack', 'purse','fanny_pack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: "Does Children's Mercy Park provide bag storage?",
      answer: 'No, the stadium does not provide storage for prohibited bags or items.'
    },
    {
      id: 'prohibited-items',
      question: "What items are prohibited at Children's Mercy Park?",
      answer: 'The following items are prohibited:\n\n' +
        '• All backpacks (including clear and drawstring)\n' +
        '• Aerosol cans and pressurized containers\n' +
        '• Battery operated clothing/blankets\n' +
        '• Professional cameras and equipment\n' +
        '• Inflatable items and balls\n' +
        '• Glow sticks and swinging items\n' +
        '• Weapons and fireworks\n' +
        '• Laptops and drones\n' +
        '• Outside food and beverages\n' +
        '• Noisemaking devices\n' +
        '• Recreational vehicles\n' +
        '• Umbrellas and coolers\n' +
        '• Selfie sticks\n' +
        '• Unauthorized pamphlets'
    },
    {
      id: 'medical-bags',
      question: "Are medical bags allowed at Children's Mercy Park?",
      answer: 'Yes, medical bags and diaper bags (when accompanied by a baby/child) are permitted after inspection and will be tagged by security.'
    }
  ],
};