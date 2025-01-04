import type { VenueDetails } from '../../../types/venue';
export const raymondJamesStadiumVenue: VenueDetails = {
  id: 'raymond-james-stadium',
  name: 'Raymond James Stadium',
  type: 'stadium',
    metadata: {
   title: 'Raymond James Stadium Bag Policy: Guide + Images | Tampa Bay Bucs',
    description: 'Raymond James Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 65618,
  location: {
    address: '4201 North Dale Mabry Highway',
    city: 'Tampa',
    state: 'FL',
    zip: '33607',
    coordinates: {
      latitude: 27.975833,
      longitude: -82.503333,
    },
    website: 'https://raymondjamesstadium.com/stadium-policies',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Raymond+James+Stadium+Tampa&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Raymond_James_Stadium02.JPG/640px-Raymond_James_Stadium02.JPG'
  },
  teams: [
    {
      name: 'Tampa Bay Buccaneers',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
   policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
   description: 'Raymond James Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Raymond James Stadium provide an area to store luggage?',
      answer: 'Raymond James Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Raymond James Stadium?',
  answer: 'The following items are prohibited at Raymond James Stadium:\n\n' + 
    '• Aerosol or spray bottles of sunscreen\n' +
    '• Items that could be used as missiles\n' +
    '• Cameras longer than 12 inches\n' +
    '• Camera bags and binocular cases\n' +
    '• Cans and bottles\n' +
    '• Coolers\n' +
    '• Fanny packs\n' +
    '• Fireworks\n' +
    '• Outside food and drinks\n' +
    '• Glass containers\n' +
    '• Horns, lasers, and noisemakers\n' +
    '• Illegal drugs\n' +
    '• Non-compliant bags (over 4.5" x 6.5")\n' +
    '• Pets (except service animals)\n' +
    '• Recreational balls\n' +
    '• Seat cushions\n' +
    '• Smoking and tobacco products\n' +
    '• Sticks, poles, and selfie sticks\n' +
    '• Strollers\n' +
    '• Umbrellas\n' +
    '• Drones and unmanned aircraft\n' +
    '• Video cameras and GoPros\n' +
    '• Weapons\n' +
    '• Any items deemed inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Raymond James Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};