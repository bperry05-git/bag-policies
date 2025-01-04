import type { VenueDetails } from '../../../types/venue';

export const wellsFargoCenterVenue: VenueDetails = {
  id: 'wells-fargo-center',
  name: 'Wells Fargo Center',
  type: 'arena',
  metadata: {
    title: 'Wells Fargo Center Bag Policy: Guide + Images | 76ers & Flyers',
    description: 'Wells Fargo Center allows small bags up to 4.5" x 6.5" without X-ray, larger bags up to 14" x 14" x 6" with X-ray at specific entrances.',
  },
  capacity: 20478,
  location: {
    address: '3601 South Broad Street',
    city: 'Philadelphia',
    state: 'PA',
    zip: '19148',
    coordinates: {
      latitude: 39.901111,
      longitude: -75.171944,
    },
    website: 'https://www.wellsfargocenterphilly.com/plan-your-visit/security-policy',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=Wells+Fargo+Center+Philadelphia&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Wells_Fargo_Center_-_2019_OWL_Grand_Finals.jpg/640px-Wells_Fargo_Center_-_2019_OWL_Grand_Finals.jpg"
  },
  teams: [
    {
      name: 'Philadelphia 76ers',
      league: 'NBA',
      sport: 'Basketball',
      active: true,
    },
    {
      name: 'Philadelphia Flyers',
      league: 'NHL',
      sport: 'Hockey',
      active: true,
    }
  ],
  policies: {
    description: '**Bags larger than 4.5" x 6.5" and smaller than 14" x 14" x 6" with X-Ray screening**. Hand clutches, wristlets and small purses under 4.5" x 6.5" are permitted without X-ray but require security inspection. Backpacks, suitcases and large multicompartment bags are restricted. Lockers available on 11th Street, $5-$15, credit cards only.',
    allowedBags: ['clutch', 'wristlet', 'fanny_pack', 'purse'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does Wells Fargo Center provide an area to store luggage?',
      answer: 'Yes, lockers are available for prohibited bags on the 11th Street side of the venue. Lockers are limited and subject to availability. Prices range from $5 to $15, payable by credit cards only.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at Wells Fargo Center?',
      answer: 'The following items are prohibited at Wells Fargo Center:\n\n' +
        '• Smoking items (vapes, cigarettes, lighters, matches)\n' +
        '• Weapons (guns, knives, chains, tasers, firearms)\n' +
        '• Defense sprays (mace, pepper spray)\n' +
        '• Explosives, fireworks, ammunition\n' +
        '• Fuels, torches, lighter fluid\n' +
        '• Hazardous materials and chemicals\n' +
        '• Martial arts weapons, brass knuckles\n' +
        '• Bats, clubs, sticks, spikes\n' +
        '• Tools, razor blades, scissors\n' +
        '• Projectiles (frisbees, beach balls)\n' +
        '• Alcohol and illegal substances\n' +
        '• Drones and aircraft\n' +
        '• Laser pointers and optical distractions\n' +
        '• Noisemakers (horns, vuvuzelas, didgeridoos)\n' +
        '• Hoverboards and skateboards\n' +
        '• Recording devices\n' +
        '• Sealed packages and gifts\n' +
        '• Selfie sticks and tripods\n' +
        '• Pets (except service animals)\n' +
        '• Identity-concealing attire\n' +
        '• Large banners and flags\n' +
        '• Outside food/beverages (except medical/baby)\n' +
        '• Coolers and metal containers\n' +
        '• Large golf umbrellas (collapsible allowed)'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at Wells Fargo Center?',
      answer: 'Yes, medical equipment bags and parental bags smaller than 14" x 14" x 6" are permitted but must go through X-Ray screening at entry.'
    }
  ],
};