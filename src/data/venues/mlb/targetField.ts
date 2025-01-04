import type { VenueDetails } from '../../../types/venue';

export const targetFieldVenue: VenueDetails = {
  id: 'target-field',
  name: 'Target Field',
  type: 'stadium',
  metadata: {
    title: 'Target Field Bag Policy: Guide + Images | Minnesota Twins',
    description: 'Target Field allows single-compartment bags up to 16"x16"x8", including purses, tote bags, clear bags, and soft-sided coolers.',
  },
  capacity: 38544,
  location: {
    address: '1 Twins Way',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55403',
    coordinates: {
      latitude: 44.981667,
      longitude: -93.278333,
    },
    website: 'https://www.mlb.com/twins/ballpark/information/guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Target+Field+Minneapolis&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Target_Field_2016.jpg/640px-Target_Field_2016.jpg'
  },
  teams: [
    {
      name: 'Minnesota Twins',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Single-compartment bags up to 16"x16"x8" are allowed, including purses, clutches, tote bags, clear bags, drawstring bags, diaper bags, soft-sided coolers, fanny packs, and medical bags**. Backpacks, multi-compartment bags, laptop bags, duffel bags, and oversized bags are NOT allowed. Guests are encouraged to come without bags to expedite entry.',
    allowedBags: ['purse', 'fanny_pack','clutch', 'tote'],
    prohibitedBags: ['backpack','duffel', 'briefcase'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Target Field provide bag storage?',
      answer: 'Yes, lockers are available outside Gate 6 for storing prohibited items. Items can also be surrendered at the gate (will not be returned) or guests can leave and return without the prohibited item.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Target Field?',
      answer: 'The following items are prohibited at Target Field:\n\n' +
        '• Ball retrievers\n' +
        '• Balloons\n' +
        '• Bats (except small souvenir bats)\n' +
        '• Beach balls\n' +
        '• Boom boxes\n' +
        '• Brooms (small whiskbrooms allowed)\n' +
        '• Fireworks\n' +
        '• Flasks\n' +
        '• Frisbees\n' +
        '• Coolers (except soft-sided)\n' +
        '• Inflatables\n' +
        '• Laser pointers\n' +
        '• Lawn chairs\n' +
        '• Noise-making devices\n' +
        '• Weapons\n' +
        '• Wooden sticks or rods\n' +
        'Note: Surrendered items will not be returned.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Target Field?',
      answer: 'Yes, bags containing medically necessary items are permitted but must follow the 16"x16"x8" size requirement. All bags are subject to inspection.'
    }
  ],
};