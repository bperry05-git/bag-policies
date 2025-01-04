import type { VenueDetails } from '../../../types/venue';

export const stateFarmArenaVenue: VenueDetails = {
  id: 'state-farm-arena',
  name: 'State Farm Arena',
  type: 'arena',
  metadata: {
    title: 'State Farm Arena Bag Policy: Guide + Images | ATL Hawks',
    description: 'State Farm Arena allows bags up to 14" x 14" x 6". No clear bag requirement. Single-compartment drawstring bags and fashion backpacks permitted.',
  },
  capacity: 16600,
  location: {
    address: '1 State Farm Drive',
    city: 'Atlanta',
    state: 'GA',
    zip: '30303',
    coordinates: {
      latitude: 33.757222,
      longitude: -84.396389,
    },
    website: 'https://www.statefarmarena.com/plan-your-visit/bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=State+Farm+Arena+Atlanta&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/State_Farm_%28Phillips%29_Arena%2C_Atlanta%2C_GA_%2833597622678%29.jpg/640px-State_Farm_%28Phillips%29_Arena%2C_Atlanta%2C_GA_%2833597622678%29.jpg"
  },
  teams: [
    {
      name: 'Atlanta Hawks',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {

    description: '**Bags 14" x 14" x 6" or smaller are permitted**. All bags are subject to screening. Approved bags include single-compartment drawstring bags, purses, or fashion backpacks that meet size requirements. Medical bags and diaper bags accompanying a child are exempt from size requirements but are subject to search. Parents may bring plastic bottles of formula or milk. Strollers must be checked at Gate 1 Guest Service Center.',
    allowedBags: [, 'purse', 'clutch', 'wristlet','fanny_pack'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does State Farm Arena provide an area to store luggage?',
      answer: 'No it does not. But strollers can be checked inside Gate 1 at the Guest Service Center.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at State Farm Arena?',
      answer: 'The following items are prohibited at State Farm Arena:\n\n' +
        '• Weapons (guns, knives, pepper spray, mace, chains, spiked bracelets)\n' +
        '• Aerosol cans\n' +
        '• Bags larger than 14" x 14" x 6"\n' +
        '• Hard-sided bags of any size\n' +
        '• Standard backpacks (except approved drawstring bags)\n' +
        '• Outside food or beverages\n' +
        '• Noise makers (whistles, air horns, vuvuzelas)\n' +
        '• Drugs or drug paraphernalia\n' +
        '• Lighters/torch lighters\n' +
        '• Vapes\n' +
        '• Fireworks\n' +
        '• Projectiles (beach balls, frisbees, bats)\n' +
        '• Laser pointers\n' +
        '• Optical illusion items\n' +
        '• Cameras with detachable lenses or fixed lenses over 3 inches\n' +
        '• Poles, selfie-sticks, tripods\n' +
        '• Selfie lights\n' +
        '• Drones\n' +
        '• Laptops (without prior approval)\n' +
        '• iPads/tablets (permitted at Hawks games only)\n' +
        '• Inappropriate clothing or signs\n' +
        '• Banners/signs larger than 11" x 17"\n' +
        '• Signs on poles or sticks'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at State Farm Arena?',
      answer: 'Medical bags and diaper bags accompanying a child are exempt from size requirements but are subject to search. Parents may bring plastic bottles of formula or milk inside the arena.'
    }
  ],
};