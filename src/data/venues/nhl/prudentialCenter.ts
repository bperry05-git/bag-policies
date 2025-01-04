import type { VenueDetails } from '../../../types/venue';

export const prudentialCenterVenue: VenueDetails = {
  id: 'prudential-center',
  name: 'Prudential Center',
  type: 'arena',
  metadata: {
    title: 'Prudential Center Bag Policy: Guide + Images | New Jersey Devils',
    description: 'Prudential Center allows bags up to 12" x 14". Larger bags, including backpacks, are prohibited except for childcare or medical bags. All bags subject to search.',
  },
  capacity: 16514,
  location: {
    address: '25 Lafayette Street',
    city: 'Newark',
    state: 'NJ',
    zip: '07102',
    coordinates: {
      latitude: 40.733611,
      longitude: -74.171111,
    },
    website: 'https://www.prucenter.com/safety',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Prudential+Center+Newark&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Prudential_Center_front.jpg/640px-Prudential_Center_front.jpg'
  },
  teams: [
    {
      name: 'New Jersey Devils',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: '**Bags up to 12" x 14" are permitted inside Prudential Center**. Anything larger, including backpacks, are not permitted, with the exception of childcare or medical bags. Permissible larger bags will be X-rayed. All bags are subject to search at entry points. Non-compliant bags must be returned to vehicles or stored in Prudential Center lockers (available at M&M\'s Tower and Lafayette Street entrances for a fee).',
    allowedBags: ['purse', 'clutch','fanny_pack', 'wristlet'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Prudential Center provide bag storage?',
      answer: 'Yes, lockers are available outside the M&M\'s Tower and Lafayette Street entrances for a fee.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Prudential Center?',
      answer: 'The following items are prohibited at Prudential Center:\n\n' +
        '• Weapons (firearms, knives, bats, brass knuckles, etc.)\n' +
        '• Electronic devices (except phones and non-professional cameras)\n' +
        '• Aerosol cans and self-defense sprays\n' +
        '• Tools, razor blades, box cutters, scissors\n' +
        '• Animals/pets (except service animals)\n' +
        '• Audio/video equipment\n' +
        '• Projectiles (frisbees, balloons, beach balls)\n' +
        '• Backpacks of any size\n' +
        '• Bags/purses over 12" x 14"\n' +
        '• Beverage containers (cans, bottles, glass)\n' +
        '• Chains, studded bracelets\n' +
        '• Coolers or ice chests\n' +
        '• Hard-sided bags\n' +
        '• Alcohol, illegal drugs\n' +
        '• Laser pointers\n' +
        '• Noisemaking devices\n' +
        '• Outside food and beverage\n' +
        '• Professional photography equipment\n' +
        '• Drones\n' +
        '• Explosives and fireworks\n' +
        '• Selfie sticks, tripods, GoPros\n' +
        '• Poles for banners/flags\n' +
        '• Signs larger than 14" x 14"\n' +
        '• Unauthorized pamphlets/advertisements\n' +
        '• Skateboards, hoverboards, rollerblades\n' +
        '• Packages of any kind'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Prudential Center?',
      answer: 'Yes, medical bags and childcare bags are permitted but will be X-rayed and subject to security screening.'
    }
  ],
};