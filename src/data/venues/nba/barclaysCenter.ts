import type { VenueDetails } from '../../../types/venue';

export const barclaysCenterVenue: VenueDetails = {
  id: 'barclays-center',
  name: 'Barclays Center',
  type: 'arena',
    metadata: {
    title: 'Barclays Center Bag Policy: Guide + Images | Brooklyn Nets',
    description: 'Barclays Center bag policy allows drawstring backpacks and bags up to 14” x 14” x 6”. Backpacks and larger bags are prohibited for a safe entry experience.',
  },
  capacity: 17732,
  location: {
    address: '620 Atlantic Avenue',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11217',
    coordinates: {
      latitude: 40.682667,
      longitude: -73.975361,
    },
    website: 'https://www.barclayscenter.com/bags-backpacks-large-bags-suit-cases',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Barclays+Center+Brooklyn&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Barclays-center.jpg/640px-Barclays-center.jpg'
  },
  teams: [
    {
      name: 'Brooklyn Nets',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    }
  ],
  policies: {
    description: 'The Barclays Center bag policy **permits drawstring backpacks and any bags measuring 14” x 14” x 6” or smaller**, making it convenient for guests to bring personal items within these size limits. Backpacks and any bags larger than 14” x 14” x 6” are strictly prohibited to ensure a safe and efficient entry process.',
    allowedBags: ['wristlet','clutch','purse','fanny_pack'],
    prohibitedBags: ['backpack', 'duffel', 'camera_bag', 'briefcase', 'tote'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Barclays Center provide an area to store luggage?',
      answer: 'Barclays Center does not provide an area to check oversized bags or luggage.'
    },
{
 id: 'prohibited-items',
 question: 'What items are prohibited at Barclays Center?',
 answer: 'The following items are prohibited at Barclays Center:\n\n' +
   '• Weapons of any kind, including mace, pepper spray, knives, sharp objects, bats, clubs, tasers, etc.\n' +
   '• Bags larger than 14"x14"x6" or that are hard-sided\n' +
   '• Cans (including aerosols), bottles, boxed liquids, and metal, glass, or other insulated containers\n' +
   '• Professional camera equipment (e.g., detachable lens; lens greater than 3"; external flash; monopods; bipods; tripods; etc.)\n' +
   '• Audio/video recording devices\n' +
   '• Laser pointers or flashlights\n' +
   '• Illegal drugs/substances (current prescription medication in the original container is permitted, provided the guest produces identification matching the prescription container)\n' +
   '• Alcohol\n' +
   '• Fireworks, missile-like objects, Frisbees, and any other form of projectiles\n' +
   '• Signs, flags, and banners larger than 11"x17". Signs, flags, and banners of any size attached to poles. Signs, flags, and banners if prohibited by the production, not related to the event, or if made of wood, metal, plastic, or any other hard material\n' +
   '• Signs, posters, or garments with offensive language, phrasing, or symbols\n' +
   '• Balloons, beach balls, and other inflatables\n' +
   '• Unapproved pamphlets, handouts, etc.\n' +
   '• Fire starters and lighters\n' +
   '• Pets, other than service animals\n' +
   '• Selfie sticks, poles\n' +
   '• Coolers of any size, including soft-sided coolers\n' +
   '• Pointed tip or large umbrellas\n' +
   '• Outside food or beverages (exceptions will be made for those with medical requirements and/or special needs)\n' +
   '• Noisemakers, air horns, bells, bull horns, whistles, etc.\n' +
   '• Optical illusions (i.e., items intended to create optical illusions or interfere with the ability of the eye to perceive depth or distance, such as pin wheels and umbrellas)\n' +
   '• Drones\n' +
   '• Patrons without shoes or shirts\n' +
   '• Flowers, unless allowed by tour production\n' +
   '• Skateboards and rollerblades\n' +
   '• Any other items if prohibited by the production'
},
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Barclays Center?',
      answer: 'Yes, medical bags and equipment are permitted with proper documentation. Diaper bags are also allowed when accompanied by an infant.'
    }
  ],
};