import type { VenueDetails } from '../../../types/venue';

export const guaranteedRateFieldVenue: VenueDetails = {
  id: 'guaranteed-rate-field',
  name: 'Guaranteed Rate Field',
  type: 'stadium',
  metadata: {
    title: 'Guaranteed Rate Field Bag Policy: Guide + Images | Chicago White Sox',
    description: 'Guaranteed Rate Field allows clear tote bags up to 12"x12"x6", small clutch purses up to 9"x5"x2", and clear food storage bags up to 1 gallon.',
  },
  capacity: 40615,
  location: {
    address: '333 West 35th Street',
    city: 'Chicago',
    state: 'IL',
    zip: '60616',
    coordinates: {
      latitude: 41.83,
      longitude: -87.633889,
    },
    website: 'https://www.mlb.com/whitesox/ballpark/information/guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Guaranteed+Rate+Field+Chicago&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Guaranteed_Rate_Field_pano_July_4_2019.jpg/640px-Guaranteed_Rate_Field_pano_July_4_2019.jpg'
  },
  teams: [
    {
      name: 'Chicago White Sox',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Only clear single compartment tote bags (12"x12"x6" or smaller), clutch purses (9"x5"x2" or smaller), and diaper bags with infant present are permitted**. Food is allowed in clear storage bags up to 1 gallon, and one factory-sealed water bottle up to 1 liter is permitted. Medical equipment is allowed with inspection. No backpacks or other bags are allowed.',
    allowedBags: ['clear', 'fanny_pack', 'clutch', 'clear_plastic', 'wristlet'],
    prohibitedBags: ['backpack', 'purse', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Guaranteed Rate Field provide bag storage?',
      answer: 'Guaranteed Rate Field does not provide storage for bags that do not meet size requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Guaranteed Rate Field?',
      answer: 'The following items are prohibited at Guaranteed Rate Field:\n\n' +
        '• Weapons of any type (including pepper spray)\n' +
        '• Firearms (regardless of permit)\n' +
        '• Backpacks and non-approved bags\n' +
        '• Selfie sticks\n' +
        '• Aerosol spray cans\n' +
        '• Bottles and cans\n' +
        '• Hard-sided coolers\n' +
        '• Alcoholic beverages\n' +
        '• Tobacco products (including e-cigarettes)\n' +
        '• Drones\n' +
        '• Glass containers\n' +
        '• Liquid containers (except approved water bottles)\n' +
        '• Any items deemed dangerous or inappropriate'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Guaranteed Rate Field?',
      answer: 'Yes, guests with required medical equipment (breast pumps, insulin, epi-pens, oxygen and other medical devices) are permitted to bring these items into the ballpark. All medical items will be subject to search.'
    }
  ],
};