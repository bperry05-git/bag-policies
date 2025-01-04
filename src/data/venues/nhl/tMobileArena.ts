import type { VenueDetails } from '../../../types/venue';

export const tMobileArenaVenue: VenueDetails = {
  id: 't-mobile-arena',
  name: 'T-Mobile Arena',
  type: 'arena',
  metadata: {
    title: 'T-Mobile Arena Bag Policy: Guide + Images | Vegas Golden Knights',
    description: 'T-Mobile Arena prohibits all bags and backpacks except small clutches up to 9" x 5" x 2". Bag check available on Toshiba Plaza for $20 per bag.',
  },
  capacity: 17500,
  location: {
    address: '3780 Las Vegas Boulevard South',
    city: 'Paradise',
    state: 'NV',
    zip: '89158',
    coordinates: {
      latitude: 36.103333,
      longitude: -115.178333,
    },
    website: 'https://www.t-mobilearena.com/plan-your-visit/bag-check-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=T-Mobile+Arena+Las+Vegas&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/T-Mobile_Arena_%2831534778122%29.jpg/640px-T-Mobile_Arena_%2831534778122%29.jpg'
  },
  teams: [
    {
      name: 'Vegas Golden Knights',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: '**No bags or backpacks permitted except for small clutches (9" x 5" x 2" max)**. Bag check available on Toshiba Plaza adjacent to Allegiant Stage, starting at $20 per bag (non-refundable, no cash). Opens with arena doors, closes 45 minutes post-event. No re-entry policy means checked bags are not accessible during events. Unclaimed bags go to Lost & Found. Some events may enforce modified bag policies.',
    allowedBags: ['clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'tote', 'fanny_pack'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does T-Mobile Arena provide bag storage?',
      answer: 'Yes, bag check is available on Toshiba Plaza adjacent to Allegiant Stage. Cost is $20 per bag (non-refundable). Only debit/credit cards and mobile payments accepted. Service opens with arena doors and closes 45 minutes after events.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at T-Mobile Arena?',
      answer: 'The following items are prohibited at T-Mobile Arena:\n\n' +
        '• Professional cameras (detachable lens/external flash)\n' +
        '• Recording devices (GoPro, Google Glass, etc.)\n' +
        '• Selfie sticks, tripods, monopods\n' +
        '• Outside food, beverages, alcohol\n' +
        '• Containers of any kind\n' +
        '• Laptops, tablets, two-way radios\n' +
        '• Weapons, firearms, pepper spray\n' +
        '• Illegal substances\n' +
        '• Flammable liquids, aerosols, markers\n' +
        '• Flashlights, lasers, glow sticks\n' +
        '• Noisemaking devices\n' +
        '• Balloons, balls, projectiles\n' +
        '• Recreational transport devices\n' +
        '• Coolers, chairs, pointed umbrellas\n' +
        '• Flowers (unless permitted)\n' +
        '• Seat cushions, booster seats\n' +
        '• Masks, chains, studded accessories\n' +
        '• Drones (without consent)\n' +
        '• Unapproved promotional materials\n' +
        '• Offensive clothing/signs\n' +
        '• Signs over 11" x 17" or on poles\n' +
        '• Animals (except service animals)'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at T-Mobile Arena?',
      answer: 'Accommodations are made for medical necessities. Please contact the venue in advance for specific requirements and approvals.'
    }
  ],
};