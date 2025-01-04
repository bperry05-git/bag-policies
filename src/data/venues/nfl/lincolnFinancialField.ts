import type { VenueDetails } from '../../../types/venue';

export const lincolnFinancialFieldVenue: VenueDetails = {
  id: 'lincoln-financial-field',
  name: 'Lincoln Financial Field',
  type: 'stadium',
    metadata: {
    title: 'Lincoln Financial Field Bag Policy: Guide + Images | Philadelphia Eagles',
    description: 'Lincoln Financial Field\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 67594,
  location: {
    address: '1 Lincoln Financial Field Way',
    city: 'Philadelphia',
    state: 'PA',
    zip: '19148',
    coordinates: {
      latitude: 39.900833,
      longitude: -75.1675,
    },
    website: 'https://www.lincolnfinancialfield.com/safety/#:~:text=Clear%20Bag%20Policy%3A&text=into%20the%20stadium%3A-,Bags%20that%20are%20clear%20plastic%2C%20vinyl%20or%20PVC%20and%20do,or%20without%20a%20handle%2Fstrap.',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Lincoln+Financial+Field+Philadelphia&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Lincoln_Financial_Field_%28Aerial_view%29_%28cropped%29.jpg/640px-Lincoln_Financial_Field_%28Aerial_view%29_%28cropped%29.jpg'
  },
  teams: [
    {
      name: 'Philadelphia Eagles',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
    policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'Lincoln Financial Field, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Lincoln Financial Field provide an area to store luggage?',
      answer: 'Lincoln Financial Field does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Lincoln Financial Field?',
  answer: 'The following items are prohibited at Lincoln Financial Field:\n\n' + 
    '• Abusive or disruptive language or clothing\n' +
    '• Aerosol cans (hairspray, mace, pepper spray)\n' +
    '• Animals (except certified service animals)\n' +
    '• View-obstructing items (banners, large costumes)\n' +
    '• Authentic helmets and motorcycle helmets\n' +
    '• Balloons\n' +
    '• Balls (beach balls, footballs)\n' +
    '• Beverages and alcohol\n' +
    '• Cameras with lenses longer than 5 inches\n' +
    '• Decals, stickers, confetti, or glitter\n' +
    '• Drones and remote-controlled aircraft\n' +
    '• E-cigarettes or vaporizers\n' +
    '• Fireworks\n' +
    '• Outside food (not in clear plastic)\n' +
    '• Laptop computers and video equipment\n' +
    '• Laser pointers\n' +
    '• Noisemaking devices\n' +
    '• Projectiles (sticks, poles, Frisbees)\n' +
    '• Inappropriate signs or clothing\n' +
    '• Selfie sticks\n' +
    '• Strollers and infant carriers\n' +
    '• Umbrellas\n' +
    '• Weapons of any kind\n' +
    '• Wrapped gifts\n' +
    '• Any items deemed dangerous or inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Lincoln Financial Field?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};