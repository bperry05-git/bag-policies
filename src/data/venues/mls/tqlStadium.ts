import type { VenueDetails } from '../../../types/venue';

export const tqlStadiumVenue: VenueDetails = {
  id: 'tql-stadium',
  name: 'TQL Stadium',
  type: 'stadium',
  metadata: {
    title: 'TQL Stadium Bag Policy: Guide + Images | FC Cincinnati',
    description: 'TQL Stadium requires clear bags under 12" x 12" x 6", small clutches up to 9" x 6", or 1-gallon freezer bags.',
  },
  capacity: 26000,
  location: {
    address: '1501 Central Parkway',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45214',
    coordinates: {
      latitude: 39.111944,
      longitude: -84.522222,
    },
    website: 'https://tqlstadium.com/bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=TQL+Stadium+Cincinnati&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/FC_Cincinnati_vs._D.C._United_at_TQL_Stadium_%2820210801140432%29.jpg/640px-FC_Cincinnati_vs._D.C._United_at_TQL_Stadium_%2820210801140432%29.jpg'
  },
  teams: [
    {
      name: 'FC Cincinnati',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: '**Clear bags up to 12" x 12" x 6"**, **clear 1-2 pocket backpacks/cinch sacks up to 12" wide**, **small clutch/bag/pack up to 9" x 6"**, or **one-gallon freezer bags**. Clear bags cannot have tinting or patterns. Medical exceptions available with inspection.',
    allowedBags: ['clear', 'clear_plastic', 'clutch'],
    prohibitedBags: ['purse', 'backpack', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does TQL Stadium provide bag storage?',
      answer: 'No, TQL Stadium does not provide storage for non-compliant bags.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at TQL Stadium?',
      answer: 'The following items are prohibited:\n\n' +
        '• Non-compliant bags and coolers\n' +
        '• Inflatable objects\n' +
        '• Aerosol cans\n' +
        '• Animals (except service animals)\n' +
        '• Professional cameras and equipment\n' +
        '• Confetti and streamers\n' +
        '• Pyrotechnics and fireworks\n' +
        '• Outside food/beverages (except sealed water up to 20oz)\n' +
        '• Electronic devices (laptops, tablets)\n' +
        '• Laser pointers\n' +
        '• Noisemaking devices\n' +
        '• Selfie sticks\n' +
        '• Non-compliant flag poles\n' +
        '• Weapons\n' +
        '• Opened umbrellas'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at TQL Stadium?',
      answer: 'Yes, exceptions are made for medically necessary items after proper inspection at the gate.'
    }
  ],
};