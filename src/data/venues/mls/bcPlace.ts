import type { VenueDetails } from '../../../types/venue';

export const bcPlaceVenue: VenueDetails = {
  id: 'bc-place',
  name: 'BC Place',
  type: 'stadium',
  metadata: {
    title: 'BC Place Bag Policy: Guide + Images | Vancouver Whitecaps FC',
    description: 'BC Place allows clear bags up to 12" x 12" x 6" and clutch purses up to 6.5" x 8.5". Bag check service available for $10 per item.',
  },
  capacity: 54500,
  location: {
    address: '777 Pacific Boulevard',
    city: 'Vancouver',
    state: 'BC',
    zip: 'V6B 4Y8',
    coordinates: {
      latitude: 49.276667,
      longitude: -123.111944,
    },
    website: 'https://www.bcplace.com/bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=BC+Place+Vancouver&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BC_Place_2015_Women%27s_FIFA_World_Cup.jpg/640px-BC_Place_2015_Women%27s_FIFA_World_Cup.jpg'
  },
  teams: [
    {
      name: 'Vancouver Whitecaps FC',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: 'BC Place strongly encourages guests not to bring bags. Permitted bags include **clutch purses or belt bags up to 6.5" x 8.5"** and **clear plastic bags up to 12" x 12" x 6"**. Exceptions for diaper bags and medical items. Bag check available for $10 per item.',
    allowedBags: ['clutch', 'wristlet', 'clear', 'clear_plastic','fanny_pack'],
    prohibitedBags: ['backpack', 'purse', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does BC Place provide bag storage?',
      answer: 'Yes, BC Place offers bag check service at events on a first-come-first-served basis for $10 per item.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at BC Place?',
      answer: 'The following items are prohibited at BC Place:\n\n' +
        '• Weapons and fireworks\n' +
        '• Laser pointers and drones\n' +
        '• Illegal drugs and substances\n' +
        '• Bottles over 1L capacity and glass bottles\n' +
        '• Perfume and cologne bottles\n' +
        '• Poles and selfie sticks\n' +
        '• Aerosols and flammable liquids\n' +
        '• Skateboards and bicycles\n' +
        '• Outside alcohol, food, and beverages\n' +
        '• Large cameras (over 150mm with lens)\n' +
        '• Helium balloons and beach balls\n' +
        '• Air horns and whistles\n' +
        '• Vuvuzelas and cowbells (at select events)\n' +
        '• Costume masks (varies by event)\n' +
        '• Offensive signs or displays'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at BC Place?',
      answer: 'Yes, exceptions are provided for medically necessary items that cannot fit into a clear bag. These items are subject to search.'
    }
  ],
};