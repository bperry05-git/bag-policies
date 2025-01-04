import type { VenueDetails } from '../../../types/venue';

export const subaruParkVenue: VenueDetails = {
  id: 'subaru-park',
  name: 'Subaru Park',
  type: 'stadium',
  metadata: {
    title: 'Subaru Park Bag Policy: Guide + Images | Philadelphia Union',
    description: 'Subaru Park requires clear bags. Small clutches up to 4" x 6" permitted.',
  },
  capacity: 18500,
  location: {
    address: '1 Stadium Drive',
    city: 'Chester',
    state: 'PA',
    zip: '19013',
    coordinates: {
      latitude: 39.832778,
      longitude: -75.378889,
    },
    website: 'https://www.philadelphiaunion.com/stadium/entry-policies',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Subaru+Park+Chester&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/PPL_Park_Interior_from_the_River_End_2010.10.02.jpg/640px-PPL_Park_Interior_from_the_River_End_2010.10.02.jpg'
  },
  teams: [
    {
      name: 'Philadelphia Union',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    description: '**All bags must be clear**. Only exception is clutches up to **4" x 6"** in size.',
    allowedBags: ['clear', 'clear_plastic', 'clutch','wristlet'],
    prohibitedBags: ['purse', 'backpack', 'fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Subaru Park provide bag storage?',
      answer: 'No, Subaru Park does not provide storage for prohibited bags.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Subaru Park?',
      answer: 'The following items are prohibited:\n\n' +
        '• Non-clear bags and bags over 14" x 14" x 6"\n' +
        '• Aerosols and air horns\n' +
        '• Animals (except service animals)\n' +
        '• Backpacks and luggage\n' +
        '• Beverage containers and coolers\n' +
        '• Cameras with 8"+ lenses\n' +
        '• Drones and GoPros\n' +
        '• Electronic cigarettes\n' +
        '• Firearms and weapons\n' +
        '• Outside food/beverages\n' +
        '• Musical instruments\n' +
        '• Signs over 3\' x 5\'\n' +
        '• Strollers in seating areas\n' +
        '• Umbrellas\n' +
        '• Noisemaking devices'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Subaru Park?',
      answer: 'Medical necessities are permitted with proper documentation and inspection.'
    }
  ],
};