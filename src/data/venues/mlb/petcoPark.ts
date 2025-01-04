import type { VenueDetails } from '../../../types/venue';

export const petcoParkVenue: VenueDetails = {
  id: 'petco-park',
  name: 'Petco Park',
  type: 'stadium',
  metadata: {
    title: 'Petco Park Bag Policy: Guide + Images | San Diego Padres',
    description: 'Petco Park allows only single compartment clear plastic bags up to 12"x6"x12" and clutches up to 5"x7". Infant and medical bags are permitted.',
  },
  capacity: 40209,
  location: {
    address: '100 Park Boulevard',
    city: 'San Diego',
    state: 'CA',
    zip: '92101',
    coordinates: {
      latitude: 32.707222,
      longitude: -117.156667,
    },
    website: 'https://www.mlb.com/padres/ballpark/entry-policies',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Petco+Park+San+Diego&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Petco_Park_%2815561154413%29.jpg/640px-Petco_Park_%2815561154413%29.jpg'
  },
  teams: [
    {
      name: 'San Diego Padres',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: '**Only single compartment clear plastic bags not exceeding 12"x6"x12" are permitted. Clutches and purses must be no larger than 5"x7"**. Exceptions are made for infant and medical bags. All bags are subject to inspection to expedite the entry process.',
    allowedBags: ['clear', 'fanny_pack', 'clutch', 'wristlet'],
    prohibitedBags: ['purse', 'backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Petco Park provide bag storage?',
      answer: 'Petco Park does not provide storage for bags that do not meet size requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Petco Park?',
      answer: 'The following items are prohibited at Petco Park:\n\n' +
        '• Alcoholic beverages\n' +
        '• Amplified music devices\n' +
        '• Animals (except service animals)\n' +
        '• Non-compliant bags\n' +
        '• Ball retrievers\n' +
        '• Balls of any type (except autographed)\n' +
        '• Balloons\n' +
        '• Oversized banners (>4\'x8\')\n' +
        '• Bats and brooms\n' +
        '• Bicycles\n' +
        '• Bubble devices\n' +
        '• Cameras with 6"+ lenses\n' +
        '• Drones\n' +
        '• Drugs (including medical marijuana)\n' +
        '• Firearms\n' +
        '• Fireworks\n' +
        '• Throwable items\n' +
        '• Glass containers\n' +
        '• Hard coolers\n' +
        '• Hover boards\n' +
        '• Inflatables\n' +
        '• Knives\n' +
        '• Lawn chairs\n' +
        '• Laser pointers\n' +
        '• Unauthorized microphones\n' +
        '• Noise makers\n' +
        '• Offensive clothing\n' +
        '• Recreational devices\n' +
        '• Selfie sticks\n' +
        '• Tobacco/vaping products\n' +
        '• Large umbrellas\n' +
        '• Pull wagons\n' +
        '• Wallet chains\n' +
        '• Weapons'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Petco Park?',
      answer: 'Yes, infant and medical bags are permitted as exceptions to the standard bag policy. All bags will be subject to inspection upon entry.'
    }
  ],
};