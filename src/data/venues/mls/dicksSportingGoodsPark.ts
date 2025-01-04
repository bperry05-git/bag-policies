import type { VenueDetails } from '../../../types/venue';

export const dicksSportingGoodsParkVenue: VenueDetails = {
  id: 'dicks-sporting-goods-park',
  name: "Dick's Sporting Goods Park",
  type: 'stadium',
  metadata: {
    title: "Dick's Sporting Goods Park Bag Policy: Guide + Images | Colorado Rapids",
    description: "Dick's Sporting Goods Park allows soft-sided bags up to 14\" x 14\" x 6\". Medical and diaper bags of the same size are permitted.",
  },
  capacity: 18061,
  location: {
    address: '6000 Victory Way',
    city: 'Commerce City',
    state: 'CO',
    zip: '80022',
    coordinates: {
      latitude: 39.805556,
      longitude: -104.891944,
    },
    website: 'https://www.dickssportinggoodspark.com/stadium/fan-guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Dicks+Sporting+Goods+Park+Commerce+City&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Dick%27s_Sporting_Goods_Park_%2819940991839%29.jpg/640px-Dick%27s_Sporting_Goods_Park_%2819940991839%29.jpg'
  },
  teams: [
    {
      name: 'Colorado Rapids',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: '**Soft-sided bags up to 14" x 14" x 6"** are permitted. Medical and diaper bags must meet the same size restrictions. No bag check available. All bags subject to search.',
    allowedBags: ['purse', 'fanny_pack', 'tote','clutch'],
    prohibitedBags: ['backpack', 'duffel', 'briefcase', 'camera_bag'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: "Does Dick's Sporting Goods Park provide bag storage?",
      answer: 'No, there is no bag check available. Guests will not be allowed entry with unapproved or oversized bags.'
    },
    {
      id: 'prohibited-items',
      question: "What items are prohibited at Dick's Sporting Goods Park?",
      answer: 'The following items are prohibited:\n\n' +
        '• Bags larger than 14" x 14" x 6"\n' +
        '• Hard case containers and coolers\n' +
        '• Glass containers and aluminum cans\n' +
        '• Outside food and beverages\n' +
        '• Weapons and fireworks\n' +
        '• Drones and recording devices\n' +
        '• Professional camera equipment\n' +
        '• Laser pointers\n' +
        '• Large umbrellas\n' +
        '• Marijuana and illegal substances\n' +
        '• Inflatable objects\n' +
        '• Noisemakers and vuvuzelas\n' +
        '• Skateboards and rollerblades\n' +
        '• Unauthorized pamphlets\n' +
        '• Streamers and stickers'
    },
    {
      id: 'medical-bags',
      question: "Are medical bags allowed at Dick's Sporting Goods Park?",
      answer: 'Yes, medical and diaper bags measuring 14" x 14" x 6" or smaller are permitted.'
    }
  ],
};