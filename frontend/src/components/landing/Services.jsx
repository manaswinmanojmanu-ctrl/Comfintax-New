import React from 'react';
import { Calculator, Briefcase, FileText, TrendingUp, Shield, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { servicesData } from '../../data/mockData';

const iconComponents = {
  Calculator,
  Briefcase,
  FileText,
  TrendingUp,
  Shield,
  DollarSign
};

export const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full mb-4">
            <span className="text-sm font-semibold text-yellow-700 uppercase tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-xl text-gray-600">
            From accounting to fundraising, we provide end-to-end financial services 
            tailored for startups and growing businesses
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconComponents[service.icon];
            
            return (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-yellow-400 cursor-pointer transform hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-600 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-yellow-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Need a custom solution? We're here to help design the perfect financial package for your needs.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Discuss Your Requirements
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
