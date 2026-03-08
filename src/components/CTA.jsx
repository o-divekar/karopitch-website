import { Rocket, HandshakeIcon, ArrowRight, Users, TrendingUp, MapPin, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

function CTA() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 0
  });

  // Optional: Add countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-700 to-orange-600">
        {/* Animated waves */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* India map dots effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full animate-ping" style={{ 
                animationDelay: `${i * 0.1}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                position: 'absolute'
              }}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Top Stats Bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
          <div className="text-center">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <MapPin className="text-orange-300" size={24} />
              <span>50+ Cities</span>
            </div>
            <p className="text-indigo-200 text-sm">From Kashmir to Kanyakumari</p>
          </div>
          <div className="w-px h-10 bg-indigo-400 hidden md:block"></div>
          <div className="text-center">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Users className="text-orange-300" size={24} />
              <span>1000+ Founders</span>
            </div>
            <p className="text-indigo-200 text-sm">Already on KaroPitch</p>
          </div>
          <div className="w-px h-10 bg-indigo-400 hidden md:block"></div>
          <div className="text-center">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <TrendingUp className="text-orange-300" size={24} />
              <span>₹50Cr+</span>
            </div>
            <p className="text-indigo-200 text-sm">Funding Facilitated</p>
          </div>
        </div>

        {/* Main CTA Content */}
        <div className="text-center mb-12">
          {/* Limited Time Offer Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-300/30 px-4 py-2 rounded-full mb-8">
            <Award size={16} className="text-orange-300" />
            <span className="text-orange-200 text-sm font-medium">Limited Time: Early Bird Benefits</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Pitch Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-200">
              Startup?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Join <span className="font-bold text-white">Karo Pitch</span> and present your startup to investors, mentors,
            and the startup ecosystem across India.
          </p>

          {/* Countdown Timer */}
          <div className="inline-flex items-center gap-4 md:gap-8 bg-indigo-800/50 backdrop-blur-sm px-6 md:px-10 py-4 rounded-2xl mb-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.days}</div>
              <div className="text-xs md:text-sm text-indigo-300">Days</div>
            </div>
            <div className="text-3xl text-orange-300">:</div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-xs md:text-sm text-indigo-300">Hours</div>
            </div>
            <div className="text-3xl text-orange-300">:</div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-xs md:text-sm text-indigo-300">Minutes</div>
            </div>
            <div className="text-3xl text-orange-300">:</div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-xs md:text-sm text-indigo-300">Seconds</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-16">
          <button className="group relative bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-300/30 transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Apply Now for Early Access
              <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group relative border-2 border-white/30 backdrop-blur-sm px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Partner With Us
              <HandshakeIcon size={20} className="group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </div>

        {/* Social Proof with Founder Cities */}
        <div className="text-center">
          <p className="text-indigo-200 mb-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Founders from 50+ cities including:</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Jaipur', 'Lucknow', 'Indore', 'Nagpur', 'Kochi', 'Guwahati', 'Bhopal', 'Patna'].map((city, index) => (
              <span key={city} 
                className="bg-indigo-800/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-indigo-200 border border-indigo-700/50 hover:bg-orange-500/30 hover:text-white transition-colors cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}>
                {city}
              </span>
            ))}
            <span className="bg-orange-500/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white border border-orange-400/50">
              + more
            </span>
          </div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="absolute -bottom-24 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto opacity-20">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default CTA;