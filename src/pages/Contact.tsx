import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PageMeta from "@/components/seo/PageMeta";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Nakasero IV", "Kampala, Uganda"],
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+256 752 554 558", "+256 775 980 879"],
      link: "tel:+256752554558"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@besamigeosynthetic-services.com"],
      link: "mailto:info@besamigeosynthetic-services.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      link: null
    }
  ];

  const services = [
    "Geosynthetic Engineering",
    "Civil & Building Construction", 
    "Plastic Welding Services",
    "Waterproofing Solutions",
    "Landscaping & Exterior Works",
    "Project Consultation",
    "Emergency Services",
    "Other"
  ];

  return (
    <>
      <PageMeta 
        title="Contact Besami Geosynthetic Services - Get Your Construction Quote Today"
        description="Contact Besami Geosynthetic Services for professional construction and engineering services in Uganda. Call +256 752 554 558, WhatsApp +256 775 980 879, or email info@besamigeosynthetic-services.com. Located in Nakasero IV, Kampala."
        keywords="contact construction company Uganda, construction quote Kampala, HDPE liner installation contact, geosynthetic services Uganda, emergency construction services"
        url="https://besamigeosynthetic-services.com/contact"
      />
      <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your next project? Get in touch with our expert team today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-corporate-dark mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-corporate-gray">
                      {info.link && detailIndex === 0 ? (
                        <a 
                          href={info.link} 
                          className="hover:text-corporate-blue transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-corporate-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-card p-8 rounded-xl shadow-card">
                <h2 className="text-3xl font-heading font-bold text-corporate-dark mb-6">
                  Send Us a Message
                </h2>
                <p className="text-corporate-gray mb-8 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours to discuss your project requirements.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-corporate-dark mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-corporate-dark mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-corporate-dark mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+256 XXX XXX XXX"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-corporate-dark mb-2">
                        Company/Organization
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-corporate-dark mb-2">
                      Subject/Service of Interest *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-corporate-dark mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your project requirements, timeline, and any specific details that would help us understand your needs better..."
                      className="w-full resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary text-white py-6 text-lg font-semibold hover:shadow-elegant transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send size={20} />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>

                  <p className="text-sm text-corporate-gray text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>

            {/* Additional Information */}
            <div className="animate-scale-in space-y-8">
              {/* Why Contact Us */}
              <div className="bg-card p-8 rounded-xl shadow-card">
                <h3 className="text-2xl font-heading font-bold text-corporate-dark mb-6">
                  Why Contact Us?
                </h3>
                <div className="space-y-4">
                  {[
                    "Free project consultation and assessment",
                    "Detailed quotations within 48 hours",
                    "Expert advice on best practices",
                    "Customized solutions for your needs",
                    "Transparent pricing and timelines"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 size={16} className="text-corporate-blue mt-1 flex-shrink-0" />
                      <span className="text-corporate-gray">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-primary p-8 rounded-xl text-white">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Emergency Services
                </h3>
                <p className="mb-6 text-gray-100 leading-relaxed">
                  Need urgent repairs or emergency services? We provide 24/7 emergency response 
                  for critical infrastructure issues.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone size={16} />
                    <a 
                      href="tel:+256752554558" 
                      className="font-semibold hover:text-gray-200 transition-colors"
                    >
                      Emergency Hotline: +256 752 554 558
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={16} />
                    <span>emergency@besamigeosynthetic-services.com</span>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-card p-8 rounded-xl shadow-card">
                <h3 className="text-2xl font-heading font-bold text-corporate-dark mb-6">
                  Visit Our Office
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-corporate-dark mb-2">Business Hours:</h4>
                    <div className="space-y-1 text-corporate-gray">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed (Emergency services available)</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-dark mb-2">Address:</h4>
                    <p className="text-corporate-gray">
                      Nakasero IV<br />
                      Kampala, Uganda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Contact;