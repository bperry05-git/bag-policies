import type { VenueDetails } from '../../../types/venue';

export const scotiabankSaddledomeVenue: VenueDetails = {
  id: 'scotiabank-saddledome',
  name: 'Scotiabank Saddledome',
  type: 'arena',
  metadata: {
    title: 'Scotiabank Saddledome Bag Policy: Guide + Images | Calgary Flames',
    description: 'Scotiabank Saddledome allows bags up to 14" x 14" x 6". Preferred bag types include knapsacks, clear totes, drawstring bags, purses/clutches, and fanny packs.',
  },
  capacity: 19289,
  location: {
    address: '555 Saddledome Rise SE',
    city: 'Calgary',
    state: 'AB',
    zip: 'T2G 2W1',
    coordinates: {
      latitude: 51.0375,
      longitude: -114.051944,
    },
    website: 'https://www.scotiabanksaddledome.com/a-to-z-guide/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Scotiabank+Saddledome+Calgary&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Pengrowth_Saddledome.jpg/640px-Pengrowth_Saddledome.jpg'
  },
  teams: [
    {
      name: 'Calgary Flames',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: '**The maximum size of purse/bag allowed is 14" x 14" x 6"**. Preferred bag types include knapsacks, clear tote bags, drawstring bags, purses/clutches with minimal pockets, and fanny packs.',
    allowedBags: ['backpack', 'tote', 'clear', 'purse', 'fanny_pack'],
    prohibitedBags: ['duffel', 'briefcase'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Scotiabank Saddledome provide bag storage?',
      answer: 'Scotiabank Saddledome does not provide storage for oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Scotiabank Saddledome?',
      answer: 'The following items are prohibited at Scotiabank Saddledome:\n\n' +
        '• Cans and glass bottles\n' +
        '• Thermos-type containers\n' +
        '• Hard-sided coolers\n' +
        '• Weapons (including masks and props that could be used as weapons)\n' +
        '• Ammunition\n' +
        '• Balloons\n' +
        '• Laser pens\n' +
        '• Noisemakers such as air horns\n' +
        '• Selfie sticks\n' +
        '• GoPros\n' +
        '• Flowers\n' +
        '• Gifts for performing artists\n' +
        '• Bags larger than 14" x 14" x 6"\n' +
        '• Any other items deemed inappropriate by management'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Scotiabank Saddledome?',
      answer: 'Medical bags and equipment are generally permitted but may be subject to inspection. Please contact the venue in advance for specific requirements.'
    }
  ],
};