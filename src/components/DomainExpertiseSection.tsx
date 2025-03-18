import React from 'react';
import { 
  Building2, 
  Laptop, 
  ShoppingBag,
  HeartPulse, 
  Factory, 
  LineChart, 
  Truck,
  Plus 
} from 'lucide-react';

export const DomainExpertiseSection = () => {
  const domains = [
    {
      title: "Banking",
      description: "Finance, Risk, Compliance",
      icon: Building2,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      title: "Information Technology",
      description: "Development, DevOps, Security",
      icon: Laptop,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-100"
    },
    {
      title: "Retail",
      description: "Operations, Management, Sales",
      icon: ShoppingBag,
      iconColor: "text-green-500",
      bgColor: "bg-green-100"
    },
    {
      title: "Healthcare",
      description: "Medical, Pharma, Research",
      icon: HeartPulse,
      iconColor: "text-red-500",
      bgColor: "bg-red-100"
    },
    {
      title: "Manufacturing",
      description: "Engineering, Production, Quality",
      icon: Factory,
      iconColor: "text-gray-500",
      bgColor: "bg-gray-100"
    },
    {
      title: "Consulting",
      description: "Strategy, Management, Analytics",
      icon: LineChart,
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-100"
    },
    {
      title: "Logistics",
      description: "Supply Chain, Operations, Planning",
      icon: Truck,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-100"
    },
    {
      title: "And Many More",
      description: "Contact us for your specific domain",
      icon: Plus,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Domain Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naukri Expert Assist specializes in candidate shortlisting across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`${domain.bgColor} p-3 rounded-lg`}>
                  <domain.icon className={`w-6 h-6 ${domain.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {domain.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {domain.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainExpertiseSection;