import type { VenueDetails } from '../../../types/venue';

export const sutterHealthParkVenue: VenueDetails = {
  id: 'sutter-health-park',
  name: 'Sutter Health Park',
  type: 'stadium',
  metadata: {
    title: 'Sutter Health Park Bag Policy: Guide + Images | Athletics',
    description: 'Sutter Health Park enforces a clear bag policy. All belongings must be placed in clear plastic bags to expedite entry.',
  },
  capacity: 14014,
  location: {
    address: '400 Ballpark Drive',
    city: 'West Sacramento',
    state: 'CA',
    zip: '95691',
    coordinates: {
      latitude: 38.580278,
      longitude: -121.513889,
    },
    website: 'https://www.milb.com/sacramento/ballpark/sutter-health-park-guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Sutter+Health+Park+West+Sacramento&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sutter_Health_Park_view_on_an_off-day.jpg/640px-Sutter_Health_Park_view_on_an_off-day.jpg'
  },
  teams: [
    {
      name: 'Oakland Athletics',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: 'Sutter Health Park enforces a **CLEAR BAG POLICY**. All belongings must be placed in clear plastic bags to minimize lines and contact. All bags are subject to search upon entry and within the ballpark.',
    allowedBags: ['clear','clear_plastic','clutch','wristlet'],
    prohibitedBags: ['backpack', 'purse', 'tote','fanny_pack'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Sutter Health Park provide bag storage?',
      answer: 'Sutter Health Park does not provide storage for bags that do not meet the clear bag policy requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Sutter Health Park?',
      answer: 'The following items are prohibited at Sutter Health Park:\n\n' +
        '• Outside food or beverages\n' +
        '• Illegal drugs\n' +
        '• Glass bottles or cans\n' +
        '• Ice chests or hard-sided coolers\n' +
        '• Camera tripods\n' +
        '• Sticks and clubs\n' +
        '• Fireworks\n' +
        '• Bullhorns and noisemakers\n' +
        '• Confetti\n' +
        '• Animals (except service animals)\n' +
        '• Beach balls and inflatables\n' +
        '• Bicycles\n' +
        '• Skateboards or rollerblades\n' +
        '• Hoverboards\n' +
        '• Toy guns and water guns\n' +
        '• Laser pointers\n' +
        '• Drones\n' +
        '• Weapons\n' +
        'Note: Free bike parking is available on Ballpark Drive.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Sutter Health Park?',
      answer: 'Medical bags are permitted but should follow the clear bag policy where possible. All bags will be subject to search upon entry.'
    }
  ],
};