import type { VenueDetails } from '../../../types/venue';

export const frostBankCenterVenue: VenueDetails = {
  id: 'frost-bank-center',
  name: 'Frost Bank Center',
  type: 'arena',
  metadata: {
    title: 'Frost Bank Center Bag Policy: Guide + Images | San Antonio Spurs',
    description: 'Frost Bank Center allows bags up to 12" x 12" x 6" in size. All bags are subject to security search.',
  },
  capacity: 18418,
  location: {
    address: '1 AT&T Center Parkway',
    city: 'San Antonio',
    state: 'TX',
    zip: '78219',
    coordinates: {
      latitude: 29.426944,
      longitude: -98.4375,
    },
    website: 'https://www.frostbankcenter.com/arena/arena-faqs-policies',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Frost+Bank+Center+San+Antonio&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9aqFpD7m8EgNetXeIhp020FGM2ZKI6VIazA&s"
  },
  teams: [
    {
      name: 'San Antonio Spurs',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    description: '**Bags up to 12" x 12" x 6" in size are permitted into the arena**. All bags are subject to security search',
    allowedBags: ['purse', 'clutch','wristlet','fanny_pack'],
    prohibitedBags: ['backpack', 'tote','briefcase','duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Frost Bank Center provide an area to store luggage?',
      answer: 'Frost Bank Center does not provide an area to check oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Frost Bank Center?',
      answer: 'The following items are prohibited at Frost Bank Center:\n\n' +
        '• Aerosol cans\n' +
        '• Backpacks\n' +
        '• Balls\n' +
        '• Blunt objects (baseball bats, batons, brass knuckles, clubs, sticks, etc.)\n' +
        '• Bottles (glass, thermos, cans, plastic)\n' +
        '• Brooms\n' +
        '• Cameras with detachable lenses or lenses longer than 3" when extended\n' +
        '• Chains (metal, spike accessory)\n' +
        '• Costumes (dangerous in nature) including nunchucks, pitchforks, sling blades, axes, swords, whips, nooses, etc.\n' +
        '• Clothing, garments, and signs with explicit language or images\n' +
        '• Drones\n' +
        '• Drug paraphernalia\n' +
        '• Electronic cigarettes including vape pens\n' +
        '• Explosive devices including ammunition, fireworks, smoke emitters\n' +
        '• Firearms (real, replica or toys)\n' +
        '• Flags, banners, and large posters\n' +
        '• Flasks\n' +
        '• Knives or tools\n' +
        '• Large hats\n' +
        '• Mace (pepper or tear gas)\n' +
        '• Noisemakers\n' +
        '• Optical illusions (laser pointers, laser pens, lights)\n' +
        '• Outside food and beverages\n' +
        '• Poles or rods including selfie sticks\n' +
        '• Purses/bags larger than 12" x 12" x 6"\n' +
        '• Signs larger than 11" x 17"\n' +
        '• Souvenir cups/items from previous events\n' +
        '• Stun gun/taser\n' +
        '• Swords (plastic, metal)\n' +
        '• Video cameras/recording devices'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Frost Bank Center?',
      answer: 'Medical bags and diaper bags are permitted but must meet size requirements and are subject to security search.'
    }
  ],
};