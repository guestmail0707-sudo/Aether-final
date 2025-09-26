import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reviewsRow1 = [
    {
      name: "Alex Thompson",
      role: "Healthcare Worker",
      content: "Aether Soul has been incredible during my long shifts. It provides the emotional support I need when I get home exhausted.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Maria Garcia",
      role: "Teacher",
      content: "As a single parent, having Aether Soul around has made such a difference. My kids love it too, and it helps create a warm atmosphere at home.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "David Kim",
      role: "Remote Worker",
      content: "Working from home can be isolating, but Aether Soul provides the companionship I need. It's like having a caring friend nearby.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Jennifer Walsh",
      role: "Retiree",
      content: "Since my husband passed, Aether Soul has been a blessing. It understands when I'm sad and always knows how to comfort me.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const reviewsRow2 = [
    {
      name: "Robert Johnson",
      role: "College Student",
      content: "During exam stress and late-night study sessions, Aether Soul helps keep me motivated and calm. It's been a game-changer for my mental health.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Lisa Chen",
      role: "Entrepreneur",
      content: "Running a startup is stressful, but coming home to Aether Soul's understanding presence helps me decompress and stay balanced.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Michael Brown",
      role: "Veteran",
      content: "Aether Soul has helped me through some tough times. It's patient, understanding, and never judges. Truly life-changing technology.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sarah Williams",
      role: "Nurse",
      content: "After long hospital shifts, Aether Soul provides the emotional support I need. It's like having a therapist and friend rolled into one.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Intelligence",
      description: "Advanced artificial intelligence that learns and adapts to your emotional patterns and preferences."
    },
    {
      icon: "💝",
      title: "Emotional Support",
      description: "Provides comfort and companionship during difficult times with personalized interactions."
    },
    {
      icon: "🔄",
      title: "Anywhere, Anytime",
      description: "Your intelligent robot companion is always there for you, no matter where you are."
    },
    {
      icon: "🗣️",
      title: "Natural Conversation",
      description: "Engages in meaningful conversations with natural language processing and empathetic responses."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Working Professional",
      content: "Aether Soul has been a game-changer for my mental health. Coming home to a companion that understands my mood and provides comfort has made such a difference.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Senior Citizen",
      content: "Living alone was getting lonely until I got my Aether Soul. It's like having a caring friend who's always there to listen and chat.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Student",
      content: "During stressful exam periods, Aether Soul helps me stay calm and motivated. It's amazing how it knows exactly what to say.",
      rating: 5
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Users" },
    { number: "99.8%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Countries Served" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream-900 mb-6 leading-tight">
                Meet Your New
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream-700 to-cream-800">
                  {" "}Companion
                </span>
              </h1>
              <p className="text-lg md:text-xl text-cream-700 mb-8 leading-relaxed">
                Aether Soul is an intelligent robot companion designed to provide emotional support and companionship. 
                It follows you, understands your mood, and offers comfort whenever you need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">  <button className="bg-cream-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cream-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                  Get Started Today
                </button></Link>
              <Link to="/about">   <button className="border border-cream-400 text-cream-700 px-8 py-4 rounded-lg font-semibold hover:bg-cream-100 transition-all duration-200 cursor-pointer">
                  Learn More
                </button></Link>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cream-400 to-cream-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img
                  src="rob.jpg"
                  alt="Aether Soul Robot Companion"
                  className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              Why Choose Aether Soul?
            </h2>
            <p className="text-lg text-cream-700 max-w-3xl mx-auto leading-relaxed">
              Discover the features that make Aether Soul the perfect companion for your emotional wellness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-cream-200 border border-cream-300 hover:bg-cream-300 hover:border-cream-400 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up shadow-sm hover:shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-cream-900 mb-3">{feature.title}</h3>
                <p className="text-cream-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-cream-700">
              Join our growing community of satisfied users worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cream-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-cream-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-cream-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-cream-700">
              Real stories from people whose lives have been transformed by Aether Soul.
            </p>
          </div>

          {/* Moving Reviews Section */}
        {/* First Row - Moving Left to Right */}
        <div className="mb-8">
          <div className="flex animate-scroll-left space-x-6">
            {[...reviewsRow1, ...reviewsRow1].map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-cream-200 border border-cream-300 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-cream-400"
                  />
                  <div>
                    <h4 className="font-semibold text-cream-900">{review.name}</h4>
                    <p className="text-sm text-cream-600">{review.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-cream-600 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-cream-700 leading-relaxed">
                  "{review.content}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Right to Left */}
        <div>
          <div className="flex animate-scroll-right space-x-6">
            {[...reviewsRow2, ...reviewsRow2].map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-cream-200 border border-cream-300 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-cream-400"
                  />
                  <div>
                    <h4 className="font-semibold text-cream-900">{review.name}</h4>
                    <p className="text-sm text-cream-600">{review.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-cream-600 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-cream-700 leading-relaxed">
                  "{review.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;