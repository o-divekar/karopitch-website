import { 
  Store, Users, Factory, Cloud, Building2, MapPin, 
  Rocket, Award, CheckCircle, Target, TrendingUp, 
  Globe, Briefcase, Sparkles, Star 
} from 'lucide-react';
import { useState } from 'react';

function WhoCanApply() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    {
      id: 1,
      title: 'D2C Brands',
      icon: Store,
      description: 'Direct-to-consumer brands building innovative products for modern India.',
      examples: ['Organic products', 'Fashion', 'Home & Living'],
      stage: 'Idea to Series A',
      color: 'from-blue-500 to-cyan-500',
      bgLight: 'bg-blue-50',
      city: 'Jaipur • Lucknow • Indore'
    },
    {
      id: 2,
      title: 'Consumer Startups',
      icon: Users,
      description: 'Startups focused on solving everyday consumer problems with technology.',
      examples: ['Food tech', 'Hyperlocal', 'Services'],
      stage: 'MVP to Growth',
      color: 'from-purple-500 to-pink-500',
      bgLight: 'bg-purple-50',
      city: 'Nagpur • Kochi • Bhopal'
    },
    {
      id: 3,
      title: 'MSMEs',
      icon: Factory,
      description: 'Small and medium enterprises looking for growth capital and market access.',
      examples: ['Manufacturing', 'Trading', 'Services'],
      stage: 'Growth Stage',
      color: 'from-orange-500 to-red-500',
      bgLight: 'bg-orange-50',
      city: 'Surat • Coimbatore • Ludhiana'
    },
    {
      id: 4,
      title: 'SaaS Startups',
      icon: Cloud,
      description: 'Software products designed for global or Indian markets with scalable models.',
      examples: ['B2B SaaS', 'Tools', 'Platforms'],
      stage: 'Pre-revenue to Scale',
      color: 'from-green-500 to-emerald-500',
      bgLight: 'bg-green-50',
      city: 'Bengaluru • Hyderabad • Pune'
    },
    {
      id: 5,
      title: 'Manufacturing',
      icon: Building2,
      description: 'Innovative manufacturing startups leveraging tech and traditional crafts.',
      examples: ['Hardware', 'Auto components', 'Textiles'],
      stage: 'Prototype to Production',
      color: 'from-amber-500 to-orange-500',
      bgLight: 'bg-amber-50',
      city: 'Ahmedabad • Chennai • Jamshedpur'
    },
    {
      id: 6,
      title: 'Bharat Startups',
      icon: MapPin,
      description: 'Founders from Tier-2 and Tier-3 cities building impactful businesses for Bharat.',
      examples: ['Rural tech', 'Vernacular', 'AgriTech'],
      stage: 'Any Stage',
      color: 'from-indigo-600 to-purple-600',
      bgLight: 'bg-indigo-50',
      city: '50+ Cities Across India',
      featured: true
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50/20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Bharat focus */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} className="text-indigo-600" />
            <span className="text-indigo-700 font-medium text-sm">Open to All Innovators</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Who Can Apply
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whether you're building from a metro city or a small town, if you're solving real problems,
            <span className="font-semibold text-indigo-600"> KaroPitch is for you.</span>
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Target size={20} className="text-indigo-600" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800">6</div>
                <div className="text-sm text-gray-500">Categories</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Globe size={20} className="text-green-600" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800">50+</div>
                <div className="text-sm text-gray-500">Cities</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Rocket size={20} className="text-orange-600" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800">All</div>
                <div className="text-sm text-gray-500">Stages Welcome</div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                category.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-indigo-200' : ''
              }`}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {category.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <Star size={12} />
                  <span>Special Focus</span>
                </div>
              )}

              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <category.icon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Examples */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Examples</div>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map(example => (
                      <span key={example} className={`text-xs px-2 py-1 rounded-full ${category.bgLight} text-gray-700`}>
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stage & Location */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase size={14} className="text-gray-400" />
                    <span className="text-gray-600">Stage: </span>
                    <span className="font-medium text-indigo-600">{category.stage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={14} className="text-gray-400" />
                    <span className="text-gray-600">Active in: </span>
                    <span className="font-medium text-gray-700">{category.city}</span>
                  </div>
                </div>

                {/* Eligibility Check */}
                <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
                  <CheckCircle size={16} />
                  <span>Eligible for funding & mentorship</span>
                </div>

                {/* Apply Button */}
                <button className={`w-full py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  category.featured
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg'
                    : 'border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50'
                }`}>
                  Apply Now →
                </button>
              </div>

              {/* Hover Details */}
              {hoveredCard === category.id && (
                <div className="absolute inset-0 bg-white/98 backdrop-blur-sm p-8 rounded-2xl flex flex-col justify-center animate-fadeIn border-2 border-indigo-100">
                  <div className="text-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                      <category.icon size={32} className="text-white" />
                    </div>
                    <h4 className="font-bold text-xl mb-2">{category.title}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">✅ What we look for:</div>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-green-500" />
                          Strong founding team
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-green-500" />
                          Scalable business model
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle size={14} className="text-green-500" />
                          Market validation
                        </li>
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Success Rate</span>
                        <span className="font-bold text-indigo-600">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div className={`bg-gradient-to-r ${category.color} h-1.5 rounded-full`} style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Special Focus Section: Bharat Startups */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Award size={24} className="text-yellow-300" />
                <span className="text-sm font-semibold uppercase tracking-wider">Special Initiative</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">🇮🇳 Bharat Startup Program</h3>
              <p className="text-indigo-100 mb-6 text-lg">
                Dedicated support for founders from Tier-2 and Tier-3 cities. We provide:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Mentorship in local languages',
                  'Dedicated investor connects',
                  'Grant funding assistance',
                  'Market access support'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-yellow-300" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">65%</div>
                <div className="text-indigo-200">of our funded startups are from Tier-2/3 cities</div>
                <button className="mt-4 bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105 w-full">
                  Check Eligibility →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Application Steps */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Simple Application Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Submit Application', desc: 'Fill a simple form about your startup', icon: '📝' },
              { step: '2', title: 'Initial Screening', desc: 'Our team reviews your application', icon: '🔍' },
              { step: '3', title: 'Mentorship Round', desc: 'Get feedback from experts', icon: '👥' },
              { step: '4', title: 'Pitch to Investors', desc: 'Present to our investor network', icon: '🚀' }
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-xl font-bold text-indigo-600 mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-full h-0.5 bg-gradient-to-r from-indigo-200 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-indigo-200 transition-all transform hover:scale-105 inline-flex items-center gap-3 group">
            <span>Start Your Application</span>
            <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Takes only 5 minutes • No registration fee • Open all year
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhoCanApply;