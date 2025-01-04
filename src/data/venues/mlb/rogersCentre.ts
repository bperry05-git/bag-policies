import type { VenueDetails } from '../../../types/venue';

export const rogersCentreVenue: VenueDetails = {
  id: 'rogers-centre',
  name: 'Rogers Centre',
  type: 'stadium',
  metadata: {
    title: 'Rogers Centre Bag Policy: Guide + Images | Toronto Blue Jays',
    description: 'Rogers Centre allows soft-sided bags up to 16"x16"x8", including diaper bags, medical bags, and small purses/knapsacks. Hard-sided coolers are prohibited.',
  },
  capacity: 49282,
  location: {
    address: '1 Blue Jays Way',
    city: 'Toronto',
    state: 'ON',
    zip: 'M5V 1J1',
    coordinates: {
      latitude: 43.641389,
      longitude: -79.389167,
    },
    website: 'https://www.mlb.com/bluejays/ballpark/information/guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Rogers+Centre+Toronto&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Interior_of_Rogers_Centre_%28Roof_Closed%29_2024.jpg/640px-Interior_of_Rogers_Centre_%28Roof_Closed%29_2024.jpg'
  },
  teams: [
    {
      name: 'Toronto Blue Jays',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Soft-sided bags up to 16"x16"x8" are permitted, including diaper bags, medical bags, and small purses/knapsacks. Hard-sided coolers and containers are prohibited**. All bags must fit in MLB-approved bins without modification. Fans are encouraged not to bring bags to expedite entry. All bags will be thoroughly inspected.',
    allowedBags: ['clutch', 'wristlet','fanny_pack', 'clear'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Rogers Centre provide bag storage?',
      answer: 'No bag storage is available at the ballpark.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Rogers Centre?',
      answer: 'The following items are prohibited at Rogers Centre:\n\n' +
        '• Bags exceeding 16"x16"x8"\n' +
        '• Hard-sided coolers\n' +
        '• Cameras with detachable/3"+ lenses\n' +
        '• Alcoholic beverages and illegal drugs\n' +
        '• Sticks and retrievers\n' +
        '• Selfie sticks and poles\n' +
        '• Laser pens\n' +
        '• Pressurized air horns\n' +
        '• Glass bottles\n' +
        '• Bottles/cans over 600ml\n' +
        '• Projectiles\n' +
        '• Inflatable objects\n' +
        '• Brooms\n' +
        '• Weapons and knives\n' +
        '• Fireworks\n' +
        '• Squirt guns\n' +
        '• Folding chairs\n' +
        '• Full face masks\n' +
        '• Oversized costumes\n' +
        '• Gang attire\n' +
        '• Inappropriate/offensive clothing\n' +
        '• Noisemakers'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Rogers Centre?',
      answer: 'Yes, medical bags are permitted and must comply with the 16"x16"x8" size limit. All bags will be thoroughly inspected before entry.'
    }
  ],
};