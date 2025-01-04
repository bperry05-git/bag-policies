import type { VenueDetails } from '../../../types/venue';

export const angelStadiumVenue: VenueDetails = {
  id: 'angel-stadium',
  name: 'Angel Stadium',
  type: 'stadium',
  metadata: {
    title: 'Angel Stadium Bag Policy: Guide + Images | LA Angels',
    description: 'Angel Stadium enforces a strict bag policy. Purses up to 12" x 12" and clear bags up to 12.75" x 6.5" x 12.75" are permitted after inspection.',
  },
  capacity: 45517,
  location: {
    address: '2000 East Gene Autry Way',
    city: 'Anaheim',
    state: 'CA',
    zip: '92806',
    coordinates: {
      latitude: 33.800278,
      longitude: -117.882778,
    },
    website: 'https://www.mlb.com/angels/ballpark/information/guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Angel+Stadium+Anaheim&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Angel_Stadium_of_Anaheim_%2831714556991%29.jpg/640px-Angel_Stadium_of_Anaheim_%2831714556991%29.jpg'
  },
  teams: [
    {
      name: 'Los Angeles Angels',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Purses or bags that are 12" x 12" with a single zipper closure/flap or smaller, clear bags (plastic or vinyl) with no obscured interior pockets that do not exceed 12.75" x 6.5" x 12.75"**. Medically necessary items, including diaper bags that accompany an infant, are permitted with proper documentation.',
    allowedBags: ['purse','fanny_pack','clutch','wristlet', 'clear', 'clear_plastic'],
    prohibitedBags: ['backpack', 'duffel', 'camera_bag', 'briefcase', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Angel Stadium provide an area to store luggage?',
      answer: 'Angel Stadium does not provide an area to check oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Angel Stadium?',
      answer: 'The following items are prohibited at Angel Stadium:\n\n' + 
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
      question: 'Are medical bags allowed at Angel Stadium?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};