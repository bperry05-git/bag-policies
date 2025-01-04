import type { VenueDetails } from '../../../types/venue';

export const canadaLifeCentreVenue: VenueDetails = {
  id: 'canada-life-centre',
  name: 'Canada Life Centre',
  type: 'arena',
  metadata: {
    title: 'Canada Life Centre Bag Policy: Guide + Images | Winnipeg Jets',
    description: 'Canada Life Centre enforces bag size restrictions of 12" x 9" x 5" or smaller. All bags undergo contactless security screening. Medical and childcare bags permitted with special screening.',
  },
  capacity: 15321,
  location: {
    address: '300 Portage Avenue',
    city: 'Winnipeg',
    state: 'MB',
    zip: 'R3C 5S4',
    coordinates: {
      latitude: 49.892778,
      longitude: -97.143611,
    },
    website: 'https://www.canadalifecentre.ca/fan-guide/bag-policy/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Canada+Life+Centre+Winnipeg&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MTS_CENTRE_b.jpg/640px-MTS_CENTRE_b.jpg'
  },
  teams: [
    {
      name: 'Winnipeg Jets',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: '**Bags must be 12" x 9" x 5" or smaller** and will undergo contactless security screening. Medical and childcare/diaper bags are permitted with mandatory X-ray screening at Gate 1 (Portage and Donald), Gate 3 (Graham and Hargrave), or Gate 6 Cityplace Skywalk. Media bags are also allowed with proper screening. No on-site bag check is available.',
    allowedBags: ['clutch', 'wristlet', 'fanny_pack'],
    prohibitedBags: ['purse', 'backpack', 'duffel', 'camera_bag', 'briefcase'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Canada Life Centre provide bag storage?',
      answer: 'No, on-site bag check is not available at Canada Life Centre.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Canada Life Centre?',
      answer: 'The following items are prohibited at Canada Life Centre:\n\n' +
        '• Air horns, blow horns, and cowbells\n' +
        '• Aerosol cans\n' +
        '• Alcoholic beverages\n' +
        '• Audio or recording devices\n' +
        '• Cannabis products\n' +
        '• Professional cameras\n' +
        '• Chewing tobacco\n' +
        '• E-cigarettes\n' +
        '• Fireworks\n' +
        '• Glass bottles or cans\n' +
        '• Glow sticks\n' +
        '• Hard-sided water bottles (soft-sided only and must be empty)\n' +
        '• Helium balloons\n' +
        '• Hockey sticks\n' +
        '• Illegal drugs or noxious substances\n' +
        '• Inflatables (beach balls, balloons, etc.)\n' +
        '• Laser pointers and flashlights\n' +
        '• Outside food or beverage\n' +
        '• Projectiles\n' +
        '• Selfie sticks\n' +
        '• Signs or banners\n' +
        '• Skateboards, rollerblades, and roller-skates\n' +
        '• Any item that may be used as a weapon (including pocket knives)\n' +
        '• Any other items deemed dangerous or inappropriate'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Canada Life Centre?',
      answer: 'Yes, medical bags are permitted but must undergo mandatory X-ray screening. Please enter through Gate 1 (Portage and Donald), Gate 3 (Graham and Hargrave), or Gate 6 Cityplace Skywalk for screening.'
    }
  ],
};