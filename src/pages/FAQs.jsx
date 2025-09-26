import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const FAQs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      category: "General Questions",
      faqs: [
        {
          question: "How does Aether Soul understand my emotions?",
          answer: "Aether Soul uses advanced AI algorithms to analyze voice tone, facial expressions, body language, and behavioral patterns. It learns your unique emotional patterns over time through machine learning, allowing it to provide increasingly personalized support and responses tailored to your specific needs."
        },
        {
          question: "What makes Aether Soul different from other AI assistants?",
          answer: "Unlike traditional AI assistants that focus on tasks and commands, Aether Soul is specifically designed for emotional support and companionship. It prioritizes empathy, emotional intelligence, and building meaningful relationships rather than just providing information or controlling devices."
        },
        {
          question: "Can Aether Soul work with my smart home devices?",
          answer: "Yes, the Pro model integrates seamlessly with most popular smart home systems including Amazon Alexa, Google Home, Apple HomeKit, and many IoT devices. It can control lights, temperature, music, and other connected devices while maintaining its primary focus on emotional support."
        }
      ]
    },
    {
      category: "Privacy & Security",
      faqs: [
        {
          question: "Is my personal data safe and private?",
          answer: "Absolutely. All conversations and emotional data are processed locally on the device using advanced encryption. We never share your personal information with third parties, and you have complete control over your data. You can delete all stored information at any time through the mobile app."
        },
        {
          question: "Does Aether Soul record conversations?",
          answer: "Aether Soul only processes conversations in real-time for immediate response. No audio recordings are stored permanently unless you specifically enable the memory feature for learning purposes. Even then, only processed emotional patterns are saved, not actual audio files."
        },
        {
          question: "Can I control what data Aether Soul collects?",
          answer: "Yes, you have full control over data collection through the mobile app. You can choose what types of interactions to remember, set privacy levels for different family members, and completely disable data collection while still maintaining basic functionality."
        }
      ]
    },
    {
      category: "Technical Support",
      faqs: [
        {
          question: "How long does the battery last?",
          answer: "Aether Soul has a 12-hour battery life with normal use, including 8 hours of active conversation and 4 hours of standby following mode. It automatically returns to its charging station when the battery reaches 20% and can operate while charging for continuous support."
        },
        {
          question: "Does Aether Soul require internet connection?",
          answer: "Aether Soul can function offline for basic conversations and emotional support using its onboard AI. Internet connection is required for software updates, advanced AI features, smart home integration, and accessing the latest emotional support techniques and responses."
        },
        {
          question: "What happens if Aether Soul stops working?",
          answer: "Our support team can diagnose most issues remotely through the mobile app. If hardware repair is needed, we provide free pickup and repair service during the warranty period. Many software issues can be resolved with automatic updates or remote assistance."
        }
      ]
    },
    {
      category: "Usage & Features",
      faqs: [
        {
          question: "Can multiple family members use the same Aether Soul?",
          answer: "Yes, Aether Soul can recognize and adapt to different family members. The Basic model supports up to 2 user profiles, while the Pro model supports up to 6 user profiles, each with personalized interactions, preferences, and emotional support approaches."
        },
        {
          question: "How does Aether Soul learn my preferences?",
          answer: "Aether Soul uses machine learning to observe your emotional patterns, conversation preferences, daily routines, and response to different types of support. It gradually adapts its personality and responses to better match your needs while respecting your privacy settings."
        },
        {
          question: "Can I customize Aether Soul's personality?",
          answer: "Yes, through the mobile app you can adjust personality traits like humor level, formality, conversation topics, and response styles. The Pro model offers advanced customization options including specialized conversation themes and professional consultation for specific emotional support needs."
        }
      ]
    },
    {
      category: "Warranty & Returns",
      faqs: [
        {
          question: "What's included in the warranty?",
          answer: "Our comprehensive warranty covers all hardware defects, software issues, battery replacement, and normal wear and tear. Basic model includes 6 months coverage, Pro model includes 12 months. We also provide free software updates for life and priority repair service for Pro users."
        },
        {
          question: "How do I return my Aether Soul if I'm not satisfied?",
          answer: "We offer a hassle-free return policy with no questions asked. Contact our support team via phone, email, or chat, and we'll arrange free pickup within 24-48 hours. You'll receive a full refund within 5-7 business days after we receive the device in good condition."
        },
        {
          question: "Can I extend my warranty?",
          answer: "Yes, we offer extended warranty plans that can be purchased anytime during your original warranty period. Extensions are available for 1, 2, or 3 additional years and include the same comprehensive coverage plus priority support and free annual health checks."
        }
      ]
    },
    {
      category: "Updates & Maintenance",
      faqs: [
        {
          question: "How often does Aether Soul receive updates?",
          answer: "We release software updates monthly with new features, improved AI capabilities, bug fixes, and enhanced emotional support techniques. Critical security updates are released as needed. All updates are free and can be installed automatically or manually through the mobile app."
        },
        {
          question: "Do I need to maintain Aether Soul?",
          answer: "Aether Soul requires minimal maintenance. Regular cleaning with a soft cloth, keeping the charging station clear, and ensuring software updates are installed. The Pro model includes annual health checks where we remotely verify all systems are functioning optimally."
        },
        {
          question: "What if I need help setting up Aether Soul?",
          answer: "Basic model includes email setup support and detailed video tutorials. Pro model includes white-glove setup service where a technician will visit your home to ensure everything is configured perfectly for your family's needs, including smart home integration and personalization."
        }
      ]
    }
  ];

  const quickTips = [
    {
      icon: "💡",
      title: "Getting Started",
      tip: "Spend 15-20 minutes daily with Aether Soul in the first week to help it learn your preferences faster."
    },
    {
      icon: "🔧",
      title: "Optimization",
      tip: "Use the mobile app to review and adjust emotional support settings based on your daily experiences."
    },
    {
      icon: "🏠",
      title: "Smart Home",
      tip: "Connect Aether Soul to your smart home gradually, starting with lights and temperature for the best experience."
    },
   {
      icon: "🛠️",
      title: "Contact an expert",
      tip: "Get Aether Soul set up at home with professional installation and guided support."
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-cream-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-cream-700 max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about Aether Soul robot companions. 
              Can't find what you're looking for? Our support team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-cream-900 mb-4">
              Quick Tips for New Users
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip, index) => (
              <div key={index} className="bg-cream-200 border border-cream-300 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl mb-2">{tip.icon}</div>
                <h3 className="font-semibold text-cream-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-cream-700">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h2 className="text-2xl md:text-3xl font-bold text-cream-900 mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="space-y-6">
                {category.faqs.map((faq, faqIndex) => (
                  <div 
                    key={faqIndex}
                    className="bg-cream-100 border border-cream-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 animate-slide-up"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (faqIndex * 0.05)}s` }}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-cream-900 mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-cream-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-cream-700 mb-8 leading-relaxed">
            Our expert support team is available 24/7 to help you with any questions or concerns 
            about your Aether Soul companion.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-cream-100 border border-cream-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold text-cream-900 mb-2">Email Support</h3>
              <p className="text-cream-700 text-sm">Get detailed answers within 2-4 hours</p>
            </div>
            <div className="bg-cream-100 border border-cream-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-semibold text-cream-900 mb-2">Live Chat</h3>
              <p className="text-cream-700 text-sm">Instant help from our support team</p>
            </div>
            <div className="bg-cream-100 border border-cream-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold text-cream-900 mb-2">Phone Support</h3>
              <p className="text-cream-700 text-sm">Speak directly with our experts</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link to="/contact"> <button className="bg-cream-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cream-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Contact Support
            </button></Link>
         <Link to="/contact">   <button className="border-2 border-cream-600 text-cream-700 px-8 py-4 rounded-lg font-semibold hover:bg-cream-600 hover:text-white transition-all duration-200">
              Schedule a Call
            </button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;