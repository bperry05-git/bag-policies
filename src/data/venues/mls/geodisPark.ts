import type { VenueDetails } from '../../../types/venue';

export const geodisParkVenue: VenueDetails = {
  id: 'geodis-park',
  name: 'GEODIS Park',
  type: 'stadium',
  metadata: {
    title: 'GEODIS Park Bag Policy: Guide + Images | Nashville SC',
    description: 'GEODIS Park requires clear bags up to 12" x 12" x 6" or small non-transparent bags up to 4.5" x 6.5". Bag storage available at North entrance.',
  },
  capacity: 30000,
  location: {
    address: '501 Benton Avenue',
    city: 'Nashville',
    state: 'TN',
    zip: '37204',
    coordinates: {
      latitude: 36.131389,
      longitude: -86.765833,
    },
    website: 'https://geodispark.com/stadium-policies/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=GEODIS+Park+Nashville&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Nashville_SC_vs_Portland_Timbers_by_cornfield948_%2820220705094553%29.jpg/640px-Nashville_SC_vs_Portland_Timbers_by_cornfield948_%2820220705094553%29.jpg'
  },
  teams: [
    {
      name: 'Nashville SC',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: 'Only **clear plastic/vinyl/PVC bags up to 12" x 12" x 6"** permitted, including clear cinch sacks and diaper bags. Non-transparent bags must not exceed **4.5" x 6.5"**. Bag storage available on Benton Avenue between Gates B and C ($fee). Opens 2 hours before event, closes 1.5 hours after.',
    allowedBags: ['clutch', 'wristlet', 'clear', 'clear_plastic',],
    prohibitedBags: ['backpack', 'purse','fanny_pack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does GEODIS Park provide bag storage?',
      answer: 'Yes, bag storage is available for a fee at the North entrance on Benton Avenue between Gates B and C. Service opens 2 hours before events and closes 1.5 hours after. Items must be retrieved same day.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at GEODIS Park?',
      answer: 'The following items are prohibited:\n\n' +
        '• Non-compliant bags\n' +
        '• Outside food and beverages\n' +
        '• Weapons and fireworks\n' +
        '• Cameras with lenses over 6"\n' +
        '• Drones and recording devices\n' +
        '• Noisemakers and horns\n' +
        '• Inflatable items\n' +
        '• Chairs and seat cushions\n' +
        '• Signs larger than 3\' x 5\'\n' +
        '• Poles and selfie sticks\n' +
        '• Umbrellas\n' +
        '• Battery-operated lights\n' +
        '• Identity-concealing masks\n' +
        '• Smoking devices'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at GEODIS Park?',
      answer: 'Yes, exceptions are made for medically necessary items after proper inspection by security personnel. Request assistance at the gate.'
    }
  ],
};