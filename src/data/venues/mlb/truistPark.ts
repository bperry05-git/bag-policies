import type { VenueDetails } from '../../../types/venue';

export const truistParkVenue: VenueDetails = {
  id: 'truist-park',
  name: 'Truist Park',
  type: 'stadium',
  metadata: {
    title: 'Truist Park Bag Policy: Guide + Images | Atlanta Braves',
    description: 'Truist Park enforces a no-bag policy for the 2024 season, with limited exceptions for medical bags, diaper bags, and small clutches up to 5"x9".',
  },
  capacity: 41084,
  location: {
    address: '755 Battery Avenue SE',
    city: 'Atlanta',
    state: 'GA',
    zip: '30339',
    coordinates: {
      latitude: 33.890833,
      longitude: -84.468333,
    },
    website: 'https://www.mlb.com/braves/ballpark/security',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Truist+Park+Atlanta&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Truist_Park.jpg/640px-Truist_Park.jpg'
  },
  teams: [
    {
      name: 'Atlanta Braves',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: 'Bags are NOT ALLOWED in Truist Park for the 2024 season. Exceptions include: medical bags (minimum size needed), breast pumps and ADA-required bags, diaper bags (with infant/toddler present), and **single compartment clutches/clear bags up to 5"x9"**.',
    allowedBags: ['clutch', 'wristlet', 'clear_plastic',],
    prohibitedBags: ['backpack', 'purse', 'tote', 'fanny_pack'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Truist Park provide bag storage?',
      answer: 'A mobile locker bag storage (first come, first served) is available for guests who arrive with oversized bags. This is located on Power Alley behind Live at The Battery Atlanta. This unit opens two hours prior to first pitch through one hour after last out for a cost of $11 per bag. Special events such as concerts will be a $15 dollar charge per bag.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Truist Park?',
      answer: 'The following items are prohibited at Truist Park:\n\n' +
        '• Alcoholic beverages and illegal drugs\n' +
        '• Aluminum cans (including sunscreen spray)\n' +
        '• Baseball bats\n' +
        '• Glass bottles\n' +
        '• Bags and backpacks\n' +
        '• Clutches over 5"x9"\n' +
        '• Coolers (except soft-sided for medical needs)\n' +
        '• Camera lenses over 5 inches\n' +
        '• Camera stands/tripods\n' +
        '• Folding chairs and stools\n' +
        '• Sticks and clubs\n' +
        '• False identification\n' +
        '• Weapons and replicas\n' +
        '• Noisemakers and confetti\n' +
        '• Laser devices\n' +
        '• Recreational devices\n' +
        '• Drones\n' +
        '• Inflatable items\n' +
        '• Wrapped packages\n' +
        'Note: Soft-sided coolers without plastic liner allowed for medical needs only.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Truist Park?',
      answer: 'Yes, medical bags no larger than required to transport necessary equipment are permitted. This includes breast pumps and ADA-required bags. Soft-sided coolers without plastic liners are permitted for medical needs.'
    }
  ],
};