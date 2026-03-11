import React from 'react';
import { ArrowRight } from 'lucide-react';
import { processData } from '../../data/mockData';

export const Process = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full mb-4">
            <span className="text-sm font-semibold text-yellow-700 uppercase tracking-wide">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Work With You
          </h2>
          <p className="text-xl text-gray-600">
            A proven methodology to transform your financial operations and accelerate growth
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processData.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-yellow-400 z-10">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  {index < processData.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-yellow-600 animate-pulse" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join 20+ startups who trust us with their financial journey. 
            Schedule a free consultation today and discover how we can help you scale.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
