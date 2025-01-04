import type { VenueDetails } from '../../../types/venue';

export const wrigleyFieldVenue: VenueDetails = {
  id: 'wrigley-field',
  name: 'Wrigley Field',
  type: 'stadium',
  metadata: {
    title: 'Wrigley Field Bag Policy: Guide + Images | Chicago Cubs',
    description: 'Wrigley Field allows soft-sided bags up to 16"x16"x8". Backpacks (including clear) and hard-sided coolers are not permitted.',
  },
  capacity: 41649,
  location: {
    address: '1060 West Addison Street',
    city: 'Chicago',
    state: 'IL',
    zip: '60613',
    coordinates: {
      latitude: 41.948333,
      longitude: -87.655556,
    },
    website: 'https://www.mlb.com/cubs/ballpark/information/security',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Wrigley+Field+Chicago&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Wrigley_field_720.jpg/640px-Wrigley_field_720.jpg'
  },
  teams: [
    {
      name: 'Chicago Cubs',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Bags must be smaller than 16"x16"x8". Allowed bags include wallets, purses, drawstring bags, fanny packs, lunch bags, briefcases and soft-sided coolers within size limits. Backpacks (including clear) and hard-sided coolers are NOT permitted**. Exceptions made for medical bags and diaper bags with young children. All bags subject to inspection.',
    allowedBags: ['purse', 'fanny_pack','clutch', 'tote'],
    prohibitedBags: ['backpack','duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Wrigley Field provide bag storage?',
      answer: 'Wrigley Field does not provide storage for bags that do not meet size requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Wrigley Field?',
      answer: 'The following items are prohibited at Wrigley Field:\n\n' +
        '• Aerosol sprays (including sunscreen)\n' +
        '• Air horns and noisemakers\n' +
        '• Alcohol\n' +
        '• Animals (except service animals)\n' +
        '• Distracting devices\n' +
        '• All backpacks\n' +
        '• Bags over 16"x16"x8"\n' +
        '• Inappropriate banners/signs\n' +
        '• Brooms and poles\n' +
        '• Professional cameras/equipment\n' +
        '• Offensive clothing\n' +
        '• Weapons\n' +
        '• Fireworks\n' +
        '• Full-sized bats\n' +
        '• Glass/metal containers\n' +
        '• Hard coolers\n' +
        '• Illegal substances\n' +
        '• Marijuana\n' +
        '• Inflatables\n' +
        '• Laser pointers\n' +
        '• Car seats\n' +
        '• Camera equipment\n' +
        '• Nets\n' +
        '• Unsealed bottles\n' +
        '• Stadium seats\n' +
        '• Selfie sticks\n' +
        '• Recreational vehicles\n' +
        '• Large umbrellas\n' +
        '• Drones\n' +
        '• Wrapped packages\n' +
        'Note: Small, collapsible umbrellas under 10" permitted.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Wrigley Field?',
      answer: 'Yes, exceptions will be made for medical bags and diaper bags that accompany guests with young children. All bags are subject to inspection.'
    }
  ],
};