import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-400">
          <p className="mb-4">Your trusted source for venue and event bag policies worldwide.</p>
          <p>&copy; {new Date().getFullYear()} BagPolicies.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}