import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const HeroSection = ({ setIsDemoModalOpen }) => {
  return (
    <div className="py-12 bg-gradient-to-br from-[#0A1122] via-[#132347] to-[#1D366B]">
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center h-full gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-[#265DF5]/20 rounded-full text-[#265DF5] text-sm font-semibold mb-6 shadow-sm">
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
             <span className='text-gray-300'> Trusted by 5000+ Companies Across India</span>
            </div>
            <div className="max-w-[620px] mb-8">
              <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
              Simplifying {' '}
                <span className="bg-gradient-to-r from-[#265DF5] to-[#70A0FF] bg-clip-text text-transparent">
                Hiring Excellence
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Connect with pre-screened, interview-ready candidates across 150+ cities and multiple industries. Naukri Expert Assist delivers qualified talent when you need it most.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8">
              <button 
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto group px-7 py-3.5 bg-[#265DF5] hover:bg-[#265DF5]/90 text-white text-lg font-medium rounded-lg transition-all flex items-center justify-center gap-2"
              >
                Book a demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto group px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white hover:text-[#265DF5] text-lg font-medium rounded-lg flex items-center justify-center gap-2 transition-all">
                <Play size={20} className="text-white group-hover:text-[#265DF5] transition-colors" /> How It Works
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-4 max-w-[440px]">
              <div>
                <div className="text-2xl font-bold text-white mb-1">260+</div>
                <div className="text-gray-400 text-sm">Domain Experts</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">150+</div>
                <div className="text-gray-400 text-sm">Cities Covered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">5000+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-1/2">
            <div className="relative h-[400px] w-[90%] ml-auto rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://img.freepik.com/premium-photo/man-is-sitting-desk-with-laptop-phone-his-hand_949648-326.jpg?w=2000" 
                alt="Indian recruiter talking on phone"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1122]/50 to-transparent" />
              
              {/* Overlay badges */}
              
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;