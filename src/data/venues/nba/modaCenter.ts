import type { VenueDetails } from '../../../types/venue';

export const modaCenterVenue: VenueDetails = {
  id: 'moda-center',
  name: 'Moda Center',
  type: 'arena',
  metadata: {
    title: 'Moda Center Bag Policy: Guide + Images | Portland Trailblazers',
    description: 'Moda Center offers expedited entry for bags 4" x 6" or smaller. Larger bags up to 14" x 14" x 6" permitted with X-ray screening. Free bag check available.',
  },
  capacity: 19441,
  location: {
    address: '1 N Center Court St',
    city: 'Portland',
    state: 'OR',
    zip: '97227',
    coordinates: {
      latitude: 45.531667,
      longitude: -122.666667,
    },
    website: 'https://www.modaportland.com/rules/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Moda+Center+Portland&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Moda_Center.JPG/640px-Moda_Center.JPG"
  },
  teams: [
    {
      name: 'Portland Trail Blazers',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    description: 'Bags 4" x 6" and smaller allow you to experience our expedited entry process and walk straight through screening with your bag. Bags, other than backpacks, larger than 4" x 6" up to 14" x 14" x 6" are allowed but must go through a bag line to be screened by x-ray machines and will require a longer wait.',
    allowedBags: ['clutch','fanny_pack', 'purse','wristlet'],
    prohibitedBags: ['backpack', 'duffel', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Moda Center provide an area to store luggage?',
      answer: 'Yes, bag check is available free of charge at the P3 Lobby of the GardenGarage next to the North Entrance. Note that bag check cannot accept prohibited items.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Moda Center?',
      answer: 'The following items are prohibited at Moda Center:\n\n' +
        '• Weapons of any kind, with no exceptions\n' +
        '• Illegal drugs/substances\n' +
        '• Any tobacco products, including e-cigarettes/vaping\n' +
        '• Mace or pepper spray\n' +
        '• Outside alcohol or food\n' +
        '• Face masks covering whole face\n' +
        '• Fireworks\n' +
        '• Glass containers or cans, especially aerosol cans\n' +
        '• Knitting or sewing equipment\n' +
        '• Beach balls, bats, clubs, frisbees\n' +
        '• Hockey sticks\n' +
        '• Helium balloons\n' +
        '• Drones\n' +
        '• Noise-making devices (whistles, air horns, foghorns)\n' +
        '• Optical interference items (pinwheels, umbrellas)\n' +
        '• Professional cameras (SLR/DSLR)\n' +
        '• Video and audio recording equipment\n' +
        '• Laptops, tablets, iPads\n' +
        '• Laser pointers\n' +
        '• Tripods, poles, selfie sticks\n' +
        '• Flags or signs on hard poles\n' +
        '• Bags/backpacks larger than 14" x 14" x 6"\n' +
        '• Hard-sided bags\n' +
        '• Large umbrellas or those with pointed ends\n' +
        '• Car seats or strollers\n' +
        '• Animals (except service animals)'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Moda Center?',
      answer: 'Medical bags are permitted but must go through X-ray screening if larger than 4" x 6".'
    }
  ],
};