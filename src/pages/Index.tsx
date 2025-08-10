import { Link } from "react-router-dom";
import { ArrowRight, Building2, Layers, Zap, Droplets, TreePine, Shield, CheckCircle2, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Index = () => {
  const services = [
    {
      icon: Layers,
      title: "Geosynthetic Engineering",
      description: "HDPE liners, drainage systems, and erosion control solutions"
    },
    {
      icon: Building2,
      title: "Civil & Building Construction",
      description: "Complete construction services from foundation to finishing"
    },
    {
      icon: Zap,
      title: "Plastic Welding",
      description: "Professional HDPE and geomembrane welding for various applications"
    },
    {
      icon: Droplets,
      title: "Waterproofing",
      description: "Advanced waterproofing solutions for buildings and infrastructure"
    },
    {
      icon: TreePine,
      title: "Landscaping",
      description: "Exterior works and landscape design for commercial projects"
    }
  ];

  const projects = [
    {
      title: "Hospital HDPE Liner Installation",
      client: "Kampala Medical Center",
      location: "Kampala, Uganda",
      status: "Completed",
      description: "Complete geomembrane installation for waste management system"
    },
    {
      title: "Residential Complex Development",
      client: "Pearl Gardens Estate",
      location: "Entebbe, Uganda",
      status: "Ongoing",
      description: "Multi-phase residential development with landscaping"
    },
    {
      title: "Irrigation Canal Project",
      client: "Ministry of Agriculture",
      location: "Eastern Region, Uganda",
      status: "Completed",
      description: "HDPE liner installation for agricultural irrigation systems"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
            Shaping Tomorrow's Infrastructure, Today.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Leading construction and engineering company specializing in innovative geosynthetic solutions, 
            civil construction, and comprehensive infrastructure development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-elegant transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base whitespace-nowrap"
            >
              <span>Get a Quote</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-corporate-dark transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-corporate-dark mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-corporate-gray max-w-2xl mx-auto">
              Comprehensive solutions for modern infrastructure challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-card p-8 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in border border-border group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-corporate-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-corporate-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-corporate-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-corporate-dark mb-6">
                Excellence in Engineering & Construction
              </h2>
              <p className="text-lg text-corporate-gray mb-6 leading-relaxed">
                With decades of combined experience, we bring professionalism, reliability, and innovative 
                solutions to every project. Our commitment to quality and safety has made us a trusted 
                partner for infrastructure development across the region.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-corporate-blue" />
                  <span className="text-corporate-dark">Decades of industry experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-corporate-blue" />
                  <span className="text-corporate-dark">Global standard practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-corporate-blue" />
                  <span className="text-corporate-dark">Commitment to safety and quality</span>
                </div>
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center space-x-2 text-corporate-blue font-semibold hover:text-corporate-dark transition-colors"
              >
                <span>Learn More About Us</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="animate-scale-in">
              <div className="bg-gradient-primary p-8 rounded-xl text-white">
                <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  "To be a leader in construction and engineering across the region and beyond, 
                  delivering innovative solutions that build the infrastructure of tomorrow."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-corporate-dark mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-corporate-gray max-w-2xl mx-auto">
              Showcasing our expertise across diverse infrastructure projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status === 'Completed' ? (
                        <div className="flex items-center space-x-1">
                          <CheckCircle2 size={14} />
                          <span>Completed</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>Ongoing</span>
                        </div>
                      )}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-corporate-dark mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-corporate-gray mb-2">
                    <Building2 size={16} />
                    <span className="text-sm">{project.client}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-corporate-gray mb-4">
                    <MapPin size={16} />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-corporate-gray leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-elegant transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* EHS Banner */}
      <section className="py-16 bg-corporate-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <Shield size={48} className="mx-auto mb-6 text-corporate-blue" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Environment, Health & Safety
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We never compromise on safety, quality, or integrity. Our commitment to EHS standards 
            ensures every project is delivered with the highest level of professionalism and care.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-100 leading-relaxed">
            Let's discuss how we can bring your infrastructure vision to life with our 
            comprehensive engineering and construction solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-corporate-blue px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base whitespace-nowrap"
            >
              <span>Contact Our Team</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-corporate-blue transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;