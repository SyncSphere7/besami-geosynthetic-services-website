import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

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
            <a href="#" className="text-gray-400 hover:text-corporate-blue transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;