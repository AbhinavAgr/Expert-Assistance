import React from 'react';
import { X } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-lg mx-4 relative">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Modal content */}
        <div className="p-8">
          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            <button className="px-6 py-2 bg-[#265DF5] text-white rounded-full text-sm font-semibold">
              Sales enquiry
            </button>
            <button className="px-6 py-2 text-gray-400 rounded-full text-sm font-semibold">
              Register/Log in
            </button>
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label className="block text-gray-600 mb-2">Full name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#265DF5] focus:ring focus:ring-[#265DF5]/10 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Mobile number</label>
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#265DF5] focus:ring focus:ring-[#265DF5]/10 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Company/Consultancy name</label>
              <input
                type="text"
                placeholder="Enter your company/consultancy name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#265DF5] focus:ring focus:ring-[#265DF5]/10 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-4">Hiring for</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hiring-for"
                    className="w-5 h-5 text-[#265DF5] border-gray-300 focus:ring-[#265DF5]"
                  />
                  <span className="text-gray-700">your company</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hiring-for"
                    className="w-5 h-5 text-[#265DF5] border-gray-300 focus:ring-[#265DF5]"
                  />
                  <span className="text-gray-700">a consultancy</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#265DF5] hover:bg-[#265DF5]/90 text-white rounded-lg font-semibold text-lg transition-colors"
            >
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}