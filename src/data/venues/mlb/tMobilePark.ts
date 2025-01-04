import type { VenueDetails } from '../../../types/venue';

export const tMobileParkVenue: VenueDetails = {
  id: 't-mobile-park',
  name: 'T-Mobile Park',
  type: 'stadium',
  metadata: {
    title: 'T-Mobile Park Bag Policy: Guide + Images | Seattle Mariners',
    description: 'T-Mobile Park allows clear bags up to 12"x6"x12" and small clutches up to 4.5"x6.5". All bag contents must be fully visible.',
  },
  capacity: 47929,
  location: {
    address: '1250 1st Avenue South',
    city: 'Seattle',
    state: 'WA',
    zip: '98134',
    coordinates: {
      latitude: 47.591389,
      longitude: -122.3325,
    },
    website: 'https://www.mlb.com/mariners/ballpark/gate-bag-policy-faq',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=T-Mobile+Park+Seattle&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Safeco_Field_day.jpg/640px-Safeco_Field_day.jpg'
  },
  teams: [
    {
      name: 'Seattle Mariners',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Clear plastic or vinyl bags no larger than 12"x6"x12" and one-gallon clear zip-top bags are permitted. Small clutch bags up to 4.5"x6.5" (clear or non-clear) are allowed**. Security must be able to see all contents to the bottom of the bag. Items may not obscure bag contents. Exceptions for medical bags and single-compartment diaper bags with child present.',
    allowedBags: ['clear', 'clear_plastic','fanny_pack', 'clutch', 'wristlet'],
    prohibitedBags: ['purse', 'backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does T-Mobile Park provide bag storage?',
      answer: 'T-Mobile Park does not provide storage for bags that do not meet policy requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at T-Mobile Park?',
      answer: 'The following items are prohibited at T-Mobile Park:\n\n' +
        '• Aerosol containers\n' +
        '• Alcoholic beverages and non-alcoholic beer\n' +
        '• Metal containers (except empty reusable bottles ≤32oz)\n' +
        '• Ammunition\n' +
        '• Animals (except service animals)\n' +
        '• Audio recording devices\n' +
        '• Non-compliant bags\n' +
        '• Inflatable items\n' +
        '• Baseball bats (except tagged purchases)\n' +
        '• Brooms\n' +
        '• Metal chairs/seatbacks\n' +
        '• Professional cameras (6"+ with extended lens)\n' +
        '• Camera equipment (tripods, gimbals)\n' +
        '• Hard coolers\n' +
        '• Drones\n' +
        '• Fireworks\n' +
        '• Flag poles\n' +
        '• Flammable substances\n' +
        '• Glass containers\n' +
        '• Recreational devices\n' +
        '• Laser pointers\n' +
        '• Noisemakers\n' +
        '• Offensive clothing\n' +
        '• Outside beverages (except allowed water)\n' +
        '• Self-defense sprays\n' +
        '• Non-sporting signs\n' +
        '• Toy weapons\n' +
        '• Weapons\n' +
        '• Wrapped packages\n' +
        'Note: One factory-sealed/empty water bottle ≤32oz allowed.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at T-Mobile Park?',
      answer: 'Yes, exceptions are made for medically necessary items. Single-compartment diaper bags are also permitted when accompanied by a child.'
    }
  ],
};