import { useState, useEffect } from 'react';
import { MapPin, TrendingUp, Users, Rocket, ArrowRight, Play, Star, Award, Globe } from 'lucide-react';

function Hero() {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);

  const cities = [
    "Jaipur", "Lucknow", "Indore", "Nagpur", "Kochi", 
    "Guwahati", "Bhopal", "Patna", "Varanasi", "Surat"
  ];

  // Rotating cities effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prev) => (prev + 1) % cities.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Stats animation on mount
  useEffect(() => {
    setStatsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-orange-50">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* India Map Dots */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-600 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
        
        {/* Live Badge */}
        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-indigo-200 px-4 py-2 rounded-full mb-8 shadow-lg animate-bounce">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-indigo-700">
            <span className="hidden sm:inline">Live now: </span>
            <span className="font-bold">{cities[currentCityIndex]}</span> startups are pitching
          </span>
        </div>

        {/* Main Heading with Gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
            Pitch Your Startup
          </span>
          <br />
          <span className="text-gray-900">to India's Top Investors</span>
        </h1>

        {/* Animated Subheading */}
        <div className="relative max-w-3xl mx-auto mb-8">
          <div className="absolute -top-6 -left-12 text-6xl text-indigo-200 font-serif opacity-50">"</div>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Karo Pitch is a platform where founders from{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-bold text-indigo-600">
                across India
              </span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-200 -z-0"></span>
            </span>{' '}
            can pitch their startups directly to investors and unlock funding opportunities.
          </p>
          <div className="absolute -bottom-6 -right-12 text-6xl text-orange-200 font-serif opacity-50">"</div>
        </div>

        {/* City Ticker */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cities.slice(0, 6).map((city, index) => (
            <div
              key={city}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                index === currentCityIndex
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-indigo-300'
              }`}
            >
              <MapPin size={14} className={index === currentCityIndex ? 'text-white' : 'text-orange-500'} />
              {city}
            </div>
          ))}
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
            <Globe size={14} />
            +40 more
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button className="group relative bg-gradient-to-r from-indigo-600 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-200 transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Apply to Pitch
              <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group relative border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Startups
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Stats Grid with Animation */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 transform ${
          statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {[
            { icon: Users, value: '1000+', label: 'Startups', color: 'indigo' },
            { icon: MapPin, value: '50+', label: 'Cities', color: 'orange' },
            { icon: TrendingUp, value: '₹100Cr+', label: 'Funding', color: 'green' },
            { icon: Award, value: '200+', label: 'Investors', color: 'purple' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <stat.icon size={24} className={`text-${stat.color}-600`} />
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured On Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['YourStory', 'Inc42', 'Economic Times', 'Business Standard'].map((brand, index) => (
              <span key={index} className="text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Stats Ticker */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-100 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-500 fill-current" />
              <span>4.8/5 Rating</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Play size={16} className="text-green-500" />
              <span>Avg funding: ₹75L</span>
            </div>
            <div className="w-px h-4 bg-gray-300 hidden md:block"></div>
            <div className="items-center gap-2 hidden md:flex">
              <Users size={16} className="text-indigo-500" />
              <span>65% from Tier-2/3</span>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto opacity-10">
          <path fill="#4f46e5" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

    </section>
  );
}

export default Hero;