import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export const JobPostingPlansSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const tiers = [
    {
      name: 'Basic',
      price: '₹29,999',
      billingFrequency: 'per month',
      description: 'Perfect for startups and small businesses',
      features: [
        'Access to basic job portals',
        'Entry-level hiring support',
        'Basic screening',
        'Email support',
        'Up to 5 job postings',
        'Candidate database access'
      ],
      color: 'bg-blue-500',
      recommendedFor: 'Small Teams & Startups'
    },
    {
      name: 'Mid & Junior',
      price: '₹49,999',
      billingFrequency: 'per month',
      description: 'Ideal for growing companies',
      features: [
        'Multi-channel job posting',
        'Dedicated recruitment expert',
        'Advanced candidate screening',
        'Priority email & chat support',
        'Up to 10 job postings',
        'Detailed candidate reports',
        'LinkedIn job posting'
      ],
      color: 'bg-purple-500',
      recommendedFor: 'Growing Businesses',
      isPopular: true
    },
    {
      name: 'Premium',
      price: '₹79,999',
      billingFrequency: 'per month',
      description: 'For enterprise-level hiring needs',
      features: [
        'All premium job portals',
        'Senior level hiring',
        'AI-powered candidate matching',
        '24/7 dedicated support',
        'Unlimited job postings',
        'Comprehensive talent pipeline',
        'Executive search support',
        'Branding & employer marketing'
      ],
      color: 'bg-green-500',
      recommendedFor: 'Enterprise & Scale-ups'
    },
    {
      name: 'Custom',
      price: 'Custom Pricing',
      billingFrequency: 'tailored to needs',
      description: 'Customized solutions for unique hiring requirements',
      features: [
        'Fully customized sourcing strategy',
        'Multiple dedicated experts',
        'Bespoke workflow design',
        'Comprehensive talent acquisition',
        'Advanced analytics & reporting',
        'Industry-specific targeting',
        'White-glove service'
      ],
      color: 'bg-orange-500',
      recommendedFor: 'Complex Hiring Needs'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Flexible Hiring Solutions for Every Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a plan that matches your hiring needs and scale effortlessly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`
                bg-white border rounded-xl p-6 relative overflow-hidden 
                transition-all duration-300 group
                ${hoveredPlan === index 
                  ? 'shadow-2xl -translate-y-4 border-blue-500' 
                  : 'shadow-lg border-gray-200'
                }
                ${tier.isPopular 
                  ? 'border-blue-500' 
                  : 'border-gray-200'
                }
              `}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 text-sm rounded-b">
                  Most Popular
                </div>
              )}

              <div className={`
                w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300
                ${tier.color}
                ${hoveredPlan === index 
                  ? 'scale-110 rotate-6' 
                  : ''
                }
              `}>
                <span className="text-2xl text-white">📊</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {tier.name}
              </h3>

              <div className="mb-4">
                <p className="text-2xl font-bold text-[#265DF5]">{tier.price}</p>
                <p className="text-sm text-gray-500">{tier.billingFrequency}</p>
              </div>

              <p className="text-gray-600 mb-4 min-h-[50px]">{tier.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                  Key Features:
                </h4>
                <div className="space-y-2">
                  {tier.features.slice(0, 4).map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                  {tier.features.length > 4 && (
                    <div className="text-sm text-gray-500">
                      + {tier.features.length - 4} more features
                    </div>
                  )}
                </div>
              </div>

              <div className="text-sm text-gray-600 mb-4">
                <strong>Recommended for:</strong> {tier.recommendedFor}
              </div>

              <button 
                className={`
                  w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2
                  ${hoveredPlan === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : (tier.isPopular 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'bg-blue-50 text-blue-600')
                  }
                `}
              >
                Get Started
                {hoveredPlan === index && (
                  <ArrowRight className="w-5 h-5 ml-2" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPostingPlansSection;