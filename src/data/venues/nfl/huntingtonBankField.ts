import type { VenueDetails } from '../../../types/venue';
export const huntingtonBankFieldVenue: VenueDetails = {
  id: 'huntington-bank-field',
  name: 'Huntington Bank Field',
  type: 'stadium',
    metadata: {
    title: 'Huntington Bank Field Bag Policy: Guide + Images | Cleveland Browns',
    description: 'Huntington Bank Field\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 67895,
  location: {
    address: '100 Alfred Lerner Way',
    city: 'Cleveland',
    state: 'OH',
    zip: '44114',
    coordinates: {
      latitude: 41.506111,
      longitude: -81.699444,
    },
    website: 'https://huntingtonbankfield.com/know-before-you-go/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Huntington+Bank+Field+Cleveland&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cleveland_Browns_Stadium_2012.jpg/640px-Cleveland_Browns_Stadium_2012.jpg'
  },
  teams: [
    {
      name: 'Cleveland Browns',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
   policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'Huntington Bank Field, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Huntington Bank Field provide an area to store luggage?',
      answer: 'Huntington Bank Field does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Huntington Bank Field?',
  answer: 'The following items are prohibited at Huntington Bank Field:\n\n' + 
    '• Firearms and weapons of any kind\n' +
    '• Confetti or glitter\n' +
    '• Illegal substances, smoking, or vaping\n' +
    '• Seat cushions\n' +
    '• Coolers or ice chests (including small soft sided)\n' +
    '• Noisemaking devices (horns, bells, whistles)\n' +
    '• Signs or clothing with vulgar language or political content\n' +
    '• Binoculars case\n' +
    '• Aerosol cans\n' +
    '• Beach balls and balloons\n' +
    '• Drones\n' +
    '• Plastic bottles\n' +
    '• Sticks, poles, bats, clubs\n' +
    '• Alcoholic beverages\n' +
    '• Fireworks or missile-like objects\n' +
    '• Knives\n' +
    '• Strollers\n' +
    '• Animals (except certified service animals)\n' +
    '• Cans, bottles, or boxed liquids\n' +
    '• Footballs\n' +
    '• Laser lights\n' +
    '• Thermoses\n' +
    '• Commercial audio/video equipment\n' +
    '• Flying disks\n' +
    '• Mace or pepper spray\n' +
    '• Umbrellas'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Huntington Bank Field?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};