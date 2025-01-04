import type { VenueDetails } from '../../../types/venue';

export const buschStadiumVenue: VenueDetails = {
  id: 'busch-stadium',
  name: 'Busch Stadium',
  type: 'stadium',
  metadata: {
    title: 'Busch Stadium Bag Policy: Guide + Images | St. Louis Cardinals',
    description: 'Busch Stadium allows bags, purses and soft-sided coolers not exceeding 10" x 8" x 10". All bags are subject to inspection upon entry.',
  },
  capacity: 44494,
  location: {
    address: '700 Clark Avenue',
    city: 'St. Louis',
    state: 'MO',
    zip: '63102',
    coordinates: {
      latitude: 38.622619,
      longitude: -90.193138,
    },
    website: 'https://www.mlb.com/cardinals/ballpark/security',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Busch+Stadium+St+Louis&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Busch_Stadium_pano_July_27_2019.jpg/640px-Busch_Stadium_pano_July_27_2019.jpg'
  },
  teams: [
    {
      name: 'St. Louis Cardinals',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Bags, purses and soft-sided coolers not exceeding 10" x 8" x 10" are permitted**. Medical bags and diaper bags accompanying a child are allowed with inspection. All bags will be inspected upon entry.',
    allowedBags: ['purse', 'clutch','wristlet','fanny_pack'],
    prohibitedBags: ['backpack', 'duffel', 'tote', 'briefcase', ],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Busch Stadium provide bag storage?',
      answer: 'No, Busch Stadium does not provide storage for bags or items that do not meet the size requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Busch Stadium?',
      answer: 'The following items are prohibited at Busch Stadium:\n\n' +
        '• Alcoholic beverages and non-alcoholic beer\n' +
        '• Aluminum cans/bottles, glass bottles/items, metal cans\n' +
        '• Animals (except service animals)\n' +
        '• Bags larger than 10" x 8" x 10"\n' +
        '• Balloons, beach balls and other inflatables\n' +
        '• Brooms\n' +
        '• Chairs, stools, including bleacher seats with backs\n' +
        '• Commercial camera equipment (lenses longer than camera body)\n' +
        '• Containers - aerosol cans, aluminum/glass bottles, flasks\n' +
        '• Coolers - hard-sided, Styrofoam, or soft-sided larger than 10" x 8" x 10"\n' +
        '• Drones\n' +
        '• Face paint, costume masks, head/face covering costumes\n' +
        '• Firearms\n' +
        '• Fireworks\n' +
        '• Flag poles, PVC pipe and other poles\n' +
        '• Flasks\n' +
        '• Hover boards/skate boards/roller skates/blades\n' +
        '• Illegal substances\n' +
        '• Knives longer than 4 inches when unopened\n' +
        '• Laser pointers/lights\n' +
        '• Luggage\n' +
        '• Noisemakers (including air horns, cowbells, Thunderstix)\n' +
        '• Obscene, offensive, or indecent clothing\n' +
        '• Stun guns/tasers\n' +
        '• Weapons of any kind\n' +
        '• Wrapped packages'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Busch Stadium?',
      answer: 'Yes, medical bags are permitted with proper documentation. Diaper bags are also allowed when accompanied by a child. All bags will be inspected upon entry.'
    }
  ],
};