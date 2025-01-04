import type { VenueDetails } from '../../../types/venue';

export const globeLifeFieldVenue: VenueDetails = {
  id: 'globe-life-field',
  name: 'Globe Life Field',
  type: 'stadium',
  metadata: {
    title: 'Globe Life Field Bag Policy: Guide + Images | TX Rangers',
    description: 'Globe Life Field allows bags up to 16"x16"x8". All backpacks and coolers are prohibited. Outside food is permitted in clear quart-sized bags.',
  },
  capacity: 40300,
  location: {
    address: '734 Stadium Drive',
    city: 'Arlington',
    state: 'TX',
    zip: '76011',
    coordinates: {
      latitude: 32.747222,
      longitude: -97.083611,
    },
    website: 'https://www.mlb.com/rangers/ballpark/guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Globe+Life+Field+Arlington&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Globelifefield_june2020.jpg/640px-Globelifefield_june2020.jpg'
  },
  teams: [
    {
      name: 'Texas Rangers',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Bags must be no larger than 16"x16"x8". All backpacks and coolers are prohibited**. Outside food is permitted in sealed, clear, quart-sized plastic bags (one per ticket). One sealed non-flavored water bottle under 1 liter per ticket is allowed. Medical bags and diaper bags accompanying infants are permitted as exceptions.',
    allowedBags: ['purse','fanny_pack','clutch','wristlet', 'clear', 'clear_plastic'],
    prohibitedBags: ['backpack', 'tote','duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Globe Life Field provide bag storage?',
      answer: 'Globe Life Field does not provide storage for bags that do not meet size requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Globe Life Field?',
      answer: 'The following items are prohibited at Globe Life Field:\n\n' +
        '• Advertising or promotional materials\n' +
        '• Outside alcohol and illegal substances\n' +
        '• Animals (except service animals)\n' +
        '• All backpacks, including clear ones\n' +
        '• Bags larger than 16"x16"x8"\n' +
        '• Inappropriate banners or signs\n' +
        '• Beach balls and balloons\n' +
        '• Binocular and camera cases\n' +
        '• Offensive clothing\n' +
        '• All coolers\n' +
        '• Outside drinks (except one sealed water up to 1 liter)\n' +
        '• Food outside of clear quart-sized bags\n' +
        '• Glitter, confetti, or rice\n' +
        '• Glass or metal containers\n' +
        '• Camera lenses over 8 inches\n' +
        '• Laser pointers\n' +
        '• Smoking devices (including e-cigarettes)\n' +
        '• Noisemakers\n' +
        '• Signs on poles or sticks\n' +
        '• Tripods and selfie sticks\n' +
        '• Drones\n' +
        '• Weapons (including pepper spray and pocket knives)'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Globe Life Field?',
      answer: 'Yes, medical bags and manufactured diaper bags that accompany infants and young children are permitted as exceptions to the standard bag policy.'
    }
  ],
};