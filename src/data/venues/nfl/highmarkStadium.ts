import type { VenueDetails } from '../../../types/venue';
export const highmarkStadiumVenue: VenueDetails = {
  id: 'highmark-stadium',
  name: 'Highmark Stadium',
  type: 'stadium',
    metadata: {
    title: 'Highmark Stadium Bag Policy: Guide + Images | Buffalo Bills',
    description: 'Highmark Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 71608,
  location: {
    address: '1 Bills Drive',
    city: 'Orchard Park',
    state: 'NY',
    zip: '14127',
    coordinates: {
      latitude: 42.773611,
      longitude: -78.786944,
    },
    website: 'https://www.buffalobills.com/stadium/gate-entry-and-permitted-items',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Highmark+Stadium+Orchard+Park&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Highmark_Stadium%2C_autumn_2022.jpg/640px-Highmark_Stadium%2C_autumn_2022.jpg'
  },
  teams: [
    {
      name: 'Buffalo Bills',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
   policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'Highmark Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Highmark Stadium provide an area to store luggage?',
      answer: 'Highmark Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Highmark Stadium?',
  answer: 'The following items are prohibited at Highmark Stadium:\n\n' + 
    '• Tobacco products (cigarettes, e-cigarettes, chewing tobacco)\n' +
    '• Drones and Unmanned Aircraft Devices\n' +
    '• Alcoholic beverages and illegal substances\n' +
    '• Animals (except service animals)\n' +
    '• Clutch bags exceeding 4.5" x 6.5"\n' +
    '• Beach balls, footballs, and inflatable devices\n' +
    '• Bottles, cans, thermoses, and beverage containers\n' +
    '• Cameras with lenses longer than six inches\n' +
    '• Clothing with profane language or obscene graphics\n' +
    '• Fireworks\n' +
    '• Headwear that may impede views\n' +
    '• Laptop computers and radios\n' +
    '• Laser pointers and noisemakers\n' +
    '• Unapproved promotional materials\n' +
    '• Large seat cushions (over 15" x 15")\n' +
    '• Selfie sticks, sticks or poles\n' +
    '• Strollers\n' +
    '• Umbrellas\n' +
    '• Video cameras, monopods and tripods\n' +
    '• Weapons of any kind\n' +
    '• Any item deemed dangerous or inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Highmark Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};