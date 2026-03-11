import React from 'react';
import { Linkedin } from 'lucide-react';
import { teamData } from '../../data/mockData';

export const Team = () => {
  return (
    <section id="team" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full mb-4">
            <span className="text-sm font-semibold text-yellow-700 uppercase tracking-wide">
              Our Team
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet The Experts Behind Your Success
          </h2>
          <p className="text-xl text-gray-600">
            Seasoned professionals with deep expertise in startup finance and growth
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                {/* Social Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 cursor-pointer hover:bg-yellow-600">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-yellow-600 mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Team Photo Section */}
        <div className="mt-20 relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/8117466/pexels-photo-8117466.jpeg"
            alt="Comfintax Team"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent flex items-center">
            <div className="px-8 lg:px-16 max-w-2xl">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Join Our Growing Family
              </h3>
              <p className="text-gray-200 text-lg mb-6">
                We're always looking for talented professionals who share our passion 
                for helping startups succeed.
              </p>
              <button className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
