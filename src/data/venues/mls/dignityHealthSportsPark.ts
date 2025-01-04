import type { VenueDetails } from '../../../types/venue';

export const dignityHealthSportsParkVenue: VenueDetails = {
  id: 'dignity-health-sports-park',
  name: 'Dignity Health Sports Park',
  type: 'stadium',
  metadata: {
    title: 'Dignity Health Sports Park Bag Policy: Guide + Images | LA Galaxy',
    description: 'Dignity Health Sports Park allows clear bags up to 12" x 6" x 12" and small clutch bags up to 4.5" x 6.5".',
  },
  capacity: 27000,
  location: {
    address: '18400 Avalon Boulevard',
    city: 'Carson',
    state: 'CA',
    zip: '90746',
    coordinates: {
      latitude: 33.864444,
      longitude: -118.261111,
    },
    website: 'https://www.dignityhealthsportspark.com/guest-services/bagpolicy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Dignity+Health+Sports+Park+Carson&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/DHSP29MAY2021.png/640px-DHSP29MAY2021.png'
  },
  teams: [
    {
      name: 'LA Galaxy',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: 'Permitted bags: **clear plastic/vinyl bags up to 12" x 6" x 12"**, **one-gallon clear freezer bags**, or **small clutch bags up to 4.5" x 6.5"**. Medical/parental bags under 12" x 6" x 12" require secondary screening. Factory-sealed water bottles (20oz or less, limit 2) allowed.',
    allowedBags: ['clutch', 'wristlet', 'clear', 'clear_plastic',],
    prohibitedBags: ['backpack', 'purse','fanny_pack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Dignity Health Sports Park provide bag storage?',
      answer: 'No, the stadium does not provide storage for prohibited bags or items.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Dignity Health Sports Park?',
      answer: 'The following items are prohibited:\n\n' +
        '• Weapons or objects that could be used as weapons\n' +
        '• Bottles, cans, and coolers\n' +
        '• Oversized bags and non-compliant bags\n' +
        '• Metal/hard plastic costume accessories\n' +
        '• Cushions with pockets/compartments\n' +
        '• Sticks and selfie sticks\n' +
        '• Inflatable objects and beach balls\n' +
        '• Laser pointers and fireworks\n' +
        '• Sports equipment and balls\n' +
        '• Musical instruments\n' +
        '• Noisemakers\n' +
        '• Umbrellas\n' +
        '• Lawn furniture\n' +
        '• Spray bottles\n' +
        '• Rollerblades and scooters'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Dignity Health Sports Park?',
      answer: 'Yes, medically necessary items are permitted after inspection at designated gates. Medical and parental bags under 12" x 6" x 12" require secondary security screening.'
    }
  ],
};