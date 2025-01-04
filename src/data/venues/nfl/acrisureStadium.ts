import type { VenueDetails } from '../../../types/venue';

export const acrisureStadiumVenue: VenueDetails = {
  id: 'acrisure-stadium',
  name: 'Acrisure Stadium',
  type: 'stadium',
    metadata: {
    title: 'Acrisure Stadium Bag Policy: Guide + Images | Pittsburgh Steelers',
    description: 'Acrisure Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 68400,
  location: {
    address: '100 Art Rooney Avenue',
    city: 'Pittsburgh',
    state: 'PA',
    zip: '15212',
    coordinates: {
      latitude: 40.446765,
      longitude: -80.015785,
    },
    website: 'https://acrisurestadium.com/guest-services/clear-bag-policy/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Acrisure+Stadium+Pittsburgh&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Acrisure_Stadium%2C_2023-03-01.jpg/640px-Acrisure_Stadium%2C_2023-03-01.jpg'
  },
  teams: [
    {
      name: 'Pittsburgh Steelers',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
   policies: {
    description: 'Acrisure Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Acrisure Stadium provide an area to store luggage?',
      answer: 'Acrisure Stadium does not provide an area to check oversized bags or luggage.'
    },
{
 id: 'prohibited-items',
 question: 'What items are prohibited at Acrisure Stadium?',
 answer: 'The following items are prohibited at Acrisure Stadium:\n\n' +
   '• Any type of non-clear bag exceeding 4.5" x 6.5" in size, including purses, handbags, camera or binocular cases, backpacks, fanny packs, diaper bags, briefcases, luggage and computer bags\n' +
   '• Apparel or signage displaying profane or abusive language\n' +
   '• Alcoholic beverages\n' +
   '• Balls of any kind, including full-size footballs\n' +
   '• Banners/signs that contain commercial messages, logos, political endorsements\n' +
   '• Banners/signs on poles\n' +
   '• Battery packs filled with loose (AA, C or D) cell batteries\n' +
   '• Cans, coolers of any type, glass bottles or thermoses\n' +
   '• Laser pointers\n' +
   '• Noisemakers\n' +
   '• Selfie Sticks\n' +
   '• Single purpose video cameras or still-photography cameras with a lens longer than 6"\n' +
   '• Strollers or seat cushions\n' +
   '• Weapons/any item that may be deemed to be a projectile\n' +
   '• Any other item deemed dangerous or inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Acrisure Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};