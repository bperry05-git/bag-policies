import type { VenueDetails } from '../../../types/venue';

export const bmoStadiumVenue: VenueDetails = {
  id: 'bmo-stadium',
  name: 'BMO Stadium',
  type: 'stadium',
  metadata: {
    title: 'BMO Stadium Bag Polic: Guide + Images | LAFC',
    description: 'BMO Stadium enforces a clear bag only policy. Clear bags up to 12" x 6" x 12" or one-gallon clear storage bags are permitted.',
  },
  capacity: 22000,
  location: {
    address: '3939 South Figueroa Street',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90037',
    coordinates: {
      latitude: 34.012778,
      longitude: -118.284722,
    },
    website: 'https://bmostadium.com/a-z-guide-post/clear-bag-policy/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=BMO+Stadium+Los+Angeles&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/LAFC_vs_Philadelphia_Union_%282018%29_by_Subashwilfred_%2820180630233148%29.jpg/640px-LAFC_vs_Philadelphia_Union_%282018%29_by_Subashwilfred_%2820180630233148%29.jpg'
  },
  teams: [
    {
      name: 'Los Angeles FC',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: '**BMO Stadium has a Clear Bag Only Policy.** Permitted bags: **clear plastic, vinyl, or PVC bags up to 12" x 6" x 12"** or **one-gallon clear plastic storage bags**. Non-clear bags including small clutches are NOT allowed. Medical exceptions with approval. Blankets and jackets permitted but subject to search.',
    allowedBags: ['clear', 'clear_plastic'],
    prohibitedBags: ['clutch','fanny_pack','backpack', 'purse', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does BMO Stadium provide bag storage?',
      answer: 'BMO Stadium does not provide storage for prohibited bags or items.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at BMO Stadium?',
      answer: 'The following items are prohibited:\n\n' +
        '• Non-clear bags of any kind\n' +
        '• Alcoholic beverages and illegal drugs\n' +
        '• Outside food and beverages\n' +
        '• Professional cameras and recording equipment\n' +
        '• Weapons and fireworks\n' +
        '• Glass containers and flasks\n' +
        '• Laser pointers\n' +
        '• Coolers\n' +
        '• Noise makers and air horns\n' +
        '• Balloons and beach balls\n' +
        '• Frisbees and projectiles\n' +
        '• Skateboards and bicycles\n' +
        '• Laptops and tablets\n' +
        '• Drones\n' +
        '• Any items deemed dangerous or inappropriate'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at BMO Stadium?',
      answer: 'Yes, exceptions are made for medically necessary items after proper inspection and Stadium Management approval.'
    }
  ],
};