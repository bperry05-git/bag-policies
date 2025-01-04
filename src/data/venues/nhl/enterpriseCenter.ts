import type { VenueDetails } from '../../../types/venue';

export const enterpriseCenterVenue: VenueDetails = {
  id: 'enterprise-center',
  name: 'Enterprise Center',
  type: 'arena',
  metadata: {
    title: 'Enterprise Center Bag Policy: Guide + Images | St. Louis Blues',
    description: 'Enterprise Center prohibits bags over 16" x 16". All bags must undergo x-ray screening. Small clutches up to 6" x 4" x 1.5" permitted with visual inspection only.',
  },
  capacity: 18096,
  location: {
    address: '1401 Clark Avenue',
    city: 'St. Louis',
    state: 'MO',
    zip: '63103',
    coordinates: {
      latitude: 38.626667,
      longitude: -90.2025,
    },
    website: 'https://www.enterprisecenter.com/guest-services/arena-a-z-guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Enterprise+Center+St+Louis&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Scottrade_center_2010.jpg/640px-Scottrade_center_2010.jpg'
  },
  teams: [
    {
      name: 'St. Louis Blues',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: '**Backpacks, coolers, hard-sided bags, luggage, and any bag over 16" x 16" are strictly prohibited**. All bags, including purses and medical/childcare bags, must go through x-ray screening. Clutches no larger than 6" x 4" x 1.5" are permitted with visual inspection only. Note that bringing a bag could add 30 minutes or more to your entry process.',
    allowedBags: ['clutch', 'purse', 'wristlet', 'fanny_pack'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Enterprise Center provide bag storage?',
      answer: 'Enterprise Center does not provide storage for prohibited bags or items.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Enterprise Center?',
      answer: 'The following items are prohibited at Enterprise Center:\n\n' +
        '• Noisemakers of any kind (airhorns, cowbells, vuvuzelas, thunderstix)\n' +
        '• Backpacks, hard-sided coolers, bags, luggage over 16" x 16"\n' +
        '• Wrapped gifts/items\n' +
        '• Aluminum cans, bottles, glass items, metal cans\n' +
        '• Obscene, offensive or indecent clothing\n' +
        '• Drones\n' +
        '• Chemicals\n' +
        '• Outside food & beverages\n' +
        '• Balloons\n' +
        '• Animals (except service animals)\n' +
        '• Laser pointers/pens\n' +
        '• Sticks (including those on pennants or flags)\n' +
        '• Selfie sticks\n' +
        '• Tripods, bipods, monopods\n' +
        '• Weapons (guns, knives, chains, spikes, projectiles, tasers, etc.)\n' +
        'Note: Umbrellas ARE allowed in Enterprise Center.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Enterprise Center?',
      answer: 'Yes, medical bags and childcare bags are permitted but must go through x-ray screening.'
    }
  ],
};