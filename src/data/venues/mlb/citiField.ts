import type { VenueDetails } from '../../../types/venue';

export const citiFieldVenue: VenueDetails = {
  id: 'citi-field',
  name: 'Citi Field',
  type: 'stadium',
  metadata: {
    title: 'Citi Field Bag Policy: Guide + Images | NY Mets',
    description: 'Citi Field allows purses, diaper bags, tote bags, and soft-sided coolers up to 16"x16"x8". Clear backpacks with no obscured interior pockets are permitted.',
  },
  capacity: 41922,
  location: {
    address: '41 Seaver Way',
    city: 'Queens',
    state: 'NY',
    zip: '11368',
    coordinates: {
      latitude: 40.757222,
      longitude: -73.845833,
    },
    website: 'https://www.mlb.com/mets/ballpark/information/bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Citi+Field+Queens&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Citi_Field_td_%282019-05-26%29_04.jpg/640px-Citi_Field_td_%282019-05-26%29_04.jpg'
  },
  teams: [
    {
      name: 'New York Mets',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Purses, non-backpack diaper bags, tote bags, drawstring bags, messenger bags, and small soft-sided coolers that do not exceed 16"x16"x8" are permitted**. Totally clear backpacks with no obscured interior pockets are also allowed. All other backpacks are prohibited. Exceptions can be made for ADA/medical bags by Security Supervisors at entry gates. All bags are subject to search.',
    allowedBags: ['purse', 'tote','fanny_pack', 'clutch','wristlet'],
    prohibitedBags: ['backpack', 'duffel', 'briefcase'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Citi Field provide bag storage?',
      answer: 'No, there are no bag check facilities inside Citi Field.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Citi Field?',
      answer: 'The following items are prohibited at Citi Field:\n\n' +
        '• Alcoholic beverages and controlled substances\n' +
        '• Glass bottles and metal cans/containers (except reusable Swell/Yeti type bottles)\n' +
        '• Hard-sided coolers\n' +
        '• Non-clear backpacks\n' +
        '• Bags exceeding 16"x16"x8"\n' +
        '• Commercial audio/visual equipment\n' +
        '• Laser pointers\n' +
        '• Noisemaking devices\n' +
        '• Fireworks\n' +
        '• Animals (except service animals)\n' +
        '• Weapons\n' +
        '• Drones\n' +
        '• Frozen water bottles or juice boxes\n' +
        '• Verbally provocative or inflammatory clothing\n' +
        'Note: Citi Field reserves the right to determine what items are appropriate for entry.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Citi Field?',
      answer: 'Yes, exceptions to the bag policy can be made for bags used for ADA/medical reasons by the Security Supervisor at each entry gate. All bags will be searched prior to entry.'
    }
  ],
};