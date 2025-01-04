import type { VenueDetails } from '../../../types/venue';

export const sapCenterVenue: VenueDetails = {
  id: 'sap-center',
  name: 'SAP Center',
  type: 'arena',
  metadata: {
    title: 'SAP Center Bag Policy: Guide + Images | San Jose Sharks',
    description: 'SAP Center recommends bags 5" x 9" x 2" or smaller for expedited entry. Larger bags up to 20" x 14" x 11" permitted with X-ray inspection.',
  },
  capacity: 17562,
  location: {
    address: '525 West Santa Clara Street',
    city: 'San Jose',
    state: 'CA',
    zip: '95113',
    coordinates: {
      latitude: 37.332778,
      longitude: -121.901111,
    },
    website: 'https://www.sapcenter.com/plan-your-visit/bag-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=SAP+Center+San+Jose&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/SAP_Center_in_San_Jose_%2852194580276%29.jpg/640px-SAP_Center_in_San_Jose_%2852194580276%29.jpg'
  },
  teams: [
    {
      name: 'San Jose Sharks',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: '**We recommend that fans bring bags that are 5" x 9" x 2" or smaller to expedite their entry. However, larger bags up to 20" x 14" x 11" are permitted**. All bags larger than 5" x 9" x 2", including medical and infant bags, require X-ray inspection and will result in longer wait times. Bags must fit under your seat once inside the event. SAP Center no longer offers bag check or storage lockers.',
    allowedBags: ['purse', 'clutch','fanny_pack', 'wristlet','tote'],
    prohibitedBags: ['backpack', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does SAP Center provide bag storage?',
      answer: 'SAP Center no longer offers bag check options or onsite storage lockers. Select prohibited items may be stored in onsite lockers for a nominal fee at management discretion.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at SAP Center?',
      answer: 'The following items are prohibited at SAP Center:\n\n' +
        '• Cans and glass bottles\n' +
        '• Thermos-type containers\n' +
        '• Hard-sided coolers\n' +
        '• Weapons (including masks and props that could be used as weapons)\n' +
        '• Ammunition\n' +
        '• Balloons\n' +
        '• Laser pens\n' +
        '• Noisemakers such as air horns\n' +
        '• Selfie sticks\n' +
        '• GoPros\n' +
        '• Flowers\n' +
        '• Gifts for performing artists\n' +
        '• Bags larger than 20" x 14" x 11"\n' +
        '• Any other items deemed inappropriate by management'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at SAP Center?',
      answer: 'Yes, medical bags and infant bags are permitted but will require X-ray inspection if larger than 5" x 9" x 2", which will result in longer wait times for entry.'
    }
  ],
};