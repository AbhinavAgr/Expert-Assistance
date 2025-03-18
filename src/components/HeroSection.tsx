import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

function HeroSection({ onDemoModalOpen }) {
  const companyLogos = [
    {
      name: "Adobe",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/220px-Adobe_Corporate_Logo.png"
    },
    {
      name: "Microsoft",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/220px-Microsoft_logo.svg.png"
    },
    {
      name: "TCS",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/220px-Tata_Consultancy_Services_Logo.svg.png"
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0A2C4C] via-[#0E3A69] to-[#265DF5] overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2C4C]/70 to-[#265DF5]/20 opacity-90" />
      
      {/* Animated Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm">
              <div className="flex -space-x-2 mr-3">
                {companyLogos.map((logo, index) => (
                  <div 
                    key={index} 
                    className="w-7 h-7 rounded-full border-2 border-white bg-white p-1 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              Trusted by 5k+ Companies
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hire Right, 
              <br />
              <span className="bg-gradient-to-r from-[#4ECDC4] to-[#265DF5] bg-clip-text text-transparent">
                Hire Smart
              </span>
            </h1>

            <p className="text-lg text-white/80 max-w-md">
              Leverage our AI-powered recruitment platform to source, screen, and schedule top-tier talent effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onDemoModalOpen}
                className="group flex items-center gap-2 px-6 py-3.5 bg-[#265DF5] hover:bg-[#265DF5]/90 text-white rounded-lg transition-all"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all">
                <Play className="w-5 h-5 fill-white" />
                Watch Video
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {[
                { value: "200+", label: "Domain Experts" },
                { value: "150+", label: "Cities Covered" },
                { value: "5000+", label: "Happy Clients" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A2C4C]/70 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                alt="Professional team meeting"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-8 h-8 text-[#4ECDC4]" />
                    <span className="text-white">AI-Powered Talent Matching</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;