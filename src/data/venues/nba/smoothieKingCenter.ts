import type { VenueDetails } from '../../../types/venue';

export const smoothieKingCenterVenue: VenueDetails = {
  id: 'smoothie-king-center',
  name: 'Smoothie King Center',
  type: 'arena',
  metadata: {
    title: 'Smoothie King Center Bag Policy: Guides + Images | New Orleans Pelicans',
    description: 'Smoothie King Center requires clear vinyl bags no larger than 14" x 14" x 6". One bag per person.',
  },
  capacity: 16867,
  location: {
    address: '1501 Dave Dixon Drive',
    city: 'New Orleans',
    state: 'LA',
    zip: '70113',
    coordinates: {
      latitude: 29.948889,
      longitude: -90.081944,
    },
    website: 'https://www.smoothiekingcenter.com/plan-your-visit/a-z-guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Smoothie+King+Center+New+Orleans&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://assets.simpleviewinc.com/simpleview/image/upload/crm/neworleans/1_72F6311E-227D-44FE-BBA9CAB1B7B04BD5_21eda2bb-4960-4109-8ac6a6596ec9f8ac.jpg"
  },
  teams: [
    {
      name: 'New Orleans Pelicans',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    description: 'Each person is limited to **one clear vinyl bag that is no larger than 14" wide x 14" high x 6" deep**. Policy may vary depending on event tour management. Please refer to the specific event page for more information.',
    allowedBags: ['clear','clear_plastic'],
    prohibitedBags: ['backpack', 'clutch', 'purse', 'fanny_pack','tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Smoothie King Center provide an area to store luggage?',
      answer: 'Smoothie King Center does not provide an area to check oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Smoothie King Center?',
      answer: 'The following items are prohibited at Smoothie King Center:\n\n' +
        '• Animals (except service dogs)\n' +
        '• Backpacks/knapsacks\n' +
        '• Banners (large or in poor taste)\n' +
        '• Bats, clubs, sticks\n' +
        '• Beach balls\n' +
        '• Bottles, cans, containers\n' +
        '• Contraband\n' +
        '• Fireworks\n' +
        '• Glass\n' +
        '• Glitter\n' +
        '• Helium balloons\n' +
        '• iPads/tablets\n' +
        '• Large/oversized bags (over 14" x 14" x 6")\n' +
        '• Laser pointers\n' +
        '• Mace\n' +
        '• Mascot headwear of any kind\n' +
        '• Noisemakers\n' +
        '• Outside food and drink\n' +
        '• Poles\n' +
        '• Projectiles\n' +
        '• Selfie sticks\n' +
        '• Stickers\n' +
        '• Drones\n' +
        '• Whistles\n' +
        '• Unauthorized marketing materials\n' +
        '• Video/audio recording devices (including GoPros)\n' +
        '• Weapons'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Smoothie King Center?',
      answer: 'Medical bags are permitted but must be inspected upon entry.'
    }
  ],
};