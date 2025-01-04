import type { VenueDetails } from '../../../types/venue';

export const amalieArenaVenue: VenueDetails = {
  id: 'amalie-arena',
  name: 'Amalie Arena',
  type: 'arena',
  metadata: {
    title: 'Amalie Arena Bag Policy: Guide + Images | Tampa Bay Lightning',
    description: 'Amalie Arena prohibits bags larger than 12"x12"x12". For hockey games, bags over 4"x6"x1.5" require x-ray screening. All large bags must be screened.',
  },
  capacity: 19092,
  location: {
    address: '401 Channelside Drive',
    city: 'Tampa',
    state: 'FL',
    zip: '33602',
    coordinates: {
      latitude: 27.942778,
      longitude: -82.451944,
    },
    website: 'https://www.amaliearena.com/arena-info/policies',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Amalie+Arena+Tampa&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/St_Pete_Times_Forum_in_2006.jpg/640px-St_Pete_Times_Forum_in_2006.jpg'
  },
  teams: [
    {
      name: 'Tampa Bay Lightning',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: '**Bags cannot exceed 12"x12"x12". For hockey games, bags larger than 4"x6"x1.5" require x-ray screening. All large bags (except small clutches) must go through x-ray scanners**. Medical and parenting bags may exceed size limits but require additional screening.',
    allowedBags: ['clutch', 'fanny_pack', 'purse'],
    prohibitedBags: ['backpack', 'duffel', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Amalie Arena provide bag storage?',
      answer: 'Amalie Arena does not provide storage for bags that do not meet size requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Amalie Arena?',
      answer: 'The following items are prohibited at Amalie Arena:\n\n' +
        '• Professional cameras (hockey: 6"+ lens)\n' +
        '• Video/audio recording devices\n' +
        '• Camera bags\n' +
        '• Binocular bags (binoculars allowed)\n' +
        '• Laser pointers\n' +
        '• Weapons\n' +
        '• Bottles and containers\n' +
        '• Sharp objects\n' +
        '• Sticks and poles\n' +
        '• Fireworks\n' +
        '• Pepper spray/mace\n' +
        '• Outside food/beverages\n' +
        '• Drugs/controlled substances\n' +
        '• Chairs\n' +
        '• Wrapped gifts\n' +
        '• Large/offensive banners\n' +
        '• Noisemakers/horns\n' +
        '• Wallet chains\n' +
        '• Sharp spikes\n' +
        'Note: "Point and click" cameras allowed for concerts/events.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Amalie Arena?',
      answer: 'Yes, medical and parenting bags may exceed standard size limits but will require additional search procedures.'
    }
  ],
};