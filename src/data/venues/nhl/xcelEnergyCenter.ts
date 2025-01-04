import type { VenueDetails } from '../../../types/venue';

export const xcelEnergyCenterVenue: VenueDetails = {
  id: 'xcel-energy-center',
  name: 'Xcel Energy Center',
  type: 'arena',
  metadata: {
    title: 'Xcel Energy Center Bag Policy: Guide + Images | Minnesota Wild',
    description: 'Xcel Energy Center allows purses up to 12" x 12" x 6" at X-ray points. Small wristlets/clutches up to 4" x 6" x 1.5" permitted at all entrances.',
  },
  capacity: 18064,
  location: {
    address: '199 West Kellogg Boulevard',
    city: 'Saint Paul',
    state: 'MN',
    zip: '55102',
    coordinates: {
      latitude: 44.944722,
      longitude: -93.101111,
    },
    website: 'https://www.xcelenergycenter.com/plan-your-visit/guest-services-guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Xcel+Energy+Center+Saint+Paul&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Xcel_Energy_Center_St._Paul_5.jpg/640px-Xcel_Energy_Center_St._Paul_5.jpg'
  },
  teams: [
    {
      name: 'Minnesota Wild',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: '**Purses up to 12" x 12" x 6" are allowed at designated X-ray entry points, including clear bags. Wristlets, clutches, or wallets 4" x 6" x 1.5" or smaller are allowed at all entrances with inspection**. Backpacks, coolers, and large totes are prohibited. Medical and parenting bags permitted with X-ray screening.',
    allowedBags: ['clutch', 'purse', 'fanny_pack'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Xcel Energy Center provide bag storage?',
      answer: 'Xcel Energy Center does not provide storage for prohibited bags or items.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Xcel Energy Center?',
      answer: 'The following items are prohibited at Xcel Energy Center:\n\n' +
        '• Weapons of any kind (guns, knives, pepper spray, mace, chains, spikes)\n' +
        '• Cameras with detachable lenses\n' +
        '• Laptops, tablets, large electronic devices (iPads/tablets allowed for Wild games)\n' +
        '• Outside food or beverage\n' +
        '• Cans, glass bottles, coolers, containers\n' +
        '• Air horns, noise makers\n' +
        '• Balloons or inflatable items\n' +
        '• Selfie sticks or laser pointers\n' +
        '• Pets (except service animals)\n' +
        '• Hockey sticks or poles\n' +
        '• Recording devices (video, audio, GoPros)\n' +
        '• Face masks for disguise/concealment\n' +
        '• Umbrellas over 18 inches or with sharp edges\n' +
        '• Wrapped gifts\n' +
        '• Knitting or crochet equipment\n' +
        '• Any items deemed inappropriate or dangerous by staff'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Xcel Energy Center?',
      answer: 'Yes, medical bags and parenting bags are permitted but will be subject to X-ray screening.'
    }
  ],
};