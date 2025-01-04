import type { VenueDetails } from '../../../types/venue';
export const nrgStadiumVenue: VenueDetails = {
  id: 'nrg-stadium',
  name: 'NRG Stadium',
  type: 'stadium',
    metadata: {
   title: 'NRG Stadium Bag Policy: Guides + Images | Houston Texans',
    description: 'NRG Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 72220,
  location: {
    address: '1 NRG Parkway',
    city: 'Houston',
    state: 'TX',
    zip: '77054',
    coordinates: {
      latitude: 29.684722,
      longitude: -95.410833,
    },
    website: 'https://www.nrgpark.com/a-z-guide/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=NRG+Stadium+Houston&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/NRG_Stadium_SBLI.jpg/640px-NRG_Stadium_SBLI.jpg'
  },
  teams: [
    {
      name: 'Houston Texans',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
   policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
   description: 'NRG Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does NRG Stadium provide an area to store luggage?',
      answer: 'NRG Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at NRG Stadium?',
  answer: 'The following items are prohibited at NRG Stadium:\n\n' + 
    '• Weapons and firearms\n' +
    '• Outside food and beverages\n' +
    '• Bags larger than 4.5" x 6.5"\n' +
    '• Flag poles and frisbees\n' +
    '• Beach balls and selfie sticks\n' +
    '• Cameras with lenses over 3"\n' +
    '• Video cameras\n' +
    '• Laser pens\n' +
    '• Fireworks\n' +
    '• Illegal substances\n' +
    '• Battery operated fans\n' +
    '• Noisemakers and air horns\n' +
    '• Whistles and cowbells\n' +
    '• Drones and radio-controlled aircraft\n' +
    '• Seat cushions\n' +
    '• Segways and skateboards\n' +
    '• Hoverboards\n' +
    '• Animals (except service animals)\n' +
    '• Diaper bags\n' +
    '• Any items deemed inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at NRG Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};