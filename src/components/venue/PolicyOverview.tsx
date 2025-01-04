import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldCheck, AlertCircle, ExternalLink } from 'lucide-react';
import type { VenueDetails } from '../../types/venue';

interface PolicyOverviewProps {
  venue: VenueDetails;
}

export default function PolicyOverview({ venue }: PolicyOverviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="p-6">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{venue.name} Bag Policy</h2>
                </div>
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="md:hidden text-gray-500 p-2 hover:text-gray-700"
                >
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
              </div>
              
              <div className={`mt-6 ${isExpanded ? 'block' : 'hidden md:block'}`}>
                <div className="prose prose-blue max-w-none space-y-4">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {venue.policies.description.split('**').map((text, index) => 
                      index % 2 === 0 ? text : <strong key={index}>{text}</strong>
                    )}
                  </p>
                </div>
                {venue.location.website && (
                  <div className="mt-6 py-3 border-t border-gray-100">
                    <div className="text-sm text-gray-600">
                      Verified from the{' '}
                      <a
                        href={venue.location.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        official venue website
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}