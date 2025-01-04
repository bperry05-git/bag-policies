import type { VenueDetails } from '../../../types/venue';
export const lumenFieldVenue: VenueDetails = {
  id: 'lumen-field',
  name: 'Lumen Field',
  type: 'stadium',
    metadata: {
   title: 'Lumen Field Bag Policy: Guide + Images | Seahawks & Sounders',
    description: 'Lumen Field\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 68740,
  location: {
    address: '800 Occidental Avenue South',
    city: 'Seattle',
    state: 'WA',
    zip: '98134',
    coordinates: {
      latitude: 47.5952,
      longitude: -122.3316,
    },
    website: 'https://www.lumenfield.com/plan-your-visit-stadium-guide/clear-bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Lumen+Field+Seattle&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Qwest_Field_North.jpg/640px-Qwest_Field_North.jpg'
  },
  teams: [
    {
      name: 'Seattle Seahawks',
      league: 'NFL',
      sport: 'Football',
      active: true,
    },
    {
      name: 'Seattle Sounders FC',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
    policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
   description: 'Lumen Field, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Lumen Field provide an area to store luggage?',
      answer: 'Lumen Field does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Lumen Field?',
  answer: 'The following items are prohibited at Lumen Field:\n\n' + 
    '• Alcohol (bottles, cans, airplane bottles)\n' +
    '• Battery operated heated clothing or costumes\n' +
    '• Cameras with video capability or lenses over 6"\n' +
    '• GoPros and selfie sticks\n' +
    '• Glass, aluminum, metal and aerosol containers\n' +
    '• Cases larger than 4.5" x 6.5"\n' +
    '• Drones and unmanned aerial systems\n' +
    '• Inflated objects (footballs, soccer balls)\n' +
    '• Flagpoles and sign sticks\n' +
    '• Laptop computers (tablets permitted)\n' +
    '• Motorcycle helmets\n' +
    '• Noisemakers (megaphones, horns, whistles)\n' +
    '• Outside beverages (except sealed water)\n' +
    '• Weapons\n' +
    '• Any items deemed dangerous or inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Lumen Field?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};