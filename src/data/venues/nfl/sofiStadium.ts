import type { VenueDetails } from '../../../types/venue';
export const sofiStadiumVenue: VenueDetails = {
  id: 'sofi-stadium',
  name: 'SoFi Stadium',
  type: 'stadium',
    metadata: {
    title: 'SoFi Stadium Bag Policy: Guide + Images | LA Rams & Chargers',
    description: 'SoFi Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 70240,
  location: {
    address: '1001 Stadium Drive',
    city: 'Inglewood',
    state: 'CA',
    zip: '90301',
    coordinates: {
      latitude: 33.953333,
      longitude: -118.338889,
    },
    website: 'https://www.sofistadium.com/plan-your-visit/stadium-policies',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=SoFi+Stadium+Inglewood&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/SoFi_Stadium_2023.jpg/640px-SoFi_Stadium_2023.jpg'
  },
  teams: [
    {
      name: 'Los Angeles Rams',
      league: 'NFL',
      sport: 'Football',
      active: true,
    },
    {
      name: 'Los Angeles Chargers',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
  description: 'SoFi Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does SoFi Stadium provide an area to store luggage?',
      answer: 'SoFi Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at SoFi Stadium?',
  answer: 'The following items are prohibited at SoFi Stadium:\n\n' + 
    '• Animals (except service animals)\n' +
    '• Balls, frisbees, or throwable objects\n' +
    '• Hard-shelled football helmets\n' +
    '• Motorcycle and bicycle helmets\n' +
    '• Balloons or inflatable objects\n' +
    '• Stickers and tents\n' +
    '• Umbrellas (except outside)\n' +
    '• Strollers and car seats\n' +
    '• Tablet devices (except for accessibility)\n' +
    '• Wagons of any kind\n' +
    '• Wheeled footwear\n' +
    '• Glass or metal containers\n' +
    '• Hard or soft-sided coolers\n' +
    '• Hard-sided water bottles\n' +
    '• Artificial noisemakers\n' +
    '• Laser pointers\n' +
    '• Battery-operated items\n' +
    '• Rigid-framed seating devices\n' +
    '• Professional cameras\n' +
    '• Cameras with lenses over 6"\n' +
    '• GoPros and selfie sticks\n' +
    '• Computers and laptops\n' +
    '• Drones and remote vehicles\n' +
    '• Weapons and incendiary devices\n' +
    '• Drugs and paraphernalia\n' +
    '• Outside food and beverages'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at SoFi Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};