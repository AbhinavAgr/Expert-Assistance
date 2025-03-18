import React from 'react';

export const RecruitersSection = () => {
  const recruiters = [
    {
      name: "Rahul Sharma",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      experience: 8,
      categories: ["IT Services", "BFSI"]
    },
    {
      name: "Priya Patel",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      experience: 6,
      categories: ["Healthcare", "IT Services"]
    },
    {
      name: "Amit Kumar",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      experience: 10,
      categories: ["Auto", "BFSI"]
    },
    {
      name: "Sneha Gupta",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      experience: 5,
      categories: ["IT Services", "Healthcare"]
    },
    {
      name: "Vikram Singh",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c8a2906d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      experience: 7,
      categories: ["BFSI", "Auto"]
    },
    {
      name: "Ananya Desai",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      experience: 9,
      categories: ["Healthcare", "IT Services"]
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Skilled and Experienced Recruiters
          </h2>
          <p className="text-xl text-gray-600">
            Meet the experts who understand your hiring needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recruiters.map((recruiter, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={recruiter.image} 
                  alt={recruiter.name}
                  className="w-20 h-20 rounded-full object-cover mr-6 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{recruiter.name}</h3>
                  <p className="text-gray-600">
                    {recruiter.experience} Years of Experience
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {recruiter.categories.map((category, catIndex) => (
                  <span 
                    key={catIndex}
                    className="px-3 py-1 bg-[#265DF5]/10 text-[#265DF5] text-sm rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            And many more experts ready to help you find the perfect talent
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default RecruitersSection;