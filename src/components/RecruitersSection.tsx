import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface RecruiterCategory {
  title: string;
  recruiters: Recruiter[];
}

interface Recruiter {
  name: string;
  image: string;
  yearsExperience: number;
}

export const RecruitersSection = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [animateCards, setAnimateCards] = useState(false);

  // Sample recruiter categories with actual image links
  const recruiterCategories: RecruiterCategory[] = [
    {
      title: "",
      recruiters: [
        {
          name: "Gurpreet Singh",
          image: "/src/Assests/ic_image01.png",
          yearsExperience: 8
        },
        {
          name: "Ankit Sharma",
          image: "/src/Assests/ic_image02.png",
          yearsExperience: 6
        },
        {
          name: "Srishti Singh",
          image: "/src/Assests/ic_image03.png",
          yearsExperience: 10
        },
        {
          name: "Neha Mishra",
          image: "/src/Assests/ic_image04.png",
          yearsExperience: 7
        },
        {
          name: "Amit Kumar",
          image: "/src/Assests/ic_image05.png",
          yearsExperience: 9
        },
        {
          name: "Reetika Rai",
          image: "/src/Assests/ic_image06.png",
          yearsExperience: 5
        },
        {
          name: "Muskan Bhatia",
          image: "/src/Assests/ic_image07.png",
          yearsExperience: 12
        },
        {
          name: "Anuskha Tiwari",
          image: "/src/Assests/ic_image08.png",
          yearsExperience: 8
        },
        {
            name: "Akanksha Singh",
            image: "/src/Assests/ic_image09.png",
            yearsExperience: 12
          },
          {
            name: "Amrit Kaur",
            image: "/src/Assests/ic_image10.png",
            yearsExperience: 8
          },
      ]
    },
  ];

  // Fewer skills tags while keeping them more prominent
  const skills = [
    "IT Services", 
    "Healthcare", 
    "Auto", 
    "BFSI",
    
  ];

  // Animation effect when component mounts
  useEffect(() => {
    setAnimateCards(true);
  }, []);

  return (
    <div className="py-32 bg-gray-50" id="recruiters">
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Left-Right Split Layout with more spacing */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - Text and Call to Action */}
          <div className="lg:w-1/3 lg:pr-10 mb-10 lg:mb-0">
            <div className="sticky top-24">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
                Our Skilled and Experienced Recruiters
              </h2>
              <p className="text-xl text-gray-600 mb-12 animate-fade-in animation-delay-200">
                Our experts from different industries here to assist you.
              </p>

              {/* More prominent skills tags while keeping original style */}
              <div className="flex flex-wrap gap-3 mb-12">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    onClick={() => setActiveTag(activeTag === skill ? null : skill)}
                    className={`
                      px-5 py-3 rounded-full text-base font-medium transition-all duration-300 cursor-pointer
                      animate-fade-in-up border-2
                      ${activeTag === skill 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'bg-white text-gray-700 border-gray-200 hover:border-blue-500 hover:bg-blue-50'}
                    `}
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-all duration-300 font-medium text-lg shadow-md hover:shadow-lg hover:scale-105 transform animate-fade-in-up animation-delay-800">
                Request Callback
              </button>
            </div>
          </div>

          {/* Right Column - Recruiter Categories with animations */}
          <div className="lg:w-2/3">
            {recruiterCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-24">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">{category.title}</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {category.recruiters.map((recruiter, index) => (
                    <div 
                      key={index}
                      className={`
                        bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg 
                        transition-all duration-500 border border-gray-200 flex
                        ${animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        hover:scale-[1.02] transform
                      `}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="w-28 h-28 flex-shrink-0 overflow-hidden">
                        <img 
                          src={recruiter.image}
                          alt={recruiter.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="font-semibold text-lg text-gray-900 mb-2">{recruiter.name}</h4>
                        <p className="text-gray-600 font-medium">{recruiter.yearsExperience} Years Experience</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </div>
  );
};

export default RecruitersSection;