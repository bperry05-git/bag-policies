import type { VenueDetails } from '../../../types/venue';

export const intuitDomeVenue: VenueDetails = {
  id: 'intuit-dome',
  name: 'Intuit Dome',
  type: 'arena',
  metadata: {
    title: 'Intuit Dome Bag Policy: Guides + Images | Clippers',
    description: 'Intuit Dome permits personal clutches and clear bags up to 5" x 9" x 1".',
  },
  capacity: 18000,
  location: {
    address: '1 Intuit Drive',
    city: 'Inglewood',
    state: 'CA',
    zip: '90305',
    coordinates: {
      latitude: 33.945833,
      longitude: -118.341667,
    },
    website: 'https://intuitdome.com/about/faq',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Intuit+Dome+Inglewood&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Intuit_Dome_Eastern_Exterior.jpg/640px-Intuit_Dome_Eastern_Exterior.jpg"
  },
  teams: [
    {
      name: 'Los Angeles Clippers',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: 'We understand that a bag can help keep your essentials safe and sound. However, please note that only personal clutches, including clear bags, no larger than 5" x 9" x 1" will be permitted in the arena. We will make exceptions for medical and childcare needs up to 14" x 14" x 6", but these bags must be screened by an onsite X-Ray machine.',
    allowedBags: ['clutch', 'wristlet','clear_plastic'],
    prohibitedBags: ['backpack', 'fanny_pack', 'purse', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Intuit Dome provide an area to store luggage?',
      answer: 'Intuit Dome does not provide an area to check oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Intuit Dome?',
      answer: 'The following items are prohibited at Intuit Dome:\n\n' +
        '• Large banners and flags (over 11" x 17" or on poles)\n' +
        '• Whistles, foghorns/airhorns and plastic horns (vuvuzelas, didgeridoos)\n' +
        '• Laser pointers or similar devices\n' +
        '• Optical illusion items (pinwheels, umbrellas that affect depth perception)\n' +
        '• Weapons (firearms, tasers/stun guns, knives)\n' +
        '• Aerosol cans\n' +
        '• Fireworks\n' +
        '• Frisbees\n' +
        '• Beverages\n' +
        '• Mace or pepper spray\n' +
        '• Poles, selfie-sticks, tripods, monopods\n' +
        '• Beach balls\n' +
        '• Bats and clubs\n' +
        '• Drones\n' +
        '• Professional cameras with interchangeable/detachable lenses\n' +
        '• Audio/visual recording devices (GoPro, Google Glass, Spectacles)\n' +
        '• Clothing or signs with explicit language/profanity\n' +
        '• Illegal substances\n' +
        '• Any items deemed dangerous by arena management'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Intuit Dome?',
      answer: 'Yes, medical bags and childcare bags up to 14" x 14" x 6" are permitted but must be screened by an onsite X-Ray machine.'
    }
  ],
};