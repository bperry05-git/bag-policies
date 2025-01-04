import type { VenueDetails } from '../../../types/venue';

export const spectrumCenterVenue: VenueDetails = {
  id: 'spectrum-center',
  name: 'Spectrum Center',
  type: 'arena',
  metadata: {
    title: 'Spectrum Center Bag Policy: Guide + Images | Charlotte Hornets',
    description: 'Spectrum Center strongly discourages bags. Only small bags up to 5" x 7" x 1.5" are permitted, regardless of material.',
  },
  capacity: 19077,
  location: {
    address: '333 East Trade Street',
    city: 'Charlotte',
    state: 'NC',
    zip: '28202',
    coordinates: {
      latitude: 35.225,
      longitude: -80.839167,
    },
    website: 'https://www.spectrumcentercharlotte.com/plan-your-visit/a-z-guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Spectrum+Center+Charlotte&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Spectrum_Center_2018.jpg/640px-Spectrum_Center_2018.jpg"
  },
  teams: [
    {
      name: 'Charlotte Hornets',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    description: 'If a bag is necessary, **small bags, clutches, crossbodies and wristlets – that do not exceed 5" x 7" x 1.5" – are permitted**. Policy applies to all bags, clear or not. Exceptions will be made for diaper and medical bags, including breast pumps. These bags will need to go through x-ray screening upon entry.',
    allowedBags: ['clutch', 'wristlet'],
    prohibitedBags: ['fanny_pack', 'backpack', 'purse'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Spectrum Center provide an area to store luggage?',
      answer: 'Spectrum Center does not provide an area to check oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Spectrum Center?',
      answer: 'The following items are prohibited at Spectrum Center:\n\n' +
        '• Large banners/flags (on poles over 18 inches)\n' +
        '• Whistles, foghorns, airhorns, vuvuzelas, didgeridoos\n' +
        '• Laser pointers\n' +
        '• Optical illusion items (pinwheels, umbrellas)\n' +
        '• Weapons (including guns and knives)\n' +
        '• Cigarettes, e-cigarettes, cigars, vape pens, pipes\n' +
        '• iPads or tablets\n' +
        '• Aerosol cans\n' +
        '• Fireworks\n' +
        '• Frisbees\n' +
        '• Mace or pepper spray\n' +
        '• Poles, selfie-sticks\n' +
        '• Strollers\n' +
        '• Tripods\n' +
        '• Umbrellas\n' +
        '• Beach balls\n' +
        '• Bats and clubs\n' +
        '• Skateboards or hoverboards\n' +
        '• Illegal substances'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Spectrum Center?',
      answer: 'Yes, exceptions are made for medical bags (including breast pumps) and diaper bags, but they must go through x-ray screening upon entry.'
    }
  ],
};