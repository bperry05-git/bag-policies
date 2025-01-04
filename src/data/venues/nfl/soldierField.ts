import type { VenueDetails } from '../../../types/venue';
export const soldierFieldVenue: VenueDetails = {
  id: 'soldier-field',
  name: 'Soldier Field',
  type: 'stadium',
    metadata: {
    title: 'Soldier Field Bag Policy: Guide + Images | Chicaog Bears & Fire',
    description: 'Soldier Field\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 61500,
  location: {
    address: '1410 Special Olympics Drive',
    city: 'Chicago',
    state: 'IL',
    zip: '60605',
    coordinates: {
      latitude: 41.862306,
      longitude: -87.616672,
    },
    website: 'https://www.soldierfield.com/plan-your-visit/bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Soldier+Field+Chicago&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Soldier_Field_W_2022.jpg/640px-Soldier_Field_W_2022.jpg'
  },
  teams: [
    {
      name: 'Chicago Bears',
      league: 'NFL',
      sport: 'Football',
      active: true,
    },
    {
      name: 'Chicago Fire FC',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
  description: 'Soldier Field, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Soldier Field provide an area to store luggage?',
      answer: 'Soldier Field provides a stroller check at Gate 10, but does not provide storage for other items.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Soldier Field?',
  answer: 'The following items are prohibited at Soldier Field:\n\n' + 
    '• Weapons or firearms of any kind\n' +
    '• Alcoholic beverages and powdered alcohol\n' +
    '• Seat cushions with zippered covers or pockets\n' +
    '• Balloons and beach balls\n' +
    '• Cameras with lenses over 6"\n' +
    '• Cans, bottles, and beverage containers\n' +
    '• Offensive clothing or view-blocking signs\n' +
    '• Confetti\n' +
    '• Fireworks and smoke bombs\n' +
    '• Illegal drugs\n' +
    '• Animals (except service animals)\n' +
    '• Laser pens and pointers\n' +
    '• Noisemaking devices\n' +
    '• Poles and selfie sticks\n' +
    '• Strollers (can be checked at Gate 10)\n' +
    '• Signs, banners, and flags\n' +
    '• Umbrellas\n' +
    '• Video cameras\n' +
    '• Wheeled footwear and skateboards\n' +
    '• Hoverboards and Segways\n' +
    '• Aerosol cans\n' +
    '• Smoking and tobacco products\n' +
    '• Drones\n' +
    '• Coolers and ice chests\n' +
    '• Any items deemed inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Soldier Field?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};