import type { VenueDetails } from '../../../types/venue';

export const orioleParkVenue: VenueDetails = {
  id: 'oriole-park',
  name: 'Oriole Park at Camden Yards',
  type: 'stadium',
  metadata: {
    title: 'Oriole Park Bag Policy: Guide + Images | Baltimore Orioles',
    description: 'Oriole Park allows clear bags up to 12"x6"x12", one-gallon freezer bags, and small fanny packs/clutches up to 5"x7". LockerUP storage available.',
  },
  capacity: 45971,
  location: {
    address: '333 West Camden Street',
    city: 'Baltimore',
    state: 'MD',
    zip: '21201',
    coordinates: {
      latitude: 39.283889,
      longitude: -76.621667,
    },
    website: 'https://www.mlb.com/orioles/ballpark/information/security',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Oriole+Park+at+Camden+Yards+Baltimore&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Camden_Yards.jpg/640px-Camden_Yards.jpg'
  },
  teams: [
    {
      name: 'Baltimore Orioles',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Clear plastic bags up to 12"x6"x12", one-gallon plastic freezer bags, or fanny packs/clutch purses up to 5"x7"**. Medical equipment/devices and diaper bags must use designated search lanes. LockerUP lockers available for $15 (credit card only) at Gate H near Main Box Office and outside Gates A & C.',
    allowedBags: ['clear', 'fanny_pack', 'clutch', 'wristlet'],
    prohibitedBags: ['purse', 'backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Oriole Park provide bag storage?',
      answer: 'Yes, LockerUP lockers are available for $15 (credit card only). Lockers are located at the north end of the Warehouse by Gate H near the Main Box Office and outside of Gates A & C.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Oriole Park?',
      answer: 'The following items are prohibited at Oriole Park:\n\n' +
        '• Alcoholic beverages\n' +
        '• Air horns\n' +
        '• Aerosol cans\n' +
        '• Non-approved bags\n' +
        '• Baseball bats\n' +
        '• Beach balls and inflatables\n' +
        '• Brooms\n' +
        '• Camera stands/tripods\n' +
        '• Cans\n' +
        '• Cowbells and noise makers\n' +
        '• Fireworks\n' +
        '• Glass bottles\n' +
        '• Hard-sided coolers\n' +
        '• Knives\n' +
        '• Laser pointers\n' +
        '• Recreational devices (skateboards, etc.)\n' +
        '• Sticks and clubs\n' +
        '• Toy weapons\n' +
        '• Drones\n' +
        '• Weapons\n' +
        '• Wheeled bags'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Oriole Park?',
      answer: 'Yes, medical equipment/devices and diaper bags are permitted but must go through a designated search lane. All bags are subject to search.'
    }
  ],
};