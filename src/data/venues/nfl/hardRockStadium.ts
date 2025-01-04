import type { VenueDetails } from '../../../types/venue';
export const hardRockStadiumVenue: VenueDetails = {
  id: 'hard-rock-stadium',
  name: 'Hard Rock Stadium',
  type: 'stadium',
    metadata: {
    title: 'Hard Rock Stadium Bag Policy: Guide + Images | Miami Dolphins',
    description: 'Hard Rock Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 65326,
  location: {
    address: '347 Don Shula Drive',
    city: 'Miami Gardens',
    state: 'FL',
    zip: '33056',
    coordinates: {
      latitude: 25.958056,
      longitude: -80.238889,
    },
    website: 'https://www.hardrockstadium.com/stadium-policy/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Hard+Rock+Stadium+Miami+Gardens&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Hard_Rock_Stadium.jpg/640px-Hard_Rock_Stadium.jpg'
  },
  teams: [
    {
      name: 'Miami Dolphins',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
   policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'Hard Rock Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Hard Rock Stadium provide an area to store luggage?',
      answer: 'Hard Rock Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Hard Rock Stadium?',
  answer: 'The following items are prohibited at Hard Rock Stadium:\n\n' + 
    '• Aerosol cans (mace, pepper spray or sunscreen)\n' +
    '• Alcohol of any kind\n' +
    '• Animals (except service animals or service animals in training)\n' +
    '• Flagpoles\n' +
    '• Cigarettes or electronic smoking devices\n' +
    '• Computers or tablets larger than 12" x 2" x 12"\n' +
    '• Fireworks, flares, explosives, or ammunition\n' +
    '• Glass bottles, cans, coolers, thermoses, or ice chests\n' +
    '• Purses or bags exceeding 12" x 6" x 12"\n' +
    '• Seat cushions (except for medical needs)\n' +
    '• Video cameras, monopods, tripods\n' +
    '• Professional cameras with telephoto lenses\n' +
    '• Selfie Sticks\n' +
    '• Umbrellas\n' +
    '• Strollers\n' +
    '• Laser pointers\n' +
    '• Weapons or projectiles\n' +
    '• Any item deemed inappropriate by management'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Hard Rock Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};