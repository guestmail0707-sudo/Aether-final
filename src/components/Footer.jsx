const Footer = () => {
  return (
    <footer className="bg-cream-800 text-cream-50 py-12 border-t border-cream-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">Aether Soul</span>
            </div>
            <p className="text-cream-300 mb-6 max-w-md leading-relaxed">
              Revolutionizing emotional wellness through intelligent robot companions 
              that provide support, understanding, and companionship when you need it most.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-200 hover:text-cream-100 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-cream-200 hover:text-cream-100 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-cream-200 hover:text-cream-100 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-cream-200 hover:text-cream-50 transition-colors">Home</a></li>
              <li><a href="/about" className="text-cream-200 hover:text-cream-50 transition-colors">About</a></li>
              <li><a href="/services" className="text-cream-200 hover:text-cream-50 transition-colors">Services</a></li>
              <li><a href="/faqs" className="text-cream-200 hover:text-cream-50 transition-colors">FAQs</a></li>
              <li><a href="/contact" className="text-cream-200 hover:text-cream-50 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-cream-200 hover:text-cream-50 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-cream-200 hover:text-cream-50 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-cream-200 hover:text-cream-50 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-cream-200 hover:text-cream-50 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream-700 mt-8 pt-8 text-center">
          <p className="text-cream-200">
            © 2025 Aether Soul. All rights reserved. Made with love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;