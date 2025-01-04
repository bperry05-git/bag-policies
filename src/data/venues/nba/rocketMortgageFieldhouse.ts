import type { VenueDetails } from '../../../types/venue';

export const rocketMortgageFieldhouseVenue: VenueDetails = {
  id: 'rocket-mortgage-fieldhouse',
  name: 'Rocket Mortgage FieldHouse',
  type: 'arena',
  metadata: {
    title: 'Rocket Mortgage FieldHouse Bag Policy: Guide + Images | Cleveland Cavaliers',
    description: 'Rocket Mortgage FieldHouse allows bags up to 14" x 14" x 6" that fit under seats. Backpacks and sealed packages are not permitted.',
  },
  capacity: 19432,
  location: {
    address: '1 Center Court',
    city: 'Cleveland',
    state: 'OH',
    zip: '44115',
    coordinates: {
      latitude: 41.496389,
      longitude: -81.688056,
    },
    website: 'https://www.rocketmortgagefieldhouse.com/guest-experience/security-policies',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Rocket+Mortgage+FieldHouse+Cleveland&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Quicken_Loans_Arena_4.jpg/640px-Quicken_Loans_Arena_4.jpg"
  },
  teams: [
    {
      name: 'Cleveland Cavaliers',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: '**Backpacks, large bags/purses (bags/purses must be 14" x 14" x 6" or smaller and fit under seat without obstruction of aisles)**, or sealed packages of any kind (including gifts for performers) are not permitted.',
    allowedBags: [ 'purse','clutch','wristlet','fanny_pack'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Rocket Mortgage FieldHouse provide an area to store luggage?',
      answer: 'Rocket Mortgage FieldHouse does not provide an area to check bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Rocket Mortgage FieldHouse?',
      answer: 'The following items are prohibited at Rocket Mortgage FieldHouse:\n\n' +
        '• Aerosol cans\n' +
        '• Audio/video recording devices (GoPros, Google Glass, Smart Glasses)\n' +
        '• Backpacks and oversized bags\n' +
        '• Balloons\n' +
        '• Bats and clubs\n' +
        '• Beach balls\n' +
        '• Bottles, cans, coolers\n' +
        '• Professional cameras with detachable lenses\n' +
        '• Drones\n' +
        '• Non-removable facial masks\n' +
        '• Fireworks\n' +
        '• Flags\n' +
        '• Frisbees\n' +
        '• Inappropriate garments/clothing\n' +
        '• iPads/tablets (except at Cavs, Monsters, MAC Tournament games)\n' +
        '• Laser pointers\n' +
        '• Long chains\n' +
        '• Illegal substances\n' +
        '• Noise makers (whistles, horns, vuvuzelas, bagpipes)\n' +
        '• Outside food/beverages (except medical, baby food, children snacks)\n' +
        '• Reusable containers\n' +
        '• Selfie sticks, poles, tripods\n' +
        '• Inappropriate signs/posters\n' +
        '• Weapons of any kind\n' +
        '• Sealed packages including gifts'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Rocket Mortgage FieldHouse?',
      answer: 'Medical bags are permitted but must be 14" x 14" x 6" or smaller and fit under your seat without obstructing aisles.'
    }
  ],
};