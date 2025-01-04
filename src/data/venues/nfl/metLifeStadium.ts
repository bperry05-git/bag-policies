import type { VenueDetails } from '../../../types/venue';

export const metLifeStadiumVenue: VenueDetails = {
  id: 'metlife-stadium',
  name: 'MetLife Stadium',
  type: 'stadium',
    metadata: {
   title: 'MetLife Stadium Bag Policy: Guide + Images | NY Giants & Jets',
    description: 'MetLife Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 82500,
  location: {
    address: '1 MetLife Stadium Drive',
    city: 'East Rutherford',
    state: 'NJ',
    zip: '07073',
    coordinates: {
      latitude: 40.813611,
      longitude: -74.074444,
    },
    website: 'https://www.metlifestadium.com/guest-services/stadium-bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=MetLife+Stadium+East+Rutherford&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/New_Meadowlands_Stadium_Mezz_Corner.jpg/640px-New_Meadowlands_Stadium_Mezz_Corner.jpg'
  },
  teams: [
    {
      name: 'New York Giants',
      league: 'NFL',
      sport: 'Football',
      active: true,
    },
    {
      name: 'New York Jets',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
   policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
   description: 'MetLife Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does MetLife Stadium provide an area to store luggage?',
      answer: 'MetLife Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at MetLife Stadium?',
  answer: 'The following items are prohibited at MetLife Stadium:\n\n' + 
    '• Seat cushions (except for medical needs)\n' +
    '• Glass bottles and coolers of any kind\n' +
    '• Thermoses and ice chests\n' +
    '• Alcohol of any kind\n' +
    '• Banners and signs of any size\n' +
    '• Flags (except at international soccer)\n' +
    '• Umbrellas and strollers\n' +
    '• Laser pointers and balloons\n' +
    '• Noisemakers and air horns\n' +
    '• Balls of any kind\n' +
    '• Drones\n' +
    '• Cameras with lens longer than 6"\n' +
    '• GoPros and recording devices\n' +
    '• Selfie sticks and tripods\n' +
    '• Weapons of any kind\n' +
    '• Animals (except service animals)\n' +
    '• Adult sized football helmets\n' +
    '• Any items deemed inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at MetLife Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};