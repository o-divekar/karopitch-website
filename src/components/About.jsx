import { Users, Target, Rocket, Award, MapPin, TrendingUp, Lightbulb, HandshakeIcon } from 'lucide-react';

function About() {
  return (
    <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-white to-indigo-50/30">
      
      {/* Decorative Bharat Map Background Element */}
      <div className="absolute left-0 right-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="relative h-96">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjQ2ZTUiIHN0cm9rZS13aWR0aD0iMSI+PHBhdGggZD0iTTUgMTVsNC00bDQgNC00IDR6Ii8+PC9zdmc+')] bg-repeat opacity-20"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        
        {/* Header with Bharat touch */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
            <MapPin size={16} className="text-orange-600" />
            <span className="text-orange-700 font-medium text-sm">From Tier-2, Tier-3 & Bharat</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
              What is Karo Pitch?
            </span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -top-6 -left-12 text-6xl text-indigo-200 font-serif">"</div>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed px-6">
              Karo Pitch is a <span className="font-semibold text-indigo-600">startup discovery and funding platform</span> created to
              empower early-stage founders across India. Many entrepreneurs from smaller cities are 
              building innovative businesses but struggle to access investors, mentorship, and visibility. 
              <span className="block mt-4 font-medium text-indigo-600">Karo Pitch bridges this gap.</span>
            </p>
            <div className="absolute -bottom-6 -right-12 text-6xl text-orange-200 font-serif">"</div>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">50+</div>
              <div className="text-sm text-gray-500">Cities Covered</div>
            </div>
            <div className="w-px h-10 bg-gray-300 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">1000+</div>
              <div className="text-sm text-gray-500">Startups Registered</div>
            </div>
            <div className="w-px h-10 bg-gray-300 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">₹50Cr+</div>
              <div className="text-sm text-gray-500">Funding Facilitated</div>
            </div>
          </div>
        </div>

        {/* Main Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 - Funding Access */}
          <div className="group relative bg-white p-8 rounded-2xl border border-indigo-100 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300">
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-indigo-600 to-orange-500 text-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
              <Target size={24} />
            </div>
            <div className="mb-6 text-indigo-600">
              <TrendingUp size={40} className="group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
              Funding Access
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with <span className="font-semibold text-indigo-600">100+ angel investors and VCs</span> actively looking for promising startups from non-metro cities.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-indigo-600 font-medium">
              <span>Learn more</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>

          {/* Card 2 - Mentorship */}
          <div className="group relative bg-white p-8 rounded-2xl border border-indigo-100 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300 transform md:translate-y-4">
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
              <Award size={24} />
            </div>
            <div className="mb-6 text-indigo-600">
              <Users size={40} className="group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
              Mentorship
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Learn from <span className="font-semibold text-indigo-600">successful founders and industry experts</span> who guide startups from Bharat toward sustainable growth.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-indigo-600 font-medium">
              <span>Learn more</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>

          {/* Card 3 - Startup Visibility */}
          <div className="group relative bg-white p-8 rounded-2xl border border-indigo-100 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300">
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
              <Rocket size={24} />
            </div>
            <div className="mb-6 text-indigo-600">
              <Lightbulb size={40} className="group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
              Startup Visibility
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Showcase your startup to a <span className="font-semibold text-indigo-600">community of 10,000+ founders</span> and investor network across India.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-indigo-600 font-medium">
              <span>Learn more</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>

        </div>

        {/* Success Story Highlight */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-orange-500 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <HandshakeIcon size={24} />
                <span className="text-sm font-medium uppercase tracking-wider opacity-90">Success Story</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold mb-4">
                From Jhansi to ₹2Cr Funding
              </h4>
              <p className="text-indigo-100 mb-6">
                "Karo Pitch connected us with investors who believed in our vision. Today, we're serving 50,000+ customers across 15 states."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold">
                  PK
                </div>
                <div>
                  <div className="font-semibold">Priya Kushwaha</div>
                  <div className="text-sm text-indigo-200">Founder, GraminCart</div>
                </div>
              </div>
            </div>
            
            {/* Stats for Bharat Impact */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold">65%</div>
                <div className="text-sm text-indigo-100">Startups from Tier-2/3</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold">22</div>
                <div className="text-sm text-indigo-100">States Represented</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-600 to-orange-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:shadow-indigo-200 transition-all duration-300 transform hover:scale-105">
            Join the Bharat Startup Revolution 🚀
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;