import type { VenueDetails } from '../../../types/venue';
export const stateFarmStadiumVenue: VenueDetails = {
  id: 'state-farm-stadium',
  name: 'State Farm Stadium',
  type: 'stadium',
    metadata: {
    title: 'State Farm Stadium Bag Policy: Guide + Images | AZ Cardinals',
    description: 'State Farm Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 63400,
  location: {
    address: '1 Cardinals Drive',
    city: 'Glendale',
    state: 'AZ',
    zip: '85305',
    coordinates: {
      latitude: 33.5275,
      longitude: -112.2625,
    },
    website: 'https://www.statefarmstadium.com/clear-bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=State+Farm+Stadium+Glendale&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/University_of_Phoenix_Stadium_aerial.jpg/640px-University_of_Phoenix_Stadium_aerial.jpg'
  },
  teams: [
    {
      name: 'Arizona Cardinals',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
  description: 'State Farm Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does State Farm Stadium provide an area to store luggage?',
      answer: 'State Farm Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at State Farm Stadium?',
  answer: 'The following items are prohibited at State Farm Stadium:\n\n' + 
    '• Aerosol cans\n' +
    '• Alcohol\n' +
    '• Animals (except service animals)\n' +
    '• Non-compliant bags\n' +
    '• Balloons\n' +
    '• Large banners (over 3\' x 2\')\n' +
    '• Outside beverages (except one sealed water bottle)\n' +
    '• Glass bottles and containers\n' +
    '• Professional cameras (lenses over 8")\n' +
    '• Chewing tobacco\n' +
    '• Obscene clothing\n' +
    '• Coolers\n' +
    '• E-cigarettes and vapes\n' +
    '• Fireworks\n' +
    '• Outside food (except for young children)\n' +
    '• Footballs and beach balls\n' +
    '• GoPro cameras\n' +
    '• Illegal drugs and marijuana\n' +
    '• Laptop computers\n' +
    '• Laser pointers\n' +
    '• Tripods and monopods\n' +
    '• Noisemakers\n' +
    '• Poles and selfie sticks\n' +
    '• Non-compliant seat cushions\n' +
    '• Recreational vehicles\n' +
    '• Large umbrellas\n' +
    '• Drones\n' +
    '• Video cameras\n' +
    '• Weapons\n' +
    '• Any items deemed inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at State Farm Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};