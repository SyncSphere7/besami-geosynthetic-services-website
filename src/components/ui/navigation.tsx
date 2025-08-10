import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 text-xl font-heading font-bold text-corporate-dark hover:text-corporate-blue transition-colors"
          >
            <img 
              src="/lovable-uploads/78272ef2-dfb5-4df0-a656-da2079b3ec8e.png" 
              alt="Besami Geosynthetic Services Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <div className="flex flex-col leading-tight">
              <span className="hidden sm:block text-base lg:text-xl">Besami Geosynthetic Services</span>
              <span className="sm:hidden text-lg">Besami</span>
              <span className="hidden lg:block text-xs text-corporate-gray font-normal">Ltd.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-corporate-blue relative",
                  location.pathname === item.href
                    ? "text-corporate-blue after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-corporate-blue"
                    : "text-corporate-gray"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-elegant transition-all duration-300 whitespace-nowrap"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-corporate-gray hover:text-corporate-blue transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-colors",
                    location.pathname === item.href
                      ? "text-corporate-blue bg-corporate-light/50"
                      : "text-corporate-gray hover:text-corporate-blue"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium bg-gradient-primary text-white rounded-lg mx-3 text-center mt-4 w-auto"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;