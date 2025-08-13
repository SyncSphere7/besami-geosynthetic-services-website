import { useState } from "react";
import { Phone, Mail, MessageCircle, X, Headphones, Facebook, Instagram } from "lucide-react";

const QuickContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: Phone,
      label: "Call Us",
      action: "tel:+256752554558",
      text: "+256 752 554 558",
      color: "text-blue-600 hover:text-blue-700",
      bgColor: "bg-blue-50 hover:bg-blue-100"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      action: "https://wa.me/256775980879",
      text: "+256 775 980 879",
      color: "text-green-600 hover:text-green-700",
      bgColor: "bg-green-50 hover:bg-green-100",
      external: true
    },
    {
      icon: Mail,
      label: "Email Us",
      action: "mailto:info@besamigeosynthetic-services.com",
      text: "Send Email",
      color: "text-red-600 hover:text-red-700",
      bgColor: "bg-red-50 hover:bg-red-100"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      action: "https://www.facebook.com/people/Besami-Geosynthetic-Services/61566779156717/",
      color: "text-blue-600 hover:text-blue-700",
      bgColor: "bg-blue-50 hover:bg-blue-100"
    },
    {
      icon: Instagram,
      label: "Instagram", 
      action: "https://www.instagram.com/besamigeosyntheticservices/",
      color: "text-pink-600 hover:text-pink-700",
      bgColor: "bg-pink-50 hover:bg-pink-100"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      {isOpen && (
        <div className="mb-4 space-y-2 animate-fade-in">
          {contactOptions.map((option, index) => (
            <a
              key={option.label}
              href={option.action}
              target={option.external ? "_blank" : undefined}
              rel={option.external ? "noopener noreferrer" : undefined}
              className={`flex items-center space-x-3 p-3 rounded-lg shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 ${option.bgColor} group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <option.icon size={20} className={option.color} />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">{option.label}</span>
                <span className="text-xs text-gray-600">{option.text}</span>
              </div>
            </a>
          ))}
          
          {/* Social Media Links */}
          <div className="border-t border-gray-200 pt-2 mt-2">
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 ${social.bgColor} ${social.color}`}
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon size={16} />
                </a>
              ))}
              <a
                href="https://www.tiktok.com/@ivanmwebesa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all duration-300 bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-700"
                aria-label="Follow us on TikTok"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? "bg-gray-600 hover:bg-gray-700" 
            : "bg-gradient-primary hover:shadow-elegant"
        }`}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <Headphones size={24} className="text-white" />
        )}
      </button>
    </div>
  );
};

export default QuickContactWidget;