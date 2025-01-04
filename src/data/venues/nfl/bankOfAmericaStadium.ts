import type { VenueDetails } from '../../../types/venue';

export const bankOfAmericaStadiumVenue: VenueDetails = {
  id: 'bank-of-america-stadium',
  name: 'Bank of America Stadium',
  type: 'stadium',
    metadata: {
    title: 'Bank of America Stadium Bag Policy: Guide + Images | Panthers & Charlotte FC',
    description: 'Bank of America Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 75523,
  location: {
    address: '800 South Mint Street',
    city: 'Charlotte',
    state: 'NC',
    zip: '28202',
    coordinates: {
      latitude: 35.225833,
      longitude: -80.852778,
    },
    website: 'https://www.panthers.com/stadium/clear-bag',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Bank+of+America+Stadium+Charlotte&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bank_of_america_stadium_2023.jpg/640px-Bank_of_america_stadium_2023.jpg'
  },
  teams: [
    {
      name: 'Carolina Panthers',
      league: 'NFL',
      sport: 'Football',
      active: true,
    },
    {
      name: 'Charlotte FC',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
    policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'Bank of America Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Bank of America Stadium provide an area to store luggage?',
      answer: 'Bank of America Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Bank of America Stadium?',
  answer: 'The following items are prohibited at Bank of America Stadium:\n\n' + 
    '• Alcoholic beverages\n' +
    '• All balls, including footballs of any size\n' +
    '• All non-transparent bags or items\n' +
    '• Baby seats\n' +
    '• Balloons\n' +
    '• Coolers or containers, including cans and bottles\n' +
    '• Explosives\n' +
    '• Fireworks\n' +
    '• Folding chairs\n' +
    '• Food and beverages (except two sealed plastic non-flavored water bottles per person)\n' +
    '• Horns, bells, whistles and other noise makers\n' +
    '• Illegal drugs\n' +
    '• Laptops\n' +
    '• Laser pointers\n' +
    '• Pets (except service animals)\n' +
    '• Seat cushions with covers, zippers, clasps, or pockets\n' +
    '• Selfie Sticks\n' +
    '• Strollers\n' +
    '• Umbrellas\n' +
    '• Video equipment\n' +
    '• Weapons of any kind\n' +
    '• Other items deemed unsafe or disruptive'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Bank of America Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};