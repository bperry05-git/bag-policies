export interface VenueLocation {
  address: string;
  city: string;
  state: string;
  zip: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  website: string;
  bounceLink: string;
  imageUrl: string;
}

export interface VenueTeam {
  name: string;
  league: string;
  sport: string;
  active: boolean;
}

export interface VenueBagDimensions {
  width: number;
  height: number;
  depth: number;
  unit: 'in' | 'cm';
}

export interface VenueAllowedBag {
  type: string;
  description: string;
  dimensions?: VenueBagDimensions;
  requiresInspection?: boolean;
}

export interface VenuePolicies {
  effectiveDate: string;
  lastVerified: string;
  description: string;
  allowedBags: VenueAllowedBag[];
  prohibitedBags: string[];
  prohibitedGeneral?: Array<{
    category: string;
    items: string[];
  }>;
}

export interface VenueFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface VenueMetadata {
  title?: string;
  description?: string;
  slug?: string;
}

export interface VenueDetails {
  id: string;
  name: string;
  type: 'stadium' | 'arena';
  capacity: number;
  location: VenueLocation;
  teams: VenueTeam[];
  policies: VenuePolicies;
  faqs: VenueFAQ[];
  metadata?: VenueMetadata;
}