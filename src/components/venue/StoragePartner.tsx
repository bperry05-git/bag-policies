import React from 'react';
import type { VenueDetails } from '../../types/venue';

interface StoragePartnerProps {
  venue: VenueDetails;
}

export default function StoragePartner({ venue }: StoragePartnerProps) {
  const bounceLink = venue.location.bounceLink || 
    `https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=${encodeURIComponent(`${venue.location.address}, ${venue.location.city}, ${venue.location.state} ${venue.location.zip}`)}&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link`;
  return (
    <div className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
            <div className="w-32 h-32 flex-shrink-0 text-[#444CED]">
              <svg viewBox="0 0 222 222" className="w-full h-full">
                <path fill="currentColor" fillRule="evenodd" d="M0 111.227C0 50.2 49.744.727 111.107.727s111.106 49.473 111.106 110.5-49.744 110.5-111.106 110.5C49.744 221.727 0 172.255 0 111.227m146.57 11.158c16.333.927 30.322-11.488 31.254-27.732s-11.55-30.156-27.883-31.084c-16.333-.927-30.322 11.487-31.255 27.731-.932 16.245 11.55 30.157 27.884 31.085M50.505 99.197c5.065 0 9.317-3.77 9.899-8.782.624-5.437-3.303-10.364-8.77-10.993q-.578-.066-1.155-.068c-5.065 0-9.318 3.778-9.9 8.781-.624 5.438 3.303 10.364 8.77 10.994q.578.066 1.156.068m10.36 8.492c-.615 5.318 3.235 10.143 8.582 10.756.377.042.753.068 1.13.068 4.954 0 9.12-3.693 9.685-8.594.616-5.319-3.234-10.143-8.582-10.756a10 10 0 0 0-1.13-.068c-4.953 0-9.12 3.693-9.684 8.594m24.051 35.126c-5.347-.613-9.197-5.437-8.581-10.756.564-4.901 4.731-8.594 9.685-8.594.376 0 .753.026 1.13.068 5.347.612 9.197 5.438 8.58 10.755-.563 4.902-4.73 8.595-9.684 8.595q-.565-.002-1.13-.068M101.13 167.5c5.169 0 9.446-4.025 9.737-9.156.3-5.343-3.824-9.938-9.198-10.245-.188-.016-.375-.016-.563-.016h-.001c-5.168 0-9.446 4.024-9.737 9.155-.3 5.344 3.825 9.939 9.198 10.245.188.017.376.017.564.017m28.629-32.012c-.291 5.131-4.569 9.156-9.737 9.156-.188 0-.377 0-.565-.016-5.373-.307-9.496-4.902-9.189-10.246.292-5.131 4.569-9.155 9.737-9.155.189 0 .376 0 .564.016 5.373.307 9.497 4.902 9.19 10.245" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Safe & Secure Storage</h2>
              <p className="text-gray-600 mb-6">
                Don't let prohibited items ruin your experience at {venue.name}. Our trusted partner <a href={`https://bounce.com/en/s?_aid=6f6ed036-4792-475e-a4bf-feece76fd5af&query=${encodeURIComponent(`${venue.location.address}, ${venue.location.city}, ${venue.location.state} ${venue.location.zip}`)}&ref=BAGPOLICIES181885500&utm_source=affiliates&utm_medium=link`} target="_blank" rel="noopener noreferrer" className="font-bold text-[#444CED] hover:text-[#2D34A3]">Bounce</a> provides 
                secure storage locations near the venue for your bags and belongings. Book storage in minutes!
              </p>
              <a
                href={bounceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#444CED] text-white px-6 py-3 rounded-lg hover:bg-[#2D34A3] transition-colors"
              >
                Go Bag Free!
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}