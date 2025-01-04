import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { 
      name: 'NFL', 
      href: '/leagues/nfl'
    },
    { 
      name: 'NBA', 
      href: '/leagues/nba'
    },
    { 
      name: 'MLB', 
      href: '/leagues/mlb'
    },
    { 
      name: 'NHL', 
      href: '/leagues/nhl'
    },
    { 
      name: 'MLS', 
      href: '/leagues/mls'
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <a href="/" className="flex-shrink-0 flex items-center hover:text-blue-700 transition-colors">
            <div className="relative group">
              {/* Luggage tag hole */}
              <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full border border-blue-600 group-hover:scale-110 transition-transform z-10"></div>
              
              {/* Main tag body */}
              <div className="relative bg-blue-600 px-3 py-1 shadow-lg clip-tag-left">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-base font-black tracking-tight text-white italic">BAG</span>
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-1.5 h-1.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs font-black tracking-tight text-white/90 italic">POLICIES.com</span>
                </div>
                
                {/* Decorative shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
            </div>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-blue-600 transition-all font-bold text-lg px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 font-bold text-lg"
                >
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}