import type { VenueDetails } from '../../../types/venue';

export const bmoFieldVenue: VenueDetails = {
  id: 'bmo-field',
  name: 'BMO Field',
  type: 'stadium',
  metadata: {
    title: 'BMO Field Bag Policy: Guide + Images | Toronto FC',
    description: 'BMO Field enforces a clear bag policy. Clear bags up to 12" x 6" x 12" and small clutch bags up to 6.5" x 4.5" are permitted.',
  },
  capacity: 30991,
  location: {
    address: '170 Princes Boulevard',
    city: 'Toronto',
    state: 'ON',
    zip: 'M6K 3C3',
    coordinates: {
      latitude: 43.633333,
      longitude: -79.418611,
    },
    website: 'https://www.bmofield.com/plan-your-visit/bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=BMO+Field+Toronto&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Bmo_Field_2016_East_Stand.jpg/640px-Bmo_Field_2016_East_Stand.jpg'
  },
  teams: [
    {
      name: 'Toronto FC',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: 'Only **clear plastic bags up to 12" x 6" x 12"** without buckles/grommets, **1-gallon clear freezer bags**, or small clutch bags up to **6.5" x 4.5"** are permitted. All bags must be clear with no concealing elements.',
    allowedBags: ['clutch', 'wristlet', 'clear', 'clear_plastic','fanny_pack'],
    prohibitedBags: ['backpack', 'purse', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does BMO Field provide bag storage?',
      answer: 'No, BMO Field cannot safeguard items that are not permitted into the stadium.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at BMO Field?',
      answer: 'The following items are prohibited:\n\n' +
        '• Non-clear bags of any kind\n' +
        '• Alcohol and illegal substances\n' +
        '• Outside food and beverages (except sealed water under 20oz)\n' +
        '• Weapons, explosives, and fireworks\n' +
        '• Professional cameras and equipment\n' +
        '• Laptops and tablets\n' +
        '• Noisemakers (horns, vuvuzelas, drums)\n' +
        '• Drones and remote-controlled devices\n' +
        '• Flags/banners referencing conflicts or politics\n' +
        '• Selfie sticks and poles\n' +
        '• Umbrellas\n' +
        '• Streamers and confetti\n' +
        '• Folding chairs\n' +
        '• Marketing materials\n' +
        '• Skateboards and rollerblades\n' +
        '• Two-way radios'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at BMO Field?',
      answer: 'Yes, food, beverages, and bags needed for medical reasons are permitted with approval.'
    }
  ],
};