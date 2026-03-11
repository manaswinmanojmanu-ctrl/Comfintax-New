import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { aboutData } from '../../data/mockData';

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutData.image}
                alt="About Comfintax"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-transparent"></div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full">
              <span className="text-sm font-semibold text-yellow-700 uppercase tracking-wide">
                About Us
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {aboutData.title}
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              {aboutData.description}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {aboutData.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-600 transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-yellow-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Additional Info Box */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-md border-l-4 border-yellow-600">
              <p className="text-gray-700 italic">
                "We don't just manage your finances—we become partners in your growth journey, 
                understanding your vision and helping you navigate every financial milestone."
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-900">— Comfintax Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
