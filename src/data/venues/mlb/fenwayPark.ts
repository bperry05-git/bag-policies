import type { VenueDetails } from '../../../types/venue';

export const fenwayParkVenue: VenueDetails = {
  id: 'fenway-park',
  name: 'Fenway Park',
  type: 'stadium',
  metadata: {
    title: 'Fenway Park Bag Policy: Guide + Images | Boston Red Sox',
    description: 'Fenway Park allows single-compartment bags up to 12"x12"x6". Clear bags of the same size are encouraged. Backpacks and multi-compartment bags are not permitted.',
  },
  capacity: 37755,
  location: {
    address: '4 Jersey Street',
    city: 'Boston',
    state: 'MA',
    zip: '02215',
    coordinates: {
      latitude: 42.346389,
      longitude: -71.097222,
    },
    website: 'https://www.mlb.com/redsox/ballpark/information/guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Fenway+Park+Boston&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Fenway_Park_20-April-2021.jpg/640px-Fenway_Park_20-April-2021.jpg'
  },
  teams: [
    {
      name: 'Boston Red Sox',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Bags must be single-compartment and no larger than 12"x12"x6". Clear bags of the same size are encouraged for faster entry. Backpacks, backpack-style purses, and multi-compartment bags are NOT permitted**. Exceptions made for diaper bags and medical equipment bags. Third-party locker storage is available for a fee at the Lansdowne Garage across from Gate E.',
    allowedBags: ['purse','fanny_pack','clutch','wristlet', 'clear', 'clear_plastic'],
    prohibitedBags: ['backpack', 'tote','duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Fenway Park provide bag storage?',
      answer: 'Yes, fans with non-permitted bags can store them for a fee with a third-party locker company located on top of the Lansdowne Garage across from Gate E.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Fenway Park?',
      answer: 'The following items are prohibited at Fenway Park:\n\n' +
        '• Firearms and ammunition (including licensed individuals)\n' +
        '• Knives, box cutters, and tools\n' +
        '• Marijuana (including medical)\n' +
        '• Pepper spray or mace\n' +
        '• Hard-sided coolers\n' +
        '• Cans, bottles, glass containers (except sealed 16oz water)\n' +
        '• Alcoholic beverages and illegal substances\n' +
        '• Noise-making devices\n' +
        '• Laser pointers\n' +
        '• Costumes and masks\n' +
        '• Offensive/disruptive clothing\n' +
        '• Signs larger than 24"x18"\n' +
        '• Flags larger than 18"x24" (unless for official celebrations)\n' +
        '• Professional audio/visual equipment\n' +
        '• Tripods and monopods\n' +
        '• Detachable lenses longer than 6 inches\n' +
        'Note: Umbrellas are allowed but only during rain delays.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Fenway Park?',
      answer: 'Yes, bags containing essential medical equipment are permitted as exceptions to the standard bag policy. All bags will be subject to search upon entry.'
    }
  ],
};