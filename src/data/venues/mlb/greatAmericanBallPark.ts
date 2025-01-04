import type { VenueDetails } from '../../../types/venue';

export const greatAmericanBallParkVenue: VenueDetails = {
  id: 'great-american-ball-park',
  name: 'Great American Ball Park',
  type: 'stadium',
  metadata: {
    title: 'Great American Ball Park Bag Policy: Guide + Images | Cincinnati Reds',
    description: 'Great American Ball Park allows bags up to 16"x16"x8", including soft-sided coolers. Backpacks and multi-pocket bags are prohibited except for medical/infant care.',
  },
  capacity: 42319,
  location: {
    address: '100 Joe Nuxhall Way',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45202',
    coordinates: {
      latitude: 39.097222,
      longitude: -84.506667,
    },
    website: 'https://www.mlb.com/reds/ballpark/information/guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Great+American+Ball+Park+Cincinnati&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Great_American_Ball_Park_%2815561187833%29.jpg/640px-Great_American_Ball_Park_%2815561187833%29.jpg'
  },
  teams: [
    {
      name: 'Cincinnati Reds',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Bags cannot exceed 16"x16"x8". Backpacks and multi-pocket bags are prohibited unless specifically designed for medical or infant care. Allowed items include: soft-sided coolers with food/non-alcoholic drinks in sealed plastic bottles, small purses, food bags, and Reds Heads Bags (provided from 2020)**. All items are subject to inspection.',
    allowedBags: ['purse','fanny_pack','clutch','wristlet', 'clear', 'clear_plastic'],
    prohibitedBags: ['backpack', 'tote','duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Great American Ball Park provide bag storage?',
      answer: 'Great American Ball Park does not provide storage for bags that do not meet size requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Great American Ball Park?',
      answer: 'The following items are prohibited at Great American Ball Park:\n\n' +
        '• Aerosols (except spray sunscreen/bug spray)\n' +
        '• Alcoholic beverages\n' +
        '• Animals (except service animals)\n' +
        '• Backpacks or multi-pocket bags\n' +
        '• Bags larger than 16"x16"x8"\n' +
        '• Beach balls and inflatables\n' +
        '• Bodysuits\n' +
        '• Drones\n' +
        '• Explosive materials\n' +
        '• Firearms\n' +
        '• Frisbees\n' +
        '• Glass bottles and opened containers\n' +
        '• Hard-sided coolers\n' +
        '• Hoverboards\n' +
        '• Illegal substances\n' +
        '• Laser pointers\n' +
        '• Masks\n' +
        '• Noisemakers\n' +
        '• Obscene clothing\n' +
        '• Pocketknives\n' +
        '• Selfie sticks\n' +
        '• Inappropriate signs/banners\n' +
        '• Sticks and poles\n' +
        '• Tripods/monopods\n' +
        '• Weapons'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Great American Ball Park?',
      answer: 'Yes, backpacks and multi-pocket bags specifically designed for medical or infant care are permitted as exceptions to the standard bag policy. All bags will be subject to inspection.'
    }
  ],
};