import { Building2, MapPin, CheckCircle2, Clock, Calendar, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";
import hdpeHospital from "@/assets/projects/hdpe-installation-1.jpg";
import residentialComplex from "@/assets/projects/construction-work-1.jpg";
import irrigationCanal from "@/assets/projects/infrastructure-1.jpg";
import officeBuilding from "@/assets/projects/construction-work-2.jpg";
import oilGasFacility from "@/assets/projects/project-1.jpg";
import resortLandscaping from "@/assets/services/landscaping.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Hospital HDPE Liner Installation",
      client: "Kampala Medical Center",
      location: "Kampala, Uganda",
      status: "Completed",
      category: "Geosynthetic Engineering",
      duration: "3 months",
      value: "Confidential",
      team: "8 specialists",
      description: "Complete geomembrane installation for medical waste management system including HDPE liner welding, drainage integration, and quality testing. The project ensures safe containment of medical waste according to international standards.",
      keyFeatures: [
        "1,200 m² HDPE liner installation",
        "Specialized medical waste containment",
        "Advanced welding and sealing techniques",
        "Comprehensive quality testing",
        "EHS compliance certification"
      ],
      completedDate: "March 2024",
      image: hdpeHospital
    },
    {
      title: "Pearl Gardens Residential Complex",
      client: "Pearl Gardens Estate Ltd",
      location: "Entebbe, Uganda",
      status: "Ongoing",
      category: "Civil Construction",
      duration: "18 months",
      value: "Multi-million USD",
      team: "25+ professionals",
      description: "Multi-phase residential development featuring modern apartments, landscaping, and infrastructure. The project includes civil works, waterproofing, landscaping, and comprehensive utility installation.",
      keyFeatures: [
        "120-unit residential complex",
        "Modern landscaping design",
        "Underground utility installation",
        "Waterproofing and drainage systems",
        "Recreational facility construction"
      ],
      expectedCompletion: "December 2024",
      image: residentialComplex
    },
    {
      title: "Agricultural Irrigation Canal Project",
      client: "Ministry of Agriculture, Animal Industry and Fisheries",
      location: "Eastern Region, Uganda",
      status: "Completed",
      category: "Geosynthetic Engineering",
      duration: "6 months",
      value: "Government Contract",
      team: "12 engineers",
      description: "Large-scale HDPE liner installation for agricultural irrigation systems spanning multiple districts. The project significantly improves water management for agricultural productivity in the region.",
      keyFeatures: [
        "15 km irrigation canal lining",
        "HDPE membrane installation",
        "Water flow optimization",
        "Erosion control measures",
        "Farmer training programs"
      ],
      completedDate: "August 2024",
      image: irrigationCanal
    },
    {
      title: "Corporate Office Building",
      client: "East Africa Business Center",
      location: "Kampala Central Business District",
      status: "Completed",
      category: "Civil Construction",
      duration: "12 months",
      value: "Multi-million USD",
      team: "30+ professionals",
      description: "Modern 8-story office building featuring contemporary design, advanced waterproofing systems, and comprehensive landscaping. The project showcases our expertise in commercial construction.",
      keyFeatures: [
        "8-story commercial building",
        "Advanced waterproofing systems",
        "Modern facade and interiors",
        "Landscaped parking areas",
        "Sustainable building practices"
      ],
      completedDate: "June 2024",
      image: officeBuilding
    },
    {
      title: "Oil & Gas Facility Containment",
      client: "Energy Solutions Uganda",
      location: "Western Uganda",
      status: "Completed",
      category: "Plastic Welding",
      duration: "4 months",
      value: "Confidential",
      team: "15 specialists",
      description: "Specialized geomembrane installation for oil and gas facility secondary containment. Critical project ensuring environmental protection and regulatory compliance for energy infrastructure.",
      keyFeatures: [
        "Secondary containment system",
        "Chemical-resistant geomembranes",
        "Precision welding techniques",
        "Environmental protection measures",
        "Regulatory compliance certification"
      ],
      completedDate: "January 2024",
      image: oilGasFacility
    },
    {
      title: "Luxury Resort Landscaping",
      client: "Lake View Resort & Spa",
      location: "Jinja, Uganda",
      status: "Ongoing",
      category: "Landscaping",
      duration: "8 months",
      value: "Premium Contract",
      team: "20 professionals",
      description: "Comprehensive landscaping project for luxury resort including gardens, water features, driveways, and outdoor recreational areas. The project emphasizes sustainable tourism and environmental harmony.",
      keyFeatures: [
        "Tropical garden design",
        "Water feature installation",
        "Decorative paving and driveways",
        "Outdoor lighting systems",
        "Sustainable irrigation systems"
      ],
      expectedCompletion: "February 2025",
      image: resortLandscaping
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "50+", icon: CheckCircle2 },
    { label: "Years of Experience", value: "10+", icon: Calendar },
    { label: "Satisfied Clients", value: "40+", icon: Users },
    { label: "Success Rate", value: "98%", icon: DollarSign }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Showcasing our expertise through successful infrastructure projects across diverse sectors.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl font-heading font-bold text-corporate-dark mb-2">
                  {stat.value}
                </div>
                <div className="text-corporate-gray font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-corporate-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-corporate-dark mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-corporate-gray max-w-2xl mx-auto">
              Discover how we've helped clients achieve their infrastructure goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-corporate-dark rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status === 'Completed' ? (
                        <>
                          <CheckCircle2 size={14} />
                          <span>Completed</span>
                        </>
                      ) : (
                        <>
                          <Clock size={14} />
                          <span>Ongoing</span>
                        </>
                      )}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">

                  {/* Project Title & Client */}
                  <h3 className="text-2xl font-heading font-bold text-corporate-dark mb-3">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2 text-corporate-gray">
                      <Building2 size={16} />
                      <span className="font-medium">{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-corporate-gray">
                      <MapPin size={16} />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-corporate-light/50 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm text-corporate-gray">Duration</div>
                      <div className="font-semibold text-corporate-dark">{project.duration}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-corporate-gray">Value</div>
                      <div className="font-semibold text-corporate-dark">{project.value}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-corporate-gray">Team</div>
                      <div className="font-semibold text-corporate-dark">{project.team}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-corporate-gray leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-heading font-semibold text-corporate-dark mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {project.keyFeatures.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle2 size={16} className="text-corporate-blue mt-1 flex-shrink-0" />
                          <span className="text-corporate-gray text-sm">{feature}</span>
                        </div>
                      ))}
                      {project.keyFeatures.length > 3 && (
                        <div className="text-corporate-blue text-sm font-medium ml-6">
                          +{project.keyFeatures.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Completion Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-sm text-corporate-gray">
                      {project.status === 'Completed' ? 'Completed:' : 'Expected Completion:'}
                    </div>
                    <div className="font-medium text-corporate-dark">
                      {project.completedDate || project.expectedCompletion}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-corporate-dark mb-4">
              Project Categories
            </h2>
            <p className="text-lg text-corporate-gray max-w-2xl mx-auto">
              We deliver excellence across multiple construction and engineering disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Geosynthetic Engineering",
                count: "15+ Projects",
                description: "HDPE liners, drainage systems, and environmental containment solutions"
              },
              {
                title: "Civil Construction",
                count: "20+ Projects", 
                description: "Residential, commercial, and infrastructure development projects"
              },
              {
                title: "Plastic Welding",
                count: "10+ Projects",
                description: "Specialized welding services for industrial and environmental applications"
              },
              {
                title: "Waterproofing",
                count: "12+ Projects",
                description: "Advanced waterproofing solutions for buildings and infrastructure"
              },
              {
                title: "Landscaping",
                count: "8+ Projects",
                description: "Professional landscaping and exterior works for various clients"
              },
              {
                title: "Infrastructure",
                count: "25+ Projects",
                description: "Roads, bridges, drainage, and public infrastructure projects"
              }
            ].map((category, index) => (
              <div 
                key={category.title}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-heading font-semibold text-corporate-dark mb-2 group-hover:text-corporate-blue transition-colors">
                  {category.title}
                </h3>
                <div className="text-corporate-blue font-medium mb-3">
                  {category.count}
                </div>
                <p className="text-corporate-gray leading-relaxed">
                  {category.description}
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
            Start Your Next Project With Us
          </h2>
          <p className="text-xl mb-8 text-gray-100 leading-relaxed">
            Ready to join our portfolio of successful projects? Let's discuss how we can bring 
            your infrastructure vision to life with our proven expertise and commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-corporate-blue px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              Discuss Your Project
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-corporate-blue transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;