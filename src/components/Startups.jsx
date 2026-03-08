import { MapPin, TrendingUp, Users, Award, ExternalLink, Star, Heart, Filter, Search, Rocket, Briefcase } from 'lucide-react';
import { useState } from 'react';

function Startups() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredStartup, setHoveredStartup] = useState(null);

  const categories = ['all', 'D2C', 'EdTech', 'Construction Tech', 'AgriTech', 'HealthTech'];

  const startups = [
    {
      id: 1,
      name: 'GreenCart',
      tagline: 'Fresh from farms to your home',
      category: 'D2C',
      location: 'Lucknow, UP',
      funding: '₹1.2Cr raised',
      impact: '500+ farmers connected',
      description: 'Delivering farm fresh produce directly to households across India.',
      logo: '🌱',
      color: 'from-green-500 to-emerald-600',
      founded: '2023',
      team: '8 members',
      traction: '50K+ customers',
      growth: '+156% YoY'
    },
    {
      id: 2,
      name: 'EduSpark',
      tagline: 'Skills for Bharat\'s future',
      category: 'EdTech',
      location: 'Indore, MP',
      funding: '₹75L raised',
      impact: '10,000+ students trained',
      description: 'A learning platform helping students from Tier-2 cities gain tech skills.',
      logo: '⚡',
      color: 'from-blue-500 to-indigo-600',
      founded: '2022',
      team: '12 members',
      traction: '85% placement rate',
      growth: '+245% YoY'
    },
    {
      id: 3,
      name: 'BuildMate',
      tagline: 'Smart construction solutions',
      category: 'Construction Tech',
      location: 'Jaipur, RJ',
      funding: '₹2Cr raised',
      impact: '300+ projects completed',
      description: 'Simplifying construction material sourcing for builders and contractors.',
      logo: '🏗️',
      color: 'from-orange-500 to-red-600',
      founded: '2021',
      team: '15 members',
      traction: '₹15Cr GMV',
      growth: '+98% YoY'
    },
    {
      id: 4,
      name: 'MediQuick',
      tagline: 'Healthcare in every village',
      category: 'HealthTech',
      location: 'Nagpur, MH',
      funding: '₹50L raised',
      impact: '25,000+ patients helped',
      description: 'Affordable healthcare solutions reaching remote areas of Bharat.',
      logo: '🏥',
      color: 'from-purple-500 to-pink-600',
      founded: '2023',
      team: '6 members',
      traction: '500+ villages covered',
      growth: '+312% YoY'
    },
    {
      id: 5,
      name: 'KrishiSetu',
      tagline: 'Empowering Indian farmers',
      category: 'AgriTech',
      location: 'Varanasi, UP',
      funding: '₹1.5Cr raised',
      impact: '2,000+ farmers benefited',
      description: 'Direct marketplace connecting farmers to retailers across India.',
      logo: '🌾',
      color: 'from-lime-500 to-green-600',
      founded: '2022',
      team: '10 members',
      traction: '₹5Cr GMV',
      growth: '+189% YoY'
    },
    {
      id: 6,
      name: 'SkillSaathi',
      tagline: 'Skills for small towns',
      category: 'EdTech',
      location: 'Patna, BR',
      funding: '₹25L raised',
      impact: '5,000+ students trained',
      description: 'Vocational training platform focused on employability skills.',
      logo: '📚',
      color: 'from-amber-500 to-orange-600',
      founded: '2023',
      team: '5 members',
      traction: '90% job placements',
      growth: '+178% YoY'
    }
  ];

  const filteredStartups = selectedCategory === 'all' 
    ? startups 
    : startups.filter(s => s.category === selectedCategory);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Bharat focus */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6 animate-bounce">
            <Award size={16} className="text-orange-600" />
            <span className="text-orange-700 font-medium text-sm">Proudly Supporting Bharat's Startups</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
              Featured Startups
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover innovative startups built by passionate founders from Tier-2 and Tier-3 cities, 
            solving real problems for Bharat.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { icon: Rocket, value: '100+', label: 'Startups', color: 'indigo' },
              { icon: MapPin, value: '35+', label: 'Cities', color: 'orange' },
              { icon: Users, value: '10K+', label: 'Jobs Created', color: 'green' },
              { icon: TrendingUp, value: '₹100Cr+', label: 'Total Funding', color: 'purple' }
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm">
                <div className={`w-10 h-10 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                  <stat.icon size={20} className={`text-${stat.color}-600`} />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-orange-500 text-white shadow-lg shadow-indigo-200'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-indigo-300'
              }`}
            >
              {category === 'all' ? '🚀 All Startups' : category}
            </button>
          ))}
        </div>

        {/* Startups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStartups.map((startup, index) => (
            <div
              key={startup.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredStartup(startup.id)}
              onMouseLeave={() => setHoveredStartup(null)}
            >
              {/* Gradient Border Animation */}
              <div className={`absolute inset-0 bg-gradient-to-r ${startup.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px' }}></div>
              
              {/* Premium Badge for Top Startups */}
              {startup.id === 1 && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg animate-pulse">
                  <Star size={12} />
                  <span>Featured</span>
                </div>
              )}
              
              <div className="relative bg-white h-full p-6 rounded-2xl">
                
                {/* Logo and Category */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${startup.color} rounded-xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {startup.logo}
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${startup.color} text-white shadow-md`}>
                    {startup.category}
                  </span>
                </div>

                {/* Startup Info */}
                <h3 className="text-2xl font-bold mb-1 group-hover:text-indigo-600 transition-colors">
                  {startup.name}
                </h3>
                
                <p className="text-sm text-gray-500 mb-2 italic">"{startup.tagline}"</p>

                {/* Location with Bharat focus */}
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-3 bg-orange-50 px-2 py-1 rounded-full w-fit">
                  <MapPin size={14} className="text-orange-500" />
                  <span className="font-medium">{startup.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {startup.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                    <div className="text-xs text-gray-500">💰 Funding</div>
                    <div className="font-semibold text-sm text-indigo-600">{startup.funding}</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                    <div className="text-xs text-gray-500">📈 Impact</div>
                    <div className="font-semibold text-sm text-green-600">{startup.impact}</div>
                  </div>
                </div>

                {/* Growth Indicator */}
                <div className="flex items-center gap-2 text-xs mb-3">
                  <TrendingUp size={14} className="text-green-500" />
                  <span className="text-green-600 font-medium">{startup.growth} growth</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500">{startup.founded}</span>
                </div>

                {/* Hover Details */}
                {hoveredStartup === startup.id && (
                  <div className="absolute inset-0 bg-white/98 backdrop-blur-sm p-6 rounded-2xl flex flex-col justify-center animate-fadeIn border-2 border-indigo-100">
                    <div className="text-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${startup.color} rounded-2xl flex items-center justify-center text-4xl mx-auto mb-3`}>
                        {startup.logo}
                      </div>
                      <h4 className="font-bold text-lg">{startup.name}</h4>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 flex items-center gap-1">
                          <Users size={14} /> Team
                        </span>
                        <span className="font-medium">{startup.team}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 flex items-center gap-1">
                          <Rocket size={14} /> Traction
                        </span>
                        <span className="font-medium">{startup.traction}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 flex items-center gap-1">
                          <Briefcase size={14} /> Founded
                        </span>
                        <span className="font-medium">{startup.founded}</span>
                      </div>
                    </div>

                    <button className="mt-5 w-full bg-gradient-to-r from-indigo-600 to-orange-500 text-white py-2.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all group/btn">
                      View Details
                      <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                  <button className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110">
                    <Heart size={18} />
                  </button>
                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1 group/btn">
                    Pitch Deck
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-orange-500 text-white px-10 py-4 rounded-xl font-medium text-lg hover:shadow-xl hover:shadow-indigo-200 transition-all duration-300 transform hover:scale-105 group">
            <span>Explore All Startups</span>
            <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            100+ startups from across India are waiting for you
          </p>
        </div>

        {/* City Impact Strip */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-orange-500 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-3xl backdrop-blur-sm">
                🇮🇳
              </div>
              <div>
                <h3 className="text-2xl font-bold">Startup Ecosystem Across Bharat</h3>
                <p className="text-indigo-100">From small towns to big dreams</p>
              </div>
            </div>
            <div className="flex gap-6">
              {['Jaipur', 'Lucknow', 'Indore', 'Nagpur', 'Kochi'].map(city => (
                <div key={city} className="text-center">
                  <div className="font-bold text-xl">{city}</div>
                  <div className="text-sm text-indigo-200">🚀 100+ startups</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Startups;