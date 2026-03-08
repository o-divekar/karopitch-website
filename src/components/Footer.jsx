import { 
  MapPin, Mail, Phone, Globe, Heart, 
  Instagram, Linkedin, Twitter, Youtube, 
  ArrowRight, Award, Users, TrendingUp 
} from 'lucide-react';
import { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20 pb-6 px-6 overflow-hidden">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-600 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* India Map Silhouette Effect */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100" className="text-white">
          <path d="M50,10 L70,30 L65,50 L50,70 L35,50 L30,30 L50,10" fill="currentColor" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-orange-500 rounded-lg blur opacity-70"></div>
                <div className="relative h-12 w-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-600">क</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-orange-400 bg-clip-text text-transparent">
                KaroPitch
              </h2>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Bridging the gap between <span className="text-indigo-400 font-semibold">Bharat's entrepreneurs</span> and India's top investors. Empowering founders from every corner of the country.
            </p>

            {/* Bharat Stats */}
            <div className="flex gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">50+</div>
                <div className="text-xs text-gray-500">Cities</div>
              </div>
              <div className="w-px h-10 bg-gray-800"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400">1000+</div>
                <div className="text-xs text-gray-500">Startups</div>
              </div>
              <div className="w-px h-10 bg-gray-800"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">₹50Cr+</div>
                <div className="text-xs text-gray-500">Funds</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 transition-colors">
                <Mail size={18} className="text-indigo-400" />
                <span className="text-sm">hello@karopitch.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 transition-colors">
                <Phone size={18} className="text-indigo-400" />
                <span className="text-sm">+91 12345 67890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 transition-colors">
                <MapPin size={18} className="text-orange-400" />
                <span className="text-sm">Mumbai • Delhi • Bangalore • Jaipur</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-indigo-500"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', icon: '🏠' },
                { name: 'How It Works', icon: '⚡' },
                { name: 'Startups', icon: '🚀' },
                { name: 'Investors', icon: '💼' }
              ].map((item) => (
                <li key={item.name} className="group cursor-pointer">
                  <span className="text-gray-400 group-hover:text-white transition-colors flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    {item.name}
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-orange-500"></span>
              Resources
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Success Stories', icon: '🏆' },
                { name: 'Mentorship', icon: '👥' },
                { name: 'Blog', icon: '📝' },
                { name: 'FAQs', icon: '❓' }
              ].map((item) => (
                <li key={item.name} className="group cursor-pointer">
                  <span className="text-gray-400 group-hover:text-white transition-colors flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>

            {/* Featured City */}
            <div className="mt-8 bg-gray-800/50 p-4 rounded-xl border border-gray-800">
              <div className="flex items-center gap-2 mb-2">
                <Award size={16} className="text-orange-400" />
                <span className="text-sm font-medium">Featured City</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-900/50 rounded-full flex items-center justify-center text-xl">
                  🏰
                </div>
                <div>
                  <div className="font-semibold">Jaipur</div>
                  <div className="text-xs text-gray-500">27 startups this month</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-green-500"></span>
              Stay Updated
            </h3>
            
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-gradient-to-r from-indigo-600 to-orange-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:shadow-lg transition-all"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="text-green-400 text-xs mt-2 animate-pulse">
                  Thanks for subscribing! 🎉
                </p>
              )}
            </form>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-sm font-medium mb-4 text-gray-400">Connect with us</h4>
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, color: 'hover:bg-pink-600', link: '#' },
                  { Icon: Linkedin, color: 'hover:bg-blue-600', link: '#' },
                  { Icon: Twitter, color: 'hover:bg-sky-500', link: '#' },
                  { Icon: Youtube, color: 'hover:bg-red-600', link: '#' }
                ].map(({ Icon, color, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:${color} transition-all transform hover:scale-110 hover:shadow-lg`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Made in India Badge */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Heart size={14} className="text-red-500 fill-current animate-pulse" />
              <span>Made with</span>
              <Globe size={14} className="text-indigo-400" />
              <span>in India, for Bharat</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 border-t border-gray-800">
          
          {/* City Ticker */}
          <div className="absolute -top-4 left-0 right-0 overflow-hidden">
            <div className="flex gap-8 text-xs text-gray-600 animate-scroll whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8">
                  {['Jaipur', 'Lucknow', 'Indore', 'Nagpur', 'Kochi', 'Guwahati', 'Bhopal', 'Patna', 'Varanasi', 'Surat'].map(city => (
                    <span key={city} className="flex items-center gap-1">
                      <MapPin size={10} className="text-indigo-500" />
                      {city}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Copyright and Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} KaroPitch. All rights reserved. 
              <span className="mx-2">|</span>
              Empowering founders from Tier-2, Tier-3 & Bharat
            </div>
            
            <div className="flex gap-6 text-sm text-gray-500">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
              <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
            </div>
          </div>
        </div>

      </div>

      {/* Add this to your index.css for the ticker animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  );
}

export default Footer;