import type { VenueDetails } from '../../../types/venue';

export const capitalOneArenaVenue: VenueDetails = {
  id: 'capital-one-arena',
  name: 'Capital One Arena',
  type: 'arena',
      metadata: {
    title: 'Capital One Arena Bag Policy: Guide + Images | Wizards & Capitals',
    description: 'Capital One Arena enforces a no bag policy. Clutches up to 5” x 7”, medical, and parenting bags under 14” x 14” x 6” are allowed with security screening.',
  },
  capacity: 20356,
  location: {
    address: '601 F Street NW',
    city: 'Washington',
    state: 'DC',
    zip: '20004',
    coordinates: {
      latitude: 38.898056,
      longitude: -77.020833,
    },
    website: 'https://www.capitalonearena.com/arena-policies',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Capital+One+Arena+Washington+DC&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Capital_One_Arena_-_Washington%2C_D.C.jpg/640px-Capital_One_Arena_-_Washington%2C_D.C.jpg"
  },
  teams: [
    {
      name: 'Washington Wizards',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    },
        {
      name: 'Washington Capitals',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
    policies: {
    description: 'The Capital One Arena has a **strict no bag policy, prohibiting bags, backpacks, and purses inside the venue**. Wallet-size clutches up to 5” x 7”, medical bags, and parenting bags no larger than 14” x 14” x 6” are allowed but must undergo security screening.',
    allowedBags: ['wristlet','clutch'],
    prohibitedBags: ['purse','backpack', 'duffel', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Capital One Arena provide an area to store luggage?',
      answer: 'Capital One Arena does not provide an area to check oversized bags or luggage.'
    },
{
 id: 'prohibited-items',
 question: 'What items are prohibited at Capital One Arena?',
 answer: 'The following items are prohibited at Capital One Arena:\n\n' +
   '• Weapons (guns, knives, chains, spikes, projectiles, tasers, mace/pepper spray)\n' +
   '• Balloons\n' +
   '• Cans, bottles, or coolers\n' +
   '• Outside food and beverages\n' +
   '• Metal or glass reusable water bottles\n' +
   '• Illegal drugs or drug paraphernalia\n' +
   '• Gambling paraphernalia\n' +
   '• Laser pointers/pens\n' +
   '• Monopods, tripods, or poles\n' +
   '• Selfie sticks, selfie lights, or other detachable lighting sources\n' +
   '• Noisemakers such as air horns, sirens, kazoos, whistles (except Birdie personal safety alarms)\n' +
   '• Animals (except service animals)\n' +
   '• Wrapped gifts or packages\n' +
   '• Video and audio recording devices (except cell phones and small point & shoot cameras)\n' +
   '• Non-collapsible umbrellas\n' +
   '• Any other item deemed inappropriate by Capital One Arena Management'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Capital One Arena?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};