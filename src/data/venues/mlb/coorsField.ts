import type { VenueDetails } from '../../../types/venue';

export const coorsFieldVenue: VenueDetails = {
  id: 'coors-field',
  name: 'Coors Field',
  type: 'stadium',
  metadata: {
    title: 'Coors Field Bag Policy: Guide + Images | Colorado Rockies',
    description: 'Coors Field allows only soft-sided, single-pocket bags and containers 16"x 16"x 8" or smaller. Backpacks and multi-pocket bags are prohibited.',
  },
  capacity: 50445,
  location: {
    address: '2001 Blake Street',
    city: 'Denver',
    state: 'CO',
    zip: '80205',
    coordinates: {
      latitude: 39.755882,
      longitude: -104.994178,
    },
    website: 'https://www.mlb.com/rockies/ballpark/information/guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Coors+Field+Denver&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Coors_Field_panorama_2022.jpg/640px-Coors_Field_panorama_2022.jpg'
  },
  teams: [
    {
      name: 'Colorado Rockies',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: 'Coors Field allows **only soft-sided, single-pocket bags and containers 16"x 16"x 8" or smaller**. Backpacks and multi-pocket bags (including multi-pocket purses) are prohibited. All permitted bags are subject to search both upon entry and within the ballpark. All gates have designated "Inspection Lanes" for guests carrying permitted items.',
    allowedBags: ['purse', 'tote','fanny_pack','clutch','wristlet'],
    prohibitedBags: ['backpack', 'duffel', 'briefcase'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Coors Field provide bag storage?',
      answer: 'Coors Field does not provide storage for bags that do not meet size or style requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Coors Field?',
      answer: 'The following items are prohibited at Coors Field:\n\n' +
        '• Aerosol sunscreen\n' +
        '• Alcoholic beverages, illegal drugs, or marijuana\n' +
        '• Aluminum or metal cans\n' +
        '• Animals (except service dogs)\n' +
        '• Backpacks or multi-pocket bags\n' +
        '• Beach balls, balloons and inflatables\n' +
        '• Bota bags or wine skin\n' +
        '• Bullhorns or noise makers\n' +
        '• Camera tripods (non-media)\n' +
        '• Confetti, soap bubbles\n' +
        '• Drones\n' +
        '• Firearms or weapons\n' +
        '• Fireworks\n' +
        '• Fishing nets or poles\n' +
        '• Frisbees\n' +
        '• Large unsliced fruits/vegetables\n' +
        '• Glass bottles\n' +
        '• Hard-sided containers or briefcases\n' +
        '• Hoverboards\n' +
        '• Insulated containers over 22 oz\n' +
        '• Knives\n' +
        '• Non-alcoholic beer\n' +
        '• Laser pointers\n' +
        '• Large pizza boxes\n' +
        '• Selfie sticks\n' +
        '• Wheeled items (skateboards, rollerblades)\n' +
        '• Oversized soft bags (>16"x16"x8")\n' +
        '• Water guns\n' +
        '• Sticks, clubs, or signs with sticks\n' +
        '• Stools or folding chairs'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Coors Field?',
      answer: 'Medical bags are permitted but must follow size requirements where possible and will be subject to inspection upon entry.'
    }
  ],
};