import type { VenueDetails } from '../../../types/venue';

export const bellCentreVenue: VenueDetails = {
  id: 'bell-centre',
  name: 'Bell Centre',
  type: 'arena',
  metadata: {
    title: 'Bell Centre Bag and Security Policy: Guide + Images | Montreal Canadiens',
    description: 'Comprehensive bag and security guidelines for Bell Centre. Strict policies on bag sizes, prohibited items, and venue entry requirements.',
  },
  capacity: 21302,
  location: {
    address: '1909 Avenue des Canadiens-de-Montreal',
    city: 'Montreal',
    state: 'QC',
    zip: 'H4B 5G0',
    coordinates: {
      latitude: 45.496111,
      longitude: -73.569444,
    },
    website: 'https://centrebell.ca/en/security',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Bell+Centre+Montreal&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Centre_Bell_08.jpg/640px-Centre_Bell_08.jpg'
  },
  teams: [
    {
      name: 'Montreal Canadiens',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: 'Strict bag policy limiting **bag sizes to 35cm x 35cm x 15.25cm (approximately 13.8" x 13.8" x 6")**. Customers are encouraged to bring bags that can be easily stowed under seats. All bags are subject to thorough security inspection.',
    allowedBags: ['clutch','purse','fanny_pack', 'wristlet'],
    prohibitedBags: [
      'backpack', 
      'tote', 
      'duffel'
    ],
    maxBagSize: {
      width: 35,
      height: 35,
      depth: 15.25,
      unit: 'cm'
    }
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Bell Centre provide bag storage?',
      answer: 'Bell Centre does not provide an area to check or store oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Bell Centre?',
      answer: 'Prohibited items include:\n\n' +
        '• Backpacks, coolers, and sports bags\n' +
        '• Bags exceeding 35cm x 35cm x 15.25cm\n' +
        '• Weapons, knives, aerosols, pepper spray\n' +
        '• Hard-covered briefcases\n' +
        '• Flags, banners, or posters that obstruct views\n' +
        '• Outside food and drinks\n' +
        '• Alcohol, glass bottles, and cans\n' +
        '• Professional cameras with lenses over 2.5" or detachable lenses\n' +
        '• Professional video/audio recording equipment\n' +
        '• Selfie sticks or monopods\n' +
        '• Drones\n' +
        '• Noise-making objects (bells, horns)\n' +
        '• Animals (except service animals)\n' +
        '• Fireworks or pyrotechnical devices\n' +
        '• Laser pointers\n' +
        '• Computers and tablets\n' +
        '• Souvenir cups\n' +
        '• Any item deemed suspicious by security personnel'
    },
    {
      id: 'medical-items',
      question: 'Are medical bags or items allowed?',
      answer: 'Medical items and bags may be permitted with proper documentation. Guests with medical necessities should contact venue security in advance for specific guidance.'
    },
    {
      id: 'bag-size-recommendations',
      question: 'What bag sizes are recommended?',
      answer: 'Bell Centre recommends bringing bags that can be easily stowed under seats, with a maximum size of 35cm x 35cm x 15.25cm (approximately 13.8" x 13.8" x 6").'
    }
  ],
};