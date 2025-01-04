import type { VenueDetails } from '../../../types/venue';

export const footprintCenterVenue: VenueDetails = {
  id: 'footprint-center',
  name: 'Footprint Center',
  type: 'arena',
  metadata: {
    title: 'Footprint Center Bag Policy: Guide + Images | Phoenix Suns',
    description: 'Small clutches under 4" x 6", clear bags, and bags meeting NBA size requirements (14" x 14" x 6") are permitted with screening.',
  },
  capacity: 17071,
  location: {
    address: '201 E Jefferson St',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85004',
    coordinates: {
      latitude: 33.445833,
      longitude: -112.071389,
    },
    website: 'https://www.footprintcenter.com/venue/policies-and-rules/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Footprint+Center+Phoenix&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Footprint_Center_2022.jpg/640px-Footprint_Center_2022.jpg"
  },
  teams: [
    {
      name: 'Phoenix Suns',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    description: '**Small clutches, crossbody bags, and clear bags are permitted**. Purses, medical bags and diaper bags are allowed as long as they meet the NBA bag-size requirements of 14" x 14" x 6" but will be subject to additional screening. Standard backpacks are not permitted inside the arena. Guests with no bags or clutches smaller than 4" x 6" can use Evolv express entry lanes (Strongly recommend for quickest entry).',
    allowedBags: ['clutch', 'wristlet', 'purse','fanny_pack'],
    prohibitedBags: ['backpack', 'duffel', 'briefcase', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Footprint Center provide an area to store luggage?',
      answer: 'Footprint Center does not provide an area to check oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Footprint Center?',
      answer: 'The following items are prohibited at Footprint Center:\n\n' +
        '• Backpacks (except single-compartment drawstring bags meeting NBA size requirements)\n' +
        '• Banners (unless flame-retardant and hand-held)\n' +
        '• Bottles, cans & coolers (sealed water bottles may be permitted)\n' +
        '• Professional cameras, video and recording devices (including GoPros & Google glasses)\n' +
        '• Fireworks\n' +
        '• Illegal substances\n' +
        '• Laser pointers\n' +
        '• Outside food and beverages\n' +
        '• Whistles, horns, foghorns, airhorns, plastic horns\n' +
        '• Weapons of any kind\n' +
        '• Mace/pepper spray\n' +
        '• Computers and laptops (tablets 8" or smaller allowed for sporting events)\n' +
        '• Halloween-style masks (allowed only when seated)\n' +
        '• Selfie sticks\n' +
        '• Drones\n' +
        '• Offensive clothing or masks'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Footprint Center?',
      answer: 'Yes, medical bags and diaper bags are permitted if they meet the NBA size requirements of 14" x 14" x 6". These bags will be subject to additional screening.'
    }
  ],
};