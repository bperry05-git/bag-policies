import type { VenueDetails } from '../../../types/venue';

export const chaseFieldVenue: VenueDetails = {
  id: 'chase-field',
  name: 'Chase Field',
  type: 'stadium',
  metadata: {
    title: 'Chase Field Bag Policy: Guide + Images | AZ Diamondbacks',
    description: 'Chase Field enforces a clear bag policy. Clear bags up to 12" x 6" x 12", one-gallon freezer bags, and small clutch bags up to 4.5" x 6.5" are permitted.',
  },
  capacity: 48686,
  location: {
    address: '401 East Jefferson Street',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85004',
    coordinates: {
      latitude: 33.445278,
      longitude: -112.066944,
    },
    website: 'https://www.mlb.com/dbacks/ballpark/information/security',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Chase+Field+Phoenix&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flyover_at_Diamondbacks_season_opener_2010-04-05.JPG/640px-Flyover_at_Diamondbacks_season_opener_2010-04-05.JPG'
  },
  teams: [
    {
      name: 'Arizona Diamondbacks',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'Chase Field allows **one clear plastic, vinyl, or PVC bag no larger than 12" x 6" x 12" or a one-gallon clear plastic freezer bag per fan**. Additionally, fans may carry a small clutch purse no larger than 4.5" x 6.5", with or without a handle or strap, subject to search. Storage lockers are available on the NW plaza (BinBox) for guests arriving via mass transit with unapproved bags.',
    allowedBags: ['clear', 'clear_plastic', 'clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'duffel', 'tote','fanny_pack'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Chase Field provide bag storage?',
      answer: 'Yes, storage lockers (BinBox) are available on the NW plaza on a first-come, first-served basis for guests arriving via mass transit, taxi, or ride share. All stored items are subject to inspection. The Arizona Diamondbacks are not responsible for items left behind, lost, stolen or damaged.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Chase Field?',
      answer: 'The following items are prohibited at Chase Field:\n\n' +
        '• Metal or glass containers (including thermos containers)\n' +
        '• Animals (except service animals)\n' +
        '• Alcohol\n' +
        '• Aerosol cans\n' +
        '• Drones and remote controlled vehicles\n' +
        '• Drugs or illegal substances (including medical marijuana)\n' +
        '• Firearms, knives or weapons\n' +
        '• Fireworks or incendiary devices\n' +
        '• Camera tripods (non-media)\n' +
        '• Skateboards, rollerblades, scooters, wheeled shoes\n' +
        '• Obscene or inappropriate clothing\n' +
        '• Blow horns or noisemakers\n' +
        '• Umbrellas\n' +
        '• Fishing nets\n' +
        '• Beach balls, balloons, inflatables\n' +
        '• Laser pens\n' +
        '• Unauthorized flags with poles\n' +
        '• Inappropriate banners\n' +
        '• Frisbees\n' +
        '• Bicycles\n' +
        '• Bubble-making devices\n' +
        '• Backpacks\n' +
        '• Oversized bags and wallets\n' +
        '• Luggage, computer bags, camera bags\n' +
        '• Fanny packs and cinch bags'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Chase Field?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. All bags will be subject to inspection upon entry.'
    }
  ],
};