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
    <nav className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-2 sm:px-4">
      <div className="bg-white/90 sm:bg-white/80 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
        <div className="flex justify-between items-center px-4 sm:px-6 py-2 sm:py-3">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-1 sm:space-x-2 text-sm sm:text-lg font-heading font-bold text-corporate-dark hover:text-corporate-blue transition-colors"
          >
            <img 
              src="/lovable-uploads/78272ef2-dfb5-4df0-a656-da2079b3ec8e.png" 
              alt="Besami Geosynthetic Services Logo" 
              className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
            />
            <div className="flex flex-col leading-tight">
              <span className="hidden sm:block text-xs sm:text-sm lg:text-base">Besami Geosynthetic Services</span>
              <span className="sm:hidden text-sm">Besami</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-corporate-blue relative px-3 py-2 rounded-full",
                  location.pathname === item.href
                    ? "text-corporate-blue bg-corporate-blue/10"
                    : "text-corporate-gray hover:bg-corporate-blue/5"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-corporate-gray hover:text-corporate-blue transition-colors p-2 rounded-full hover:bg-corporate-blue/5"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 animate-fade-in">
            <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-3 space-y-1 mx-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium transition-colors rounded-xl",
                    location.pathname === item.href
                      ? "text-corporate-blue bg-corporate-blue/10"
                      : "text-corporate-gray hover:text-corporate-blue hover:bg-corporate-blue/5"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium bg-gradient-primary text-white rounded-xl text-center mt-3"
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