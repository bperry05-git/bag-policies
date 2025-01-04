import type { VenueDetails } from '../../../types/venue';

export const providenceParkVenue: VenueDetails = {
  id: 'providence-park',
  name: 'Providence Park',
  type: 'stadium',
  metadata: {
    title: 'Providence Park Bag Policy: Guide + Images | Portland Timbers',
    description: 'Providence Park enforces a clear bag policy. Clear bags up to 14" x 14" x 6" and small clutches up to 4.5" x 7.5" are permitted.',
  },
  capacity: 25218,
  location: {
    address: '1844 SW Morrison Street',
    city: 'Portland',
    state: 'OR',
    zip: '97205',
    coordinates: {
      latitude: 45.521389,
      longitude: -122.691667,
    },
    website: 'https://www.ptfcmap.com/pages/clear-bag-policy-bag-check',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Providence+Park+Portland&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Providence_Park_March_2015_%2816573948949%29.jpg/640px-Providence_Park_March_2015_%2816573948949%29.jpg'
  },
  teams: [
    {
      name: 'Portland Timbers',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: '**Clear bags up to 14" x 14" x 6"**, or **one-gallon freezer bags** permitted. **Non-clear clutches up to 4.5" x 7.5"** allowed with clear bag. Clear backpacks with max two pockets accepted. Lockers available outside Gates B, D, F via Droplocker app ($15).',
    allowedBags: ['clutch', 'wristlet', 'clear', 'clear_plastic',],
    prohibitedBags: ['backpack', 'purse','fanny_pack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Providence Park provide bag storage?',
      answer: 'Yes, lockers are available outside Gates B, D, and F through the Droplocker app for $15 per bag.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Providence Park?',
      answer: 'The following items are prohibited:\n\n' +
        '• Weapons and fireworks\n' +
        '• Aerosol cans\n' +
        '• Professional camera equipment\n' +
        '• Noisemakers and laser pointers\n' +
        '• Drones and hoverboards\n' +
        '• Selfie sticks\n' +
        '• Inflatable items\n' +
        '• View-obstructing banners\n' +
        '• Outside food/beverages (exceptions for medical/childcare)\n' +
        '• Bicycles and skateboards\n' +
        '• Animals (except service animals)\n' +
        '• Containers and coolers'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Providence Park?',
      answer: 'Yes, exceptions are made for medically necessary items and diaper bags after proper inspection.'
    }
  ],
};