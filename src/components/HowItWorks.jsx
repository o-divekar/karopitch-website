import { 
  FaFileUpload, FaCheckCircle, FaMicrophone, FaChartLine,
  FaUsers, FaRocket, FaHandshake, FaRupeeSign 
} from "react-icons/fa";
import { useState } from "react";
import { MapPin, TrendingUp, Award, Star, Zap, ArrowRight } from 'lucide-react';

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 1,
      icon: FaFileUpload,
      title: "Apply with Pitch Deck",
      description: "Submit your startup details and pitch deck to apply for the event.",
      color: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50",
      details: {
        time: "5-10 minutes",
        documents: ["Pitch Deck", "Executive Summary", "Team Details"],
        tips: "Keep it concise & impactful",
        success: "85% applications reviewed in 48h"
      }
    },
    {
      id: 2,
      icon: FaCheckCircle,
      title: "Get Shortlisted",
      description: "KaroStartup reviews applications and selects promising startups.",
      color: "from-green-500 to-emerald-500",
      bgLight: "bg-green-50",
      details: {
        time: "48-72 hours",
        documents: ["Video Pitch (Optional)", "Financial Projections"],
        tips: "Highlight your traction",
        success: "30% shortlisting rate"
      }
    },
    {
      id: 3,
      icon: FaMicrophone,
      title: "Pitch to Investors",
      description: "Present your startup live to investors and industry mentors.",
      color: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50",
      details: {
        time: "7-10 minutes",
        documents: ["Live Demo", "Q&A Session"],
        tips: "Practice your storytelling",
        success: "50+ investors attend"
      }
    },
    {
      id: 4,
      icon: FaChartLine,
      title: "Raise Funding",
      description: "Connect with investors and secure funding to scale your business.",
      color: "from-orange-500 to-red-500",
      bgLight: "bg-orange-50",
      details: {
        time: "Post-event",
        documents: ["Term Sheets", "Due Diligence"],
        tips: "Follow up promptly",
        success: "₹50Cr+ raised till date"
      }
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50/30 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-6">
            <Zap size={16} className="text-indigo-600" />
            <span className="text-indigo-700 font-medium text-sm">Simple • Transparent • Fast</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              How KaroPitch Works
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From application to funding in 4 simple steps. Join <span className="font-semibold text-indigo-600">1000+ founders</span> who've pitched on our platform.
          </p>

          {/* Success Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <FaCheckCircle className="text-green-600 text-xl" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800">1000+</div>
                <div className="text-sm text-gray-500">Applications</div>
              </div>
            </div>
            <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <FaMicrophone className="text-purple-600 text-xl" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800">200+</div>
                <div className="text-sm text-gray-500">Pitches</div>
              </div>
            </div>
            <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <FaRupeeSign className="text-orange-600 text-xl" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800">₹50Cr+</div>
                <div className="text-sm text-gray-500">Funding</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline with steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hidden lg:block"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="group relative"
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Step Number */}
                <div className={`absolute -top-3 left-6 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm z-10 shadow-lg`}>
                  {step.id}
                </div>

                {/* Main Card */}
                <div className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${
                  activeStep === step.id ? `border-${step.color.split('-')[1]}-300` : 'border-transparent'
                }`}>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <step.icon className="text-white text-3xl" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Time Badge */}
                  <div className={`inline-flex items-center gap-1 ${step.bgLight} px-3 py-1 rounded-full text-xs font-medium text-gray-700 mb-3`}>
                    <Zap size={12} className={`text-${step.color.split('-')[1]}-500`} />
                    {step.details.time}
                  </div>

                  {/* Preview of details */}
                  <div className="flex items-center gap-1 text-xs text-indigo-600">
                    <span>Hover for details</span>
                    <ArrowRight size={12} />
                  </div>
                </div>

                {/* Hover Card with Details */}
                {activeStep === step.id && (
                  <div className="absolute top-0 left-0 right-0 bg-white rounded-2xl shadow-2xl p-6 z-20 animate-fadeIn border-2 border-indigo-100">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-3`}>
                      <step.icon className="text-white text-xl" />
                    </div>
                    
                    <h4 className="font-bold text-lg mb-3">{step.title}</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">📋 Required Documents</div>
                        <div className="flex flex-wrap gap-2">
                          {step.details.documents.map(doc => (
                            <span key={doc} className={`text-xs px-2 py-1 ${step.bgLight} rounded-full`}>
                              {doc}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-gray-500 mb-1">💡 Pro Tip</div>
                        <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded-lg">
                          {step.details.tips}
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                        <span className="text-xs text-gray-500">Success Rate</span>
                        <span className="text-sm font-semibold text-green-600">{step.details.success}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Carousel */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Award size={24} className="text-yellow-300" />
                <span className="text-sm font-semibold uppercase tracking-wider">Success Stories</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                From Pitch to Funding
              </h3>
              <p className="text-indigo-100 mb-6">
                Founders who started their journey with KaroPitch and went on to raise funding.
              </p>
              
              {/* Testimonial */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm mb-3 italic">
                  "KaroPitch connected us with investors who believed in our vision. Within 3 months, we closed our seed round!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                    RK
                  </div>
                  <div>
                    <div className="font-semibold">Rahul Kumar</div>
                    <div className="text-xs text-indigo-200">Founder, EduSpark (Raised ₹75L)</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-4">
              {[
                { name: 'GreenCart', amount: '₹1.2Cr', city: 'Lucknow' },
                { name: 'EduSpark', amount: '₹75L', city: 'Indore' },
                { name: 'BuildMate', amount: '₹2Cr', city: 'Jaipur' },
                { name: 'KrishiSetu', amount: '₹1.5Cr', city: 'Varanasi' }
              ].map((startup, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="font-bold">{startup.name}</div>
                  <div className="text-sm text-yellow-300">{startup.amount}</div>
                  <div className="flex items-center gap-1 text-xs text-indigo-200">
                    <MapPin size={10} />
                    {startup.city}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Upcoming Pitch Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { date: 'Mar 25, 2026', city: 'Jaipur', spots: '8/15 left', theme: 'D2C & AgriTech' },
              { date: 'Apr 10, 2026', city: 'Lucknow', spots: '12/15 left', theme: 'EdTech & HealthTech' },
              { date: 'Apr 25, 2026', city: 'Indore', spots: '5/15 left', theme: 'SaaS & Manufacturing' }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm font-bold text-indigo-600">{event.date}</span>
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                    {event.spots}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-orange-500" />
                  <span className="font-semibold">{event.city}</span>
                </div>
                <div className="text-sm text-gray-500 mb-4">Theme: {event.theme}</div>
                <button className="w-full border-2 border-indigo-600 text-indigo-600 py-2 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Have questions about the process?</p>
          <button className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:gap-3 transition-all">
            Check out our FAQs <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;