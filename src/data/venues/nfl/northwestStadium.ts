import type { VenueDetails } from '../../../types/venue';
export const northwestStadiumVenue: VenueDetails = {
  id: 'northwest-stadium',
  name: 'Northwest Stadium',
  type: 'stadium',
    metadata: {
   title: 'Northwest Stadium Bag Policy: Guide + Images | Washington Commanders',
    description: 'Northwest Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 67612,
  location: {
    address: '1600 FedEx Way',
    city: 'Landover',
    state: 'MD',
    zip: '20785',
    coordinates: {
      latitude: 38.907778,
      longitude: -76.864444,
    },
    website: 'https://www.commanders.com/stadium/clear-bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Northwest+Stadium+Landover&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/FedExField_%28now_Northwest_Stadium%29.webp/640px-FedExField_%28now_Northwest_Stadium%29.webp.png'
  },
  teams: [
    {
      name: 'Washington Commanders',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
   description: 'Northwest Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Northwest Stadium provide an area to store luggage?',
      answer: 'Northwest Stadium does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Northwest Stadium?',
  answer: 'The following items are prohibited at Northwest Stadium:\n\n' + 
    '• Abusive or vulgar language on clothing\n' +
    '• Aerosol cans\n' +
    '• Alcohol\n' +
    '• Animals (except certified service animals)\n' +
    '• Dangerous items (rope, hammer, nails)\n' +
    '• Audio and video recorders\n' +
    '• GoPros, selfie sticks, and tripods\n' +
    '• Non-compliant bags\n' +
    '• Cameras with detachable lenses over 5"\n' +
    '• Containers and bottles\n' +
    '• Footballs (unless deflated)\n' +
    '• Folding chairs\n' +
    '• Outside food and beverages\n' +
    '• LED lights and laser pointers\n' +
    '• Lithium battery powered clothing\n' +
    '• Native American headdresses and face paint\n' +
    '• Noisemakers and instruments\n' +
    '• Seat cushions with zippers\n' +
    '• Strollers (except suites)\n' +
    '• Signs on poles\n' +
    '• Umbrellas\n' +
    '• Drones\n' +
    '• Weapons and illegal drugs\n' +
    '• Any items deemed inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Northwest Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};