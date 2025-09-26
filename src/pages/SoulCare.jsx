import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SoulCare = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePhysioRedirect = () => {
    navigate('/physioconnect');
  };

  const handleDivyangRedirect = () => {
    navigate('/soul-assistive-devices');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-cream-900 mb-6">
              Soul Care Services
            </h1>
            <p className="text-xl text-cream-700 max-w-4xl mx-auto leading-relaxed">
              Comprehensive care solutions designed to support your physical and emotional well-being. 
              Discover our specialized services tailored for different needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Physiotherapist Service */}
            <div className="relative bg-cream-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-up border border-cream-300">
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🏥</div>
                  <h3 className="text-2xl font-bold text-cream-900 mb-4">Physiotherapy Services</h3>
                  <p className="text-cream-700 leading-relaxed">
                    Connect with certified physiotherapists for personalized rehabilitation and wellness programs. 
                    Our expert team provides comprehensive physical therapy services including sports injury recovery, 
                    post-surgical rehabilitation, and general mobility improvement.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-cream-900 mb-3">What We Offer:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <svg className="w-4 h-4 text-cream-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-cream-700">Online consultations with certified physiotherapists</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-4 h-4 text-cream-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-cream-700">Personalized exercise and rehabilitation programs</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-4 h-4 text-cream-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-cream-700">Sports injury recovery and prevention</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-4 h-4 text-cream-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-cream-700">Post-surgical rehabilitation support</span>
                    </li>
                  </ul>
                </div>

                <button 
                  onClick={handlePhysioRedirect}
                  className="w-full bg-cream-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cream-700 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                >
                  Book Consultation
                </button>
              </div>
            </div>

            {/* Divyang Services */}
            <div className="relative bg-cream-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-up border border-cream-300" style={{ animationDelay: '0.1s' }}>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">♿</div>
                  <h3 className="text-2xl font-bold text-cream-900 mb-4">Divyang Support Services</h3>
                  <p className="text-cream-700 leading-relaxed">
                    Specialized assistive technology and healthcare devices designed to enhance independence 
                    and quality of life for differently-abled individuals. Our comprehensive range of tools 
                    and devices support various physical and cognitive needs.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-cream-900 mb-3">Available Solutions:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm">
                      <svg className="w-4 h-4 text-cream-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-cream-700">Mobility aids and assistive devices</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-4 h-4 text-cream-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-cream-700">Vision and hearing support technology</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-4 h-4 text-cream-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-cream-700">Communication and speech assistance tools</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-4 h-4 text-cream-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-cream-700">Daily living and independence aids</span>
                    </li>
                  </ul>
                </div>

                <button 
                  onClick={handleDivyangRedirect}
                  className="w-full bg-cream-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cream-700 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                >
                  Explore Products
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cream-600 to-cream-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comprehensive Care for Everyone
          </h2>
          <p className="text-xl text-cream-100 mb-8 leading-relaxed">
            At Aether Soul, we believe in providing holistic care solutions that address both 
            physical and emotional well-being for all individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handlePhysioRedirect}
              className="bg-white text-cream-700 px-8 py-4 rounded-lg font-semibold hover:bg-cream-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Book Physiotherapy
            </button>
            <button 
              onClick={handleDivyangRedirect}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cream-700 transition-all duration-200"
            >
              Browse Assistive Devices
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoulCare;