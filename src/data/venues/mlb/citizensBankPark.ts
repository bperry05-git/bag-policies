import type { VenueDetails } from '../../../types/venue';

export const citizensBankParkVenue: VenueDetails = {
  id: 'citizens-bank-park',
  name: 'Citizens Bank Park',
  type: 'stadium',
  metadata: {
    title: 'Citizens Bank Park Bag Policy: Guide + Images | Philadelphia Phillies',
    description: 'Citizens Bank Park allows clear bags up to 12" x 6" x 12" and small clutch purses/fanny packs up to 5" x 7". Medical and diaper bags are permitted.',
  },
  capacity: 42901,
  location: {
    address: '1 Citizens Bank Way',
    city: 'Philadelphia',
    state: 'PA',
    zip: '19148',
    coordinates: {
      latitude: 39.906111,
      longitude: -75.166389,
    },
    website: 'https://www.mlb.com/phillies/ballpark/information/health-safety-protocols',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Citizens+Bank+Park+Philadelphia&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Citizens_Bank_Park_%2820878675372%29.jpg/640px-Citizens_Bank_Park_%2820878675372%29.jpg'
  },
  teams: [
    {
      name: 'Philadelphia Phillies',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: 'To expedite entry, Citizens Bank Park prohibits non-clear bags, including backpacks and draw-string bags. **Only clutch purses and/or fanny packs (no larger than 5" x 7"), clear bags (no larger than 12" x 6" x 12"), medical bags, and diaper bags are permitted**. Storage lockers are available on Citizens Bank Way ($10 fee). All bags are subject to inspection upon entry.',
    allowedBags: ['clutch', 'wristlet','fanny_pack', 'clear', 'clear_plastic'],
    prohibitedBags: ['backpack', 'purse', 'camera_bag', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Citizens Bank Park provide bag storage?',
      answer: 'There is no bag storage at Citizens Bank Park.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Citizens Bank Park?',
      answer: 'The following items are prohibited at Citizens Bank Park:\n\n' +
        '• Abusive, foul or disruptive language or clothing\n' +
        '• Alcohol or illegal substances\n' +
        '• Animals (except service dogs)\n' +
        '• Cans, glass bottles, and open containers\n' +
        '• Clear bags larger than 12"x6"x12"\n' +
        '• Non-clear bags larger than 5"x7"\n' +
        '• Coolers (hard-sided, soft-sided, and Styrofoam)\n' +
        '• Fireworks, firearms and weapons\n' +
        '• Balloons, beach balls, noisemakers, nets\n' +
        '• Laser pointers\n' +
        '• Brooms, poles or tripods\n' +
        '• Laptops\n' +
        '• Political signs or flags\n' +
        '• Drones or unmanned aircraft systems'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Citizens Bank Park?',
      answer: 'Yes, medical bags and diaper bags are permitted into Citizens Bank Park. All bags will be subject to inspection upon entry in accordance with Major League Baseball security regulations.'
    }
  ],
};