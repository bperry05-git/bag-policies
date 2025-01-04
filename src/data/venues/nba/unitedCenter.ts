import type { VenueDetails } from '../../../types/venue';

export const unitedCenterVenue: VenueDetails = {
  id: 'united-center',
  name: 'United Center',
  type: 'arena',
  metadata: {
    title: 'United Center Bag Policy: Guide + Images | Bulls & Blackhawks',
    description: 'United Center allows small purses and personal bags up to 10" x 6" x 2". Bag check available in Lot J. Medical exceptions provided.',
  },
  capacity: 20917,
  location: {
    address: '1901 West Madison Street',
    city: 'Chicago',
    state: 'IL',
    zip: '60612',
    coordinates: {
      latitude: 41.880556,
      longitude: -87.674167,
    },
    website: 'https://www.unitedcenter.com/venue/frequently-asked-questions/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=United+Center+Chicago&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/United_Center_1.jpg/640px-United_Center_1.jpg"
  },
  teams: [
    {
      name: 'Chicago Bulls',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    },
    {
      name: 'Chicago Blackhawks',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: 'Guests are able to enter the arena with a **small purse or personal bag up to 10" x 6" x 2**". No backpacks or other bags are allowed. Exceptions for guests with required medical equipment will be provided. Bag check is available in United Center Parking Lot J on Wood St. and Monroe St.',
    allowedBags: ['clutch', 'purse','fanny_pack','wristlet'],
    prohibitedBags: ['backpack', 'tote','duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does United Center provide an area to store luggage?',
      answer: 'Yes, bag check is available in United Center Parking Lot J, located at Wood St. and Monroe St.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at United Center?',
      answer: 'The following items are prohibited at United Center:\n\n' +
        '• Air horns and artificial noise makers\n' +
        '• Animals (excluding service animals)\n' +
        '• Banners, signs or flags\n' +
        '• Bags exceeding size limits\n' +
        '• Bottles or cans\n' +
        '• Cameras with detachable lenses\n' +
        '• Fireworks\n' +
        '• GoPros\n' +
        '• iPads\n' +
        '• Laptops\n' +
        '• Laser pens or products\n' +
        '• Masks (medical masks permitted)\n' +
        '• Outside food or beverage\n' +
        '• Poles or sticks\n' +
        '• Projectiles\n' +
        '• Selfie sticks and light attachments\n' +
        '• Umbrellas (any size)\n' +
        '• Weapons (including guns, knives, explosives, pepper spray)\n' +
        '• Any items deemed unacceptable\n\n' +
        'Note: Additional restrictions may apply on certain event days.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at United Center?',
      answer: 'Yes, exceptions are provided for guests with required medical equipment.'
    }
  ],
};