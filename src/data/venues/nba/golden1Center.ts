import type { VenueDetails } from '../../../types/venue';

export const golden1CenterVenue: VenueDetails = {
  id: 'golden-1-center',
  name: 'Golden 1 Center',
  type: 'arena',
  metadata: {
    title: 'Golden 1 Center Bag Policy: Guide + Images | Sacramento Kings',
    description: 'Golden 1 Center enforces strict bag size limits. Only bags under 8" x 6" x 1" are permitted.',
  },
  capacity: 17608,
  location: {
    address: '500 David J Stern Walk',
    city: 'Sacramento',
    state: 'CA',
    zip: '95814',
    coordinates: {
      latitude: 38.580361,
      longitude: -121.499611,
    },
    website: 'https://www.golden1center.com/about/security-operations/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Golden+1+Center+Sacramento&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Allan_000528_171534_516361_4578_%2836130546274%29.jpg/640px-Allan_000528_171534_516361_4578_%2836130546274%29.jpg"
  },
  teams: [
    {
      name: 'Sacramento Kings',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: '**Bags larger than 8" x 6" x 1" will not be allowed into the arena**. Small items under the permitted dimensions are subject to security inspection. Medical and parental bags will be permitted but must go through X-ray security screening.',
    allowedBags: ['clutch','wristlet'],
    prohibitedBags: ['backpack','fanny_pack','purse', 'tote', 'camera_bag', 'briefcase'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Golden 1 Center provide an area to store luggage?',
      answer: 'Golden 1 Center does not provide an area to check oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Golden 1 Center?',
      answer: 'The following items are prohibited at Golden 1 Center:\n\n' +
        '• Vape pens, cigarettes, and lighters\n' +
        '• Weapons (firearms, tasers/stun guns)\n' +
        '• Knives of all sizes\n' +
        '• Aerosol cans\n' +
        '• Bottles or cans\n' +
        '• Backpacks\n' +
        '• Bags larger than 8" x 6" x 1"\n' +
        '• Food coolers\n' +
        '• Outside food/beverages (except baby food/formula)\n' +
        '• Pamphlets, product samples\n' +
        '• Skateboards, rollerblades, bicycles, helmets, chairs\n' +
        '• Laptop computers\n' +
        '• Two-way radios\n' +
        '• Bats and clubs\n' +
        '• Drones\n' +
        '• Balloons, permanent markers\n' +
        '• Professional cameras with interchangeable/detachable lenses\n' +
        '• Poles, selfie-sticks, tripods, monopods\n' +
        '• Signs/flags/banners larger than 11" x 17"\n' +
        '• Clothing or signs with explicit language/profanity\n' +
        '• Illegal substances\n' +
        '• Mace or pepper spray\n' +
        '• Frisbees and beach balls\n' +
        '• Laser pointers\n' +
        '• Flashlights\n' +
        '• Noise-making devices (except cowbells at Kings games)\n' +
        '• Fireworks\n' +
        '• Audio/visual recording devices (GoPro, Google Glass, etc.)\n' +
        '• Any items deemed dangerous by management'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Golden 1 Center?',
      answer: 'Yes, medical bags and parental bags are permitted but must go through X-ray security screening.'
    }
  ],
};