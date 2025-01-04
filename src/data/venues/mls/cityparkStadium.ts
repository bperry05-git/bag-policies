import type { VenueDetails } from '../../../types/venue';

export const cityparkStadiumVenue: VenueDetails = {
  id: 'citypark-stadium',
  name: 'CITYPARK Stadium',
  type: 'stadium',
  metadata: {
    title: 'CITYPARK Stadium Bag Policy: Guide + Images | St. Louis City SC',
    description: 'CITYPARK Stadium allows clear bags up to 14" x 14" x 6" and small wallets/clutches up to 5" x 7" x 2".',
  },
  capacity: 22500,
  location: {
    address: '2100 Market Street',
    city: 'St. Louis',
    state: 'MO',
    zip: '63103',
    coordinates: {
      latitude: 38.631389,
      longitude: -90.208333,
    },
    website: 'https://www.stlcitysc.com/city-sc/matchday/bag-policy/',
    bounceLink: 'https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=CITYPARK+Stadium+St+Louis&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/St._Louis_City_SC_vs._FC_Cincinnati_at_CityPark_%2820230416094709-02%29.jpg/640px-St._Louis_City_SC_vs._FC_Cincinnati_at_CityPark_%2820230416094709-02%29.jpg'
  },
  teams: [
    {
      name: 'St. Louis City SC',
      league: 'MLS',
      sport: 'Soccer',
      active: true,
    }
  ],
  policies: {
    effectiveDate: '2024-01-01',
    lastVerified: '2024-03-15',
    description: '**Clear bags up to 14" x 14" x 6"** are permitted. **Wallets/clutches up to 5" x 7" x 2"** that are not clear are allowed with inspection. Medical and diaper bags reviewed case-by-case. Official CITY SC Refillable Rambler® bottles allowed.',
    allowedBags: ['clutch', 'wristlet', 'clear', 'clear_plastic',],
    prohibitedBags: ['backpack', 'purse','fanny_pack', 'tote', 'duffel'],
  },
  faqs: [
    {
      id: 'general-policy',
      question: 'Does CITYPARK Stadium provide bag storage?',
      answer: 'No, CITYPARK Stadium does not provide storage for prohibited items.'
    },
    {
      id: 'prohibited-items',
      question: 'What items are prohibited at CITYPARK Stadium?',
      answer: 'The following items are prohibited:\n\n' +
        '• Weapons and fireworks\n' +
        '• Illegal substances\n' +
        '• Outside food and beverages\n' +
        '• Containers of any kind\n' +
        '• Flag poles\n' +
        '• Large seat cushions (over 16" x 16")\n' +
        '• Aerosol cans\n' +
        '• Professional camera equipment\n' +
        '• Noisemakers\n' +
        '• Laser pointers\n' +
        '• Drones\n' +
        '• Recreational vehicles\n' +
        '• Selfie sticks\n' +
        '• Inflatable items\n' +
        '• Umbrellas\n' +
        '• Large flags/banners (over 3\' x 5\')\n' +
        '• Animals (except service animals)'
    },
    {
      id: 'medical-bags',
      question: 'Are medical bags allowed at CITYPARK Stadium?',
      answer: 'Yes, guests with medical needs and diaper bags are granted exemptions on a case-by-case basis.'
    }
  ],
};