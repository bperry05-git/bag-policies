import type { VenueDetails } from '../../../types/venue';

export const lenovoCenterVenue: VenueDetails = {
  id: 'lenovo-center',
  name: 'Lenovo Center',
  type: 'arena',
  metadata: {
    title: 'Lenovo Center Bag Policy: Guide + Images | Carolina Hurricanes',
    description: 'Lenovo Center allows clutch/wristlet bags smaller than 4.5" x 6.5". Parenting and medical bags permitted with X-ray screening. Expect longer wait times for bag lines.',
  },
  capacity: 18680,
  location: {
    address: '1400 Edwards Mill Road',
    city: 'Raleigh',
    state: 'NC',
    zip: '27607',
    coordinates: {
      latitude: 35.803333,
      longitude: -78.721944,
    },
    website: 'https://www.lenovocenter.com/arena-info/policies/bagpolicy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Lenovo+Center+Raleigh&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/PNCArena-RaleighNC.jpg/640px-PNCArena-RaleighNC.jpg'
  },
  teams: [
    {
      name: 'Carolina Hurricanes',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: '**Clutch/wristlet bags smaller than 4.5" x 6.5" are permitted** without X-ray screening. Parenting bags and medical bags are allowed but must pass through X-ray machine prior to entry. Guests should expect longer wait times for bag lines.',
    allowedBags: ['clutch', 'wristlet', 'fanny_pack'],
    prohibitedBags: ['backpack', 'purse', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Lenovo Center provide bag storage?',
      answer: 'Lenovo Center does not provide storage for prohibited bags or items.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Lenovo Center?',
      answer: 'The following items are prohibited at Lenovo Center:\n\n' +
        '• Backpacks and oversized bags\n' +
        '• Bottles, cans, coolers, and liquid containers\n' +
        '• Food and beverage (including alcohol)\n' +
        '• Illegal substances\n' +
        '• Fireworks and other projectiles\n' +
        '• Recording devices and video equipment\n' +
        '• Electronic cigarettes, tobacco products, and vape pens\n' +
        '• Electronic devices (see policy for details)\n' +
        '• Weapons of any type (including pocketknives and firearms)\n' +
        '• Large chains and studded bracelets\n' +
        '• Laser pointers and aerosol cans\n' +
        '• Noise-making devices (horns, whistles, air horns, cymbals, etc.)\n' +
        '• Large banners, signs, sticks, and stickers\n' +
        '• Pets (except service dogs)\n' +
        '• Two-wheeled motorized devices\n' +
        '• Other items as required by event promoters'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Lenovo Center?',
      answer: 'Yes, medical bags and parenting bags are permitted but must pass through X-ray machine prior to entry.'
    }
  ],
};