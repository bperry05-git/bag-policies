import type { VenueDetails } from '../../../types/venue';

export const climatePledgeArenaVenue: VenueDetails = {
  id: 'climate-pledge-arena',
  name: 'Climate Pledge Arena',
  type: 'arena',
  metadata: {
    title: 'Climate Pledge Arena Bag Policy: Guide + Images | Seattle Kraken',
    description: 'Climate Pledge Arena allows one clear bag up to 14" x 14" x 6" or small clutch up to 4" x 6" x 1.5". Medical and diaper bags permitted with inspection.',
  },
  capacity: 17151,
  location: {
    address: '334 1st Avenue North',
    city: 'Seattle',
    state: 'WA',
    zip: '98109',
    coordinates: {
      latitude: 47.622056,
      longitude: -122.354167,
    },
    website: 'https://www.climatepledgearena.com/arena-guide/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Climate+Pledge+Arena+Seattle&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Climate_Pledge_Arena_N.jpg/640px-Climate_Pledge_Arena_N.jpg'
  },
  teams: [
    {
      name: 'Seattle Kraken',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: 'Guests are permitted to bring **ONE clear bag not exceeding 14" x 14" x 6" in size OR a small clutch/purse/wallet not exceeding 4" x 6" x 1.5"**. Items within clear bags must comply with permitted item list. Medical bags and diaper bags are permitted but will be searched and examined. Guests are encouraged to bring only what is needed.',
    allowedBags: ['clear', 'clutch', 'wristlet', 'fanny_pack'],
    prohibitedBags: ['backpack', 'duffel', 'purse', 'briefcase', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Climate Pledge Arena provide bag storage?',
      answer: 'Climate Pledge Arena does not provide storage for oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Climate Pledge Arena?',
      answer: 'The following items are prohibited at Climate Pledge Arena:\n\n' +
        '• Professional cameras with detachable lenses or external flash units\n' +
        '• Recording equipment (except smartphones) for audio, image, or video\n' +
        '• Weapons including guns, firearms, and knives of any size\n' +
        '• Stun guns, tasers, bats, or poles\n' +
        '• Martial arts weapons, night sticks, nunchucks, billy clubs\n' +
        '• Self-defense sprays (mace & pepper spray)\n' +
        '• Noisemaking devices (whistles, air horns, vuvuzelas, cow bells)\n' +
        '• Laptops and tablets\n' +
        '• Poster tubes\n' +
        '• Laser pointing devices\n' +
        '• Flashlights or similar devices\n' +
        '• Any other items deemed inappropriate or dangerous\n' +
        '• Items that do not comply with permitted item list'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Climate Pledge Arena?',
      answer: 'Yes, medical bags are permitted but will be searched and examined. Guests are encouraged to bring only what is needed.'
    }
  ],
};