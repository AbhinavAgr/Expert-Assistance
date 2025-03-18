import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  Users,
  UserCheck,
  FileText
} from 'lucide-react';

export const JobPostingPlansSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const tiers = [
    {
      name: 'Campaign',
      description: 'Ideal for bulk hiring needs',
      features: [
        'Bulk Hiring',
        'Footfall of up to 60 relevant candidates for walk-in interviews',
        'Best for Software Developers, IT Support Specialists',
        'Front line sales officers, Financial Advisors',
      ],
      color: 'bg-blue-500',
      icon: GraduationCap,
      recommendedFor: 'Bulk Hiring Drives'
    },
    {
      name: 'Premium',
      description: 'For senior and high-value positions',
      features: [
        'Premium & Senior Mandates (CTC > 15 Lacs)',
        '5 Interview-ready candidates (post their consent)',
        'Blockchain Architect, IT Director, VPs',
        'Sales Head, Operations Director, Finance Head',
      ],
      color: 'bg-purple-500',
      icon: Users,
      recommendedFor: 'Senior Executive Hiring',
      isPopular: true
    },
    {
      name: 'Mid & Junior',
      description: 'For mid-level and junior positions',
      features: [
        'Mid-level Mandate (CTC 8-15 Lacs)',
        'Junior Mandate (CTC < 8Lacs)',
        '5 Interview-ready candidates (post their consent)',
        'Data Scientists, Product Managers, Marketing Managers, Finance Controllers',
      ],
      color: 'bg-green-500',
      icon: UserCheck,
      recommendedFor: 'Mid & Junior Level Hiring'
    },
    {
      name: 'Basic',
      description: 'Personalized service for all roles',
      features: [
        'Personalized Service',
        'Posting jobs, screening and sharing relevant responses',
        'Works Well for All Roles, including Sales Officers, IT Specialists',
        'Compliance Officers, Accountants, Relationship Managers',
      ],
      color: 'bg-orange-500',
      icon: FileText,
      recommendedFor: 'General Hiring Needs',
      revived: true
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Naukri expert assist custom solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right service tier based on your hiring requirements
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
                <tier.icon className="text-2xl text-white w-8 h-8" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {tier.name}
              </h3>

              <p className="text-gray-600 mb-4 min-h-[50px]">{tier.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                  How does it help?
                </h4>
                <div className="space-y-2">
                  {tier.features.slice(0, 2).map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                  Roles (Samples)
                </h4>
                <div className="space-y-2">
                  {tier.features.slice(2, 4).map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
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
                Request callback
                {hoveredPlan === index && (
                  <ArrowRight className="w-5 h-5 ml-2" />
                )}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Not sure which plan is right for you? <a href="#" className="text-blue-600 font-medium">Contact our team</a> for a customized solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobPostingPlansSection;