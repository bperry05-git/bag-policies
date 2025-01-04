import type { VenueDetails } from '../../../types/venue';

export const amerantBankArenaVenue: VenueDetails = {
  id: 'amerant-bank-arena',
  name: 'Amerant Bank Arena',
  type: 'arena',
  metadata: {
    title: 'Amerant Bank Arena Bag Policy: Guide + Images | Florida Panthers',
    description: 'Amerant Bank Arena enforces a strict bag policy. Small clutch bags up to 4" x 6" are allowed, along with medical and diaper bags. Most backpacks and large bags are prohibited.',
  },
  capacity: 19250,
  location: {
    address: '1 Panther Parkway',
    city: 'Sunrise',
    state: 'FL',
    zip: '33323',
    coordinates: {
      latitude: 26.158333,
      longitude: -80.325556,
    },
    website: 'https://www.amerantbankarena.com/plan-your-visit/prohibited-items',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Amerant+Bank+Arena+Sunrise&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/View_of_Amerant_Bank_Arena_from_Publix_Plaza_before_a_Florida_Panthers_game_during_the_2023-24_season..jpg/640px-View_of_Amerant_Bank_Arena_from_Publix_Plaza_before_a_Florida_Panthers_game_during_the_2023-24_season..jpg'
  },
  teams: [
    {
      name: 'Florida Panthers',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: 'Amerant Bank Arena encourages fans to arrive early and travel light. **Only small clutch bags up to 4" x 6" are allowed**. Medical and diaper bags are permitted with proper documentation. All bags are subject to thorough security inspection.',
    allowedBags: ['clutch', 'wristlet', 'fanny_pack'],
    prohibitedBags: [
      'backpack', 
      'purse', 
      'duffel', 
      'tote', 
    ],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Amerant Bank Arena provide bag storage?',
      answer: 'No, Amerant Bank Arena does not provide an area to check or store bags.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Amerant Bank Arena?',
      answer: 'Prohibited items include:\n\n' +
        '• Professional cameras or cameras with detachable lenses\n' +
        '• Audio or video recording devices\n' +
        '• GoPros, laptops, and selfie sticks\n' +
        '• Wrapped gifts or balloons\n' +
        '• Signs larger than 2\' x 2\' or with posts\n' +
        '• Strollers (except in specific areas)\n' +
        '• Weapons of any kind (knives, mace, tasers)\n' +
        '• Chains or spikes\n' +
        '• Fireworks or laser pointers\n' +
        '• Air horns or vuvuzelas\n' +
        '• Outside food or beverages (except for medical/religious purposes)\n' +
        '• Non-prescription drugs\n' +
        '• Animals (except certified service animals)\n' +
        '• Previously purchased souvenir cups\n' +
        '• Any item deemed dangerous by management or the NHL'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Amerant Bank Arena?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    },
    {
      id: 'allowed-items',
      question: 'What items are definitively allowed?',
      answer: 'Allowed items include:\n\n' +
        '• One unopened water bottle per person\n' +
        '• iPads\n' +
        '• Cowbells\n' +
        '• Umbrellas\n' +
        '• Small clutch bags up to 4" x 6"'
    }
  ],
};