import React, { useState } from 'react';
import { 
  Briefcase, 
  Globe2, 
  Brain, 
  Coins, 
  Heart, 
  ArrowRight 
} from 'lucide-react';

export const UniqueFeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Briefcase,
      title: "Industry Expertise",
      description: "Deep understanding across IT, BFSI, Healthcare, Auto, and more",
      color: "bg-blue-500",
      details: [
        "Sector-specific recruitment strategies",
        "Tailored candidate screening",
        "Industry-nuanced talent matching"
      ]
    },
    {
      icon: Globe2,
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
      title: "AI Powered",
      description: "AI-powered recruitment solutions",
      color: "bg-green-500",
      details: [
        "Advanced candidate matching",
        "AI-driven screening",
        "Predictive hiring analytics"
      ]
    },
    {
      icon: Coins,
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
      icon: Heart,
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
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Makes Naukri Expert Assist Different?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We go beyond traditional recruitment, leveraging technology, expertise, 
            and a deep understanding of your hiring needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Side Navigation */}
          <div className="space-y-4 md:col-span-1">
            {features.map((feature, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                className={`
                  group cursor-pointer p-5 rounded-xl transition-all duration-300
                  ${activeFeature === index 
                    ? 'bg-[#265DF5] text-white shadow-lg' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <feature.icon 
                      className={`w-7 h-7 ${
                        activeFeature === index 
                          ? 'text-white' 
                          : `${feature.color} group-hover:${feature.color}`
                      }`} 
                    />
                    <span className="font-semibold text-lg">{feature.title}</span>
                  </div>
                  <ArrowRight 
                    className={`w-5 h-5 transition-transform 
                      ${activeFeature === index 
                        ? 'translate-x-0 text-white' 
                        : 'translate-x-2 text-gray-400 group-hover:translate-x-0'
                      }`} 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Details Panel */}
          <div className="md:col-span-2 bg-gray-50 rounded-xl p-8">
            {activeFeature !== null ? (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {features[activeFeature].description}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {features[activeFeature].details.map((detail, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                    >
                      <div className={`w-2 h-2 ${features[activeFeature].color} rounded-full`}></div>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                Hover over a feature to see more details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatureSection;