import type { VenueDetails } from '../../../types/venue';

export const yankeeStadiumVenue: VenueDetails = {
  id: 'yankee-stadium',
  name: 'Yankee Stadium',
  type: 'stadium',
  metadata: {
    title: 'Yankee Stadium Bag Policy: Guide + Images | NY Yankees & NYCFC',
    description: 'Yankee Stadium allows one MLB-compliant soft-sided bag up to 16"x16"x8" and one smaller personal item. Different restrictions may apply for non-MLB events.',
  },
  capacity: 46537,
  location: {
    address: '1 East 161st Street',
    city: 'Bronx',
    state: 'NY',
    zip: '10451',
    coordinates: {
      latitude: 40.829167,
      longitude: -73.926389,
    },
    website: 'https://www.mlb.com/yankees/ballpark/information/entry',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Yankee+Stadium+Bronx&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/YankeeStadium-9-21-22-1.jpg/640px-YankeeStadium-9-21-22-1.jpg'
  },
  teams: [
    {
      name: 'New York Yankees',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    },
    {
      name: 'New York City FC',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: '**One MLB-compliant soft-sided bag (up to 16"x16"x8") and one smaller soft-sided personal item (handbag, clutch, tote, grocery bag)**. All hard-sided bags/containers prohibited. Different restrictions may apply for other events. Bags must fit in size-check bins without modification. No storage available.',
    allowedBags: ['purse', 'fanny_pack','clutch', 'tote'],
    prohibitedBags: ['backpack','duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Yankee Stadium provide bag storage?',
      answer: 'No, there is no storage area for any items. Guests are encouraged to carry as little as possible to enable more timely entry.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Yankee Stadium?',
      answer: 'The following items are prohibited at Yankee Stadium:\n\n' +
        '• Alcoholic beverages and illegal drugs\n' +
        '• Outside food and drinks\n' +
        '• Drones\n' +
        '• Professional cameras, flash photography\n' +
        '• Video and audio recorders\n' +
        '• Glass, plastic, metal containers\n' +
        '• Fireworks and flares\n' +
        '• Laser pointers\n' +
        '• Hard-sided containers\n' +
        '• Weapons\n' +
        '• Baby seats\n' +
        '• Noise makers\n' +
        '• Inflatables\n' +
        '• Non-compliant bags\n' +
        '• Recreational devices\n' +
        '• Any items deemed inappropriate\n' +
        'Note: Security regulations may be amended at any time at Yankees\' discretion.'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Yankee Stadium?',
      answer: 'Medical bags are permitted but must follow size requirements where possible. All bags are subject to visual inspection.'
    }
  ],
};