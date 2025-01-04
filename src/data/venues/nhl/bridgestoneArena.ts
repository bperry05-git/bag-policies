import type { VenueDetails } from '../../../types/venue';

export const bridgestoneArenaVenue: VenueDetails = {
  id: 'bridgestone-arena',
  name: 'Bridgestone Arena',
  type: 'arena',
  metadata: {
    title: 'Bridgestone Arena Bag Policy: Guide + Images | Nashville Predators',
    description: 'Bridgestone Arena enforces strict bag size restrictions. Bags under 6" x 4" x 1.5" allowed through express lanes. Larger bags up to 12" x 12" x 6" require x-ray screening.',
  },
  capacity: 17159,
  location: {
    address: '501 Broadway',
    city: 'Nashville',
    state: 'TN',
    zip: '37203',
    coordinates: {
      latitude: 36.159167,
      longitude: -86.778611,
    },
    website: 'https://www.bridgestonearena.com/plan-your-visit/bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Bridgestone+Arena+Nashville&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Bridgestone_Arena_%28Northeast_corner%29.JPG/640px-Bridgestone_Arena_%28Northeast_corner%29.JPG'
  },
  teams: [
    {
      name: 'Nashville Predators',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: '**Bags smaller than 6" x 4" x 1.5" may proceed through express screening lanes for visual inspection. Bags between 6" x 4" x 1.5" and 12" x 12" x 6" (including clear bags and Nashville Locker Room bags) require x-ray screening and visual inspection. Backpacks of any size and bags larger than 12" x 12" x 6" are prohibited**. Diaper bags and medical bags are permitted with screening. Contact Customer Service 24 hours before events for additional accommodations.',
    allowedBags: ['clutch', 'wristlet', 'purse', 'fanny_pack'],
    prohibitedBags: ['backpack', 'duffel', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Bridgestone Arena provide bag storage?',
      answer: 'No, Bridgestone Arena does not provide storage for prohibited bags or items.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Bridgestone Arena?',
      answer: 'The following items are prohibited at Bridgestone Arena:\n\n' +
        '• Animals (except service animals)\n' +
        '• Backpacks of any size\n' +
        '• Bottles and cans\n' +
        '• Coolers\n' +
        '• Camp/folding chairs\n' +
        '• Drones and UAVs\n' +
        '• Fireworks\n' +
        '• Outside food and drinks (including alcohol)\n' +
        '• Frisbees and beach balls\n' +
        '• Gifts for artists/athletes\n' +
        '• GoPros and camcorders\n' +
        '• Grills of any size\n' +
        '• Heaters (propane, electric, etc.)\n' +
        '• Hoverboards, bicycles, skateboards\n' +
        '• Illegal drugs\n' +
        '• Inflatables\n' +
        '• Laptops/tablets (except credentialed media)\n' +
        '• Laser pointers\n' +
        '• Luggage\n' +
        '• Poles/sticks (including selfie sticks)\n' +
        '• Tents, tarps, sleeping bags\n' +
        '• Two-way radios\n' +
        '• Noise making devices (horns, whistles, etc.)\n' +
        '• Weapons, firearms, knives, pepper spray\n' +
        '• Any other items deemed dangerous or inappropriate'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Bridgestone Arena?',
      answer: 'Yes, medical bags and equipment are permitted but will be subject to x-ray screening. Please contact Bridgestone Arena Customer Service (accessibilityservices@powersmgmt.com) 24 hours prior to your event for additional accommodations.'
    }
  ],
};