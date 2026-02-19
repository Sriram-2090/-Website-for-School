import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-montessori-beige-900 text-montessori-beige-200">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              Little Learners
            </h3>
            <p className="text-sm leading-relaxed text-montessori-beige-300 mb-6">
              A premium Montessori play school dedicated to nurturing young minds 
              through authentic learning experiences.
            </p>
            <div className="flex gap-3">
              {/* Facebook - Official Blue */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-[#1877F2] hover:bg-[#0C63D4] rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram - Official Gradient */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:from-[#6A2C91] hover:via-[#D91919] hover:to-[#E85A1F] rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Twitter/X - Official Black */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-black hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Twitter/X"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Philosophy', 'Programs', 'Activities', 'Gallery'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                    className="text-sm hover:text-montessori-terracotta-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4">Our Programs</h4>
            <ul className="space-y-3">
              <li className="text-sm">Playgroup (1.5 - 2.5 years)</li>
              <li className="text-sm">Nursery (2.5 - 3.5 years)</li>
              <li className="text-sm">LKG (3.5 - 4.5 years)</li>
              <li className="text-sm">UKG (4.5 - 6 years)</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-montessori-terracotta-400" />
                <p className="text-sm">
                  123 Learning Street,
                  <br />
                  Bangalore, Karnataka 560001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-montessori-terracotta-400" />
                <p className="text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-montessori-terracotta-400" />
                <p className="text-sm">hello@littlelearners.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-montessori-beige-800 pt-8 pb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-serif text-lg font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-sm text-montessori-beige-300 mb-6">
              Get updates on events, parenting tips, and educational insights
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-montessori-beige-800 text-white placeholder-montessori-beige-400 focus:outline-none focus:ring-2 focus:ring-montessori-terracotta-500"
              />
              <button className="px-8 py-3 bg-montessori-terracotta-500 hover:bg-montessori-terracotta-600 text-white rounded-full font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-montessori-beige-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-montessori-beige-400">
            <p>© {currentYear} Little Learners Montessori. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-montessori-terracotta-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-montessori-terracotta-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-montessori-terracotta-400 transition-colors">
                Admissions Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
