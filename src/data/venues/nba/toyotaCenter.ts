import type { VenueDetails } from '../../../types/venue';

export const toyotaCenterVenue: VenueDetails = {
  id: 'toyota-center',
  name: 'Toyota Center',
  type: 'arena',
  metadata: {
    title: 'Toyota Center Bag Policy: Guide + Images | Houston Rockets',
    description: 'Toyota Center allows bags up to 7.75" x 5.25" x 2.25". Binbox lockers available for oversized bags starting at $10.',
  },
  capacity: 18055,
  location: {
    address: '1510 Polk Street',
    city: 'Houston',
    state: 'TX',
    zip: '77002',
    coordinates: {
      latitude: 29.750833,
      longitude: -95.362222,
    },
    website: 'https://www.toyotacenter.com/plan-your-visit/bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Toyota+Center+Houston&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Toyota_Center_entr.jpg/640px-Toyota_Center_entr.jpg"
  },
  teams: [
    {
      name: 'Houston Rockets',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    description: '**Bags no larger than 7.75" x 5.25" x 2.25"**, diaper bags and medical bags (subject to search upon entry). If fans choose to bring a bag that will not be allowed inside the arena, there will be lockers on site for rent. Binbox lockers are located outside of Team Shop and Skybridge entrance on Level 3 of the Tundra Garage. Pricing starts at $10.00 per checked bag which is non-refundable. Debit/credit and mobile payment, such as Apple or Google Pay, are acceptable forms of payment.',
    allowedBags: ['clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Toyota Center provide an area to store luggage?',
      answer: 'Yes, Binbox lockers are available outside of Team Shop and Skybridge entrance on Level 3 of the Tundra Garage. Pricing starts at $10.00 per checked bag (non-refundable). Debit/credit and mobile payment (Apple/Google Pay) are accepted.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Toyota Center?',
      answer: 'The following items are prohibited at Toyota Center:\n\n' +
        '• Alcoholic beverages and illegal drugs\n' +
        '• Outside food and drinks\n' +
        '• Glass, plastic, metal containers\n' +
        '• Video and audio recorders\n' +
        '• Laptops\n' +
        '• Fireworks\n' +
        '• Laser pointers\n' +
        '• Backpacks\n' +
        '• Coolers\n' +
        '• Knives and weapons\n' +
        '• Baby seats or carriers\n' +
        '• Unauthorized noise makers\n' +
        '• Glitter, confetti, streamers\n' +
        '• Helium balloons\n' +
        '• Basketballs\n' +
        '• Beach balls\n' +
        '• Parcels or packages\n' +
        '• Inflatables\n' +
        '• Personal motorized transporters (SkyWalkers)\n' +
        '• Selfie sticks\n' +
        '• GoPros\n' +
        '• Detachable phone lights\n' +
        '• Large bags'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Toyota Center?',
      answer: 'Yes, medical bags and diaper bags are permitted but are subject to search upon entry.'
    }
  ],
};