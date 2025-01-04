import type { VenueDetails } from '../../../types/venue';

export const comericaParkVenue: VenueDetails = {
  id: 'comerica-park',
  name: 'Comerica Park',
  type: 'stadium',
  metadata: {
    title: 'Comerica Park Bag Policy: Guide + Images | Detroit Tigers',
    description: 'Comerica Park enforces a strict bag policy. Only single compartment wallets and clutches smaller than 4" x 6" x 1.5" are permitted. Medical and diaper bags must be under 16" x 16" x 8".',
  },
  capacity: 41083,
  location: {
    address: '2100 Woodward Avenue',
    city: 'Detroit',
    state: 'MI',
    zip: '48201',
    coordinates: {
      latitude: 42.339167,
      longitude: -83.048611,
    },
    website: 'https://www.mlb.com/tigers/ballpark/security',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Comerica+Park+Detroit&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Comerica_Park_with_the_skyline_of_Detroit-2009.jpg/640px-Comerica_Park_with_the_skyline_of_Detroit-2009.jpg'
  },
  teams: [
    {
      name: 'Detroit Tigers',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    description: '**Single compartment bags, wallets and clutches smaller than 4" x 6" x 1.5" with or without a handle or strap are permitted. All other bags, purses, and clutches are prohibited**. Medical necessity exceptions include diaper bags, breast pumps, and medical devices, which must be smaller than 16" x 16" x 8". All items are subject to inspection.',
    allowedBags: ['clutch', 'wristlet'],
    prohibitedBags: ['backpack', 'purse','fanny_pack', 'tote', 'duffel', 'camera_bag'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Comerica Park provide bag storage?',
      answer: 'Comerica Park does not provide storage for bags that do not meet size requirements.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Comerica Park?',
      answer: 'The following items are prohibited at Comerica Park:\n\n' +
        '• Aerosol cans (including hairspray, mace, pepper spray)\n' +
        '• Marijuana or illegal substances and related accessories\n' +
        '• Animals (except approved service animals)\n' +
        '• Bags larger than 4" x 6" x 1.5" (except medical/diaper bags)\n' +
        '• Noisemaking devices (horns, whistles, vuvuzelas, etc.)\n' +
        '• Beach balls and inflatable items\n' +
        '• Outside beverages (except juice boxes for children/medical needs)\n' +
        '• Bottles and liquid containers\n' +
        '• Coolers\n' +
        '• Smoking products (including e-cigarettes, vaping)\n' +
        '• Fireworks or explosives\n' +
        '• Laser pointers and optical illusion devices\n' +
        '• Professional cameras with detachable lenses\n' +
        '• Baseball bats, poles, brooms, selfie-sticks\n' +
        '• Recording devices (laptops, tablets, GoPros)\n' +
        '• Recreational vehicles (skateboards, hover boards)\n' +
        '• Weapons of any kind (including toy/fake weapons)\n' +
        '• Drones\n' +
        '• Large banners/flags (over 11" x 17")\n' +
        '• Outside food\n' +
        '• Metal-tipped umbrellas and large golf umbrellas'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Comerica Park?',
      answer: 'Yes, bags needed for medical necessity including diaper bags, breast pumps, and medical devices are permitted but must be smaller than 16" x 16" x 8". All medical bags are subject to inspection.'
    }
  ],
};