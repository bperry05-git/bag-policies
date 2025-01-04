import type { VenueDetails } from '../../../types/venue';
export const fordFieldVenue: VenueDetails = {
  id: 'ford-field',
  name: 'Ford Field',
  type: 'stadium',
    metadata: {
    title: 'Ford Field Bag Policy: Guide + Images | Detroit Lions',
    description: 'Ford Field\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 65000,
  location: {
    address: '2000 Brush Street',
    city: 'Detroit',
    state: 'MI',
    zip: '48226',
    coordinates: {
      latitude: 42.339958,
      longitude: -83.045647,
    },
    website: 'https://www.fordfield.com/plan-your-visit/bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Ford+Field+Detroit&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Sunny_Ford_Field_-_panoramio.jpg/640px-Sunny_Ford_Field_-_panoramio.jpg'
  },
  teams: [
    {
      name: 'Detroit Lions',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
    policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'Ford Field, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Ford Field provide an area to store luggage?',
      answer: 'Ford Field does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Ford Field?',
  answer: 'The following items are prohibited at Ford Field:\n\n' + 
    '• Aerosol cans (hairspray, mace, pepper spray, etc.)\n' +
    '• Animals (except certified service animals)\n' +
    '• Balloons (air or helium)\n' +
    '• Balls (beach balls, footballs, etc.)\n' +
    '• Banners or large flags\n' +
    '• Cameras with lenses longer than five inches\n' +
    '• Decals, stickers, confetti or glitter\n' +
    '• Drones and remote controlled aircraft\n' +
    '• Electronic equipment including laptops and video cameras\n' +
    '• Fireworks\n' +
    '• Food, beverages or liquids\n' +
    '• Illegal substances\n' +
    '• Knives, pocket knives, box cutters, scissors\n' +
    '• Laser pointers\n' +
    '• Markers (permanent) and paint\n' +
    '• Noisemaking devices\n' +
    '• Objects that can be used as projectiles\n' +
    '• Offensive or profane messages on signs/clothing\n' +
    '• Seat cushions or chairs\n' +
    '• Selfie sticks\n' +
    '• Strollers and infant carriers\n' +
    '• Large umbrellas\n' +
    '• Weapons\n' +
    '• Wrapped gifts'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Ford Field?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};