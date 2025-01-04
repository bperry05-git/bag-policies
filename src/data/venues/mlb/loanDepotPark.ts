import type { VenueDetails } from '../../../types/venue';

export const loanDepotParkVenue: VenueDetails = {
  id: 'loan-depot-park',
  name: 'loanDepot park',
  type: 'stadium',
  metadata: {
    title: 'LoanDepot Park Bag Policy: Guide + Images | Miami Marlins',
    description: 'loanDepot park allows clear plastic bags up to 16"x16"x8" and small clutch bags up to 6"x8". Medical and diaper bags are permitted with proper documentation.',
  },
  capacity: 36742,
  location: {
    address: '501 Marlins Way',
    city: 'Miami',
    state: 'FL',
    zip: '33125',
    coordinates: {
      latitude: 25.778056,
      longitude: -80.219722,
    },
    website: 'https://www.mlb.com/marlins/ballpark/information/guide',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=loanDepot+park+Miami&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Marlins_First_Pitch_at_Marlins_Park%2C_April_4%2C_2012.jpg/640px-Marlins_First_Pitch_at_Marlins_Park%2C_April_4%2C_2012.jpg'
  },
  teams: [
    {
      name: 'Miami Marlins',
      league: 'MLB',
      sport: 'Baseball',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: '**Clear bags made of plastic, vinyl, or PVC not exceeding 16"x16"x8" are permitted. Small clutches no larger than 6"x8" are also allowed**. Exceptions made for medical and infant care bags. All bags are subject to thorough inspection. The Marlins reserve the right to prohibit entry or require removal of any items at their discretion.',
    allowedBags: ['clear', 'clear_plastic', 'clutch', 'fanny_pack','wristlet'],
    prohibitedBags: ['backpack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does loanDepot park provide bag storage?',
      answer: 'loanDepot park does not provide storage for bags that do not meet size requirements. Strollers may be checked at the Home Plate or Third Base Entrances.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at loanDepot park?',
      answer: 'The following items are prohibited at loanDepot park:\n\n' +
        '• Aerosol cans (including sunscreen)\n' +
        '• Noise making devices (except Comunidad305 exceptions)\n' +
        '• Animals (except service animals)\n' +
        '• Ball retrievers and nets\n' +
        '• Non-compliant banners and flags\n' +
        '• Baseball bats and large frames\n' +
        '• Inflatables and beach balls\n' +
        '• Costume masks (except during special events)\n' +
        '• Cameras with 8"+ zoom lenses\n' +
        '• Drones\n' +
        '• Fireworks and flares\n' +
        '• Throwable objects\n' +
        '• Full-sized sticks and poles\n' +
        '• Glass/metal containers\n' +
        '• Hard coolers\n' +
        '• All helmets\n' +
        '• Illegal substances\n' +
        '• Laser devices and confetti\n' +
        '• Offensive clothing\n' +
        '• Outside beverages\n' +
        '• Paint\n' +
        '• Professional camera equipment\n' +
        '• Tobacco products and e-cigarettes\n' +
        '• Strollers (except in suites)\n' +
        '• Toy weapons\n' +
        '• Real weapons\n' +
        '• Wheeled devices\n' +
        '• Wrapped presents'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at loanDepot park?',
      answer: 'Yes, exceptions will be made for bags needed for medical or infant purposes. All bags will be subject to thorough inspection upon entry.'
    }
  ],
};