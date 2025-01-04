import type { VenueDetails } from '../../../types/venue';

export const keyBankCenterVenue: VenueDetails = {
  id: 'key-bank-center',
  name: 'KeyBank Center',
  type: 'arena',
  metadata: {
    title: 'KeyBank Center Bag Policy: Guide + Images | Buffalo Sabres',
    description: 'KeyBank Center prohibits all bags, backpacks and purses. Only clutches up to 4" x 6" x 1.5" are permitted with visual inspection. Medical and diaper bags allowed with screening.',
  },
  capacity: 19070,
  location: {
    address: '1 Seymour H. Knox III Plaza',
    city: 'Buffalo',
    state: 'NY',
    zip: '14203',
    coordinates: {
      latitude: 42.875,
      longitude: -78.876389,
    },
    website: 'https://keybankcenter.com/page/arena-guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=KeyBank+Center+Buffalo&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Exterior_of_KeyBank_Center_in_Buffalo%2C_NY.jpg/640px-Exterior_of_KeyBank_Center_in_Buffalo%2C_NY.jpg'
  },
  teams: [
    {
      name: 'Buffalo Sabres',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: 'All bags, backpacks and purses are prohibited. **Clutches no larger than 4" x 6" x 1.5" are permitted** and will be subject to visual inspection. Exceptions will be made for medically necessary items and diaper bags after they go through a thorough security screening.',
    allowedBags: ['clutch', 'wristlet', 'fanny_pack'],
    prohibitedBags: ['backpack', 'purse', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does KeyBank Center provide bag storage?',
      answer: 'KeyBank Center does not provide storage for prohibited bags or items.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at KeyBank Center?',
      answer: 'The following items are prohibited at KeyBank Center:\n\n' +
        '• Animals (except service animals)\n' +
        '• Aerosol cans\n' +
        '• Alcoholic beverages\n' +
        '• Backpacks\n' +
        '• Chains\n' +
        '• Drones\n' +
        '• Explosives\n' +
        '• Firearms\n' +
        '• Outside food or beverages\n' +
        '• Fuel\n' +
        '• Frisbees and beach balls\n' +
        '• Hazardous chemicals\n' +
        '• Illegal drugs\n' +
        '• Laser pens\n' +
        '• Musical instruments or artificial noisemakers\n' +
        '• Razor type blades\n' +
        '• Self-defense spray\n' +
        '• Selfie sticks\n' +
        '• Studded jewelry\n' +
        '• Weapons of any kind'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at KeyBank Center?',
      answer: 'Yes, exceptions will be made for medically necessary items and diaper bags, but they must go through a thorough security screening.'
    }
  ],
};