import type { VenueDetails } from '../../../types/venue';
export const mtBankStadiumVenue: VenueDetails = {
  id: 'mt-bank-stadium',
  name: 'M&T Bank Stadium',
  type: 'stadium',
    metadata: {
   title: 'M&T Bank Stadium Bag Policy: Guide + Images | Baltimore Ravens',
    description: 'M&T Bank Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 71008,
  location: {
    address: '1101 Russell Street',
    city: 'Baltimore',
    state: 'MD',
    zip: '21230',
    coordinates: {
      latitude: 39.277881,
      longitude: -76.622639,
    },
    website: 'https://www.baltimoreravens.com/game-day/nfl-bag-policy/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=M%26T+Bank+Stadium+Baltimore&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/M%26T_Bank_Stadium_Aerial_2022.jpg/640px-M%26T_Bank_Stadium_Aerial_2022.jpg'
  },
  teams: [
    {
      name: 'Baltimore Ravens',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
    policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
   description: 'M&T Bank Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does M&T Bank Stadium provide an area to store luggage?',
      answer: 'M&T Bank Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at M&T Bank Stadium?',
  answer: 'The following items are prohibited at M&T Bank Stadium:\n\n' + 
    '• Air horns or horns of any kind\n' +
    '• Artificial noisemakers and cowbells\n' +
    '• Backpacks\n' +
    '• Battery heated clothing or seat cushions\n' +
    '• Beverages of any kind\n' +
    '• Binocular and camera cases\n' +
    '• Bottles and cans\n' +
    '• Camera tripods and monopods\n' +
    '• Containers and flasks\n' +
    '• Coolers and thermoses\n' +
    '• Electronic cigarettes\n' +
    '• Fanny packs\n' +
    '• Flag or banner poles\n' +
    '• Footballs or balls of any kind\n' +
    '• Grocery bags\n' +
    '• Hard foam beverage holders\n' +
    '• Hoverboards\n' +
    '• Laser pointers\n' +
    '• Large purses and tote bags\n' +
    '• Large Ziploc bags (over 1 gallon)\n' +
    '• Thick seat cushions with pockets\n' +
    '• Selfie sticks\n' +
    '• Umbrellas\n' +
    '• Video cameras\n' +
    '• Weapons\n' +
    '• Whistles'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at M&T Bank Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};