import type { VenueDetails } from '../../../types/venue';

export const minuteMaidParkVenue: VenueDetails = {
  id: 'minute-maid-park',
  name: 'Minute Maid Park',
  type: 'stadium',
  metadata: {
    title: 'Minute Maid Park Bag Policy: Guide + Images| Houston Astros',
    description: 'Minute Maid Park prohibits bags exceeding 16"x16"x8" and backpacks. Medical bags and diaper bags meeting size requirements are permitted.',
  },
  capacity: 41168,
  location: {
    address: '501 Crawford Street',
    city: 'Houston',
    state: 'TX',
    zip: '77002',
    coordinates: {
      latitude: 29.757222,
      longitude: -95.355556,
    },
    website: 'https://www.mlb.com/astros/fans/updates',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Minute+Maid+Park+Houston&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Minute_maid_park.JPG/640px-Minute_maid_park.JPG'
  },
  teams: [
    {
      name: 'Houston Astros',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Bags must not exceed 16"x16"x8". Backpacks are prohibited, with exceptions for diaper bags, single-compartment drawstring bags, and medical bags meeting size requirements**. Soft-sided coolers within size limits are permitted. Food must be in clear, one-gallon size bags. Factory-sealed water bottles up to 1 liter allowed. All bags subject to search.',
    allowedBags: ['clear', 'clear_plastic', 'clutch', 'fanny_pack','wristlet'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Minute Maid Park provide bag storage?',
      answer: 'Minute Maid Park does not provide storage for bags that do not meet size requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Minute Maid Park?',
      answer: 'The following items are prohibited at Minute Maid Park:\n\n' +
        '• Aerosol cans\n' +
        '• Alcohol\n' +
        '• Animals (except service animals)\n' +
        '• Backpacks (except approved medical/diaper bags)\n' +
        '• Bags larger than 16"x16"x8"\n' +
        '• Non-compliant banners/signs\n' +
        '• Baseball bats and ball retrievers\n' +
        '• Beverages except sealed water (1 liter or less)\n' +
        '• Cameras with 8"+ lenses\n' +
        '• Obscene clothing\n' +
        '• Hard/Styrofoam coolers\n' +
        '• Costumes and masks\n' +
        '• Drones\n' +
        '• Fireworks\n' +
        '• Folding chairs (cane seats allowed)\n' +
        '• Large food portions\n' +
        '• Hover boards\n' +
        '• Inflatables\n' +
        '• Laser pointers\n' +
        '• Noise makers\n' +
        '• Poles and sticks\n' +
        '• Recreational devices\n' +
        '• Camera equipment stands\n' +
        '• Weapons\n' +
        'Note: Soft-sided coolers within size limits are permitted.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Minute Maid Park?',
      answer: 'Yes, medical bags and diaper bags are permitted if they meet the MLB size requirement of 16"x16"x8". All bags will be searched upon entry.'
    }
  ],
};