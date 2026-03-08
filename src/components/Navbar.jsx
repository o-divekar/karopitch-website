import { useState, useEffect } from 'react';
import { Menu, X, MapPin, TrendingUp, Users, Globe } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white py-5'
    } px-6 md:px-10`}>
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo with Bharat touch */}
        <div className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-orange-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
            <div className="relative h-10 w-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-indigo-600">क</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
              KaroPitch
            </h1>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <MapPin size={12} className="text-orange-500" />
              From Bharat, For Bharat
            </span>
          </div>
        </div>

        {/* Desktop Menu with icons */}
        <ul className="hidden md:flex items-center gap-8">
          <li className="group cursor-pointer">
            <span className="flex items-center gap-2 text-gray-700 group-hover:text-indigo-600 transition-colors">
              <span className="text-sm">🏠</span>
              Home
            </span>
            <div className="h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          
          <li className="group cursor-pointer">
            <span className="flex items-center gap-2 text-gray-700 group-hover:text-indigo-600 transition-colors">
              <span className="text-sm">⚡</span>
              How It Works
            </span>
            <div className="h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
          
          <li className="group cursor-pointer relative">
            <span className="flex items-center gap-2 text-gray-700 group-hover:text-indigo-600 transition-colors">
              <TrendingUp size={18} />
              Startups
            </span>
            <div className="h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            
            {/* Badge for Tier-2/3 focus */}
            <span className="absolute -top-3 -right-6 bg-orange-100 text-orange-600 text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">
              Bharat 🌟
            </span>
          </li>
          
          <li className="group cursor-pointer">
            <span className="flex items-center gap-2 text-gray-700 group-hover:text-indigo-600 transition-colors">
              <Users size={18} />
              Investors
            </span>
            <div className="h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </li>
        </ul>

        {/* Right section with creative elements */}
        <div className="hidden md:flex items-center gap-4">
          {/* Live counter (you can replace with actual data) */}
          <div className="flex items-center gap-2 bg-indigo-50 px-3 py-1.5 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-indigo-700 font-medium">24 Live Pitches</span>
          </div>

          <button className="relative group overflow-hidden bg-gradient-to-r from-indigo-600 to-orange-500 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200">
            <span className="relative z-10 flex items-center gap-2">
              Apply Now
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg py-4 px-6 animate-slideDown">
          <ul className="flex flex-col gap-4">
            <li className="py-2 px-4 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer flex items-center gap-3">
              <span className="text-xl">🏠</span>
              <span className="font-medium">Home</span>
            </li>
            <li className="py-2 px-4 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer flex items-center gap-3">
              <span className="text-xl">⚡</span>
              <span className="font-medium">How It Works</span>
            </li>
            <li className="py-2 px-4 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer flex items-center gap-3">
              <TrendingUp size={20} />
              <span className="font-medium">Startups</span>
              <span className="ml-auto bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                Bharat Focus
              </span>
            </li>
            <li className="py-2 px-4 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer flex items-center gap-3">
              <Users size={20} />
              <span className="font-medium">Investors</span>
            </li>
            <li className="pt-2">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-orange-500 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2">
                Apply Now
                <span className="text-lg">→</span>
              </button>
            </li>
            
            {/* Bharat stats for mobile */}
            <li className="mt-2 pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Globe size={14} className="text-indigo-600" />
                  From Tier-2/3
                </span>
                <span className="font-bold text-indigo-600">127 Startups</span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;