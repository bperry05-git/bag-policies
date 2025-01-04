import type { VenueDetails } from '../../../types/venue';

export const chaseStadiumVenue: VenueDetails = {
  id: 'chase-stadium',
  name: 'Chase Stadium',
  type: 'stadium',
  metadata: {
    title: 'Chase Stadium Bag Policy: Guide + Images | Inter Miami CF',
    description: 'Chase Stadium enforces a clear bag policy. Clear bags up to 12" x 6" x 12" and small clutch bags up to 4.5" x 6.5" are permitted.',
  },
  capacity: 18000,
  location: {
    address: '1350 NW 55th Street',
    city: 'Fort Lauderdale',
    state: 'FL',
    zip: '33309',
    coordinates: {
      latitude: 26.190833,
      longitude: -80.160556,
    },
    website: 'https://www.intermiamicf.com/matchday/clear-bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Chase+Stadium+Fort+Lauderdale&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Inter_Miami_vs_LAFC_by_Edwardpino_%2820220313083613%29.jpg/640px-Inter_Miami_vs_LAFC_by_Edwardpino_%2820220313083613%29.jpg'
  },
  teams: [
    {
      name: 'Inter Miami CF',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: 'Permitted bags include **clear plastic/vinyl/PVC bags up to 12" x 6" x 12"**, **one-gallon clear freezer bags**, and **small clutch bags up to 4.5" x 6.5"**. Medical items require pre-approval. Diapers/wipes allowed in clear bags.',
    allowedBags: ['clutch', 'wristlet', 'clear', 'clear_plastic',],
    prohibitedBags: ['backpack', 'purse','fanny_pack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Chase Stadium provide bag storage?',
      answer: 'No, there are no provisions to check items at the gates. Guests must return prohibited items to their vehicles or dispose of them.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Chase Stadium?',
      answer: 'The following items are prohibited:\n\n' +
        '• Aerosols and pressurized containers\n' +
        '• Animals (except service animals)\n' +
        '• Oversized bags/purses (exceeding 12" x 6" x 12")\n' +
        '• Large banners/signs (over 2\' x 3\') and poles\n' +
        '• Professional cameras and equipment\n' +
        '• Confetti and streamers\n' +
        '• Outside food/beverages and coolers\n' +
        '• Drones and aerial devices\n' +
        '• Fireworks and incendiary devices\n' +
        '• Laptops and tablets\n' +
        '• Laser pointers\n' +
        '• Noisemaking devices\n' +
        '• Projectiles and throwable objects\n' +
        '• Strollers and infant carriers\n' +
        '• Umbrellas\n' +
        '• Weapons of any kind'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Chase Stadium?',
      answer: 'Medical items must be pre-approved by Stadium management. Contact members@intermiamicf.com for approval. All items are subject to inspection at entry.'
    }
  ],
};