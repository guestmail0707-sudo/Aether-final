import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: '/', label: 'Home' },
    { id: '/about', label: 'About' },
    { id: '/services', label: 'Services' },
    { id: '/faqs', label: 'FAQs' },
    { id: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-50/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-centertext-xl font-bold text-cream-900 hover:text-cream-700 transition-colors">
            <img
    src="aetherlogo.jpg"
    alt="Aether Soul logo"
    style={{ height: "32px", marginRight: "10px" }}
  /> 
   Aether Soul
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.id)
                    ? 'text-cream-700 bg-cream-200'
                    : 'text-cream-600 hover:text-cream-700 hover:bg-cream-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cream-600 hover:text-cream-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-cream-200">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive(item.id)
                    ? 'text-cream-700 bg-cream-200'
                    : 'text-cream-600 hover:text-cream-700 hover:bg-cream-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;