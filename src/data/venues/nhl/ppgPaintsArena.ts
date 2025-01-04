import type { VenueDetails } from '../../../types/venue';

export const ppgPaintsArenaVenue: VenueDetails = {
  id: 'ppg-paints-arena',
  name: 'PPG Paints Arena',
  type: 'arena',
  metadata: {
    title: 'PPG Paints Arena Bag Policy: Guide + Images | Pittsburgh Penguins',
    description: 'PPG Paints Arena enforces a strict no-bag policy. Only medical bags, diaper bags, and small wristlets/wallets up to 4" x 6" x 1.5" are permitted after inspection.',
  },
  capacity: 18387,
  location: {
    address: '1001 Fifth Avenue',
    city: 'Pittsburgh',
    state: 'PA',
    zip: '15219',
    coordinates: {
      latitude: 40.439444,
      longitude: -79.989167,
    },
    website: 'https://www.ppgpaintsarena.com/plan_your_visit/know-before-you-go-1',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=PPG+Paints+Arena+Pittsburgh&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/PPG_Paints_Arena_-_March_2017.jpg/640px-PPG_Paints_Arena_-_March_2017.jpg'
  },
  teams: [
    {
      name: 'Pittsburgh Penguins',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: '**No bags will be permitted in PPG Paints Arena. Exceptions, after inspection, will be made for medical bags, diaper bags, and wristlets or wallets (no larger than 4" x 6" x 1.5")**. All items must pass through x-ray machines, and items that do not pass security must be returned to vehicles.',
    allowedBags: ['wristlet', 'clutch',],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'duffel', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does PPG Paints Arena provide bag storage?',
      answer: 'PPG Paints Arena does not provide storage for prohibited bags or items. Items that do not pass security must be returned to vehicles.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at PPG Paints Arena?',
      answer: 'The following items are prohibited at PPG Paints Arena:\n\n' +
        '• Bags and backpacks\n' +
        '• Air horns\n' +
        '• Coolers (hard/soft sided)\n' +
        '• Thermoses\n' +
        '• Large purses\n' +
        '• Cans, bottles, and flasks\n' +
        '• Alcoholic beverages\n' +
        '• Laser pointers\n' +
        '• Video or audio recording devices\n' +
        '• Professional cameras/lens (including any detachable lens)\n' +
        '• Laptops\n' +
        '• Tripods\n' +
        '• Banners or signs on poles\n' +
        '• Weapons\n' +
        '• Any items deemed dangerous and/or inappropriate'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at PPG Paints Arena?',
      answer: 'Yes, medical bags and diaper bags are permitted but must pass through x-ray machines. Items that do not pass security must be returned to vehicles.'
    }
  ],
};