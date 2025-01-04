import type { VenueDetails } from '../../../types/venue';

export const shellEnergyStadiumVenue: VenueDetails = {
  id: 'shell-energy-stadium',
  name: 'Shell Energy Stadium',
  type: 'stadium',
  metadata: {
    title: 'Shell Energy Stadium Bag Policy: Guide + Images | Houston Dynamo',
    description: 'Shell Energy Stadium recommends no bags. If necessary, bags must be 8.5" x 5.5" or smaller.',
  },
  capacity: 22039,
  location: {
    address: '2200 Texas Avenue',
    city: 'Houston',
    state: 'TX',
    zip: '77003',
    coordinates: {
      latitude: 29.752222,
      longitude: -95.352222,
    },
    website: 'https://www.houstondynamofc.com/shell-energy-stadium/bag-and-security-policies',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Shell+Energy+Stadium+Houston&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/PNC_Stadium_Skyline_View.jpg/640px-PNC_Stadium_Skyline_View.jpg'
  },
  teams: [
    {
      name: 'Houston Dynamo FC',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: '**Bags must be 8.5" x 5.5" or smaller**. All bags subject to screening. Exceptions for medical needs and childcare.',
    allowedBags: ['clutch', 'wristlet'],
    prohibitedBags: ['purse', 'fanny_pack', 'backpack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Shell Energy Stadium provide bag storage?',
      answer: 'No, the stadium does not provide storage for prohibited bags.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Shell Energy Stadium?',
      answer: 'The following items are prohibited:\n\n' +
        '• Aerosol cans (air horns, sunscreen, etc.)\n' +
        '• Animals (except service dogs/miniature horses)\n' +
        '• Bags larger than 8.5" x 5.5"\n' +
        '• Banners/signs larger than 4\' x 8\'\n' +
        '• Inflatable items and beach balls\n' +
        '• Bikes, skates, and wheeled items\n' +
        '• Chains and studded items\n' +
        '• Tobacco products and smoking\n' +
        '• Inappropriate clothing/items\n' +
        '• Computers and laptops\n' +
        '• Confetti and streamers\n' +
        '• Drones and recording devices\n' +
        '• Flammable liquids and fireworks\n' +
        '• Illegal substances\n' +
        '• Laser pointers\n' +
        '• Noisemakers (horns, drums, etc.)\n' +
        '• Metal/glass containers\n' +
        '• Outside food/beverages\n' +
        '• Unauthorized pamphlets\n' +
        '• Poles and portable heaters\n' +
        '• Seat cushions\n' +
        '• Weapons'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Shell Energy Stadium?',
      answer: 'Yes, exceptions are made for medical needs and guests caring for young children.'
    }
  ],
};