import type { VenueDetails } from '../../../types/venue';

export const kauffmanStadiumVenue: VenueDetails = {
  id: 'kauffman-stadium',
  name: 'Kauffman Stadium',
  type: 'stadium',
  metadata: {
    title: 'Kauffman Stadium Bag Policy: Guide + Images | KC Royals',
    description: 'Kauffman Stadium allows clear bags up to 12"x12"x6", one-gallon clear zip-seal bags, and small clutch bags up to 9"x5". Medical and diaper bags permitted with inspection.',
  },
  capacity: 37903,
  location: {
    address: '1 Royal Way',
    city: 'Kansas City',
    state: 'MO',
    zip: '64129',
    coordinates: {
      latitude: 39.051389,
      longitude: -94.480556,
    },
    website: 'https://www.mlb.com/royals/ballpark/information/guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Kauffman+Stadium+Kansas+City&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Kauffman_Stadium._Interleague.JPG/640px-Kauffman_Stadium._Interleague.JPG'
  },
  teams: [
    {
      name: 'Kansas City Royals',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: 'Kauffman Stadium allows only: **Clear bags no larger than 12"x12"x6" with all items easily visible, one-gallon clear zip-seal bags, and small clutch bags not exceeding 9"x5"**. Clutch bags may be carried along with one clear bag option. Exceptions for medical bags and manufactured diaper bags with infants after inspection.',
    allowedBags: ['clear', 'clear_plastic', 'clutch', 'fanny_pack','wristlet'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Kauffman Stadium provide bag storage?',
      answer: 'Kauffman Stadium does not provide storage for bags that do not meet size requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Kauffman Stadium?',
      answer: 'The following items are prohibited at Kauffman Stadium:\n\n' +
        '• Drinks besides water/sports drinks (one sealed 1-liter or smaller)\n' +
        '• Frozen bottles of any liquid\n' +
        '• Weapons and fireworks (including guns and pocket knives)\n' +
        '• Potential projectiles\n' +
        '• Cameras with 12"+ lenses\n' +
        '• Banners/flags with sticks\n' +
        '• Noise makers (bullhorns, airhorns, cowbells)\n' +
        '• Lasers or laser pens\n' +
        '• Brooms over 4 feet\n' +
        '• All coolers\n' +
        '• View-obstructing items\n' +
        '• Wrapped presents/gifts\n' +
        '• Pets (except service dogs)\n' +
        '• Aerosol cans\n' +
        '• Toy weapons\n' +
        '• Baseball bats\n' +
        '• Beach balls/inflatables\n' +
        '• Drones\n' +
        'Note: Soft-sided juice/milk containers and ADA-required liquids may be permitted.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Kauffman Stadium?',
      answer: 'Yes, exceptions may be made for medical bags and manufactured diaper bags that accompany infants and young children, subject to proper inspection.'
    }
  ],
};