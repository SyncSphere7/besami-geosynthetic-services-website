import { Users, Target, Heart, Award, CheckCircle2 } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Honesty",
      description: "We believe in transparent communication and ethical business practices in all our dealings."
    },
    {
      icon: CheckCircle2,
      title: "Reliability",
      description: "Our clients count on us to deliver projects on time, within budget, and to the highest standards."
    },
    {
      icon: Award,
      title: "Professionalism",
      description: "We maintain the highest standards of professionalism in every aspect of our work."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, continuously improving our processes and skills."
    }
  ];

  const team = [
    {
      name: "Ivan Mwebesa",
      position: "Managing Director",
      bio: "With over 15 years of experience in construction and engineering, Ivan leads our company with a vision for excellence and innovation. His expertise in geosynthetic applications and project management has been instrumental in our growth."
    },
    {
      name: "Engineering Team",
      position: "Senior Engineers",
      bio: "Our team of qualified engineers brings diverse expertise in civil engineering, geosynthetics, and construction management, ensuring every project meets international standards."
    },
    {
      name: "Operations Team",
      position: "Project Managers & Supervisors",
      bio: "Our operations team ensures seamless project execution, from initial planning through completion, maintaining our commitment to quality and safety."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            About Besami Geosynthetic Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Building the future with innovative engineering solutions and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <div className="bg-card p-8 rounded-xl shadow-card h-full">
                <Target size={48} className="text-corporate-blue mb-6" />
                <h2 className="text-3xl font-heading font-bold text-corporate-dark mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-corporate-gray leading-relaxed">
                  To be a leader in construction and engineering across the region and beyond, 
                  recognized for our innovative solutions, exceptional quality, and commitment 
                  to building sustainable infrastructure that serves communities for generations.
                </p>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-card p-8 rounded-xl shadow-card h-full">
                <Users size={48} className="text-corporate-blue mb-6" />
                <h2 className="text-3xl font-heading font-bold text-corporate-dark mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-corporate-gray leading-relaxed">
                  To deliver comprehensive construction and engineering solutions that exceed 
                  client expectations while maintaining the highest standards of safety, quality, 
                  and environmental responsibility. We are committed to building lasting 
                  relationships and contributing to regional development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-corporate-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-corporate-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-corporate-gray max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-corporate-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-corporate-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-corporate-dark mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-corporate-gray leading-relaxed">
                <p>
                  Besami Geosynthetic Services Ltd was founded with a vision to bring world-class 
                  engineering and construction solutions to the region. Our journey began with a 
                  simple belief: that every infrastructure project, no matter the size, deserves 
                  the highest level of expertise and attention to detail.
                </p>
                <p>
                  Over the years, we have grown from a small team of passionate engineers to a 
                  comprehensive construction and engineering company. Our expertise spans across 
                  geosynthetic applications, civil construction, and specialized services that 
                  meet the evolving needs of modern infrastructure development.
                </p>
                <p>
                  Today, we are proud to serve clients across various sectors including oil & gas, 
                  real estate, environmental projects, and public infrastructure. Our commitment 
                  to innovation, quality, and safety has earned us the trust of leading 
                  organizations and government agencies.
                </p>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="bg-gradient-primary p-8 rounded-xl text-white">
                <h3 className="text-2xl font-heading font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="mt-1 flex-shrink-0" />
                    <span>Decades of combined industry experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="mt-1 flex-shrink-0" />
                    <span>Comprehensive range of construction services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="mt-1 flex-shrink-0" />
                    <span>Commitment to global quality standards</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="mt-1 flex-shrink-0" />
                    <span>Strong focus on EHS practices</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 size={20} className="mt-1 flex-shrink-0" />
                    <span>Innovative solutions for complex challenges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-corporate-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-corporate-dark mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-corporate-gray max-w-2xl mx-auto">
              Meet the experienced professionals leading our company forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="bg-card p-8 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-corporate-dark mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-corporate-blue text-center mb-4 font-medium">
                  {member.position}
                </p>
                <p className="text-corporate-gray leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;