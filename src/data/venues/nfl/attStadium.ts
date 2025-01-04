import type { VenueDetails } from '../../../types/venue';
export const attStadiumVenue: VenueDetails = {
  id: 'att-stadium',
  name: 'AT&T Stadium',
  type: 'stadium',
    metadata: {
    title: 'AT&T Stadium Bag Policy: Guide + Images | Dallas Cowboys',
    description: 'AT&T Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 80000,
  location: {
    address: '1 AT&T Way',
    city: 'Arlington',
    state: 'TX',
    zip: '76011',
    coordinates: {
      latitude: 32.747778,
      longitude: -97.092778,
    },
    website: 'https://attstadium.com/stadium-info/bags/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=AT%26T+Stadium+Arlington&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Arlington_June_2020_2_%28AT%26T_Stadium%29.jpg/640px-Arlington_June_2020_2_%28AT%26T_Stadium%29.jpg'
  },
  teams: [
    {
      name: 'Dallas Cowboys',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
    policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'AT&T Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does AT&T Stadium provide an area to store luggage?',
      answer: 'AT&T Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at AT&T Stadium?',
  answer: 'The following items are prohibited at AT&T Stadium:\n\n' + 
    '• Smoking (including e-cigarettes and vaporizers)\n' +
    '• Bags not meeting size requirements\n' +
    '• Abusive, foul or disruptive language\n' +
    '• Alcohol\n' +
    '• Animals (except service animals)\n' +
    '• Bottles, cans, thermoses and beverage containers\n' +
    '• Cameras with lens longer than 3″\n' +
    '• Chairs, stools or other seating devices\n' +
    '• Fireworks, firearms and weapons\n' +
    '• Outside food items\n' +
    '• Footballs\n' +
    '• Knives of any length\n' +
    '• Laser pointers\n' +
    '• Noisemakers\n' +
    '• Obscene or indecent clothing\n' +
    '• Seat cushions\n' +
    '• Signs or flags on sticks or poles\n' +
    '• Tripods, monopods and selfie-sticks\n' +
    '• Drones and remote controlled aircraft\n' +
    '• Video cameras and GoPro devices\n' +
    '• Any other items deemed dangerous or inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at AT&T Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};