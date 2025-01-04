import type { VenueDetails } from '../../../types/venue';
export const nissanStadiumVenue: VenueDetails = {
  id: 'nissan-stadium',
  name: 'Nissan Stadium',
  type: 'stadium',
  metadata: {
   title: 'Nissan Stadium Bag Policy: Guide + Images | Tennessee Titans',
    description: 'Nissan Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 69143,
  location: {
    address: '1 Titans Way',
    city: 'Nashville',
    state: 'TN',
    zip: '37213',
    coordinates: {
      latitude: 36.166389,
      longitude: -86.771389,
    },
    website: 'https://nissanstadium.com/stadium-policies/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Nissan+Stadium+Nashville&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Nissan_Stadium_2017.jpg/640px-Nissan_Stadium_2017.jpg'
  },
  teams: [
    {
      name: 'Tennessee Titans',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
   description: 'Nissan Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Nissan Stadium provide an area to store luggage?',
      answer: 'Nissan Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Nissan Stadium?',
  answer: 'The following items are prohibited at Nissan Stadium:\n\n' + 
    '• Coolers and containers\n' +
    '• Glass bottles and cans\n' +
    '• Thermoses and hard plastic tumblers\n' +
    '• Metal flasks and cigar cases\n' +
    '• Seat cushions and folding chairs\n' +
    '• Umbrellas\n' +
    '• Strollers and baby seats\n' +
    '• Camera lenses over 6"\n' +
    '• Video cameras and tripods\n' +
    '• Poles and selfie sticks\n' +
    '• Drones and unmanned aircraft\n' +
    '• Horns, whistles and noisemakers\n' +
    '• Weapons of any kind\n' +
    '• Outside food and beverages\n' +
    '• Illegal substances and alcohol\n' +
    '• Animals (except service animals)\n' +
    '• Footballs and inflatable balls\n' +
    '• Hazardous headwear or apparel\n' +
    '• Lights and flashlights\n' +
    '• Inflatable costumes\n' +
    '• Any items causing disruption'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Nissan Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};