import type { VenueDetails } from '../../../types/venue';
export const lucasOilStadiumVenue: VenueDetails = {
  id: 'lucas-oil-stadium',
  name: 'Lucas Oil Stadium',
  type: 'stadium',
    metadata: {
    title: 'Lucas Oil Stadium Bag Policy: Guide + Images | Indianapolis Colts',
    description: 'Lucas Oil Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 67000,
  location: {
    address: '500 South Capitol Avenue',
    city: 'Indianapolis',
    state: 'IN',
    zip: '46225',
    coordinates: {
      latitude: 39.760056,
      longitude: -86.163806,
    },
    website: 'https://www.lucasoilstadium.com/attending-an-event/clear-bag-policy/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Lucas+Oil+Stadium+Indianapolis&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Lucas_Oil_Stadium_panoramic_view_from_south_end_suite_-_WCNA_Oct._2024.jpg/640px-Lucas_Oil_Stadium_panoramic_view_from_south_end_suite_-_WCNA_Oct._2024.jpg'
  },
  teams: [
    {
      name: 'Indianapolis Colts',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
    policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'Lucas Oil Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Lucas Oil Stadium provide an area to store luggage?',
      answer: 'Lucas Oil Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Lucas Oil Stadium?',
  answer: 'The following items are prohibited at Lucas Oil Stadium:\n\n' + 
    '• Weapons or fireworks\n' +
    '• Missile-like objects\n' +
    '• Video cameras (at event discretion)\n' +
    '• Poles or sticks of any kind\n' +
    '• Large purses, bags and backpacks\n' +
    '• Liquor containers, bottles, cans, and coolers\n' +
    '• Outside food and beverages\n' +
    '• View-obstructing objects\n' +
    '• Noisemakers (horns, bells, whistles)\n' +
    '• Bullhorns and megaphones\n' +
    '• Animals (except service animals)\n' +
    '• Disruptive items\n' +
    '• Selfie sticks\n' +
    '• Blankets\n' +
    '• Seat cushions\n' +
    '• Any items deemed dangerous or inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Lucas Oil Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};