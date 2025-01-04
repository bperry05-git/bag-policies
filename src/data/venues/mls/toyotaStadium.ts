import type { VenueDetails } from '../../../types/venue';

export const toyotaStadiumVenue: VenueDetails = {
  id: 'toyota-stadium',
  name: 'Toyota Stadium',
  type: 'stadium',
  metadata: {
    title: 'Toyota Stadium Bag Policy: Guide + Images | FC Dallas',
    description: 'Toyota Stadium allows clear bags up to 14" x 6" x 14", small clutches up to 5.5" x 8.5", and clear cinch/fanny packs under 14" x 16".',
  },
  capacity: 20500,
  location: {
    address: '9200 World Cup Way',
    city: 'Frisco',
    state: 'TX',
    zip: '75033',
    coordinates: {
      latitude: 33.154444,
      longitude: -96.835278,
    },
    website: 'https://www.fcdallas.com/stadium/clear-bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Toyota+Stadium+Frisco&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Toyota_Stadium_Night_Game.jpg/640px-Toyota_Stadium_Night_Game.jpg'
  },
  teams: [
    {
      name: 'FC Dallas',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: 'Permitted: **clear bags up to 14" x 6" x 14"**, **small clutches up to 5.5" x 8.5"**, **clear cinch/fanny packs under 14" x 16"**, and **one-gallon freezer bags**. Email CustomerService@FCDallas.com for medical exceptions.',
    allowedBags: ['clear', 'clear_plastic', 'clutch', 'wristlet'],
    prohibitedBags: ['purse', 'backpack', 'fanny_pack','tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Toyota Stadium provide bag storage?',
      answer: 'No, Toyota Stadium does not provide storage for prohibited bags.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Toyota Stadium?',
      answer: 'The following items are prohibited:\n\n' +
        '• Aerosol cans and pressurized containers\n' +
        '• Animals (except service dogs)\n' +
        '• Selfie sticks and drones\n' +
        '• Inflatable items\n' +
        '• Banners over 3\' x 5\'\n' +
        '• Bikes and helmets\n' +
        '• Chains and studded items\n' +
        '• Offensive clothing\n' +
        '• Fireworks and flammables\n' +
        '• Laser pointers\n' +
        '• Noisemakers\n' +
        '• Face masks (age 13+ restricted)\n' +
        '• Outside food/beverages\n' +
        '• Seat cushions with bags\n' +
        '• Umbrellas\n' +
        '• Weapons and hoverboards'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Toyota Stadium?',
      answer: 'Yes, medically necessary items permitted with prior approval. Email CustomerService@FCDallas.com for clearance.'
    }
  ],
};