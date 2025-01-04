import type { VenueDetails } from '../../../types/venue';

export const q2StadiumVenue: VenueDetails = {
  id: 'q2-stadium',
  name: 'Q2 Stadium',
  type: 'stadium',
  metadata: {
    title: 'Q2 Stadium Bag Policy: Guide + Images | Austin FC',
    description: 'Q2 Stadium prohibits all bags and carriers including clear bags. Only small clutches, medical bags, and childcare bags allowed with screening.',
  },
  capacity: 20738,
  location: {
    address: '10414 McKalla Place',
    city: 'Austin',
    state: 'TX',
    zip: '78758',
    coordinates: {
      latitude: 30.387778,
      longitude: -97.719444,
    },
    website: 'https://www.austinfc.com/stadium/bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Q2+Stadium+Austin&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Austin_FC_VS_FC_Dallas_by_cornfield948_%2820210830150614%29.jpg/640px-Austin_FC_VS_FC_Dallas_by_cornfield948_%2820210830150614%29.jpg'
  },
  teams: [
    {
      name: 'Austin FC',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: 'Prohibits all bags including clear bags. Exceptions after screening: **clutch purses/bags up to 8" x 5" x 1"** (hand-sized), medical bags, and childcare/cultural bags.',
    allowedBags: ['clutch', 'wristlet'],
    prohibitedBags: ['backpack', 'purse', 'tote', 'fanny_pack'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Q2 Stadium provide bag storage?',
      answer: 'No, Q2 Stadium does not provide storage for prohibited bags or items.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Q2 Stadium?',
      answer: 'The following items are prohibited:\n\n' +
        '• All bags except approved small clutches/medical/childcare bags\n' +
        '• Professional cameras and equipment\n' +
        '• Electronic devices (laptops, tablets)\n' +
        '• Outside food and beverages\n' +
        '• Weapons and fireworks\n' +
        '• Noisemakers and instruments (unless approved)\n' +
        '• Signs/flags over 3\'x5\'\n' +
        '• Poles over 5\' length\n' +
        '• Drones and laser pointers\n' +
        '• Seatback cushions\n' +
        '• Tobacco products\n' +
        '• Marketing materials\n' +
        '• Stickers and adhesives'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Q2 Stadium?',
      answer: 'Yes, medical bags are permitted after required security screening.'
    }
  ],
};