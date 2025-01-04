import type { VenueDetails } from '../../../types/venue';

export const rogersPlaceVenue: VenueDetails = {
  id: 'rogers-place',
  name: 'Rogers Place',
  type: 'arena',
  metadata: {
    title: 'Rogers Place Bag Policy: Guide + Images | Edmonton Oilers',
    description: 'Rogers Place prohibits bags larger than 12" x 12" x 6". Small clutches and wallets are permitted after inspection. No backpacks, suitcases, or beach bags allowed.',
  },
  capacity: 18347,
  location: {
    address: '10220 104 Avenue NW',
    city: 'Edmonton',
    state: 'AB',
    zip: 'T5J 0H6',
    coordinates: {
      latitude: 53.546944,
      longitude: -113.497778,
    },
    website: 'https://www.rogersplace.com/oilers-guide/#:~:text=Rogers%20Place%20Bag%20Policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Rogers+Place+Edmonton&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Rogers_Place_Arena.jpg/640px-Rogers_Place_Arena.jpg'
  },
  teams: [
    {
      name: 'Edmonton Oilers',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: 'To ensure a safe environment for fans, b**ags larger than 12" x 12" x 6" (including backpacks, suitcases, beach bags, etc.)** are prohibited from entry into Rogers Place. All other bags will be permitted after a physical inspection of their contents.',
    allowedBags: ['purse', 'clutch','fanny_pack', 'wristlet'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Rogers Place provide bag storage?',
      answer: 'Rogers Place does not provide storage for prohibited bags or items.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Rogers Place?',
      answer: 'The following items are prohibited at Rogers Place:\n\n' +
        '• Weapons or replicas (guns, firearms, ammunition, stun guns)\n' +
        '• Self-defense sprays, fuels, torches, lighter fluid\n' +
        '• Bats, brass knuckles, batons, martial art weapons\n' +
        '• Knives, razor blades, box cutters, scissors, tools\n' +
        '• Explosives, aerosols and fireworks\n' +
        '• Large bags, backpacks, and purses\n' +
        '• Illegal drugs and non-labeled prescription narcotics\n' +
        '• Umbrellas\n' +
        '• Cameras with lenses longer than 3"\n' +
        '• Video cameras and GoPro devices\n' +
        '• Tripods, selfie sticks\n' +
        '• Laser pointing devices\n' +
        '• Noisemaking devices (whistles, cow bells, air horns)\n' +
        '• Poles or sticks of any kind\n' +
        '• Outside food and beverage\n' +
        '• Projectiles (inflatable balls, frisbees, hula hoops)\n' +
        '• Non-service animals\n' +
        '• Seat cushions, portable chairs\n' +
        '• Roller blades, skateboards, scooters, bicycles\n' +
        '• Drones or model aircraft\n' +
        '• Inappropriate attire or gang-affiliated signage'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Rogers Place?',
      answer: 'Medical bags may be permitted but will require physical inspection of contents. Please contact the venue in advance for specific requirements.'
    }
  ],
};