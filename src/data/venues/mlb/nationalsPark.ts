import type { VenueDetails } from '../../../types/venue';

export const nationalsParkVenue: VenueDetails = {
  id: 'nationals-park',
  name: 'Nationals Park',
  type: 'stadium',
  metadata: {
    title: 'Nationals Park Bag Policy: Guide + Images | Washington Nationals',
    description: 'Nationals Park requires clear bags up to 16"x16"x8" or small clutch bags up to 5"x7"x¾". Binbox storage available at Right Field and Home Plate Gates.',
  },
  capacity: 41339,
  location: {
    address: '1500 South Capitol Street SE',
    city: 'Washington',
    state: 'DC',
    zip: '20003',
    coordinates: {
      latitude: 38.872778,
      longitude: -77.007222,
    },
    website: 'https://www.mlb.com/nationals/ballpark/information/bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Nationals+Park+Washington+DC&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Nationals_Park_in_2021.jpg/640px-Nationals_Park_in_2021.jpg'
  },
  teams: [
    {
      name: 'Washington Nationals',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Only clear plastic, vinyl or PVC bags not exceeding 16"x16"x8" are permitted (e.g., clear totes, drawstring bags, one-gallon freezer bags). Small non-clear clutch bags up to 5"x7"x¾" are allowed**. Diaper and medical bags may use ADA/Family lanes. Binbox storage is available at Right Field and Home Plate Gates for non-compliant bags (fee required).',
    allowedBags: ['clear', 'clear_plastic', 'clutch', 'fanny_pack','wristlet'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Nationals Park provide bag storage?',
      answer: 'Yes, Binbox storage is available outside Right Field Gate and Home Plate Gate from two hours before first pitch until one hour after last pitch. Medium and large lockers are available for a fee.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Nationals Park?',
      answer: 'The following items are prohibited at Nationals Park:\n\n' +
        '• Metal or glass containers\n' +
        '• Non-compliant food items\n' +
        '• Hard coolers and ice chests\n' +
        '• Backpacks\n' +
        '• Large umbrellas\n' +
        '• Brooms and poles\n' +
        '• Weapons and fireworks\n' +
        '• Camera lenses over 8 inches\n' +
        '• Tripods and selfie sticks\n' +
        '• Animals (except service animals)\n' +
        '• Inflatable items\n' +
        '• Laser pointers\n' +
        '• Baseball bats\n' +
        '• Outside alcohol\n' +
        '• Unauthorized noisemakers\n' +
        '• Wheeled devices\n' +
        '• Drones\n' +
        '• Self-defense sprays\n' +
        '• Toy weapons\n' +
        '• Helmets\n' +
        'Note: Single-serving food items are allowed in approved bags.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Nationals Park?',
      answer: 'Yes, fans with diaper or medical bags may use designated ADA/Family lanes. All bags are subject to search.'
    }
  ],
};