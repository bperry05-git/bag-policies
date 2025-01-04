import type { VenueDetails } from '../../../types/venue';

export const paycomCenterVenue: VenueDetails = {
  id: 'paycom-center',
  name: 'Paycom Center',
  type: 'arena',
  metadata: {
    title: 'Paycom Center Bag Policy: Guide + Images | OKC Thunder',
    description: 'Paycom Center prohibits bags larger than 6" x 9" x 2", including clear bags. Detachable chain straps are not permitted.',
  },
  capacity: 18203,
  location: {
    address: '100 W Reno Ave',
    city: 'Oklahoma City',
    state: 'OK',
    zip: '73102',
    coordinates: {
      latitude: 35.463333,
      longitude: -97.515,
    },
    website: 'https://www.paycomcenter.com/guest-services/security-policies',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Paycom+Center+Oklahoma+City&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Paycom_Center_OKC.jpg/640px-Paycom_Center_OKC.jpg"
  },
  teams: [
    {
      name: 'Oklahoma City Thunder',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    description: 'All bags will be searched upon entry. **Bags larger than 6" x 9" x 2" are not permitted (this includes clear bags)**. Detachable chain bag straps of any kind are not permitted.',
    allowedBags: ['clutch','wristlet'],
    prohibitedBags: ['purse', 'backpack','fanny_pack', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Paycom Center provide an area to store luggage?',
      answer: 'Paycom Center offers stroller check-in with guest services, but does not provide general bag storage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Paycom Center?',
      answer: 'The following items are prohibited at Paycom Center:\n\n' +
        '• Weapons of any kind (knives, mace, blades, tasers, pepper spray, etc.)\n' +
        '• Large banners and flags (larger than 11" x 17")\n' +
        '• Bags larger than 6" x 9" x 2"\n' +
        '• Cameras with professional/detachable lenses over 3"\n' +
        '• Audio/visual recording devices (GoPro, Google Glass, etc.)\n' +
        '• Poles, selfie-sticks, tripods, monopods\n' +
        '• iPads, tablets, laptops\n' +
        '• Outside food and beverage\n' +
        '• Chains of any kind\n' +
        '• Wrapped gifts\n' +
        '• Laser pens/pointers\n' +
        '• Balloons, beach balls, frisbees\n' +
        '• Fireworks\n' +
        '• Aerosol cans\n' +
        '• Noisemakers (whistles, horns, vuvuzelas, didgeridoos)\n' +
        '• Explicit/profane signage or clothing\n' +
        '• Drones\n' +
        '• Hazardous materials\n' +
        '• Optical illusions (pinwheels, umbrellas when not raining)\n' +
        '• Strollers (must be checked)\n' +
        '• Hoverboards, Segways (non-medical)\n' +
        '• Hard-sided containers'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Paycom Center?',
      answer: 'Medical needs including food are accommodated but require advance approval. Please call 405-602-8533 or email sking@asm-okc.com for assistance.'
    }
  ],
};