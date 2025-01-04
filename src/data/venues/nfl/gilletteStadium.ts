import type { VenueDetails } from '../../../types/venue';

export const gilletteStadiumVenue: VenueDetails = {
  id: 'gillette-stadium',
  name: 'Gillette Stadium',
  type: 'stadium',
    metadata: {
    title: 'Gillette Stadium Bag Policy: Guide + Images | Patriots & Revolution',
    description: 'Gillette Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 65878,
  location: {
    address: '1 Patriot Place',
    city: 'Foxborough',
    state: 'MA',
    zip: '02035',
    coordinates: {
      latitude: 42.090944,
      longitude: -71.264344,
    },
    website: 'https://www.gillettestadium.com/bag-policy/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Gillette+Stadium+Foxborough&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Gillette_Stadium_%28Top_View%29.jpg/640px-Gillette_Stadium_%28Top_View%29.jpg'
  },
  teams: [
    {
      name: 'New England Patriots',
      league: 'NFL',
      sport: 'Football',
      active: true,
    },
    {
      name: 'New England Revolution',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
    policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'Gillette Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Gillette Stadium provide an area to store luggage?',
      answer: 'Gillette Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Gillette Stadium?',
  answer: 'The following items are prohibited at Gillette Stadium:\n\n' + 
    '• Alcoholic beverages and illegal drugs\n' +
    '• Outside food and drinks\n' +
    '• Drones\n' +
    '• Professional cameras, flash photography, tripods, and monopods\n' +
    '• Video and audio recorders\n' +
    '• Glass, plastic, metal containers, and flasks\n' +
    '• Fireworks and flares\n' +
    '• Laser pointers\n' +
    '• Coolers (hard or soft side)\n' +
    '• Knives and weapons of any kind\n' +
    '• Baby seats or carriers\n' +
    '• Artificial noise makers (air horns, drums, whistles)\n' +
    '• Glitter and confetti\n' +
    '• Balloons\n' +
    '• Strollers\n' +
    '• Selfie sticks\n' +
    '• Beach balls and inflatable items\n' +
    '• Chairs and seat cushions\n' +
    '• Laptop and tablet computers\n' +
    '• Large umbrellas\n' +
    '• Backpacks and bags (except those meeting size requirements)\n' +
    '• Any other items deemed dangerous or inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Gillette Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};