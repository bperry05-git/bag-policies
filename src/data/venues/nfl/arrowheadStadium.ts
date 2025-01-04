import type { VenueDetails } from '../../../types/venue';
export const arrowheadStadiumVenue: VenueDetails = {
  id: 'arrowhead-stadium',
  name: 'Arrowhead Stadium',
  type: 'stadium',
    metadata: {
    title: 'Arrowhead Stadium Bag Policy: Guide + Images | KC Chiefs',
    description: 'Arrowhead Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 76416,
  location: {
    address: '1 Arrowhead Drive',
    city: 'Kansas City',
    state: 'MO',
    zip: '64129',
    coordinates: {
      latitude: 39.048889,
      longitude: -94.483889,
    },
    website: 'https://www.chiefs.com/stadium/clearbag',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Arrowhead+Stadium+Kansas+City&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Aerial_view_of_Arrowhead_Stadium_08-31-2013_crop.jpg/640px-Aerial_view_of_Arrowhead_Stadium_08-31-2013_crop.jpg'
  },
  teams: [
    {
      name: 'Kansas City Chiefs',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
    policies: {
    description: 'Arrowhead Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Arrowhead Stadium provide an area to store luggage?',
      answer: 'Arrowhead Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Arrowhead Stadium?',
  answer: 'The following items are prohibited at Arrowhead Stadium:\n\n' + 
    '• All food and beverage (excluding 20oz factory sealed bottled water)\n' +
    '• Glass, metal, plastic thermos, cups bottles or flasks\n' +
    '• Coolers, containers and bags larger than permissible size\n' +
    '• Helmets and hardhats of any size\n' +
    '• Weapons of any kind (guns, knives, etc.)\n' +
    '• Fireworks\n' +
    '• Flammable Liquids\n' +
    '• Noisemakers (air horns, bells, etc)\n' +
    '• Dedicated external speakers\n' +
    '• Video or professional cameras\n' +
    '• Laser pointers of any type, poles or rods\n' +
    '• Portable Heaters\n' +
    '• Large strollers\n' +
    '• Floor mats and carpet squares\n' +
    '• Seat cushions (with pockets, zippers, compartments or covers)\n' +
    '• Sports balls\n' +
    '• Any other items deemed dangerous or inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Arrowhead Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};