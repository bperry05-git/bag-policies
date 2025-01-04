import type { VenueDetails } from '../../../types/venue';

export const allianzFieldVenue: VenueDetails = {
  id: 'allianz-field',
  name: 'Allianz Field',
  type: 'stadium',
  metadata: {
    title: 'Allianz Field Bag Policy: Guide + Images | Minnesota United FC',
    description: 'Allianz Field enforces a clear bag policy. Clear bags up to 12" x 6" x 12" and small clutch bags up to 5" x 9" are permitted.',
  },
  capacity: 19400,
  location: {
    address: '400 Snelling Avenue North',
    city: 'Saint Paul',
    state: 'MN',
    zip: '55104',
    coordinates: {
      latitude: 44.952778,
      longitude: -93.165556,
    },
    website: 'https://www.mnufc.com/stadium/gameday/bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Allianz+Field+Saint+Paul&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Allianz_Field_-_MNUFC_Minnesota_United_st._Paul_Minnesota_MLS_%2840636734693%29.jpg/640px-Allianz_Field_-_MNUFC_Minnesota_United_st._Paul_Minnesota_MLS_%2840636734693%29.jpg'
  },
  teams: [
    {
      name: 'Minnesota United FC',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: '**Clear bags up to 12" x 6" x 12"** or one-gallon clear freezer bags are permitted. Small clutch bags or purses up to 5" x 9" are allowed, with or without a strap. Diaper and medical bags are permitted with no size restrictions but will be checked and tagged by security.',
    allowedBags: ['clutch', 'clear', 'wristlet', 'clear_plastic'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'duffel', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Allianz Field provide bag storage?',
      answer: 'No, Allianz Field does not provide storage for prohibited bags or items.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Allianz Field?',
      answer: 'The following items are prohibited at Allianz Field:\n\n' +
        '• Aerosol cans\n' +
        '• Alcohol and illegal drugs\n' +
        '• Animals (except service animals)\n' +
        '• Backpacks, luggage, grocery bags, duffel bags\n' +
        '• Balloons\n' +
        '• Sports balls (soccer balls, beach balls, etc.)\n' +
        '• Camcorders and tripods\n' +
        '• Camera lenses over 6 inches long\n' +
        '• Cans, glass bottles, or thermoses\n' +
        '• Chairbacks\n' +
        '• Confetti and streamers\n' +
        '• Coolers of any kind\n' +
        '• Fireworks\n' +
        '• Outside food\n' +
        '• Laptops, tablets, large electronic devices\n' +
        '• Laser pointers\n' +
        '• Permanent markers and paint\n' +
        '• Noisemaking devices\n' +
        '• Projectiles (sticks, bats, poles, frisbees)\n' +
        '• Selfie sticks\n' +
        '• Umbrellas\n' +
        '• Video cameras\n' +
        '• Weapons'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Allianz Field?',
      answer: 'Yes, medical bags are permitted with no size restrictions but will be checked and tagged by security upon entry. Diaper bags are also allowed with the same conditions.'
    }
  ],
};