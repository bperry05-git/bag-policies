import type { VenueDetails } from '../../../types/venue';
export const paycorStadiumVenue: VenueDetails = {
  id: 'paycor-stadium',
  name: 'Paycor Stadium',
  type: 'stadium',
    metadata: {
   title: 'Paycor Stadium Bag Policy: Guide + Images | Cincinnati Bengals',
    description: 'Paycor Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 65515,
  location: {
    address: '1 Paul Brown Stadium',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45202',
    coordinates: {
      latitude: 39.095444,
      longitude: -84.516039,
    },
    website: 'https://www.bengals.com/stadium/prohibited-items-bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Paycor+Stadium+Cincinnati&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Paul_Brown_Stadium_interior_2017.jpg/640px-Paul_Brown_Stadium_interior_2017.jpg'
  },
  teams: [
    {
      name: 'Cincinnati Bengals',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
   description: 'Paycor Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Paycor Stadium provide an area to store luggage?',
      answer: 'Paycor Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Paycor Stadium?',
  answer: 'The following items are prohibited at Paycor Stadium:\n\n' + 
    '• Alcoholic beverages\n' +
    '• Outside food (except for medical/dietary needs)\n' +
    '• Animals (except service animals)\n' +
    '• Beverage containers (except unopened water)\n' +
    '• Chairs\n' +
    '• Coolers (unless medically required)\n' +
    '• Confetti\n' +
    '• Illegal substances\n' +
    '• Noisemakers\n' +
    '• Obscene or indecent clothing\n' +
    '• Recording equipment\n' +
    '• Segways and motorized scooters\n' +
    '• Sticks, bats, poles, and selfie sticks\n' +
    '• Strollers\n' +
    '• Thermal containers\n' +
    '• Tripods and monopods\n' +
    '• Umbrellas\n' +
    '• Professional cameras\n' +
    '• Video cameras\n' +
    '• Weapons\n' +
    '• Drones and remote controlled aircraft\n' +
    '• Any items deemed dangerous or inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Paycor Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};