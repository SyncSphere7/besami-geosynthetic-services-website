import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-corporate-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/78272ef2-dfb5-4df0-a656-da2079b3ec8e.png" 
                alt="Besami Geosynthetic Services Logo" 
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold">Besami Geosynthetic Services</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Shaping tomorrow's infrastructure, today. Leading construction and engineering company 
              specializing in geosynthetic solutions, civil construction, and innovative engineering projects.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-corporate-blue" />
                <span className="text-gray-300">Nakasero IV, Kampala, Uganda</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-corporate-blue" />
                <div className="text-gray-300">
                  <a href="tel:+256752554558" className="hover:text-corporate-blue transition-colors">
                    +256 752 554 558
                  </a>
                  <span> / </span>
                  <a 
                    href="https://wa.me/256775980879" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition-colors"
                  >
                    +256 775 980 879
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-corporate-blue" />
                <a 
                  href="mailto:info@besamigeosynthetic-services.com" 
                  className="text-gray-300 hover:text-corporate-blue transition-colors"
                >
                  info@besamigeosynthetic-services.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-corporate-blue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-corporate-blue transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-corporate-blue transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-corporate-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#geosynthetic-engineering" className="text-gray-300 hover:text-corporate-blue transition-colors">Geosynthetic Engineering</Link></li>
              <li><Link to="/services#civil-building-construction" className="text-gray-300 hover:text-corporate-blue transition-colors">Civil Construction</Link></li>
              <li><Link to="/services#plastic-welding-services" className="text-gray-300 hover:text-corporate-blue transition-colors">Plastic Welding</Link></li>
              <li><Link to="/services#waterproofing-solutions" className="text-gray-300 hover:text-corporate-blue transition-colors">Waterproofing</Link></li>
              <li><Link to="/services#landscaping-exterior-works" className="text-gray-300 hover:text-corporate-blue transition-colors">Landscaping</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Besami Geosynthetic Services. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a 
              href="https://www.facebook.com/people/Besami-Geosynthetic-Services/61566779156717/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.instagram.com/besamigeosyntheticservices/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.tiktok.com/@ivanmwebesa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
              aria-label="Follow us on TikTok"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;