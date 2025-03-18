import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const NaukriTalentCloudSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    workEmail: '',
    orgType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation
    if (formData.fullName && formData.mobileNumber && formData.workEmail) {
      // Here you would typically send the form data to your backend
      setIsSubmitted(true);
      // Optional: Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          mobileNumber: '',
          workEmail: '',
          orgType: ''
        });
      }, 3000);
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className="py-24 bg-[#F5F6FA]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Information */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Know more about 
              <br />
              <span className="text-[#265DF5]">Expert Hiring</span>
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-[#265DF5]" />
                <span className="text-gray-700">Request a demo</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-[#265DF5]" />
                <span className="text-gray-700">Learn how it will help you</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Book your personalized demo!
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#265DF5]/30"
                  required
                />

                <input 
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="10 digit mobile number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#265DF5]/30"
                  required
                />

                <input 
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="Work email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#265DF5]/30"
                  required
                />

                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text"
                    name="orgType"
                    value={formData.orgType}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#265DF5]/30"
                  />
                  <input 
                    type="text"
                    name="consultancy"
                    placeholder="Your consultancy"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#265DF5]/30"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#265DF5] text-white py-3.5 rounded-lg hover:bg-[#265DF5]/90 transition-colors"
                >
                  Continue
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-800 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p>
                    Our team will contact you shortly. 
                    We look forward to helping you with your hiring needs.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaukriTalentCloudSection;