import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Globe, 
  Brain, 
  Coins, 
  Heart, 
  ArrowRight,
  Network,
  BarChart4,
  Search,
  TrendingUp,
  Award
} from 'lucide-react';

export const UniqueFeatureSection = () => {
  // Set first feature (index 0) as active by default
  const [activeFeature, setActiveFeature] = useState<number>(0);

  // Features with more elegant icons
  const features = [
    {
      icon: Search,
      title: "Domain Expertise",
      description: "Naukri Expert Assist specializes in candidate shortlisting across multiple industries",
      color: "bg-blue-500",
      details: [
        "Banking | Finance, Risk, Compliance",
        "Information Technology Development, DevOps, Security",
        "Retail Operations, Management, Sales",
        "And Many More Contact us for your specific domain"
      ]
    },
    {
      icon: Network,
      title: "Multichannel Sourcing",
      description: "Access to extensive talent networks",
      color: "bg-purple-500",
      details: [
        "Naukri.com platform integration",
        "Campus recruitment channels",
        "Diverse talent pool access"
      ]
    },
    {
      icon: Brain,
      title: "Smart Technology",
      description: "AI-powered recruitment solutions",
      color: "bg-green-500",
      details: [
        "Advanced candidate matching",
        "AI-driven screening",
        "Predictive hiring analytics"
      ]
    },
    {
      icon: TrendingUp,
      title: "Cost-Effective Hiring",
      description: "Optimized recruitment with best ROI",
      color: "bg-orange-500",
      details: [
        "Reduced time-to-hire",
        "Minimized recruitment overhead",
        "Performance-based pricing"
      ]
    },
    {
      icon: Award,
      title: "Customer Satisfaction",
      description: "Proven track record across industries",
      color: "bg-red-500",
      details: [
        "5000+ satisfied clients",
        "Consistent high-quality placements",
        "Dedicated support team"
      ]
    }
  ];

  return (
    <div className="py-32 bg-white"> {/* Increased vertical padding */}
      <div className="container mx-auto px-8 max-w-7xl"> {/* Increased horizontal padding and max width */}
        <div className="text-center mb-20"> {/* Increased margin-bottom */}
          <h2 className="text-5xl font-bold text-gray-900 mb-6"> {/* Increased text size and margin */}
            What Makes Naukri Expert Assist Different?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We go beyond traditional recruitment, leveraging technology, expertise, 
            and a deep understanding of your hiring needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12"> {/* Increased gap */}
          {/* Side Navigation */}
          <div className="space-y-5"> {/* Increased spacing between items */}
            {features.map((feature, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                onClick={() => setActiveFeature(index)}
                className={`
                  group cursor-pointer p-4 rounded-xl transition-all duration-300 shadow-sm
                  ${activeFeature === index 
                    ? 'bg-[#265DF5] text-white shadow-xl' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-5"> {/* Increased spacing */}
                    <div className={`p-3 rounded-lg ${
                      activeFeature === index 
                        ? 'bg-white/20' 
                        : 'bg-white'
                    }`}>
                      <feature.icon 
                        className={`w-8 h-8 ${
                          activeFeature === index 
                            ? 'text-white' 
                            : feature.color
                        }`} 
                        strokeWidth={1.5} /* Thinner lines for more elegant look */
                      />
                    </div>
                    <span className="font-semibold text-lg">{feature.title}</span>
                  </div>
                  <ArrowRight 
                    className={`w-5 h-5 transition-transform 
                      ${activeFeature === index 
                        ? 'translate-x-0 text-white' 
                        : 'translate-x-2 text-gray-400 group-hover:translate-x-0'
                      }`} 
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Details Panel */}
          <div className="md:col-span-2 bg-gray-50 rounded-xl p-10 shadow-lg border border-gray-100"> {/* Increased padding and added shadow */}
            {activeFeature !== null && (
              <div className="animate-fadeIn">
                <h3 className="text-3xl font-bold text-gray-900 mb-6"> {/* Increased text size and margin */}
                  {features[activeFeature].title}
                </h3>
                <p className="text-xl text-gray-600 mb-8"> {/* Increased text size and margin */}
                  {features[activeFeature].description}
                </p>
                <div className="grid md:grid-cols-2 gap-5"> {/* Increased gap */}
                  {features[activeFeature].details.map((detail, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-4 bg-white p-5 rounded-lg shadow-sm border-l-4 transition-all hover:shadow-md"
                      style={{ borderLeftColor: activeFeature === 0 ? '#3B82F6' : 
                                             activeFeature === 1 ? '#8B5CF6' : 
                                             activeFeature === 2 ? '#10B981' : 
                                             activeFeature === 3 ? '#F97316' : 
                                             '#EF4444' }}
                    >
                      <div className={`w-2 h-2 rounded-full ${features[activeFeature].color}`}></div>
                      <span className="text-gray-700 text-lg">{detail}</span> {/* Increased text size */}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatureSection;