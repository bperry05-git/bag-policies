import type { VenueDetails } from '../../../types/venue';

export const paypalParkVenue: VenueDetails = {
  id: 'paypal-park',
  name: 'PayPal Park',
  type: 'stadium',
  metadata: {
    title: 'PayPal Park Bag Policy: Guide + Images | San Jose Earthquakes',
    description: 'PayPal Park allows clear backpacks and drawstring bags up to 14" x 14" x 6". Non-clear backpacks are prohibited.',
  },
  capacity: 18000,
  location: {
    address: '1123 Coleman Avenue',
    city: 'San Jose',
    state: 'CA',
    zip: '95110',
    coordinates: {
      latitude: 37.351667,
      longitude: -121.925,
    },
    website: 'https://www.sjearthquakes.com/paypalpark/guest-services',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=PayPal+Park+San+Jose&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Avaya_Stadium_2016_screenshot_03.jpg/640px-Avaya_Stadium_2016_screenshot_03.jpg'
  },
  teams: [
    {
      name: 'San Jose Earthquakes',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: '**Clear backpacks and drawstring bags up to 14" x 14" x 6"** are permitted. Non-clear backpacks, including mini purse backpacks, are prohibited. All bags subject to search.',
    allowedBags: ['clutch','purse','fanny_pack'],
    prohibitedBags: ['backpack', 'tote','duffel',],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does PayPal Park provide bag storage?',
      answer: 'No, the stadium does not provide storage for prohibited bags.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at PayPal Park?',
      answer: 'The following items are prohibited:\n\n' +
        '• Non-clear backpacks\n' +
        '• Bags exceeding 14" x 14" x 6"\n' +
        '• Outside food and beverages\n' +
        '• Professional camera equipment\n' +
        '• Drones\n' +
        '• Strollers and car seats\n' +
        '• Umbrellas and selfie sticks\n' +
        '• Metal/glass containers\n' +
        '• Fireworks and incendiary devices\n' +
        '• Streamers and confetti\n' +
        '• Noisemakers and instruments\n' +
        '• Laser pointers\n' +
        '• Signs larger than 3\' x 5\'\n' +
        '• Battery operated fans'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at PayPal Park?',
      answer: 'Medical needs are accommodated with proper documentation and inspection.'
    }
  ],
};