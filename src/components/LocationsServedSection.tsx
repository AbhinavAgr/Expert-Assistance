import React from 'react';

export const LocationsServedSection = () => {
  const statsCards = [
    {
      topText: "Available across",
      value: "150+",
      bottomText: "Cities nationwide"
    },
    {
      topText: "Trusted by over",
      value: "5000+",
      bottomText: "Clients served"
    },
    {
      topText: "Expertise in",
      value: "12+",
      bottomText: "Industry verticals"
    },
    {
      topText: "Network of",
      value: "200K+",
      bottomText: "Qualified candidates"
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100" id="locations-served">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
          Locations Served: Simplifying Hiring Nationwide
        </h2>
        
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Connecting talent across India with our extensive network and deep understanding of regional job markets
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-gray-600 mb-4">{card.topText}</p>
              <p className="text-5xl lg:text-6xl font-bold text-[#265DF5] mb-4">{card.value}</p>
              <p className="text-gray-700 text-lg">{card.bottomText}</p>
            </div>
          ))}
        </div>

        

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-[#265DF5] text-white rounded-lg hover:bg-[#265DF5]/90 transition-colors">
            Request callback
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationsServedSection;