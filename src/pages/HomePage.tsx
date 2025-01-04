import React from 'react';
import SearchBar from '../components/SearchBar';
import QuickLinks from '../components/QuickLinks';
import FeaturedVenues from '../components/FeaturedVenues';
import { useEffect } from 'react';
import { updateMetadata } from '../utils/metadata';

export default function HomePage() {
  useEffect(() => {
    updateMetadata(
      'Bag Policies | Official Venue Policies',
      'Check venue bag policies before you go. No waiting at the gate. Find bag policies for NFL, NBA, MLB, NHL, and MLS venues.'
    );
  }, []);
  return (
    <div className="min-h-screen">
      {/* Dynamic Hero Section */}
      <div className="relative text-white overflow-hidden min-h-[85vh]">
        <div className="absolute inset-0">
          {/* Stadium silhouette background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
            <div className="absolute inset-x-0 bottom-0 h-64 bg-black/30">
              <svg className="absolute bottom-0 w-full h-64 text-black/40" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
              </svg>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900">
            {/* Stadium floodlights */}
            {/* Left corner floodlight */}
            <div className="absolute -top-20 -left-20 w-[80vh] h-[80vh] bg-gradient-to-br from-white/30 via-white/5 to-transparent rotate-45 animate-floodlight origin-top-left"></div>
            
            {/* Right corner floodlight */}
            <div className="absolute -top-20 -right-20 w-[80vh] h-[80vh] bg-gradient-to-bl from-white/30 via-white/5 to-transparent -rotate-45 animate-floodlight animation-delay-2000 origin-top-right"></div>
            
            {/* Camera flash effects */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`absolute w-3 h-3 bg-white rounded-full animate-flash`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`
                }}
              ></div>
            ))}
            
            {/* Ambient light particles */}
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
            
            {/* Dynamic patterns */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-12"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,rgba(0,0,0,0)_100%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_100%)]"></div>
              <div className="absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(59,130,246,0.1)_0%,rgba(37,99,235,0.1)_50%,rgba(59,130,246,0.1)_100%)]"></div>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-32 flex flex-col items-center justify-center min-h-[85vh]">
          <div className="text-center max-w-3xl mx-auto">
            {/* Animated decorative elements */}
            <div className="mb-12 flex justify-center items-center gap-4">
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
            </div>
            
            <h1 className="text-6xl sm:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Never miss <br className="hidden sm:block" />a moment
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-16 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Check venue bag policies before you go. No waiting at the gate.
            </p>
            
            {/* Search bar wrapper with glow effect */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <SearchBar />
            </div>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Quick Links */}
      <div className="pt-12 pb-8 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Browse by League</h2>
          <p className="mt-3 text-lg text-gray-600">Find bag policies for your favorite teams</p>
        </div>
        <QuickLinks />
      </div>
      
      {/* Featured Venues */}
      <div className="pb-12">
        <FeaturedVenues />
      </div>
    </div>
  );
}