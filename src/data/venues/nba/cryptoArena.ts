import type { VenueDetails } from '../../../types/venue';

export const cryptoArenaVenue: VenueDetails = {
  id: 'crypto-arena',
  name: 'Crypto.com Arena',
  type: 'arena',
  metadata: {
    title: 'Crypto.com Arena Bag Policy: Guide + Images | LA Lakers & Kings',
    description: 'Crypto.com Arena prohibits most bags. Only small clutches under 5" x 9" x 1" and medical/parental bags under 14" x 14" x 6" are permitted with screening.',
  },
  capacity: 19068,
  location: {
    address: '1111 S Figueroa St',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90015',
    coordinates: {
      latitude: 34.043056,
      longitude: -118.267222,
    },
    website: 'https://www.cryptoarena.com/general-info-faq',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Crypto.com+Arena+Los+Angeles&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Crypto.com_Arena_Star_Plaza_entrance.jpg/640px-Crypto.com_Arena_Star_Plaza_entrance.jpg"
  },
  teams: [
    {
      name: 'Los Angeles Lakers',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    },
    {
      name: 'LA Kings',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: 'The Crypto.com Arena bag policy says **Bags, backpacks, purses, totes, clear bags, fanny packs, and camera bags are not allowed**. Small clutches and wallets smaller than 5" x 9" x 1" are permitted and are subject to security inspection. Medical and parental bags smaller than 14" x 14" x 6" are required to go through an X-Ray machine security screening.',
    allowedBags: ['clutch', 'wristlet'],
    prohibitedBags: ['backpack', 'purse', 'tote', 'fanny_pack'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Crypto.com Arena provide an area to store luggage?',
      answer: 'Crypto.com Arena does not provide an area to check oversized bags or luggage.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Crypto.com Arena?',
      answer: 'The following items are prohibited at Crypto.com Arena:\n\n' +
        '• Weapons of any kind\n' +
        '• Outside food and beverages\n' +
        '• Illegal drugs or drug paraphernalia\n' +
        '• Laser pointers\n' +
        '• Noisemakers\n' +
        '• Video and audio recording devices\n' +
        '• Selfie sticks\n' +
        '• Wrapped gifts or packages\n' +
        '• Any other item deemed inappropriate by Arena Management'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Crypto.com Arena?',
      answer: 'Yes, medical bags and parental bags smaller than 14" x 14" x 6" are permitted but must go through X-Ray machine security screening.'
    }
  ],
};