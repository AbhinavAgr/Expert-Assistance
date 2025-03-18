import React, { useState } from 'react';
import { Building2, Users, Notebook as Robot, PiggyBank, Users2, ChevronDown, Play, CheckCircle2, MapPin, ArrowRight, X, Plus, Phone, Menu, ShoppingCart, Briefcase, Globe2, Brain, Coins, Heart } from 'lucide-react';
import { DemoModal } from './components/DemoModal';
import { TestimonialsSection } from './components/TestimonialsSection';
import RecruitersSection from './components/RecruitersSection';
import LocationsServedSection from './components/LocationsServedSection';
import CallbackRequestSection from './components/CallbackRequestSection';
import UniqueFeatureSection from './components/UniqueFeatureSection';

function App() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const [isTalentCloudOpen, setIsTalentCloudOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      title: "Industry Hiring Experience",
      description: "IT, BFSI, Auto and more",
      icon: Briefcase,
      color: "bg-blue-500"
    },
    {
      title: "Multichannel Access",
      description: "Naukri | TimesJobs | Hirist | Naukri Campus",
      icon: Globe2,
      color: "bg-purple-500"
    },
    {
      title: "Smart Technology",
      description: "AI-based Chatbots and IVR Systems",
      icon: Brain,
      color: "bg-green-500"
    },
    {
      title: "Significant Cost Savings",
      description: "Best ROI in the industry",
      icon: Coins,
      color: "bg-orange-500"
    },
    {
      title: "Satisfied Customers",
      description: "Technology, BFSI, Healthcare and More",
      icon: Heart,
      color: "bg-red-500"
    }
  ];

  const companyLogos = [
    {
      name: "Google",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/220px-Google_2015_logo.svg.png"
    },
    {
      name: "Microsoft",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/220px-Microsoft_logo.svg.png"
    },
    {
      name: "Adobe",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/220px-Adobe_Corporate_Logo.png"
    },
    {
      name: "TCS",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/220px-Tata_Consultancy_Services_Logo.svg.png"
    },
    {
      name: "Infosys",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/220px-Infosys_logo.svg.png"
    },
    {
      name: "Wipro",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/220px-Wipro_Primary_Logo_Color_RGB.svg.png"
    }
  ];

  // Duplicate the logos array to create a seamless loop
  const allLogos = [...companyLogos, ...companyLogos];

  const productOfferings = {
    byProducts: [
      {
        title: 'Job Posting',
        description: 'Find & attract relevant talent',
      },
      {
        title: 'Resdex',
        description: "Access India's largest database",
      },
      {
        title: 'Assisted Hiring',
        description: 'Our experts assist you',
      },
      {
        title: 'Branding',
        description: 'Showcase your brand presence',
      },
      {
        title: 'Talent pulse',
        description: 'Make informed hiring decisions',
      },
    ],
    byBusinessType: [
      {
        title: 'Enterprises',
        description: '',
      },
      {
        title: 'Small & medium business',
        description: '',
      },
      {
        title: 'Consultants & agency',
        description: '',
      },
    ],
  };

  const steps = [
    {
      title: 'Subscribe',
      description: 'Choose your service tier and complete the subscription process',
      icon: Building2,
      step: '01',
    },
    {
      title: 'Expert Consultation',
      description: 'Meet your dedicated recruitment expert to discuss requirements',
      icon: Users,
      step: '02',
    },
    {
      title: 'Sourcing',
      description: 'Access candidates across multiple premium job portals',
      icon: Robot,
      step: '03',
    },
    {
      title: 'Shortlisting',
      description: 'Get pre-screened candidates matching your criteria',
      icon: CheckCircle2,
      step: '04',
    },
    {
      title: 'Interview Scheduling',
      description: 'Seamless interview coordination with candidates',
      icon: Users2,
      step: '05',
    },
  ];

  const tiers = [
    {
      name: 'Basic',
      price: '₹29,999',
      description: 'Perfect for startups and small businesses',
      features: [
        'Access to basic job portals',
        'Entry-level hiring support',
        'Basic screening',
        'Email support',
      ],
    },
    {
      name: 'Mid & Junior',
      price: '₹49,999',
      description: 'Ideal for growing companies',
      features: [
        'Multi-channel job posting',
        'Dedicated expert',
        'Advanced screening',
        'Priority support',
      ],
    },
    {
      name: 'Premium',
      price: '₹79,999',
      description: 'For enterprise-level hiring needs',
      features: [
        'All premium job portals',
        'Senior level hiring',
        'AI-powered screening',
        '24/7 support',
      ],
      isPopular: true,
    },
    {
      name: 'Custom',
      price: 'Custom',
      description: 'Tailored solutions for unique needs',
      features: [
        'Customized sourcing strategy',
        'Multiple experts',
        'Custom workflow',
        'Dedicated manager',
      ],
    },
  ];

  const stats = [
    {
      title: 'Expert Consultants',
      value: '260+',
      icon: Users,
      color: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      title: 'Active Clients',
      value: '975+',
      icon: Building2,
      color: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    {
      title: 'Projects Delivered',
      value: '724+',
      icon: CheckCircle2,
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-500'
    },
    {
      title: 'Orders in Queue',
      value: '89+',
      icon: PiggyBank,
      color: 'bg-purple-50',
      iconColor: 'text-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img
                  src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
                  alt="Naukri.com"
                  className="h-8"
                />
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Our offerings dropdown */}
              <div className="relative">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#265DF5]"
                  onClick={() => setIsOfferingsOpen(!isOfferingsOpen)}
                >
                  <span>Our offerings</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Mega Menu */}
                {isOfferingsOpen && (
                  <div className="absolute top-full left-0 w-[600px] bg-white shadow-lg rounded-lg mt-2 p-6 grid grid-cols-2 gap-8">
                    {/* By Products */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-4">BY PRODUCTS</h3>
                      <div className="space-y-4">
                        {productOfferings.byProducts.map((product, index) => (
                          <a
                            key={index}
                            href="#"
                            className="block group"
                          >
                            <div className="text-gray-900 font-medium group-hover:text-[#265DF5]">
                              {product.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {product.description}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* By Business Type */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-4">BY BUSINESS TYPE</h3>
                      <div className="space-y-4">
                        {productOfferings.byBusinessType.map((type, index) => (
                          <a
                            key={index}
                            href="#"
                            className="block text-gray-900 font-medium hover:text-[#265DF5]"
                          >
                            {type.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Naukri Talent Cloud */}
              <div className="relative">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#265DF5]"
                  onClick={() => setIsTalentCloudOpen(!isTalentCloudOpen)}
                >
                  <span>Naukri Talent Cloud</span>
                  <span className="text-xs font-medium text-white bg-red-500 px-1.5 py-0.5 rounded">NEW</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-6">
              {/* Phone Number */}
              <a href="tel:1800-102-2558" className="hidden lg:flex items-center space-x-2 text-gray-700">
                <Phone className="w-4 h-4" />
                <span>1800-102-2558</span>
                <ChevronDown className="w-4 h-4" />
              </a>

              {/* Buy Online Button */}
              <button className="hidden lg:block px-4 py-2 bg-[#265DF5] text-white rounded-lg hover:bg-[#265DF5]/90 transition-colors">
                Buy online
              </button>

              {/* Cart Icon */}
              <button className="relative text-gray-700 hover:text-[#265DF5]">
                <ShoppingCart className="w-6 h-6" />
              </button>

              {/* Mobile Menu Button */}
              <button className="lg:hidden text-gray-700">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="h-[600px] bg-gradient-to-br from-[#0A1122] via-[#132347] to-[#1D366B] py-16">
        <div className="container mx-auto px-6 h-full">
          <div className="flex items-center h-full gap-16">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-[#265DF5]/20 rounded-full text-[#265DF5] text-sm font-semibold mb-8 shadow-sm">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-white p-1 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/220px-Adobe_Corporate_Logo.png"
                      className="w-full h-full object-contain"
                      alt="Adobe"
                    />
                  </div>
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-white p-1 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/220px-Microsoft_logo.svg.png"
                      className="w-full h-full object-contain"
                      alt="Microsoft"
                    />
                  </div>
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-white p-1 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/220px-Tata_Consultancy_Services_Logo.svg.png"
                      className="w-full h-full object-contain"
                      alt="TCS"
                    />
                  </div>
                </div>
                Trusted by 5k+ Companies
              </div>
              <div className="max-w-[620px] mb-10">
                <h1 className="text-6xl font-bold text-white mb-6 leading-tight whitespace-nowrap">
                  Hire Right,{' '}
                  <span className="bg-gradient-to-r from-[#265DF5] to-[#265DF5]/80 bg-clip-text text-transparent">
                    Hire Fast
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Leave sourcing, shortlisting, and scheduling to our hiring experts. 
                  You focus on interviewing the best!
                </p>
              </div>
              <div className="flex items-center gap-6 mb-12">
                <button 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="group px-7 py-3.5 bg-[#265DF5] hover:bg-[#265DF5]/90 text-white text-lg font-medium rounded-lg transition-all flex items-center gap-2"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white hover:text-[#265DF5] text-lg font-medium rounded-lg flex items-center gap-2 transition-all">
                  <Play size={20} className="text-white group-hover:text-[#265DF5] transition-colors" /> Watch Video
                </button>
              </div>
              <div className="grid grid-cols-3 gap-12 border-t border-white/10 pt-6 max-w-[440px]">
                <div>
                  <div className="text-2xl font-bold text-white mb-2">200+</div>
                  <div className="text-gray-400">Domain Experts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">150+</div>
                  <div className="text-gray-400">Cities Covered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">5000+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-1/2">
              <div className="relative h-[420px] w-[90%] ml-auto rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                  alt="Professional team meeting"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1122]/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes Us Different Section */}
      <div className="py-24 bg-gradient-to-b from-[#0A1122] to-[#132347]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Makes Naukri Expert Assist Different?
            </h2>
          </div>

          <div className="relative">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#265DF5]/30 transition-all duration-300 cursor-pointer group"
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="py-12 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Trusted by Our Valued Customers
          </h2>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            <div className="flex items-center overflow-hidden">
              <div className="flex items-center space-x-16 animate-scroll">
                {allLogos.map((logo, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 h-16 w-40 flex items-center justify-center"
                  >
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Stats</h2>
            <p className="text-xl text-gray-600">Numbers that speak for themselves</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 ${stat.color} ${stat.iconColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg text-gray-600">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Recruiters Section */}
      <RecruitersSection />



      {/* Testimonials Section */}
      <TestimonialsSection />


      <LocationsServedSection />

      {/* How It Works */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Your journey to successful hiring in simple steps</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-[60px] left-[40px] right-[40px] h-[2px] bg-gray-200">
              <div className="absolute top-0 left-0 h-full bg-[#265DF5] transition-all duration-300"
                style={{ width: `${(activeStep !== null ? (activeStep + 1) : 1) * (100 / steps.length)}%` }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-5 gap-6 relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Step Number Circle */}
                  <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center text-sm font-semibold mb-8 relative z-10 transition-all duration-300 ${
                    index <= (activeStep !== null ? activeStep : 0)
                      ? 'bg-[#265DF5] text-white'
                      : 'bg-white text-gray-400 border-2 border-gray-200'
                  }`}>
                    {step.step}
                  </div>

                  {/* Content Card */}
                  <div className={`bg-white p-6 rounded-2xl transition-all duration-300 ${
                    activeStep === index
                      ? 'shadow-lg border-[#265DF5] scale-105'
                      : 'border-gray-100'
                  } border`}>
                    <div className="mb-4">
                      <step.icon className={`w-8 h-8 ${
                        activeStep === index ? 'text-[#265DF5]' : 'text-gray-400'
                      }`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className={`text-gray-600 transition-all duration-300 ${
                      activeStep === index ? 'opacity-100' : 'opacity-60'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Tiers */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose your plan</h2>
            <p className="text-xl text-gray-600">Select the perfect plan for your recruitment needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg border transition-all relative ${
                  tier.isPopular
                    ? 'border-[#265DF5] shadow-xl scale-105 shadow-[#265DF5]/10'
                    : 'border-gray-100'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-[#265DF5] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="flex flex-col h-full">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{tier.name}</h3>
                    <div className={`text-3xl font-bold mb-4 ${tier.name === 'Custom' ? 'text-[#265DF5]' : 'text-[#265DF5]'}`}>
                      {tier.price}
                    </div>
                    <p className="text-gray-600 mb-6">{tier.description}</p>
                  </div>
                  <div className="flex-grow">
                    <ul className="space-y-4">
                      {tier.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#265DF5] mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={() => setIsDemoModalOpen(true)}
                    className={`w-full mt-8 py-3.5 rounded-lg font-medium transition-colors ${
                      tier.isPopular
                        ? 'bg-[#265DF5] text-white hover:bg-[#265DF5]/90'
                        : 'border border-[#265DF5] text-[#265DF5] hover:bg-[#265DF5] hover:text-white'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[#F4F1FF] rounded-[20px] p-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <img
                  src="https://images.unsplash.com/photo-1614786269829-d24616faf56d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Indian HR Professional"
                  className="w-48 h-48 object-cover rounded-[20px] shadow-lg"
                />
                <div>
                  <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
                    Not sure which offering is right for you?
                  </h2>
                  <p className="text-xl text-gray-600">
                    Leave your contact details and we'll get back to you shortly.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-8 py-4 bg-[#265DF5] hover:bg-[#265DF5]/90 text-white rounded-lg text-lg font-medium transition-colors"
              >
                Request callback
              </button>
            </div>
          </div>
        </div>
      </div>

      <UniqueFeatureSection />

      <CallbackRequestSection />


      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">About Us</h4>
              <p>
                Naukri Expert Assist is a premium recruitment service helping
                businesses hire the best talent efficiently.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p>support@naukriexpert.com</p>
              <p>+91 124 4841111</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white">LinkedIn</a>
                <a href="#" className="hover:text-white">Twitter</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 Naukri Expert Assist. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}

export default App;