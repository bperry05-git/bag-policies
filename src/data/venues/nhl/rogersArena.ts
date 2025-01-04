import type { VenueDetails } from '../../../types/venue';

export const rogersArenaVenue: VenueDetails = {
  id: 'rogers-arena',
  name: 'Rogers Arena',
  type: 'arena',
  metadata: {
    title: 'Rogers Arena Bag Policy: Guide + Images | Vancouver Canucks',
    description: 'Rogers Arena allows bags up to 14" x 14" x 6" (35cm x 35cm x 15cm). Larger bags must be returned to vehicles or secured elsewhere before entry.',
  },
  capacity: 18910,
  location: {
    address: '800 Griffiths Way',
    city: 'Vancouver',
    state: 'BC',
    zip: 'V6B 6G1',
    coordinates: {
      latitude: 49.277778,
      longitude: -123.108889,
    },
    website: 'https://rogersarena.com/faq-items/can-i-bring-a-bag-to-rogers-arena/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Rogers+Arena+Vancouver&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rogers_Arena_2016.jpg/640px-Rogers_Arena_2016.jpg'
  },
  teams: [
    {
      name: 'Vancouver Canucks',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: '**Bags, including purses and backpacks, must not exceed 14" x 14" x 6" (35cm x 35cm x 15cm)**. Guests with bags larger than this will be required to return them to their vehicles or another secure area before entering.',
    allowedBags: ['purse', 'clutch','fanny_pack', 'wristlet'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Rogers Arena provide bag storage?',
      answer: 'Rogers Arena does not provide storage for oversized bags. Guests with bags larger than 14" x 14" x 6" must return them to their vehicles or find alternative storage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Rogers Arena?',
      answer: 'The following items are prohibited at Rogers Arena:\n\n' +
        '• Bottles and cans\n' +
        '• Coolers\n' +
        '• Sticks, flagpoles, selfie sticks\n' +
        '• Aerosol cans\n' +
        '• Skateboards\n' +
        '• Rollerblades and roller skates\n' +
        '• Outside food or beverages\n' +
        '• Illegal drugs or noxious substances\n' +
        '• Cameras and recording devices (per event restrictions)\n' +
        '• Helium balloons\n' +
        '• Stolen tickets\n' +
        '• Oversized bags or luggage\n' +
        '• Items prohibited by promoter request\n' +
        '• Horns, noisemakers, cowbells, foghorns\n' +
        '• Masks that cover the face\n' +
        '• Weapons of any kind (including guns, knives, ammunition)\n' +
        '• Explosives, pepper spray, and mace'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Rogers Arena?',
      answer: 'Medical bags are generally permitted but may be subject to inspection. Please contact the venue in advance for specific requirements.'
    }
  ],
};