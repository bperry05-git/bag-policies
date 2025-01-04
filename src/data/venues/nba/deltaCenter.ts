import type { VenueDetails } from '../../../types/venue';

export const deltaCenterVenue: VenueDetails = {
  id: 'delta-center',
  name: 'Delta Center',
  type: 'arena',
  metadata: {
    title: 'Delta Center Bag Policy: Guide + Images | Utah Jazz & Hockey Club',
    description: 'Delta Center enforces a no bag policy. Only clutches up to 4" x 6" x 2" and medical/diaper bags under 14" x 14" x 6" are permitted with X-ray screening at Door 5.',
  },
  capacity: 18306,
  location: {
    address: '301 W South Temple',
    city: 'Salt Lake City',
    state: 'UT',
    zip: '84101',
    coordinates: {
      latitude: 40.768333,
      longitude: -111.901111,
    },
    website: 'https://www.deltacenter.com/arena-policies-faq/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Delta+Center+Salt+Lake+City&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Delta-center.jpg/640px-Delta-center.jpg"
  },
  teams: [
    {
      name: 'Utah Jazz',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    },
        {
      name: 'Utah Hockey Club',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {

    description: '**Bags (including purses) will not be allowed**. Diaper bags and medical bags will be allowed if they are no larger than 14"x14"x6". Clutches will be allowed but must be no larger than 4"x6"x2". Please note that all medical and diaper bags will be X-rayed upon entrance. Bag X-rays are only located at Door 5 (the main entrance on the North East corner of the arena).',
    allowedBags: ['clutch','wristlet'],
    prohibitedBags: ['backpack', 'fanny_pack','purse', 'bag', 'tote', 'camera_bag'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Delta Center provide an area to store luggage?',
      answer: 'Delta Center does not provide an area to check oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Delta Center?',
      answer: 'The following items are prohibited at Delta Center:\n\n' +
        '• Aerosol cans\n' +
        '• Audio/visual recording devices (e.g. GoPros, Google Glass, Spectacles, etc.)\n' +
        '• Backpacks, bags, and purses\n' +
        '• Beach balls, frisbees or any other projectiles\n' +
        '• Coolers or bottles (cans or glass)\n' +
        '• Drones\n' +
        '• Firearms, knives or weapons of any kind\n' +
        '• Fireworks\n' +
        '• Flasks\n' +
        '• Flashlights\n' +
        '• Illegal substances\n' +
        '• Large banners/flags\n' +
        '• Laser pointers\n' +
        '• Mace, pepper spray\n' +
        '• Noise-making devices, including whistles/horns\n' +
        '• Optical illusions intended to interfere with the ability of the eye to perceive depth or distance\n' +
        '• Professional or commercial cameras with interchangeable/detachable lenses\n' +
        '• Signs with obscene or offensive language or pictures or larger than 11 x 17 inches in size\n' +
        '• Outside food and beverage\n' +
        '• Sticks, poles or pipes, selfie sticks, bats, clubs, umbrellas\n' +
        '• Strollers\n' +
        '• Tripods/monopods\n' +
        '• Anything else deemed inappropriate by management'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Delta Center?',
      answer: 'Yes, medical bags and diaper bags are allowed if they are no larger than 14" x 14" x 6". All medical and diaper bags must be X-rayed at Door 5 (the main entrance on the North East corner of the arena).'
    }
  ],
};