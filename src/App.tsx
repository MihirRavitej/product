import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Download, Award, TrendingUp, Users, Zap } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MP
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'experience', 'skills', 'achievements', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {['home', 'about', 'experience', 'skills', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-800">MP</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mihir</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Product Manager & Cloud Solutions Architect
            </p>
            
            <p className="text-lg text-gray-500 mb-12 max-w-4xl mx-auto leading-relaxed">
              Seasoned product leader with 6+ years experience driving AI platform development and cloud solutions at scale. 
              Passionate about translating complex technical architectures into user-centered products that deliver measurable business impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">$1.7M+</div>
                <div className="text-gray-600">Revenue Pipeline</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-green-600 mb-2">99.99%</div>
                <div className="text-gray-600">Platform Availability</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
                <div className="text-gray-600">Concurrent Users</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                Get In Touch
              </button>
              <a
                href="https://www.linkedin.com/in/mihir-pamaraju/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a product management professional with a unique blend of technical depth and business acumen. 
                My journey began as a Technical Consulting Engineer at Cisco, where I developed expertise in cloud 
                architecture and DevSecOps practices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Over the past 3 years, I've evolved into a product leadership role, driving the development of 
                AI-powered platforms that serve Fortune 100 companies. I excel at bridging the gap between 
                technical complexity and user needs, creating products that are both innovative and practical.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Currently pursuing my Post Graduate Programme in Information Technology and Finance at the 
                Indian School of Business, I'm passionate about leveraging emerging technologies to solve 
                real-world business challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <Award className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Recognition</h3>
                </div>
                <p className="text-gray-600">
                  Cisco "Driving the Highest Level of Achievement" Award - 1 of 2 out of 700+ engineers
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <TrendingUp className="text-green-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Impact</h3>
                </div>
                <p className="text-gray-600">
                  Engineered solutions that captured $80K ARR and landed 4 Fortune 100 pilot programs
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <Zap className="text-purple-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
                </div>
                <p className="text-gray-600">
                  Built topic-modeling analytics platform processing 0.4M+ daily call transcripts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Cloud Engineer Role */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Cloud Engineer (Product Owner)</h3>
                  <p className="text-xl text-blue-600 font-semibold">Cisco</p>
                </div>
                <div className="text-gray-500 font-medium">Apr 2021 - Apr 2024</div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Speech-to-Text & Agent-Answers Platform</h4>
                  <p className="text-gray-600">
                    Product Owner for AI-powered platform that captured <strong className="text-blue-600">$80K ARR</strong> and landed <strong className="text-blue-600">4 Fortune 100 pilots</strong> by mapping 12+ user journeys into persona-tuned deep-learning models
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Global AI Suite Rollout</h4>
                  <p className="text-gray-600">
                    Achieved <strong className="text-green-600">99.99% availability</strong> for 50K concurrent users while scaling to <strong className="text-green-600">9 new regions</strong>, adding $0.5M revenue and reducing integration time by 2+ months
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Topic-Modeling & Call-Intent Analytics</h4>
                  <p className="text-gray-600">
                    Engineered <strong className="text-purple-600">$1.7M pipeline</strong> that auto-clusters 0.4M+ daily call transcripts, lifting NPS by <strong className="text-purple-600">35 points</strong> across 13 enterprises
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Consulting Engineer Role */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Technical Consulting Engineer</h3>
                  <p className="text-xl text-blue-600 font-semibold">Cisco</p>
                </div>
                <div className="text-gray-500 font-medium">Jul 2017 - Apr 2021</div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Mission-Critical VoIP Turnaround</h4>
                  <p className="text-gray-600">
                    Averted rollback of <strong className="text-red-600">$5M secure VoIP project</strong> with Magistrate of Vienna's office (50K+ employees) by leading client and product team interlock
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Customer Pulse Platform</h4>
                  <p className="text-gray-600">
                    Built NLP-driven dashboard reducing customer escalations by <strong className="text-yellow-600">18%</strong>, earned Cisco "Best of We" CX award (sole annual winner)
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Global CX Centre Build-out</h4>
                  <p className="text-gray-600">
                    Founded Amman CX centre, up-skilling 150+ consultants and hiring 50 graduates, lifting customer acquisition <strong className="text-indigo-600">14%</strong> and adding <strong className="text-indigo-600">$50M ARR</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Product Management</h3>
              <div className="space-y-2">
                {['Product Strategy', 'User Journey Mapping', 'A/B Experiments', 'Roadmap Planning', 'Cross-functional Leadership', 'Go-to-Market'].map((skill) => (
                  <span key={skill} className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-4">Technical Architecture</h3>
              <div className="space-y-2">
                {['System Design', 'Cloud Architecture', 'DevSecOps', 'CI/CD', 'AWS', 'Kubernetes'].map((skill) => (
                  <span key={skill} className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-4">AI & Data</h3>
              <div className="space-y-2">
                {['NLP & Speech', 'Machine Learning', 'Topic Modeling', 'Analytics', 'Python', 'Pandas'].map((skill) => (
                  <span key={skill} className="inline-block bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-orange-900 mb-4">Tools & Platforms</h3>
              <div className="space-y-2">
                {['Jira', 'Kanban', 'Tableau', 'Grafana', 'Kafka', 'NoSQL'].map((skill) => (
                  <span key={skill} className="inline-block bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          {/* Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Indian School of Business</h3>
              <p className="text-lg text-blue-600 font-semibold mb-2">Post Graduate Programme</p>
              <p className="text-gray-600 mb-4">Information Technology and Finance</p>
              <p className="text-gray-500">2025</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">SRM University</h3>
              <p className="text-lg text-blue-600 font-semibold mb-2">Bachelor of Technology</p>
              <p className="text-gray-600 mb-4">Computer Science & Engineering</p>
              <p className="text-gray-500">2017</p>
            </div>
          </div>

          {/* Notable Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Competition Excellence</h4>
              <p className="text-gray-600">
                National Finalist at Techminator @ IIM-B & MakeMyTrip Young Turks - top 0.4% of 4000+ teams for data-driven health & eco-travel solutions
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🏊‍♂️</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Sports Leadership</h4>
              <p className="text-gray-600">
                State-level swimmer with 15 medals (2 Gold, 3 Silver, 10 Bronze). Captained college squad and managed multi-city training logistics
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Community Impact</h4>
              <p className="text-gray-600">
                CareerVillages mentor & Lead By Design fellow - coached 700+ students on STEM careers and identified 200+ Gen-Z social-impact leaders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Ready to collaborate?</h3>
              <p className="text-xl mb-8 opacity-90">
                I'm always interested in discussing product opportunities, technical challenges, and innovative solutions. 
                Let's connect and explore how we can create impactful products together.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:mihir.ravitej@gmail.com" className="opacity-90 hover:opacity-100 transition-opacity">
                      mihir.ravitej@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+919962645146" className="opacity-90 hover:opacity-100 transition-opacity">
                      +91-99626-45146
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="opacity-90">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/mihir-pamaraju/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 mr-4 mb-4"
                >
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </a>

                <a
                  href="mailto:mihir.ravitej@gmail.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  <Mail className="mr-2" size={20} />
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Mihir Pamaraju. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;