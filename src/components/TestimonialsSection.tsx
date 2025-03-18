import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Aditya Sharma",
      position: "HR Director",
      company: "Tech Solutions India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      text: "Naukri Expert Assist transformed our hiring process with exceptional candidates."
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Talent Acquisition Manager",
      company: "Global Financial Services",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      text: "Their multi-channel approach helped us access a wider talent pool with consistently high-quality candidates."
    },
    {
      id: 3,
      name: "Vikram Singh",
      position: "CEO",
      company: "Innovate Startups",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 4,
      text: "As a startup, finding the right talent quickly was crucial. They delivered beyond our expectations."
    },
    {
      id: 4,
      name: "Ananya Desai",
      position: "Head of Recruitment",
      company: "Healthcare Solutions",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      text: "Their industry-specific expertise in healthcare recruitment made finding qualified professionals seamless."
    }
  ];

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const getVisibleTestimonials = () => {
    return [
      testimonials[(activeIndex) % testimonials.length],
      testimonials[(activeIndex + 1) % testimonials.length],
      testimonials[(activeIndex + 2) % testimonials.length]
    ];
  };

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Hear from companies who found success with our services</p>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center">
            {/* Navigation Controls - Left */}
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-3 gap-6 w-[calc(100%-120px)]">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`bg-white rounded-xl border p-6 transition-all duration-500 ${
                    index === 1 
                      ? 'shadow-xl scale-105 border-[#265DF5]/20' 
                      : 'shadow-md border-gray-100 opacity-70 scale-95'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>

            {/* Navigation Controls - Right */}
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;