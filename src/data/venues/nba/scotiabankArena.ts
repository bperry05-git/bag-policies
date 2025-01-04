import type { VenueDetails } from '../../../types/venue';

export const scotiabankArenaVenue: VenueDetails = {
  id: 'scotiabank-arena',
  name: 'Scotiabank Arena',
  type: 'arena',
  metadata: {
    title: 'Scotiabank Arena Bag Policy: Guide + Images | Raptors & Maple Leafs',
    description: 'Scotiabank Arena allows only small bags under 16.5cm x 11.5cm (6.5" x 4.5"). Bag check available for $20.',
  },
  capacity: 19800,
  location: {
    address: '40 Bay Street',
    city: 'Toronto',
    state: 'ON',
    zip: 'M5J 2X2',
    coordinates: {
      latitude: 43.643333,
      longitude: -79.379167,
    },
    website: 'https://www.scotiabankarena.com/plan-your-visit/plan-your-visit-faq/bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Scotiabank+Arena+Toronto&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Scotiabank_Arena_-_2018_%28cropped%29.jpg/640px-Scotiabank_Arena_-_2018_%28cropped%29.jpg"
  },
  teams: [
    {
      name: 'Toronto Raptors',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    },
    {
      name: 'Toronto Maple Leafs',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: '**Only small purses, clutch, or fanny pack type bags smaller than 16.5cm x 11.5cm (6.5" x 4.5") are permitted**. If for any reason (medical or other) a bag is required that does not adhere to the bag policy, entry may be permitted subject to x-ray inspection of the bag and contents. X-ray is available at gates 1,3,5. Bag check will be available for $20 for items that do not fit the size requirement. Bag check is located in the galleria across from Gate 1.',
    allowedBags: ['clutch', 'wristlet'],
    prohibitedBags: ['backpack','purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Scotiabank Arena provide an area to store luggage?',
      answer: 'Yes, bag check is available for $20 for items that do not fit the size requirement. The bag check is located in the galleria across from Gate 1.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Scotiabank Arena?',
      answer: 'The following items are prohibited at Scotiabank Arena:\n\n' +
        '• Bottles\n' +
        '• Cans\n' +
        '• Coolers\n' +
        '• Sticks/flagpoles\n' +
        '• Aerosol cans\n' +
        '• Weapons (including pocket knives)\n' +
        '• Fireworks\n' +
        '• Skateboards\n' +
        '• Rollerblades\n' +
        '• Roller-skates\n' +
        '• Alcohol/outside food or beverage\n' +
        '• Illegal drugs or noxious substances\n' +
        '• Cameras and recording devices (per event restrictions)\n' +
        '• Selfie sticks (including Gimbals)\n' +
        '• Helium balloons\n' +
        '• Stolen tickets\n' +
        '• Bags or luggage\n' +
        '• Horns/noisemakers\n' +
        '• Umbrellas (larger than 12" in length)'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Scotiabank Arena?',
      answer: 'Medical bags that do not meet size requirements may be permitted with X-ray inspection at gates 1, 3, or 5.'
    }
  ],
};