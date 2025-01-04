import type { VenueDetails } from '../../../types/venue';

export const ballArenaVenue: VenueDetails = {
  id: 'ball-arena',
  name: 'Ball Arena',
  type: 'arena',
    metadata: {
    title: 'Ball Arena Bag Policy: Guide + Images | Nuggets & Avalanche',
    description: 'Ball Arena bag policy allows clutches, wristlets, and fanny packs up to 4” x 6” x 1.5”. Diaper bags up to 14” x 14” x 6” require x-ray screening. No backpacks allowed.',
  },
  capacity: 19520,
  location: {
    address: '1000 Chopper Circle',
    city: 'Denver',
    state: 'CO',
    zip: '80204',
    coordinates: {
      latitude: 39.748611,
      longitude: -105.007778,
    },
    website: 'https://www.ballarena.com/arena-information/arena-policies-faq/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Ball+Arena+Denver&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Ball_Arena_exterior_2022.jpg/640px-Ball_Arena_exterior_2022.jpg'
  },
  teams: [
    {
      name: 'Denver Nuggets',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    },
    {
      name: 'Colorado Avalanche',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: 'The Ball Arena bag policy allows **clutches, wristlets, and fanny packs up to 4” x 6” x 1.5” without restrictions**. Diaper bags and medically necessary items up to 14” x 14” x 6” are also permitted but must go through x-ray screening at the VIP entrances in the Grand Atrium and East Atrium. Backpacks and purses are strictly prohibited, and there is no bag check available, so guests are encouraged to plan accordingly.',
    allowedBags: ['wristlet','clutch','fanny_pack'],
    prohibitedBags: ['purse','backpack', 'duffel', 'camera_bag', 'briefcase', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Ball Arena provide an area to store luggage?',
      answer: 'Ball Arena does not provide an area to check oversized bags or luggage.'
    },
{
 id: 'prohibited-items',
 question: 'What items are prohibited at Ball Arena?',
 answer: 'The following items are prohibited at Ball Arena:\n\n' + 
   '• Air horns/whistles/vuvuzelas\n' +
   '• Animals (service animals permitted)\n' +
   '• Any form of marijuana and psilocybin mushrooms\n' +
   '• Audio/video recording devices\n' +
   '• Bags, purses, backpacks, briefcases, and luggage\n' +
   '  • Clutches, wristlets & fanny packs 4in x 6in x 1.5in are permitted\n' +
   '  • Medical and diaper bags 14in x 14in x 6in or smaller are permitted. All guests entering with medical or diaper bags are subject to x-ray screening upon entry.\n' +
   '• Cans\n' +
   '• Camera monopods/bipods/tripods\n' +
   '• Chemicals\n' +
   '• Drones and other unmanned aerial devices/vehicles\n' +
   '• Electric, chargeable and/or battery-operated apparel, including but not limited to hand/neck fans, blankets, socks, coats, vests, handwarmers, etc.\n' +
   '• External flash camera units\n' +
   '• Fireworks, smoke bombs, etc.\n' +
   '• Flags\n' +
   '• Glass containers\n' +
   '• Hard case containers (coolers, briefcases, etc.)\n' +
   '• Headdresses and face paint styled in a way that references or appropriates American Indian cultures and traditions\n' +
   '• Illegal drugs or substances\n' +
   '• Inflatable objects (beach balls, latex balloons, "clappers", etc.)\n' +
   '• Interchangeable/detachable camera lenses or cameras with lenses longer than four inches\n' +
   '• iPads/GoPros\n' +
   '• Laptops\n' +
   '• Large or offensive signs. No signs larger than 11in x 17in will be permitted in to Ball Arena. This will be our standard for all events unless otherwise specified by a special event/tour.\n' +
   '• Large umbrellas/golf umbrellas/any umbrella with a pointed end\n' +
   '• Laser pointers/pens\n' +
   '• Outside alcohol\n' +
   '• Sealed bottles of water\n' +
   '  • EMPTY (no liquids or ice) metal and plastic water bottles (no glass), 32oz or less ARE PERMITTED for all Nuggets, Avalanche and Mammoth games and ARE PROHIBITED for concerts/special events unless otherwise specified by an artist/tour. Please check with Guest Relations at 303-405-8548 or guestrelations@teamkse.com for specific concert/special event protocols.\n' +
   '• Outside food/beverages\n' +
   '• Police/radio scanners of any kind\n' +
   '• Regulation size sports equipment including, but not limited to hockey and lacrosse sticks\n' +
   '• Selfie sticks\n' +
   '• Skateboards, roller blades, roller skates, roller shoes, ice skates, etc.\n' +
   '• Unapproved pamphlets, handouts, advertisements, stickers, etc.\n' +
   '• Weapons (i.e. knives, pepper spray and other aerosols, key rings/key chains for self-defense, stun-guns, any concealed weapons, firearms, etc. and any ammunition or accessories to weapons)\n' +
   '• Any other devices that may potentially interfere with, harm, and/or distract any sports or event participant, other guest, audio or audio/visual telecast or recording of the game, or any technology-related service provided by the venue\n' +
   '• Other items as determined by facility management'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Ball Arena?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};