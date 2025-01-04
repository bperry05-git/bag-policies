import type { VenueDetails } from '../../../types/venue';
export const caesarsSuperdomeVenue: VenueDetails = {
  id: 'caesars-superdome',
  name: 'Caesars Superdome',
  type: 'stadium',
    metadata: {
    title: 'Caesars Superdome Bag Policy: Guide + Images | New Orleans Saints',
    description: 'Caesars Superdome\'s clear bag policy allows clear bags up to 12” x 6” x 12” and small non-clear bags up to 4.5” x 6.5” for safe and efficient entry.',
  },
  capacity: 76468,
  location: {
    address: '1500 Sugar Bowl Drive',
    city: 'New Orleans',
    state: 'LA',
    zip: '70112',
    coordinates: {
      latitude: 29.951111,
      longitude: -90.081111,
    },
    website: 'https://www.caesarssuperdome.com/plan-your-visit/event-day-safety-security',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Caesars+Superdome+New+Orleans&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Superdome_night.jpg/640px-Superdome_night.jpg'
  },
  teams: [
    {
      name: 'New Orleans Saints',
      league: 'NFL',
      sport: 'Football',
      active: true,
    }
  ],
    policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'Caesars Superdome, in partnership with the NFL, enforces a clear bag policy to enhance security and streamline entry for fans. **Approved bags include clear plastic, vinyl, or PVC bags no larger than 12” x 6” x 12”, one-gallon clear freezer bags, and small non-clear bags up to 4.5” x 6.5”**. Fans can bring essentials like keys, wallets, phones, jackets, and blankets without restrictions.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Caesars Superdome provide an area to store luggage?',
      answer: 'Caesars Superdome does not provide an area to check oversized bags or luggage.'
    },
{
  id: 'prohibited-items',
  question: 'What items are prohibited at Caesars Superdome?',
  answer: 'The following items are prohibited at Caesars Superdome:\n\n' + 
    '• Animals (except service dogs)\n' +
    '• Backpacks and knapsacks\n' +
    '• Banners (large or in poor taste)\n' +
    '• Bats\n' +
    '• Beach balls\n' +
    '• Bottles, cans, and containers\n' +
    '• Clubs\n' +
    '• Contraband\n' +
    '• Fanny Packs\n' +
    '• Fireworks\n' +
    '• Glass\n' +
    '• Glitter\n' +
    '• Helium balloons\n' +
    '• iPads and Tablets\n' +
    '• Large bags exceeding 12" x 12" x 6"\n' +
    '• Laser pointers\n' +
    '• Mace\n' +
    '• Mascot headwear\n' +
    '• Noisemakers\n' +
    '• Outside food and drink\n' +
    '• Poles and sticks\n' +
    '• Projectiles\n' +
    '• Selfie sticks\n' +
    '• Stickers\n' +
    '• Drones\n' +
    '• Whistles\n' +
    '• Unauthorized marketing materials\n' +
    '• Video and audio recording devices\n' +
    '• Weapons\n' +
    '• Any items deemed unacceptable by management'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Caesars Superdome?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};