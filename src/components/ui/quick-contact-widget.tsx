import { useState } from "react";
import { Phone, Mail, MessageCircle, X, Headphones } from "lucide-react";

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