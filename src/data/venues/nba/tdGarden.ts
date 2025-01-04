import type { VenueDetails } from '../../../types/venue';

export const tdGardenVenue: VenueDetails = {
  id: 'td-garden',
  name: 'TD Garden',
  type: 'arena',
  metadata: {
    title: 'TD Garden Bag Policy: Guide + Images | Celtics & Bruins',
    description: 'TD Garden allows small bags up to 4" x 6" x 1.5". On-site storage available through The Mobile Locker Company.',
  },
  capacity: 19156,
  location: {
    address: '100 Legends Way',
    city: 'Boston',
    state: 'MA',
    zip: '02114',
    coordinates: {
      latitude: 42.366303,
      longitude: -71.062228,
    },
    website: 'https://www.tdgarden.com/policies',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=TD+Garden+Boston&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/TD_Banknorth_Garden.jpg/640px-TD_Banknorth_Garden.jpg"
  },
  teams: [
    {
      name: 'Boston Celtics',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    },
    {
      name: 'Boston Bruins',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: '**Small bags, clutches, crossbodies and wristlets are permitted. Bags should not exceed 4" x 6" x 1.5"**. Exceptions will be made for diaper bags, breast pump bags, bags needed for medical purposes, and bags provided at purchase from Boston Proshop powered by \'47. All guests entering with diaper bags, breast pump bags, and bags needed for medical purposes are subject to visual search and x-ray screening upon entry. All permitted bags are subject to visual or x-ray screening upon entry.',
    allowedBags: ['clutch', 'fanny_pack', 'wristlet'],
    prohibitedBags: ['purse', 'backpack','tote','duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does TD Garden provide an area to store luggage?',
      answer: 'Yes, in partnership with The Mobile Locker Company, on-site bag storage is available for all events 2 hours prior to the start time through 1.5 hours after the event concludes. Storage is located on Legends Way.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at TD Garden?',
      answer: 'The following items are prohibited at TD Garden:\n\n' +
        '• Weapons/chains\n' +
        '• Outside food and beverages\n' +
        '• Drugs, including medical marijuana\n' +
        '• Vape pens and e-cigarettes\n' +
        '• Flammable items (lighters, aerosol cans)\n' +
        '• Laptop computers and tablets\n' +
        '• Professional cameras and recording devices\n' +
        '• Tripods and monopods\n' +
        '• Drones\n' +
        '• Selfie sticks or poles\n' +
        '• Large umbrellas (over 12 inches)\n' +
        '• Laser pointers\n' +
        '• Artificial noisemakers\n' +
        '• Glow sticks or glow jewelry\n' +
        '• Large banners, flags, signs\n' +
        '• Signs over 8.5" x 11"\n' +
        '• Inappropriate attire or signage\n' +
        '• Any items deemed dangerous or distracting'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at TD Garden?',
      answer: 'Yes, exceptions are made for diaper bags, breast pump bags, and bags needed for medical purposes. These bags are subject to visual search and x-ray screening upon entry.'
    }
  ],
};