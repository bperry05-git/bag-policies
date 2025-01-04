import type { VenueDetails } from '../../../types/venue';

export const fedExForumVenue: VenueDetails = {
  id: 'fedex-forum',
  name: 'FedExForum',
  type: 'arena',
  metadata: {
    title: 'FedExForum Bag Policy: Guide + Images | Memphis Grizzlies',
    description: 'FedExForum enforces a clear bag policy. Only clear bags up to 6" x 8" x 2", small wallets, and clear plastic storage bags are permitted.',
  },
  capacity: 18119,
  location: {
    address: '191 Beale Street',
    city: 'Memphis',
    state: 'TN',
    zip: '38103',
    coordinates: {
      latitude: 35.138333,
      longitude: -90.050556,
    },
    website: 'https://fedexforum.com/arena-policy-updates',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=FedExForum+Memphis&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Forum1memphis.jpg/640px-Forum1memphis.jpg"
  },
  teams: [
    {
      name: 'Memphis Grizzlies',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    description: 'FedExForum has implemented a CLEAR BAG POLICY that limits the size and type of bags that may be brought into any event. **Only clear bags made of plastic, vinyl or PVC no larger than 6" x 8" x 2", one quart or smaller clear plastic storage/freezer bag (Ziploc or similar), and wallets (sized to carried in the front or back pocket) no larger than 5" x 3.5" are allowed**. Bags may not have an all-over print or decoration that prohibits full view of contents. The bag may contain a strap, but metal or chain straps are prohibited.',
    allowedBags: ['clear', 'clear_plastic', 'wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does FedExForum provide an area to store luggage?',
      answer: 'FedExForum does not provide an area to check oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at FedExForum?',
      answer: 'The following items are prohibited at FedExForum:\n\n' +
        '• Fireworks\n' +
        '• Beverages and outside food\n' +
        '• Camcorders and cameras with lens larger than 3 inches\n' +
        '• Mace or pepper spray\n' +
        '• Poles and selfie-sticks\n' +
        '• Missile-like objects (including frisbees)\n' +
        '• Weapons of any type\n' +
        '• Aerosol cans\n' +
        '• Beach balls\n' +
        '• Bats\n' +
        '• Illegal substances\n' +
        '• Banners that obstruct views\n' +
        '• Offensive or derogatory signage\n' +
        '• Tripods\n' +
        '• Air horns or mechanical noise makers\n' +
        '• Animals (excluding service animals)\n' +
        '• Laptop computers\n' +
        '• Laser pens or products\n' +
        '• Bags/Backpacks exceeding 6" x 8" x 2"\n' +
        '• Any other item deemed unacceptable by FedExForum'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at FedExForum?',
      answer: 'Medical bags and equipment are permitted with proper documentation and are subject to inspection.'
    }
  ],
};