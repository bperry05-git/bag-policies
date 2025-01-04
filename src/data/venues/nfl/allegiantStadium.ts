import type { VenueDetails } from '../../../types/venue';
export const allegiantStadiumVenue: VenueDetails = {
  id: 'allegiant-stadium',
  name: 'Allegiant Stadium',
  type: 'stadium',
    metadata: {
    title: 'Allegiant Stadium Bag Policy: Guidee + Images | Las Vegas Raiders',
    description: 'Allegiant Stadium\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 65000,
  location: {
    address: '3333 Al Davis Way',
    city: 'Paradise',
    state: 'NV',
    zip: '89118',
    coordinates: {
      latitude: 36.090833,
      longitude: -115.183611,
    },
    website: 'https://www.allegiantstadium.com/plan-your-visit/prohibited-items',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Allegiant+Stadium+Las+Vegas&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Allegiant_Stadium%2C_Las_Vegas%2C_Nevada_%2851426794436%29.jpg/640px-Allegiant_Stadium%2C_Las_Vegas%2C_Nevada_%2851426794436%29.jpg'
  },
  teams: [
    {
      name: 'Las Vegas Raiders',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
    policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'Allegiant Stadium, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Allegiant Stadium provide an area to store luggage?',
      answer: 'Allegiant Stadium offers three (3) bag check locations. There is a $20 non-refundable charge per bag checked and payment is cashless. Debit/credit and mobile payment, such as Apple or Google Pay, are accepted forms of payment. Bag check opens the same time stadium entries open and closes one (1) hour post-event.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Allegiant Stadium?',
  answer: 'The following items are prohibited at Allegiant Stadium:\n\n' + 
    '• Aerosol cans, including mace, pepper spray, hair spray, etc.\n' +
    '• Audio or visual recording devices (with lens more than 6" in length), including GoPro, Google Glass, etc.\n' +
    '• Balloons and other inflatables\n' +
    '• Bicycles, skateboards, scooters, roller skates, hoverboards and segways\n' +
    '• Commercial audio or video recording equipment\n' +
    '• Drones and unmanned aircraft vehicles (UAV)\n' +
    '• Fireworks, flares, smoke bombs and devices, pyrotechnics, and any missile-like object\n' +
    '• Hard-sided containers, including bottles, cans, flasks, coolers and thermoses\n' +
    '• Illegal drugs or drug paraphernalia\n' +
    '• Inappropriate or offensive attire or signage\n' +
    '• Laptops, tablets (including iPads and Kindles), personal computers, or two-way radios\n' +
    '• Laser lights, strobes, flashlights or any other visual impairment device\n' +
    '• Noisemakers of any kind\n' +
    '• Non-service animals\n' +
    '• Outside food or beverages\n' +
    '• Portable chairs, seat cushions, child seats, and strollers\n' +
    '• Projectiles, including balls and frisbees\n' +
    '• Sticks, poles, clubs, monopods, tripods, selfie sticks\n' +
    '• Umbrellas larger than 12" in length\n' +
    '• Weapons of any kind\n' +
    '• Any item deemed dangerous or inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Allegiant Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};