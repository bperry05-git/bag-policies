import React from 'react';

const categories = [
  { 
    name: 'NFL',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Arlington_June_2020_2_%28AT%26T_Stadium%29.jpg/640px-Arlington_June_2020_2_%28AT%26T_Stadium%29.jpg'
  },
  { 
    name: 'NBA',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Paycom_Center_OKC.jpg/640px-Paycom_Center_OKC.jpg'
  },
  { 
    name: 'MLB',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/YankeeStadium-9-21-22-1.jpg/640px-YankeeStadium-9-21-22-1.jpg'
  },
  { 
    name: 'NHL',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Capital_One_Arena_-_Washington%2C_D.C.jpg/640px-Capital_One_Arena_-_Washington%2C_D.C.jpg'
  },
  { 
    name: 'MLS',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Mercedes-Benz_Stadium%2C_July_2018.jpg/640px-Mercedes-Benz_Stadium%2C_July_2018.jpg'
  },
];

export default function QuickLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {categories.map((category) => (
        <a
          key={category.name}
          href={`/leagues/${category.name.toLowerCase()}`}
          className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 duration-200 border border-blue-100 hover:border-blue-200 h-48"
        >
          <div className="absolute inset-0">
            <img 
              src={category.image} 
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/40 transition-colors"></div>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <h3 className="text-4xl font-bold text-white tracking-wide group-hover:text-blue-100 transition-colors">
              {category.name}
            </h3>
          </div>
        </a>
      ))}
    </div>
  );
}