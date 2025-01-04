import type { VenueDetails } from '../../../types/venue';

export const gainbridgeFieldhouseVenue: VenueDetails = {
  id: 'gainbridge-fieldhouse',
  name: 'Gainbridge Fieldhouse',
  type: 'arena',
  metadata: {
    title: 'Gainbridge Fieldhouse Bag Policy: Guide + Images | Indiana Pacers',
    description: 'Gainbridge Fieldhouse allows only small clutch style purses no larger than 6" x 9" x 1.5".',
  },
  capacity: 17923,
  location: {
    address: '125 S Pennsylvania St',
    city: 'Indianapolis',
    state: 'IN',
    zip: '46204',
    coordinates: {
      latitude: 39.763889,
      longitude: -86.155556,
    },
    website: 'https://www.gainbridgefieldhouse.com/plan-your-visit/what-to-know-before-you-go',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Gainbridge+Fieldhouse+Indianapolis&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Bankers_Life_Fieldhouse%2C_Indian%C3%A1polis%2C_Estados_Unidos%2C_2012-10-22%2C_DD_02.jpg/640px-Bankers_Life_Fieldhouse%2C_Indian%C3%A1polis%2C_Estados_Unidos%2C_2012-10-22%2C_DD_02.jpg"
  },
  teams: [
    {
      name: 'Indiana Pacers',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {

    description: '**Only small clutch style purses are allowed**. No bags larger than 6" x 9" x 1.5" are permitted.',
    allowedBags: ['clutch','wristlet'],
    prohibitedBags: ['backpack','fanny_pack', 'purse', 'briefcase', 'tote','duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Gainbridge Fieldhouse provide an area to store luggage?',
      answer: 'Gainbridge Fieldhouse does not provide an area to check oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Gainbridge Fieldhouse?',
      answer: 'The following items are prohibited at Gainbridge Fieldhouse:\n\n' +
        '• Alcohol, drugs, illegal substances, or drug paraphernalia\n' +
        '• Audio/Video recorders, professional cameras, tripods\n' +
        '• Backpacks\n' +
        '• Bags larger than 6" x 9" x 1.5"\n' +
        '• Beach balls or any projectiles\n' +
        '• Cans, bottles, coolers, or similar containers\n' +
        '• Clothing with obscene/offensive language or pictures\n' +
        '• Drones\n' +
        '• Fireworks\n' +
        '• Hard-sided bags\n' +
        '• Laser pens/pointers\n' +
        '• Military or tactical style clothing/gear (Active Duty uniforms allowed)\n' +
        '• Masks or full facial covering\n' +
        '• Noisemakers such as air horns\n' +
        '• Objects that obstruct guest views\n' +
        '• Outside food or drinks\n' +
        '• Pepper spray/Mace\n' +
        '• Poles or sticks\n' +
        '• Signs, flags, banners larger than 11" x 17"\n' +
        '• Skateboards/roller blades\n' +
        '• Tripods, monopods, or selfie sticks\n' +
        '• Weapons of any type, including chains, knives, firearms, and spiked jewelry\n' +
        '• Any other item deemed unacceptable by management'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Gainbridge Fieldhouse?',
      answer: 'Medical bags that are essential are permitted but must be inspected by security.'
    }
  ],
};