import { Layers, Building2, Zap, Droplets, TreePine, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  // Function to create anchor IDs from service titles
  const createAnchorId = (title: string) => {
    return title.toLowerCase()
      .replace(/&/g, '')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  };

  const services = [
    {
      icon: Layers,
      title: "Geosynthetic Engineering",
      description: "Comprehensive geosynthetic solutions for modern infrastructure challenges",
      features: [
        "HDPE liner installation and welding",
        "Drainage systems design and implementation",
        "Erosion control and slope stabilization",
        "Landfill and waste management liners",
        "Mining and industrial applications",
        "Water retention and irrigation systems"
      ],
      applications: ["Environmental Protection", "Water Management", "Mining Industry", "Agriculture"]
    },
    {
      icon: Building2,
      title: "Civil & Building Construction",
      description: "Complete construction services from foundation to finishing",
      features: [
        "Residential and commercial building construction",
        "Infrastructure development projects",
        "Foundation and structural work",
        "Road construction and rehabilitation",
        "Bridge and drainage construction",
        "Project management and supervision"
      ],
      applications: ["Residential Development", "Commercial Buildings", "Infrastructure", "Public Works"]
    },
    {
      icon: Zap,
      title: "Plastic Welding Services",
      description: "Professional HDPE and geomembrane welding for various industrial applications",
      features: [
        "HDPE pipe and membrane welding",
        "Geomembrane installation for oil & gas",
        "Waste management liner welding",
        "Custom fabrication services",
        "Quality testing and certification",
        "Emergency repair services"
      ],
      applications: ["Oil & Gas Industry", "Waste Management", "Water Treatment", "Industrial Projects"]
    },
    {
      icon: Droplets,
      title: "Waterproofing Solutions",
      description: "Advanced waterproofing systems for buildings and infrastructure",
      features: [
        "Basement and foundation waterproofing",
        "Roof waterproofing and insulation",
        "Tank and reservoir waterproofing",
        "Bridge deck waterproofing",
        "Tunnel waterproofing systems",
        "Maintenance and repair services"
      ],
      applications: ["Buildings", "Infrastructure", "Water Structures", "Transportation"]
    },
    {
      icon: TreePine,
      title: "Landscaping & Exterior Works",
      description: "Professional landscaping and exterior finishing services",
      features: [
        "Commercial and residential landscaping",
        "Driveway and paving installation",
        "Garden design and maintenance",
        "Irrigation system installation",
        "Outdoor lighting and features",
        "Retaining walls and hardscaping"
      ],
      applications: ["Commercial Properties", "Residential Estates", "Public Spaces", "Industrial Sites"]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction and engineering solutions tailored to meet your infrastructure needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.title}
                id={createAnchorId(service.title)}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <service.icon size={24} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-corporate-dark">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-corporate-gray mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-heading font-semibold text-corporate-dark mb-4">
                      What We Offer:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle2 size={16} className="text-corporate-blue mt-1 flex-shrink-0" />
                          <span className="text-corporate-gray">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-heading font-semibold text-corporate-dark mb-4">
                      Applications:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, appIndex) => (
                        <span 
                          key={appIndex}
                          className="px-3 py-1 bg-corporate-light text-corporate-dark rounded-full text-sm font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} animate-scale-in`}>
                  <div className="bg-card p-8 rounded-xl shadow-card">
                    <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                      <service.icon size={40} className="text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-heading font-bold text-corporate-dark mb-4">
                        Professional Excellence
                      </h3>
                      <p className="text-corporate-gray leading-relaxed mb-6">
                        Our experienced team delivers {service.title.toLowerCase()} services that meet 
                        international standards and exceed client expectations.
                      </p>
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-elegant transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
                      >
                        <span>Get Quote</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-corporate-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-corporate-dark mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-corporate-gray max-w-2xl mx-auto">
              We bring expertise, quality, and reliability to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Highly skilled professionals with years of industry experience and international training."
              },
              {
                title: "Quality Materials",
                description: "We use only the highest quality materials and equipment from trusted global suppliers."
              },
              {
                title: "Timely Delivery",
                description: "Committed to delivering projects on schedule without compromising on quality or safety."
              },
              {
                title: "Safety First",
                description: "Rigorous safety protocols and EHS compliance on every project, ensuring zero incidents."
              },
              {
                title: "Competitive Pricing",
                description: "Fair and transparent pricing that delivers exceptional value for your investment."
              },
              {
                title: "After-Sales Support",
                description: "Comprehensive warranty and maintenance services to ensure long-term project success."
              }
            ].map((benefit, index) => (
              <div 
                key={benefit.title}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-heading font-semibold text-corporate-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-corporate-gray leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-100 leading-relaxed">
            Let our experienced team help you choose the right services for your specific needs and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-corporate-blue px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base whitespace-nowrap"
            >
              <span>Request Consultation</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <Link 
              to="/projects" 
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-corporate-blue transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;