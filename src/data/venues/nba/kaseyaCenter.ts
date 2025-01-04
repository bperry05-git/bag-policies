import type { VenueDetails } from '../../../types/venue';

export const kaseyaCenterVenue: VenueDetails = {
  id: 'kaseya-center',
  name: 'Kaseya Center',
  type: 'arena',
  metadata: {
    title: 'Kaseya Center Bag Policy: Guide + Imges | Miami Heat',
    description: 'Kaseya Center allows bags under 10" x 6" x 2". Binbox lockers available for oversized bags.',
  },
  capacity: 19600,
  location: {
    address: '601 Biscayne Boulevard',
    city: 'Miami',
    state: 'FL',
    zip: '33132',
    coordinates: {
      latitude: 25.781389,
      longitude: -80.188056,
    },
    website: 'https://www.kaseyacenter.com/plan-your-visit/knowbeforeyougo',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Kaseya+Center+Miami&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Kaseya_Center_Downtown_Miami_FL%2C_5_April_2024.jpg/640px-Kaseya_Center_Downtown_Miami_FL%2C_5_April_2024.jpg"
  },
  teams: [
    {
      name: 'Miami Heat',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    description: 'Kaseya Center allows **small bags or purses smaller than 10" x 6" x 2**". If your bag exceeds these dimensions, rentable Binbox lockers will be available for storage and are available 1-hour prior to doors, until 1-hour post show. Located on the South Plaza above Gate 7 steps and adjacent to the Box Office (near Gates 4/5). Starting as low as $10 per locker.',
    allowedBags: ['clutch','wristlet','fanny_pack', 'purse'],
    prohibitedBags: ['backpack', 'briefcase', 'duffel', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Kaseya Center provide an area to store luggage?',
      answer: 'Yes, Kaseya Center offers Binbox lockers for oversized bags. Located on the South Plaza above Gate 7 steps and adjacent to the Box Office (near Gates 4/5), lockers are available 1-hour prior to doors until 1-hour post show, starting at $10.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Kaseya Center?',
      answer: 'The following items are prohibited at Kaseya Center:\n\n' +
        '• Bags, purses, backpacks, briefcases, duffle bags larger than 10" x 6" x 2"\n' +
        '• Banners\n' +
        '• Outside food or beverage\n' +
        '• Bottles, cans and coolers\n' +
        '• Cameras with an extended lens larger than 6"\n' +
        '• Recording devices, tripods, and professional camera auxiliary lenses\n' +
        '• Fireworks\n' +
        '• Illegal substances\n' +
        '• Laser pointers\n' +
        '• Whistles, horns or other noise makers\n' +
        '• Weapons of any kind\n' +
        '• Computers\n' +
        '• Laptops\n' +
        '• Drones\n' +
        '• Selfie sticks'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Kaseya Center?',
      answer: 'Yes, medical and infant bags are permitted but must go through an X-ray machine.'
    }
  ],
};