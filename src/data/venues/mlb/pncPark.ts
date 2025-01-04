import type { VenueDetails } from '../../../types/venue';

export const pncParkVenue: VenueDetails = {
  id: 'pnc-park',
  name: 'PNC Park',
  type: 'stadium',
  metadata: {
    title: 'PNC Park Bag Policy: Guide + Images | Pittsburgh Pirates',
    description: 'PNC Park allows one soft-sided bag per guest up to 16"x16"x8". This includes purses, fanny packs, and backpacks.',
  },
  capacity: 38747,
  location: {
    address: '115 Federal Street',
    city: 'Pittsburgh',
    state: 'PA',
    zip: '15212',
    coordinates: {
      latitude: 40.446944,
      longitude: -80.005833,
    },
    website: 'https://www.mlb.com/pirates/ballpark/information/guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=PNC+Park+Pittsburgh&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Pedro_goes_to_Pittsburgh.jpg/640px-Pedro_goes_to_Pittsburgh.jpg'
  },
  teams: [
    {
      name: 'Pittsburgh Pirates',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**One soft-sided bag up to 16"x16"x8" into the ballpark. This includes purses, fanny packs, and backpacks**. Bags exceeding these dimensions will not be permitted. All bags are subject to search to ensure a safe and enjoyable gameday experience.',
    allowedBags: ['purse', 'fanny_pack', 'backpack', 'tote'],
    prohibitedBags: ['duffel', 'briefcase'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does PNC Park provide bag storage?',
      answer: 'PNC Park does not provide storage for bags that do not meet size requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at PNC Park?',
      answer: 'The following items are prohibited at PNC Park:\n\n' +
        '• Balloons\n' +
        '• Bluetooth speakers\n' +
        '• Drones\n' +
        '• Fireworks\n' +
        '• Footballs\n' +
        '• Frisbee discs\n' +
        '• Hoverboards\n' +
        '• Inflatable balls\n' +
        '• Laser pointers\n' +
        '• Motorcycle helmets\n' +
        '• Weapons and dangerous items\n' +
        '• Glass bottles\n' +
        '• Cans\n' +
        '• Alcoholic beverages\n' +
        '• Any hazardous or disruptive items'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at PNC Park?',
      answer: 'Yes, medical bags are permitted but must follow size requirements where possible. All bags will be subject to search upon entry.'
    }
  ],
};