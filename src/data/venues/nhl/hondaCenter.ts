import type { VenueDetails } from '../../../types/venue';

export const hondaCenterVenue: VenueDetails = {
  id: 'honda-center',
  name: 'Honda Center',
  type: 'arena',
  metadata: {
    title: 'Honda Center Bag Policy: Guide + Images | Anaheim Ducks',
    description: 'Honda Center enforces a strict bag size limit of 5" x 9" x 2". All bags, including clear bags, are subject to manual inspection. No bag check available.',
  },
  capacity: 17174,
  location: {
    address: '2695 East Katella Avenue',
    city: 'Anaheim',
    state: 'CA',
    zip: '92806',
    coordinates: {
      latitude: 33.807778,
      longitude: -117.876667,
    },
    website: 'https://www.hondacenter.com/arena-info/no-bag-policy/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Honda+Center+Anaheim&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Honda_center_2021.jpg/640px-Honda_center_2021.jpg'
  },
  teams: [
    {
      name: 'Anaheim Ducks',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: '**Bags and purses must not exceed 5" x 9" x 2"** to be permitted and are subject to manual inspection - this includes clear bags. All other purses/bags/clutches will not be allowed into the venue. Backpacks of any size are not permitted. Honda Center does not offer a bag check service.',
    allowedBags: ['clutch', 'wristlet','purse','fanny_pack'],
    prohibitedBags: ['backpack', 'tote', 'briefcase', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Honda Center provide bag storage?',
      answer: 'No, Honda Center does not offer a bag check service.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Honda Center?',
      answer: 'The following items are prohibited at Honda Center:\n\n' +
        '• Balloons and beach balls\n' +
        '• Booster seats\n' +
        '• Briefcases\n' +
        '• Camera equipment (selfie sticks, mounts, gimbals, stabilizers, tripods, monopods, microphones)\n' +
        '• Offensive clothing or gang attire\n' +
        '• Coolers\n' +
        '• Confetti and streamers\n' +
        '• Promotional items without permission\n' +
        '• Drums and noise-making devices (cowbells allowed for hockey only)\n' +
        '• Glow sticks\n' +
        '• Hoverboards\n' +
        '• Illegal drugs\n' +
        '• Laptops/tablets (non-sporting events)\n' +
        '• Laser pointers\n' +
        '• Outside food or beverages\n' +
        '• Glass or metal reusable straws\n' +
        '• Strollers (except for suite ticket holders)\n' +
        '• Toy weapons\n' +
        '• Wallet chains\n' +
        '• Weapons (including law enforcement not in official capacity)\n' +
        '• Wrapped gifts'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Honda Center?',
      answer: 'Exceptions to the bag policy may be made for medical reasons or baby food needs. These items will be subject to inspection.'
    }
  ],
};