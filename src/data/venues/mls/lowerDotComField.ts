import type { VenueDetails } from '../../../types/venue';

export const lowerDotComFieldVenue: VenueDetails = {
  id: 'lower-dot-com-field',
  name: 'Lower.com Field',
  type: 'stadium',
  metadata: {
    title: 'Lower.com Field Bag Policy: Guide + Images | Columbus Crew',
    description: 'Lower.com Field has a strict no-bag policy with exceptions for small bags up to 5" x 8" x 1", diaper bags, and medical bags.',
  },
  capacity: 20371,
  location: {
    address: '96 Columbus Crew Way',
    city: 'Columbus',
    state: 'OH',
    zip: '43215',
    coordinates: {
      latitude: 39.968889,
      longitude: -83.017222,
    },
    website: 'https://lowerfieldcbus.com/know-before-you-go/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Lower.com+Field+Columbus&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Opening_Match_at_Lower.com_Field.jpg/640px-Opening_Match_at_Lower.com_Field.jpg'
  },
  teams: [
    {
      name: 'Columbus Crew',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: 'No bags allowed except: **small bags up to 5" x 8" x 1"**, medical bags, and diaper bags. Medical and childcare needs permitted with a single bag.',
    allowedBags: ['clutch', 'wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack','tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Lower.com Field provide bag storage?',
      answer: 'No, the stadium does not provide storage for prohibited bags.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Lower.com Field?',
      answer: 'The following items are prohibited:\n\n' +
        '• Aerosol containers\n' +
        '• Projectiles\n' +
        '• Outside food and beverages\n' +
        '• Drones and hoverboards\n' +
        '• Fireworks and flares\n' +
        '• Musical instruments (except in Nordecke)\n' +
        '• Professional cameras and equipment\n' +
        '• Laptops and tablets\n' +
        '• Metal-back seat cushions\n' +
        '• Weapons of any kind\n' +
        '• Noisemakers (except vuvuzelas)\n' +
        '• Inflated balls\n' +
        '• Laser pointers\n' +
        '• Selfie sticks'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Lower.com Field?',
      answer: 'Yes, guests with medical needs are permitted to carry a single bag into the stadium.'
    }
  ],
};