import type { VenueDetails } from '../../../types/venue';
export const lambeauFieldVenue: VenueDetails = {
  id: 'lambeau-field',
  name: 'Lambeau Field',
  type: 'stadium',
    metadata: {
    title: 'Lambeau Field Bag Policy: Guide + Images | Green Bay Packers',
    description: 'Lambeau Field\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 81441,
  location: {
    address: '1265 Lombardi Avenue',
    city: 'Green Bay',
    state: 'WI',
    zip: '54304',
    coordinates: {
      latitude: 44.501389,
      longitude: -88.062222,
    },
    website: 'https://www.packers.com/lambeau-field/carry-in-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Lambeau+Field+Green+Bay&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Lambeau-field.jpg/640px-Lambeau-field.jpg'
  },
  teams: [
    {
      name: 'Green Bay Packers',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
   policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'Lambeau Field, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Lambeau Field provide an area to store luggage?',
      answer: 'Lambeau Field does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Lambeau Field?',
  answer: 'The following items are prohibited at Lambeau Field:\n\n' + 
    '• Firearms and other weapons\n' +
    '• Coolers\n' +
    '• Strollers\n' +
    '• Wagons\n' +
    '• Umbrellas\n' +
    '• Obstructive banners and signs\n' +
    '• Food and beverages\n' +
    '• Noisemakers of any kind\n' +
    '• Selfie sticks\n' +
    '• Video cameras\n' +
    '• Cameras with lenses over 12 inches\n' +
    '• Any other items deemed dangerous or inappropriate'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Lambeau Field?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};