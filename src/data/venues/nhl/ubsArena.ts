import type { VenueDetails } from '../../../types/venue';

export const ubsArenaVenue: VenueDetails = {
  id: 'ubs-arena',
  name: 'UBS Arena',
  type: 'arena',
  metadata: {
    title: 'UBS Arena Bag Policy: Guide + Images | NY Islanders',
    description: 'UBS Arena allows bags up to 12" x 12" x 6" with screening. All backpacks prohibited. Medical and baby bags permitted with screening. Bag check available in Great Hall.',
  },
  capacity: 17255,
  location: {
    address: '2400 Hempstead Turnpike',
    city: 'Elmont',
    state: 'NY',
    zip: '11003',
    coordinates: {
      latitude: 40.714167,
      longitude: -73.726111,
    },
    website: 'https://ubsarena.com/bag-policy-prohibited-items/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=UBS+Arena+Elmont&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/UBS_Arena-10-8-22-7.jpg/640px-UBS_Arena-10-8-22-7.jpg'
  },
  teams: [
    {
      name: 'New York Islanders',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: '**Bags no larger than 12" x 12" x 6"** are permitted and will be subject to x-ray or visual screening depending on size. Backpacks of all sizes are prohibited. Medical bags and baby bags are permitted with screening. All other bags not allowed. Bag check available in the Great Hall.',
    allowedBags: ['clutch', 'purse', 'fanny_pack'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does UBS Arena provide bag storage?',
      answer: 'Yes, bag check is available in the Great Hall for items that do not meet the size requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at UBS Arena?',
      answer: 'The following items are prohibited at UBS Arena:\n\n' +
        '• Weapons of any kind (mace, pepper spray, knives, etc.)\n' +
        '• Bags larger than 12" x 12" x 6" and all backpacks\n' +
        '• Professional cameras (detachable lens over 3")\n' +
        '• Laptops and two-way radios\n' +
        '• Audio/video recording devices\n' +
        '• Laser pointers and flashlights\n' +
        '• Illegal drugs/substances\n' +
        '• Outside alcohol\n' +
        '• Fireworks and projectiles\n' +
        '• Signs/flags larger than 11" x 17" or on poles\n' +
        '• Balloons and inflatables\n' +
        '• Unapproved pamphlets\n' +
        '• Firestarters and lighters\n' +
        '• Containers (cans, bottles, etc.)\n' +
        '• Pets (except service animals)\n' +
        '• Selfie sticks and poles\n' +
        '• Coolers of any size\n' +
        '• Offensive signage/clothing\n' +
        '• Large umbrellas\n' +
        '• Outside food/beverage\n' +
        '• Noisemakers\n' +
        '• Optical illusions\n' +
        '• Drones\n' +
        '• Flowers (unless allowed)\n' +
        '• Skateboards and rollerblades\n\n' +
        'Note: Medical exceptions available for food/beverage. Additional items may be prohibited by specific shows.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at UBS Arena?',
      answer: 'Yes, medical bags and baby bags are permitted but must be screened before entry.'
    }
  ],
};