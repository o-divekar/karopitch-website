import { Users, TrendingUp, Award, MapPin, Briefcase, DollarSign, Star, Heart, Shield, Zap, Globe, Mail, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

function Investors() {
  const [selectedType, setSelectedType] = useState('all');
  const [hoveredInvestor, setHoveredInvestor] = useState(null);

  const investorTypes = ['all', 'Angel Investors', 'Venture Capital', 'Startup Mentors', 'Family Offices'];

  const investors = [
    {
      id: 1,
      name: 'Rajan Mehra',
      role: 'Angel Investor',
      type: 'Angel Investors',
      location: 'Mumbai, MH',
      investments: '25+ startups',
      sectors: ['D2C', 'EdTech', 'AgriTech'],
      ticketSize: '₹25L - ₹1Cr',
      portfolio: ['GreenCart', 'EduSpark'],
      bio: 'Passionate about backing founders from smaller cities with big dreams.',
      image: 'RM',
      color: 'from-blue-500 to-cyan-500',
      expertise: 'Early-stage, Bharat focus',
      meets: '12 this month'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'VC Partner',
      type: 'Venture Capital',
      location: 'Bangalore, KA',
      investments: '40+ startups',
      sectors: ['EdTech', 'HealthTech', 'FinTech'],
      ticketSize: '₹1Cr - ₹5Cr',
      portfolio: ['EduSpark', 'MediQuick'],
      bio: 'Leading investments in deep tech and social impact startups.',
      image: 'PS',
      color: 'from-purple-500 to-pink-500',
      expertise: 'Series A, Impact investing',
      meets: '8 this month'
    },
    {
      id: 3,
      name: 'Vikram Singh',
      role: 'Startup Mentor',
      type: 'Startup Mentors',
      location: 'Jaipur, RJ',
      investments: '50+ mentored',
      sectors: ['D2C', 'Construction Tech', 'AgriTech'],
      ticketSize: 'Mentorship & Guidance',
      portfolio: ['BuildMate', 'KrishiSetu'],
      bio: 'Ex-founder mentoring startups from Tier-2 cities on growth strategies.',
      image: 'VS',
      color: 'from-orange-500 to-red-500',
      expertise: 'Growth strategy, Fundraising',
      meets: '15+ this month'
    },
    {
      id: 4,
      name: 'Anita Desai',
      role: 'Family Office Director',
      type: 'Family Offices',
      location: 'Delhi, DL',
      investments: '15+ startups',
      sectors: ['HealthTech', 'EdTech', 'CleanTech'],
      ticketSize: '₹2Cr - ₹10Cr',
      portfolio: ['MediQuick', 'SkillSaathi'],
      bio: 'Managing family office focused on sustainable and social impact.',
      image: 'AD',
      color: 'from-green-500 to-emerald-500',
      expertise: 'Impact investing, Sustainability',
      meets: '5 this month'
    },
    {
      id: 5,
      name: 'Suresh Patel',
      role: 'Angel Investor',
      type: 'Angel Investors',
      location: 'Ahmedabad, GJ',
      investments: '18+ startups',
      sectors: ['D2C', 'Construction Tech', 'FinTech'],
      ticketSize: '₹20L - ₹75L',
      portfolio: ['BuildMate', 'CraftBazaar'],
      bio: 'First-generation entrepreneur turned investor supporting Gujarat startups.',
      image: 'SP',
      color: 'from-indigo-500 to-purple-500',
      expertise: 'Product, Operations',
      meets: '10 this month'
    },
    {
      id: 6,
      name: 'Neha Gupta',
      role: 'VC Associate',
      type: 'Venture Capital',
      location: 'Lucknow, UP',
      investments: '12+ startups',
      sectors: ['EdTech', 'AgriTech', 'HealthTech'],
      ticketSize: '₹50L - ₹2Cr',
      portfolio: ['EduSpark', 'KrishiSetu'],
      bio: 'Focusing on UP-based startups solving local problems.',
      image: 'NG',
      color: 'from-pink-500 to-rose-500',
      expertise: 'Regional focus, Due diligence',
      meets: '7 this month'
    }
  ];

  const filteredInvestors = selectedType === 'all' 
    ? investors 
    : investors.filter(i => i.type === selectedType);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50/30 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header with impact stats */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-6 animate-pulse">
            <Zap size={16} className="text-indigo-600" />
            <span className="text-indigo-700 font-medium text-sm">Active Investors Looking for Startups</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Meet Investors Looking for the Next Big Startup
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Karo Pitch connects promising founders with <span className="font-semibold text-indigo-600">100+ active investors</span> actively
            looking for innovative startups from Bharat to support and fund.
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: Users, value: '100+', label: 'Active Investors', color: 'indigo' },
              { icon: DollarSign, value: '₹200Cr+', label: 'Dry Powder', color: 'green' },
              { icon: MapPin, value: '25+', label: 'Cities', color: 'orange' },
              { icon: Briefcase, value: '150+', label: 'Deals Done', color: 'purple' }
            ].map((stat, index) => (
              <div key={index} className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                  <stat.icon size={24} className={`text-${stat.color}-600`} />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter by Type */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {investorTypes.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                selectedType === type
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-indigo-300'
              }`}
            >
              {type === 'all' ? '👥 All Investors' : type}
            </button>
          ))}
        </div>

        {/* Investors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInvestors.map((investor, index) => (
            <div
              key={investor.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              onMouseEnter={() => setHoveredInvestor(investor.id)}
              onMouseLeave={() => setHoveredInvestor(null)}
            >
              {/* Premium Badge for Top Investors */}
              {investor.id === 1 && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <Star size={12} />
                  <span>Top Angel</span>
                </div>
              )}
              
              <div className="p-6">
                {/* Investor Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${investor.color} rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg transform group-hover:scale-110 transition-transform`}>
                    {investor.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold group-hover:text-indigo-600 transition-colors">
                      {investor.name}
                    </h3>
                    <p className="text-sm text-indigo-600 font-medium">{investor.role}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <MapPin size={12} className="text-orange-500" />
                      <span>{investor.location}</span>
                    </div>
                  </div>
                </div>

                {/* Investment Sectors */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Preferred Sectors</div>
                  <div className="flex flex-wrap gap-2">
                    {investor.sectors.map(sector => (
                      <span key={sector} className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${investor.color} text-white bg-opacity-90`}>
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <div className="text-xs text-gray-500">💰 Ticket Size</div>
                    <div className="font-semibold text-sm text-indigo-600">{investor.ticketSize}</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <div className="text-xs text-gray-500">📊 Portfolio</div>
                    <div className="font-semibold text-sm text-green-600">{investor.investments}</div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex justify-between items-center">
                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1">
                    View Profile
                    <TrendingUp size={14} />
                  </button>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                      <Mail size={16} className="text-gray-400 hover:text-blue-600" />
                    </button>
                    <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                      <Linkedin size={16} className="text-gray-400 hover:text-blue-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Details */}
              {hoveredInvestor === investor.id && (
                <div className="absolute inset-0 bg-white/98 backdrop-blur-sm p-6 rounded-2xl flex flex-col justify-center animate-fadeIn border-2 border-indigo-100">
                  <div className="text-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${investor.color} rounded-2xl flex items-center justify-center text-2xl font-bold text-white mx-auto mb-3`}>
                      {investor.image}
                    </div>
                    <h4 className="font-bold text-lg">{investor.name}</h4>
                    <p className="text-sm text-indigo-600">{investor.role}</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-600 text-center">{investor.bio}</p>
                    
                    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                      <span className="text-gray-500">Expertise</span>
                      <span className="font-medium">{investor.expertise}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Available meets</span>
                      <span className="font-medium text-green-600">{investor.meets}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Portfolio</span>
                      <span className="font-medium">{investor.portfolio.join(', ')}</span>
                    </div>
                  </div>

                  <button className="mt-5 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all group/btn">
                    Request Introduction
                    <Mail size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Why Invest in Bharat Section */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Why Invest in Bharat's Startups?</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Untapped Markets', value: '50+ Cities' },
                  { label: 'Young Founders', value: 'Avg age 26' },
                  { label: 'Capital Efficient', value: '30% less burn' },
                  { label: 'High Growth', value: '2.5x faster' }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <div className="text-sm text-indigo-200">{item.label}</div>
                    <div className="text-xl font-bold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 text-center">
              <div className="mb-4">
                <Shield size={48} className="mx-auto text-yellow-300" />
              </div>
              <h4 className="text-xl font-bold mb-2">Join 100+ Investors</h4>
              <p className="text-indigo-100 mb-4">Already discovering startups from Bharat</p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105">
                Become an Investor →
              </button>
            </div>
          </div>
        </div>

        {/* Recent Investments Ticker */}
        <div className="mt-12 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 overflow-hidden">
            <div className="flex items-center gap-2 text-sm font-medium text-indigo-600 whitespace-nowrap">
              <Zap size={16} className="text-yellow-500" />
              Recent Investments:
            </div>
            <div className="flex gap-8 animate-scroll">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8">
                  <span>GreenCart • ₹1.2Cr</span>
                  <span>EduSpark • ₹75L</span>
                  <span>BuildMate • ₹2Cr</span>
                  <span>KrishiSetu • ₹1.5Cr</span>
                  <span>SkillSaathi • ₹25L</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Investors;