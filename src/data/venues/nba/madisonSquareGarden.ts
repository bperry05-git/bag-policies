import type { VenueDetails } from '../../../types/venue';

export const madisonSquareGardenVenue: VenueDetails = {
  id: 'madison-square-garden',
  name: 'Madison Square Garden',
  type: 'arena',
  metadata: {
    title: 'Madison Square Garden Bag Policy: Guide + Images | NY Knicks & Rangers',
    description: 'Madison Square Garden allows bags that fit under seats and are smaller than 22" x 14" x 9". Bags do not need to be clear.',
  },
  capacity: 19812,
  location: {
    address: '4 Pennsylvania Plaza',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    coordinates: {
      latitude: 40.750556,
      longitude: -73.993611,
    },
    website: 'https://www.msg.com/madison-square-garden/faqs',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Madison+Square+Garden+New+York&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Madison_Square_Garden_%28MSG%29_-_Full_%2848124330357%29.jpg/640px-Madison_Square_Garden_%28MSG%29_-_Full_%2848124330357%29.jpg"
  },
  teams: [
    {
      name: 'New York Knicks',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    },
    {
      name: 'New York Rangers',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: 'Bags do not have to be clear, but they must fit comfortably under your seat. **Oversized bags larger than 22" x 14" x 9" are prohibited**. Madison Square Garden does not provide an area to check bags, coats or any other personal belongings.',
    allowedBags: ['purse','clutch', 'fanny_pack','wristlet'],
    prohibitedBags: ['backpack','tote','duffel','briefcase'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Madison Square Garden provide an area to store luggage?',
      answer: 'Madison Square Garden does not provide an area to check bags, coats or any other personal belongings.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Madison Square Garden?',
      answer: 'The following items are prohibited at Madison Square Garden:\n\n' +
        '• Weapons, firearms, knives\n' +
        '• Laser pens\n' +
        '• Pepper spray/mace and other defensive devices\n' +
        '• Signs, banners, flags\n' +
        '• Selfie sticks\n' +
        '• Video cameras/recording devices (phones allowed except at device-free events)\n' +
        '• Professional cameras with telephoto or zoom lenses\n' +
        '• Outside food and beverage, including alcohol\n' +
        '• Hoverboards and skateboards\n' +
        '• Noisemaking devices (including cowbells, alarm devices, airhorns)\n' +
        '• Bags larger than 22" x 14" x 9"'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Madison Square Garden?',
      answer: 'Medical bags are permitted but must fit under your seat and be subject to security inspection.'
    }
  ],
};