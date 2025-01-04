import type { VenueDetails } from '../../../types/venue';

export const canadianTireCentreVenue: VenueDetails = {
  id: 'canadian-tire-centre',
  name: 'Canadian Tire Centre',
  type: 'arena',
  metadata: {
    title: 'Canadian Tire Centre Bag Policy: Guide + Images | Ottawa Senators',
    description: 'Canadian Tire Centre enforces strict bag restrictions. Small clutch bags and clear bags are permitted with size limitations. All bags are subject to security screening.',
  },
  capacity: 18652,
  location: {
    address: '1000 Palladium Drive',
    city: 'Ottawa',
    state: 'ON',
    zip: 'K2V 1A5',
    coordinates: {
      latitude: 45.296944,
      longitude: -75.927222,
    },
    website: 'https://www.canadiantirecentre.com/guide-a-a-z/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Canadian+Tire+Centre+Ottawa&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Canadian_Tire_Centre_Exterior_in_October_2024.jpg/640px-Canadian_Tire_Centre_Exterior_in_October_2024.jpg'
  },
  teams: [
    {
      name: 'Ottawa Senators',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: '**Bags must be 12" x 9" x 5" or smaller** and will undergo contactless security screening. Medical and childcare/diaper bags are permitted with mandatory X-ray screening',
    allowedBags: ['wristlet', 'clutch', 'purse','fanny_pack'],
    prohibitedBags: ['backpack', 'duffel', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Canadian Tire Centre provide bag storage?',
      answer: 'Canadian Tire Centre does not provide storage for oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Canadian Tire Centre?',
      answer: 'The following items are prohibited at Canadian Tire Centre:\n\n' + 
        '• Alcoholic beverages and illegal drugs\n' +
        '• Outside food and drinks\n' +
        '• Drones\n' +
        '• Professional cameras, flash photography, tripods, and monopods\n' +
        '• Video and audio recorders\n' +
        '• Glass, plastic, metal containers, and flasks\n' +
        '• Fireworks and flares\n' +
        '• Laser pointers\n' +
        '• Coolers (hard or soft side)\n' +
        '• Knives and weapons of any kind\n' +
        '• Baby seats or carriers\n' +
        '• Artificial noise makers (air horns, drums, whistles)\n' +
        '• Glitter and confetti\n' +
        '• Balloons\n' +
        '• Glow sticks\n' +
        '• Frisbees\n' +
        '• Permanent markers and spray paint\n' +
        '• Streamers\n' +
        '• Beach balls\n' +
        '• Parcels or packages\n' +
        '• Inflatables\n' +
        '• Brooms\n' +
        '• Chairs and stools\n' +
        '• Pamphlets and product samples\n' +
        '• Skateboards, rollerblades, bicycles, and helmets\n' +
        '• Laptop and tablet computers\n' +
        '• Two-way radios\n' +
        '• Flashlights\n' +
        '• Backpacks and bags (except those meeting size requirements)\n' +
        '• Any other items deemed dangerous or inappropriate'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Canadian Tire Centre?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};