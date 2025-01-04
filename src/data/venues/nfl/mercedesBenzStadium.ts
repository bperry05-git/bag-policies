import type { VenueDetails } from '../../../types/venue';

export const mercedesBenzStadiumVenue: VenueDetails = {
  id: 'mercedes-benz-stadium',
  name: 'Mercedes-Benz Stadium',
  type: 'stadium',
    metadata: {
   title: 'Mercedes-Benz Stadium Bag Policy: Guide + Images | Falcons & ATL United',
    description: 'Mercedes-Benz Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 71000,
  location: {
    address: '1 AMB Drive NW',
    city: 'Atlanta',
    state: 'GA',
    zip: '30313',
    coordinates: {
      latitude: 33.755556,
      longitude: -84.400833,
    },
    website: 'https://www.mercedesbenzstadium.com/guidelines',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Mercedes-Benz+Stadium+Atlanta&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Mercedes-Benz_Stadium%2C_July_2018.jpg/640px-Mercedes-Benz_Stadium%2C_July_2018.jpg'
  },
  teams: [
    {
      name: 'Atlanta Falcons',
      league: 'NFL',
      sport: 'Football',
      active: true,
    },
    {
      name: 'Atlanta United FC',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
    policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
   description: 'Mercedes-Benz Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Mercedes-Benz Stadium provide an area to store luggage?',
      answer: 'Mercedes-Benz Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Mercedes-Benz Stadium?',
  answer: 'The following items are prohibited at Mercedes-Benz Stadium:\n\n' + 
    '• Abusive, foul or disruptive language\n' +
    '• Alcohol, illegal drugs or chemicals\n' +
    '• Animals (except service animals)\n' +
    '• Aerosol cans or pressurized containers\n' +
    '• Non-compliant bags\n' +
    '• Loose batteries\n' +
    '• Bottles, cans, and glass containers\n' +
    '• Cameras with lens longer than 6″\n' +
    '• Chairs and seating devices\n' +
    '• Suspicious devices\n' +
    '• Outside food\n' +
    '• Hover-boards\n' +
    '• Inflated balls and projectiles\n' +
    '• Knives of any length\n' +
    '• Large umbrellas (over 33 inches)\n' +
    '• Laser pointers and lights\n' +
    '• Identity-concealing masks\n' +
    '• Noisemakers and horns\n' +
    '• Pyrotechnics and fireworks\n' +
    '• Drones\n' +
    '• Large signs or flags\n' +
    '• Thermoses and cups\n' +
    '• Tripods and selfie sticks\n' +
    '• Weapons of any kind'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Mercedes-Benz Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};