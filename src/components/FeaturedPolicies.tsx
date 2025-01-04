import React from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';

const featuredPolicies = [
  {
    id: 1,
    name: 'Super Bowl 2025',
    venue: 'Allegiant Stadium',
    location: 'Las Vegas, NV',
    image: 'https://images.unsplash.com/photo-1495695911455-19054a55f92f?auto=format&fit=crop&q=80&w=1200',
    summary: 'Clear bags only, maximum size 12" x 6" x 12"',
  },
  {
    id: 2,
    name: 'Coachella 2024',
    venue: 'Empire Polo Club',
    location: 'Indio, CA',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200',
    summary: 'Small bags and hydration packs allowed',
  },
];

export default function FeaturedPolicies() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Trending Policies</h2>
          <a href="/trending" className="flex items-center text-blue-600 hover:text-blue-800">
            View all
            <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPolicies.map((policy) => (
            <div
              key={policy.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={policy.image}
                  alt={policy.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{policy.name}</h3>
                  <p className="text-sm text-white/80">{policy.venue}</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-600">{policy.summary}</p>
                    <p className="text-sm text-gray-500 mt-1">{policy.location}</p>
                  </div>
                </div>
                
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Full Policy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}