import type { VenueDetails } from '../../../types/venue';

export const nationwideArenaVenue: VenueDetails = {
  id: 'nationwide-arena',
  name: 'Nationwide Arena',
  type: 'arena',
  metadata: {
    title: 'Nationwide Arena Bag Policy: Guide + Images | Columbus Blue Jackets',
    description: 'Nationwide Arena enforces a strict no-bag policy. Only clutches up to 8" x 5" x 1", medical bags, and diaper bags are permitted with x-ray screening.',
  },
  capacity: 18144,
  location: {
    address: '200 West Nationwide Boulevard',
    city: 'Columbus',
    state: 'OH',
    zip: '43215',
    coordinates: {
      latitude: 39.969283,
      longitude: -83.006111,
    },
    website: 'https://www.nationwidearena.com/home/what-to-expect/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Nationwide+Arena+Columbus&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Nationwide_Arena_exterior.jpg/640px-Nationwide_Arena_exterior.jpg'
  },
  teams: [
    {
      name: 'Columbus Blue Jackets',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'NO BAG POLICY - **Bags are NOT permitted except for medical bags, diaper bags, OR clutches no larger than 8" x 5" x 1"** that will be x-rayed via a designated screening line.',
    allowedBags: ['clutch', 'wristlet'],
    prohibitedBags: ['backpack', 'purse', 'fanny_pack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Nationwide Arena provide bag storage?',
      answer: 'Nationwide Arena does not provide storage for prohibited bags or items.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Nationwide Arena?',
      answer: 'The following items are prohibited at Nationwide Arena:\n\n' +
        '• Animals (except service animals as defined by ADA)\n' +
        '• Banners, flags, posters that interfere with views\n' +
        '• Clothing with profane/inappropriate language\n' +
        '• Containers (coolers, ice chests, bottles, etc.)\n' +
        '• Confetti, streamers, glitter, projectiles\n' +
        '• Drones or model aircraft\n' +
        '• Firearms and weapons of any kind\n' +
        '• Fireworks or explosives\n' +
        '• Outside food and beverages\n' +
        '• Illegal drugs\n' +
        '• Inflatables (balls, balloons)\n' +
        '• Laptops or tablets\n' +
        '• Laser pointers\n' +
        '• Markers or paint\n' +
        '• Noisemaking devices (horns, bells, instruments)\n' +
        '• Professional cameras (detachable lenses)\n' +
        '• Sticks, poles, selfie sticks\n' +
        '• Stickers or adhesive products\n' +
        '• Strollers/wagons (except medical)\n' +
        '• Golf umbrellas or pointed-tip umbrellas\n' +
        '• Weapons or weapon-like items\n' +
        '• Wrapped gifts/packages\n\n' +
        'Note: Small collapsible umbrellas are permitted.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Nationwide Arena?',
      answer: 'Yes, medical bags and diaper bags are permitted but must go through x-ray screening at designated screening lines.'
    }
  ],
};