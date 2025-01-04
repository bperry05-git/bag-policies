import type { VenueDetails } from '../../../types/venue';

export const americaFirstFieldVenue: VenueDetails = {
  id: 'america-first-field',
  name: 'America First Field',
  type: 'stadium',
  metadata: {
    title: 'America First Field Bag Policy: Guide + Images | Real Salt Lake',
    description: 'America First Field enforces a strict no-bag policy. Only bags up to 4" x 6" x 2" are permitted, with exceptions for medical and diaper bags.',
  },
  capacity: 20213,
  location: {
    address: '9256 South State Street',
    city: 'Sandy',
    state: 'UT',
    zip: '84070',
    coordinates: {
      latitude: 40.582923,
      longitude: -111.893156,
    },
    website: 'https://americafirstfield.com/no-bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=America+First+Field+Sandy&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Rio_Tinto_Stadium_%289467294883%29.jpg/640px-Rio_Tinto_Stadium_%289467294883%29.jpg'
  },
  teams: [
    {
      name: 'Real Salt Lake',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: '**Only bags smaller than 4" x 6" x 2" are permitted**. Medical, cultural, and diaper bags are allowed with security inspection. Basic baby necessities (formula, food, bottles) are permitted. Water bottles up to 32 oz are allowed if factory-sealed or empty upon entry.',
       allowedBags: ['clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'duffel', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does America First Field provide bag storage?',
      answer: 'No, America First Field does not provide storage for bags that exceed size restrictions.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at America First Field?',
      answer: 'The following items are prohibited:\n\n' +
        '• Bags larger than 4" x 6" x 2"\n' +
        '• Weapons and fireworks\n' +
        '• Illegal drugs and harmful chemicals\n' +
        '• Projectile objects\n' +
        '• Signs and banners\n' +
        '• Aerosol cans\n' +
        '• Professional camera equipment\n' +
        '• Laser pointers\n' +
        '• Hover boards and drones\n' +
        '• Outside food and beverages (except water)\n' +
        '• Noisemakers and horns\n' +
        '• Pets (except service animals)\n' +
        '• Confetti and streamers\n' +
        '• Beach balls\n' +
        '• Any items deemed inappropriate by stadium staff'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at America First Field?',
      answer: 'Yes, medical, cultural, and diaper bags are permitted but must be searched by security upon entry.'
    }
  ],
};