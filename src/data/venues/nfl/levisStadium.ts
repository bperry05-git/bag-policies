import type { VenueDetails } from '../../../types/venue';
export const levisStadiumVenue: VenueDetails = {
  id: 'levis-stadium',
  name: "Levi's Stadium",
  type: 'stadium',
    metadata: {
    title: 'Levi\'s Stadium Field Bag Policy: Guide + Images | SF 49ers',
    description: 'Levi\'s Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 68500,
  location: {
    address: '4900 Marie P DeBartolo Way',
    city: 'Santa Clara',
    state: 'CA',
    zip: '95054',
    coordinates: {
      latitude: 37.403,
      longitude: -121.97,
    },
    website: 'https://www.levisstadium.com/bagpolicy/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Levis+Stadium+Santa+Clara&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/San_Francisco_49ers_vs._Philadelphia_Eagles_at_Levi%27s_Stadium_%2820140929201311%29.jpg/640px-San_Francisco_49ers_vs._Philadelphia_Eagles_at_Levi%27s_Stadium_%2820140929201311%29.jpg'
  },
  teams: [
    {
      name: 'San Francisco 49ers',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
   policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'Levi\'s Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: "Does Levi's Stadium provide an area to store luggage?",
      answer: "Levi's Stadium does not provide an area to check oversized bags or luggage."
    },
{
  id: 'prohibited-items',
  question: "What items are prohibited at Levi's Stadium?",
  answer: "The following items are prohibited at Levi's Stadium:\n\n" + 
    '• Aerosol cans\n' +
    '• Alcoholic beverages\n' +
    '• Laptops and laptop bags\n' +
    '• Non-compliant bags\n' +
    '• Cameras with lenses larger than 3 inches\n' +
    '• Lights, tripods, selfie-sticks, monopods and poles\n' +
    '• Cans and glass bottles\n' +
    '• Coolers (including soft-sided)\n' +
    '• Plastic bottles over 24 ounces and thermoses\n' +
    '• Confetti, fireworks, flares, laser pointers\n' +
    '• Glow sticks and light-up items\n' +
    '• Noisemakers (klaxons, bullhorns, whistles)\n' +
    '• Projectiles (footballs, Frisbees, bats, etc.)\n' +
    '• Flags or banners larger than 2\' x 3\'\n' +
    '• Drugs and drug paraphernalia\n' +
    '• Non-team store helmets\n' +
    '• Identity-concealing face coverings\n' +
    '• Offensive clothing\n' +
    '• Drones (UAVs)\n' +
    '• Weapons of any kind\n' +
    '• Any other items deemed inappropriate'
},
    {
      id: 'medical-bags',
      question: "Are medical bags allowed at Levi's Stadium?",
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};