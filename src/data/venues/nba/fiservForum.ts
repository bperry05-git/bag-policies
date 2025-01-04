import type { VenueDetails } from '../../../types/venue';

export const fiservForumVenue: VenueDetails = {
  id: 'fiserv-forum',
  name: 'Fiserv Forum',
  type: 'arena',
  metadata: {
    title: 'Fiserv Forum Bag Policy: Guide + Images | Milwaukee Bucks',
    description: 'Fiserv Forum enforces a strict no bag policy. Only wallets up to 4" x 6" x 1" are permitted, with exceptions for medical and diaper bags.',
  },
  capacity: 17341,
  location: {
    address: '1111 Vel R. Phillips Ave',
    city: 'Milwaukee',
    state: 'WI',
    zip: '53203',
    coordinates: {
      latitude: 43.045028,
      longitude: -87.917306,
    },
    website: 'https://www.fiservforum.com/plan-your-visit/a-z-guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Fiserv+Forum+Milwaukee&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Milwaukee_July_2022_022_%28Fiserv_Forum%29.jpg/640px-Milwaukee_July_2022_022_%28Fiserv_Forum%29.jpg"
  },
  teams: [
    {
      name: 'Milwaukee Bucks',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    description: 'There is a **NO BAG policy at Fiserv Forum. Wallets smaller than 4" x 6" x 1" are permitted**. Exceptions to this policy are diaper bags and bags needed due to medical necessity, which will need to be x-rayed by security.',
    allowedBags: ['wristlet'],
    prohibitedBags: ['backpack','fanny_pack','clutch', 'purse', 'bag', 'tote', 'camera_bag'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Fiserv Forum provide an area to store luggage?',
      answer: 'Fiserv Forum does not provide an area to check oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Fiserv Forum?',
      answer: 'The following items are prohibited at Fiserv Forum:\n\n' +
        '• Weapons of any type (firearm/ammo, knives of all sizes, bats, clubs, and scissors)\n' +
        '• No open or concealed weapons/firearms, except in your locked motor vehicle\n' +
        '• Explosives / fireworks\n' +
        '• Self-Defense Sprays (OC, Pepper Spray and Mace)\n' +
        '• Aerosol cans\n' +
        '• Brooms/broomsticks, selfie sticks, poles, and tripods\n' +
        '• Laser pointers or flashlights\n' +
        '• iPads, tablets, and laptops\n' +
        '• Large banners or flags signs (over 11" x 17")\n' +
        '• Backpacks, oversized bags, suitcases, and hard-sided bags of any kind\n' +
        '• Food or drink of any kind (exception: medical, with previous approval)\n' +
        '• Cans & glass containers\n' +
        '• Coolers or other hard sided containers\n' +
        '• Masks of any kind (without authorization)\n' +
        '• Noise makers (whistles, horns)\n' +
        '• Projectiles such as beach balls, frisbees, etc.\n' +
        '• Any type of ball (without authorization)\n' +
        '• Optical illusions (items that can interfere with depth or distance perception)\n' +
        '• Personal Safety Alarms\n' +
        '• Drones or model aircraft\n' +
        '• Professional cameras (with detachable lens or lens over 3 inches)\n' +
        '• Large umbrellas over 12 inches; golf umbrellas; umbrellas with pointed tips\n' +
        '• Metal chains of any kind, including wallet chains'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Fiserv Forum?',
      answer: 'Yes, medical bags and diaper bags are permitted but must be x-rayed by security.'
    }
  ],
};