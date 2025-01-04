import type { VenueDetails } from '../../../types/venue';
export const everbankStadiumVenue: VenueDetails = {
  id: 'everbank-stadium',
  name: 'EverBank Stadium',
  type: 'stadium',
    metadata: {
    title: 'EverBank Stadium Bag Policy: Guide + Images | Jacksonville Jaguars',
    description: 'EverBank Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 67164,
  location: {
    address: '1 TIAA Bank Field Drive',
    city: 'Jacksonville',
    state: 'FL',
    zip: '32202',
    coordinates: {
      latitude: 30.323889,
      longitude: -81.6375,
    },
    website: 'https://everbankstadium.com/purse-bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=EverBank+Stadium+Jacksonville&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/EverBank1.jpg/640px-EverBank1.jpg'
  },
  teams: [
    {
      name: 'Jacksonville Jaguars',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
    policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'EverBank Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does EverBank Stadium provide an area to store luggage?',
      answer: 'EverBank Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at EverBank Stadium?',
  answer: 'The following items are prohibited at EverBank Stadium:\n\n' + 
    '• Cameras with detachable lenses or lenses longer than six inches\n' +
    '• Clothing with profane or obscene language/content\n' +
    '• Coolers or containers (except current season Jaguars souvenir cup)\n' +
    '• Outside beverages (except 1 sealed water bottle 16.9 oz or less)\n' +
    '• Drones or unmanned aerial vehicles\n' +
    '• Inflatables, loungers and floatation devices\n' +
    '• Knives, guns and weapons (including toys/replicas)\n' +
    '• Laser pointers\n' +
    '• Laptop computers\n' +
    '• Noise makers, whistles, and air horns\n' +
    '• Non-lethal weapons and chemical agents\n' +
    '• Pets (except service animals)\n' +
    '• Seat cushions\n' +
    '• Signs or Banners larger than 2\' x 3\'\n' +
    '• Sticks or poles (including selfie sticks)\n' +
    '• Strollers or Infant carriers\n' +
    '• Tobacco Products\n' +
    '• Umbrellas\n' +
    '• Video equipment and tape recorders\n' +
    '• Any item deemed inappropriate by management'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at EverBank Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};