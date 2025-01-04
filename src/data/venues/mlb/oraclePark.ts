import type { VenueDetails } from '../../../types/venue';

export const oracleParkVenue: VenueDetails = {
  id: 'oracle-park',
  name: 'Oracle Park',
  type: 'stadium',
  metadata: {
    title: 'Oracle Park Bag Policy: Guide + Images | SF Giants',
    description: 'Oracle Park prohibits all backpacks, including clear ones. Other bags up to 16"x16"x8" are permitted. Bags do not need to be clear.',
  },
  capacity: 41265,
  location: {
    address: '24 Willie Mays Plaza',
    city: 'San Francisco',
    state: 'CA',
    zip: '94107',
    coordinates: {
      latitude: 37.778611,
      longitude: -122.389167,
    },
    website: 'https://www.mlb.com/giants/ballpark/information/guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Oracle+Park+San+Francisco&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Oracle_Park_2021.jpg/640px-Oracle_Park_2021.jpg'
  },
  teams: [
    {
      name: 'San Francisco Giants',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {

    description: '**Bags up to 16"x16"x8" are allowed, including: grocery bags, purses, fanny packs, lunch bags, briefcases, diaper bags, soft-sided coolers, and handbags**. Bags do not need to be clear. On-site bag storage is available at Marina Gate. Medical bags and diaper bags are permitted with proper documentation.',
    allowedBags: ['purse', 'fanny_pack', 'clutch', 'wristlet', 'briefcase'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Oracle Park provide bag storage?',
      answer: 'Yes, on-site bag storage is available for rent at the Marina Gate (behind center field). Storage is open from when gates open until one hour after the game/event ends.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Oracle Park?',
      answer: 'The following items are prohibited at Oracle Park:\n\n' +
        '• Aerosol cans (including sunscreen)\n' +
        '• Air horns\n' +
        '• Alcoholic beverages\n' +
        '• Aluminum or glass containers\n' +
        '• All backpacks (including clear)\n' +
        '• Bags over 16"x16"x8"\n' +
        '• Beach balls\n' +
        '• Fireworks\n' +
        '• Flags on poles\n' +
        '• Folding chairs\n' +
        '• Drones\n' +
        '• Hard-sided coolers\n' +
        '• Hoverboards\n' +
        '• Illegal drugs\n' +
        '• Knives\n' +
        '• Laser pointers\n' +
        '• Marijuana\n' +
        '• Field retrieval devices\n' +
        '• Noisemakers\n' +
        '• Sharp objects\n' +
        '• Weapons\n' +
        'Note: Additional items may be prohibited at Giants management discretion.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Oracle Park?',
      answer: 'Yes, accommodations are made for medical bags and diaper bags. All bags are subject to inspection upon entry.'
    }
  ],
};