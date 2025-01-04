import type { VenueDetails } from '../../../types/venue';

export const saputoStadiumVenue: VenueDetails = {
  id: 'saputo-stadium',
  name: 'Saputo Stadium',
  type: 'stadium',
  metadata: {
    title: 'Saputo Stadium Bag Policy: Guide + Images | CF Montréal',
    description: 'Saputo Stadium prohibits backpacks and large bags. Bags must not exceed 14" x 14" x 6".',
  },
  capacity: 19619,
  location: {
    address: '4750 Rue Sherbrooke Est',
    city: 'Montreal',
    state: 'QC',
    zip: 'H1V 3S8',
    coordinates: {
      latitude: 45.563056,
      longitude: -73.552778,
    },
    website: 'https://www.cfmontreal.com/stadium/bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Saputo+Stadium+Montreal&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Stade_Saputo.27.06.12.jpg/640px-Stade_Saputo.27.06.12.jpg'
  },
  teams: [
    {
      name: 'CF Montréal',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: 'Prohibits backpacks, camera bags, large totes, and coolers. All bags must be **smaller than 14" x 14" x 6"**.',
    allowedBags: ['purse', 'fanny_pack', 'clutch'],
    prohibitedBags: ['backpack', 'tote','duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Saputo Stadium provide bag storage?',
      answer: 'No, Saputo Stadium does not provide storage for prohibited bags.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Saputo Stadium?',
      answer: 'The following items are prohibited:\n\n' +
        '• Bags larger than 14" x 14" x 6"\n' +
        '• Weapons and fireworks\n' +
        '• Drones and remote-controlled aircraft\n' +
        '• Outside food and beverages\n' +
        '• Professional cameras (lens > 2.5")\n' +
        '• Laptop computers and tablets\n' +
        '• Noisemakers and megaphones\n' +
        '• Large seat cushions (>15" x 15")\n' +
        '• Umbrellas and selfie sticks\n' +
        '• Laser pointers\n' +
        '• Promotional materials\n' +
        '• Inflammatory clothing/materials'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Saputo Stadium?',
      answer: 'Exceptions may be made for medical necessities with proper documentation.'
    }
  ],
};