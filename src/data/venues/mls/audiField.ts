import type { VenueDetails } from '../../../types/venue';

export const audiFieldVenue: VenueDetails = {
  id: 'audi-field',
  name: 'Audi Field',
  type: 'stadium',
  metadata: {
    title: 'Audi Field Bag Policy: Guide + Images | D.C. United',
    description: 'Audi Field has a size-restricted bag policy. Bags must not exceed 14" x 14" x 6". Backpacks are prohibited, but cinch bags meeting size requirements are allowed.',
  },
  capacity: 20000,
  location: {
    address: '100 Potomac Avenue SW',
    city: 'Washington',
    state: 'DC',
    zip: '20024',
    coordinates: {
      latitude: 38.868333,
      longitude: -77.012778,
    },
    website: 'https://www.dcunited.com/matchday/bags',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Audi+Field+Washington+DC&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Audi_Field_%2845116253932%29.jpg/640px-Audi_Field_%2845116253932%29.jpg'
  },
  teams: [
    {
      name: 'D.C. United',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: '**No bags larger than 14" x 14" x 6"** are allowed into Audi Field. Backpacks are prohibited, though cinch bags meeting size restrictions are permitted. Prohibited bags include coolers, luggage, and large purses exceeding size limits.',
    allowedBags: ['clutch','purse', 'fanny_pack','tote'],
    prohibitedBags: ['backpack', 'duffel', 'briefcase'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Audi Field provide bag storage?',
      answer: 'No, Audi Field does not provide storage for oversized bags or prohibited items.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Audi Field?',
      answer: 'The following items are prohibited at Audi Field:\n\n' +
        '• Aerosol cans\n' +
        '• Animals (except service animals)\n' +
        '• Artificial noisemakers and whistles\n' +
        '• Drones\n' +
        '• Frisbees and inflated balls\n' +
        '• Hard-sided coolers or containers\n' +
        '• Illegal substances\n' +
        '• Laser pointers\n' +
        '• Metal, plastic, or glass containers\n' +
        '• Outside food and beverage\n' +
        '• Poles and selfie sticks\n' +
        '• Professional cameras with lenses over 8 inches\n' +
        '• Rollerblades/skateboards/hoverboards\n' +
        '• Large seat cushions (over 16" x 16")\n' +
        '• Smoke devices and fireworks\n' +
        '• Streamers and confetti\n' +
        '• Umbrellas\n' +
        '• Weapons'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Audi Field?',
      answer: 'Yes, medical bags are permitted with proper documentation and security inspection.'
    }
  ],
};