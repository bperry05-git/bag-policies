import type { VenueDetails } from '../../../types/venue';

export const targetCenterVenue: VenueDetails = {
  id: 'target-center',
  name: 'Target Center',
  type: 'arena',
  metadata: {
    title: 'Target Center Bag Policy: Guide + Images | Minnesota Timberwolves',
    description: 'Target Center only permits bags up to 5" x 9". Diaper bags and medical bags are allowed with search.',
  },
  capacity: 19356,
  location: {
    address: '600 First Avenue North',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55403',
    coordinates: {
      latitude: 44.979444,
      longitude: -93.276111,
    },
    website: 'https://www.targetcenter.com/plan-your-visit-1/know-before-you-go',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Target+Center+Minneapolis&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/TargetCenter.jpg/640px-TargetCenter.jpg"
  },
  teams: [
    {
      name: 'Minnesota Timberwolves',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    description: 'Permitted items include **bags that are no larger than 5" x 9"**, diaper bags and medical bags (subject to search upon entry).',
    allowedBags: ['clutch','wristlet'],
    prohibitedBags: ['purse', 'backpack', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Target Center provide an area to store luggage?',
      answer: 'Target Center does not provide an area to check oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Target Center?',
      answer: 'The following items are prohibited at Target Center:\n\n' +
        '• Aerosol cans\n' +
        '• Explicit apparel\n' +
        '• Artificial noise makers\n' +
        '• Audio recording devices (GoPro, Google Glass, etc.)\n' +
        '• Backpacks\n' +
        '• Basketballs or mini basketballs\n' +
        '• Beach balls\n' +
        '• Binoculars in hard cases\n' +
        '• Camera cases\n' +
        '• Cameras with detachable lenses\n' +
        '• Chemical irritants\n' +
        '• Cigarettes/joints\n' +
        '• Coolers\n' +
        '• Computers and cases\n' +
        '• Drones\n' +
        '• Electronic smoking devices\n' +
        '• Fireworks\n' +
        '• Flashlights\n' +
        '• Frisbees\n' +
        '• Full facial coverings\n' +
        '• Full length golf umbrellas\n' +
        '• Glass/metal containers\n' +
        '• Hockey/lacrosse sticks\n' +
        '• Illegal drugs\n' +
        '• Inflatable items\n' +
        '• Knitting needles\n' +
        '• Lighters and matches\n' +
        '• Maui Wowi reusable cups\n' +
        '• Outside food/beverage\n' +
        '• Pets (except service animals)\n' +
        '• Pocket knives\n' +
        '• Purses larger than 5" x 9"\n' +
        '• Large signs (over 11" x 17")\n' +
        '• Spiked jewelry\n' +
        '• Sticks/poles/selfie sticks\n' +
        '• Stickers\n' +
        '• Strollers\n' +
        '• Tripods/monopods\n' +
        '• Umbrellas\n' +
        '• Video cameras\n' +
        '• Wallet chains\n' +
        '• Weapons\n' +
        '• Whistles/horns'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Target Center?',
      answer: 'Yes, medical bags and diaper bags are permitted but are subject to search upon entry.'
    }
  ],
};