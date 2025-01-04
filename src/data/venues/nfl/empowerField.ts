import type { VenueDetails } from '../../../types/venue';
export const empowerFieldVenue: VenueDetails = {
  id: 'empower-field',
  name: 'Empower Field at Mile High',
  type: 'stadium',
    metadata: {
    title: 'Empower Field Bag Policy: Guide + Images | Denver Broncos',
    description: 'Empower Field\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 76125,
  location: {
    address: '1701 Bryant Street',
    city: 'Denver',
    state: 'CO',
    zip: '80204',
    coordinates: {
      latitude: 39.743889,
      longitude: -105.02,
    },
    website: 'https://www.empowerfieldatmilehigh.com/clear-bag-policy-1',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Empower+Field+at+Mile+High+Denver&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Empower_Field_at_Mile_High_20241001.jpg/640px-Empower_Field_at_Mile_High_20241001.jpg'
  },
  teams: [
    {
      name: 'Denver Broncos',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
    policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'Empower Field at Mile High, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Empower Field at Mile High provide an area to store luggage?',
      answer: 'Empower Field at Mile High does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Empower Field at Mile High?',
  answer: 'The following items are prohibited at Empower Field at Mile High:\n\n' + 
    '• Seat cushions larger than 18" wide or with zippers/pockets\n' +
    '• Stainless steel water bottles, glass bottles, cans, frozen drinks\n' +
    '• Coolers, thermoses, or ice chests\n' +
    '• Alcohol of any kind\n' +
    '• Banners or signs that obstruct views\n' +
    '• Large golf-sized umbrellas\n' +
    '• Laser pointers\n' +
    '• Single purpose video cameras\n' +
    '• Weapons (including knives)\n' +
    '• Animals (except service animals)\n' +
    '• Battery Packs with AA, C or D cell batteries\n' +
    '• Standard size footballs\n' +
    '• Any item deemed inappropriate by Stadium management'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Empower Field at Mile High?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};