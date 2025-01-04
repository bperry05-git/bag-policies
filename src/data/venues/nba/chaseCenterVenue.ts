import type { VenueDetails } from '../../../types/venue';

export const chaseCenterVenue: VenueDetails = {
  id: 'chase-center',
  name: 'Chase Center',
  type: 'arena',
  metadata: {
    title: 'Chase Center Bag Policy: Guide + Images | Golden State Warriors',
    description: 'Chase Center enforces strict bag size limits. Bags must not exceed 14" x 6" x 14". Backpacks are prohibited. Bag valet available for oversized items.',
  },
  capacity: 18064,
  location: {
    address: '1 Warriors Way',
    city: 'San Francisco',
    state: 'CA',
    zip: '94158',
    coordinates: {
      latitude: 37.768056,
      longitude: -122.387778,
    },
    website: 'https://www.chasecenter.com/fan-safety-bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Chase+Center+San+Francisco&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Chase_Center_-_July_2019_%287605%29.jpg/640px-Chase_Center_-_July_2019_%287605%29.jpg"
  },
  teams: [
    {
      name: 'Golden State Warriors',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    description: 'The Chase center bag policy states bags must not exceed 14" x 6" x 14", including ALL bags, purses, totes, fanny packs, diaper bags and medical bags. Bags do not need to be clear, but must meet size requirements. Larger bags can be checked at the Bike Valet on Terry A Francois Blvd ($10 donation to Warriors Community Foundation). Backpacks are strictly prohibited.',
    allowedBags: ['purse', 'tote', 'fanny_pack','wristlet','clutch'],
    prohibitedBags: ['backpack', 'duffel','briefcase'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Chase Center provide bag storage?',
      answer: 'Yes, Chase Center offers bag valet service at the Bike Valet on Terry A Francois Blvd for oversized bags. A $10 donation to the Warriors Community Foundation is required (subject to change).'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Chase Center?',
      answer: 'The following items are prohibited at Chase Center:\n\n' +
        '• Weapons and dangerous devices (firearms, pepper spray/mace, flares, fireworks, knives, tasers, etc.)\n' +
        '• Backpacks and hard-sided bags\n' +
        '• Bags larger than 14" x 6" x 14"\n' +
        '• Outside food/beverage including water bottles\n' +
        '• Non-surgical masks\n' +
        '• Laptops and tablets (except during Warriors games)\n' +
        '• Professional cameras with detachable lenses over 3"\n' +
        '• Audio/visual recording devices\n' +
        '• Drones\n' +
        '• Signs/banners exceeding 11"x17"\n' +
        '• Noise making devices (air horns, cow bells, whistles, drums)\n' +
        '• Laser pointers or flashlights\n' +
        '• Metal objects\n' +
        '• Frisbees and beach balls\n' +
        '• Any other items deemed unacceptable by Arena Management'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Chase Center?',
      answer: 'Yes, medical bags are permitted but must comply with the 14" x 6" x 14" size requirement and will be subject to inspection.'
    }
  ],
};