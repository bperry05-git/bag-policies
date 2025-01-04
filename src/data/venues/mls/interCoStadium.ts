import type { VenueDetails } from '../../../types/venue';

export const interCoStadiumVenue: VenueDetails = {
  id: 'inter-co-stadium',
  name: 'Inter&Co Stadium',
  type: 'stadium',
  metadata: {
    title: 'Inter&Co Stadium Bag Policy: Guide + Images | Orlando City SC',
    description: 'Inter&Co Stadium recommends no bags. Small bags up to 4.5" x 6.5" or clear totes up to 14" x 14" x 6" are permitted.',
  },
  capacity: 25500,
  location: {
    address: '655 Foundry Street',
    city: 'Orlando',
    state: 'FL',
    zip: '32801',
    coordinates: {
      latitude: 28.541111,
      longitude: -81.389167,
    },
    website: 'https://www.interco-stadium.com/a-z-guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Inter%26Co+Stadium+Orlando&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Orlando_city_soccer_stadium.jpg/640px-Orlando_city_soccer_stadium.jpg'
  },
  teams: [
    {
      name: 'Orlando City SC',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: 'Stadium recommends no bags. **Small bags up to 4.5" x 6.5"** or **clear totes up to 14" x 14" x 6"** are permitted. Promotional cups from Orlando City SC are allowed.',
    allowedBags: ['clutch', 'wristlet', 'clear', 'clear_plastic',],
    prohibitedBags: ['backpack', 'purse','fanny_pack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Inter&Co Stadium provide bag storage?',
      answer: 'No, the stadium does not provide storage for prohibited bags or items.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Inter&Co Stadium?',
      answer: 'The following items are prohibited:\n\n' +
        '• Aerosol cans and pepper spray\n' +
        '• Air horns and noisemakers\n' +
        '• Animals (except service animals)\n' +
        '• Cameras with 6"+ lenses\n' +
        '• Food and beverages\n' +
        '• GoPros and recording devices\n' +
        '• Hard containers and glass\n' +
        '• Laptops\n' +
        '• Laser pointers\n' +
        '• Poles over 6" long\n' +
        '• Recreational equipment\n' +
        '• Metal-back seats\n' +
        '• Signs over 3\' x 5\'\n' +
        '• Strollers\n' +
        '• Umbrellas\n' +
        '• Weapons'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Inter&Co Stadium?',
      answer: 'Yes, exceptions are made for medical and infant needs.'
    }
  ],
};