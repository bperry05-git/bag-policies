import type { VenueDetails } from '../../../types/venue';

export const kiaCenterVenue: VenueDetails = {
  id: 'kia-center',
  name: 'Kia Center',
  type: 'arena',
  metadata: {
    title: 'Kia Center Bag Policy: Guide + Images | Orlando Magic',
    description: 'Kia Center enforces a no bag policy. Only small clutches up to 4.5" x 6.5" x 1" and medical/parent bags up to 14" x 14" x 6" are permitted with X-ray screening.',
  },
  capacity: 18846,
  location: {
    address: '400 W Church Street',
    city: 'Orlando',
    state: 'FL',
    zip: '32801',
    coordinates: {
      latitude: 28.539167,
      longitude: -81.383611,
    },
    website: 'https://www.kiacenter.com/plan-your-visit/bag-policy/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Kia+Center+Orlando&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Amway_Center-2.jpg/640px-Amway_Center-2.jpg"
  },
  teams: [
    {
      name: 'Orlando Magic',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
 
    description: 'Bags are not permitted at Kia Center events. Guests are permitted to bring **one small clutch that is 4.5" x 6.5" x 1" or less**. Medical and parent bags (max. 14" x 14" x 6") are exceptions but will be subject to X-ray at designated locations for entry to Kia Center.',
    allowedBags: ['clutch','wristlet'],
    prohibitedBags: ['backpack','fanny_pack', 'purse', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Kia Center provide an area to store luggage?',
      answer: 'Kia Center does not provide an area to check oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Kia Center?',
      answer: 'The following items are prohibited at Kia Center:\n\n' +
        '• Audio recording devices\n' +
        '• Backpacks and bags\n' +
        '• Cans, souvenir cups and bottles\n' +
        '• Coolers and hard-sided containers\n' +
        '• Drones and fireworks\n' +
        '• Helium balloons\n' +
        '• Illegal drugs\n' +
        '• Laptops\n' +
        '• Laser pointers and flashlights\n' +
        '• Noisemakers and amplifiers (cowbells permitted for Solar Bears games)\n' +
        '• Outside food & beverage\n' +
        '• Pets (except service animals)\n' +
        '• Professional cameras with detachable lenses or lenses 3" or longer\n' +
        '• Recreation equipment\n' +
        '• Signs larger than 11" x 17" or with inappropriate content\n' +
        '• Unauthorized solicitation items\n' +
        '• Weapons\n' +
        '• Wrapped gifts\n\n' +
        'Additional items prohibited during Orlando Magic games:\n' +
        '• Audio/visual recording devices (GoPro, Google Glass, etc.)\n' +
        '• Clothing or signs with explicit language\n' +
        '• GoPros, selfie sticks, tripods, monopods\n' +
        '• Optical illusion items\n' +
        '• Poles and missile-like objects\n' +
        '• Professional cameras with lenses 3" or longer\n' +
        '• Strollers'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Kia Center?',
      answer: 'Medical and parent bags up to 14" x 14" x 6" are permitted but must go through X-ray screening at designated locations.'
    }
  ],
};