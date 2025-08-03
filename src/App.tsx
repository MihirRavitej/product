import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Download, Award, TrendingUp, Users, Zap, ArrowLeft, Calendar, Target, BarChart3, Code, Database, Cloud, Brain, Shield, Smartphone } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeTab, setActiveTab] = useState('adp');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'achievements', 'projects', 'contact'];
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

  const projects = {
    adp: [
      {
        id: 1,
        title: "AI-Powered Talent Analytics Platform",
        subtitle: "Product Strategy & Development",
        description: "Led product development for next-generation talent analytics platform leveraging machine learning to predict employee performance and retention.",
        image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["Product Strategy", "AI/ML", "Analytics", "User Research"],
        duration: "8 months",
        impact: "$2.3M ARR potential",
        details: {
          overview: "Spearheaded the development of an AI-powered talent analytics platform that revolutionized how enterprises understand and optimize their workforce. The platform combines predictive analytics with intuitive visualizations to provide actionable insights for HR leaders.",
          challenges: [
            "Complex data integration from multiple HR systems",
            "Ensuring AI model fairness and bias mitigation",
            "Balancing powerful analytics with user-friendly interface",
            "Meeting strict data privacy and compliance requirements"
          ],
          solutions: [
            "Implemented unified data pipeline architecture supporting 15+ HR systems",
            "Developed comprehensive bias detection and mitigation framework",
            "Created progressive disclosure UI pattern for complex analytics",
            "Built privacy-by-design architecture with end-to-end encryption"
          ],
          results: [
            "Achieved 94% user satisfaction score in beta testing",
            "Reduced time-to-insight from weeks to minutes",
            "Generated $2.3M in projected ARR within first year",
            "Secured partnerships with 3 Fortune 500 companies"
          ],
          technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS", "Docker"]
        }
      },
      {
        id: 2,
        title: "Global Payroll Modernization",
        subtitle: "Digital Transformation Initiative",
        description: "Orchestrated complete overhaul of legacy payroll systems across 40+ countries, improving processing efficiency by 60%.",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["Digital Transformation", "Global Operations", "Process Optimization"],
        duration: "12 months",
        impact: "60% efficiency gain",
        details: {
          overview: "Led the comprehensive modernization of ADP's global payroll infrastructure, replacing legacy systems with cloud-native solutions to serve millions of employees across 40+ countries.",
          challenges: [
            "Managing complex regulatory requirements across multiple jurisdictions",
            "Ensuring zero downtime during critical payroll periods",
            "Coordinating with distributed teams across different time zones",
            "Migrating sensitive payroll data securely"
          ],
          solutions: [
            "Developed phased migration strategy with comprehensive rollback plans",
            "Implemented blue-green deployment architecture for zero-downtime updates",
            "Established 24/7 global support model with regional expertise",
            "Created automated data validation and reconciliation systems"
          ],
          results: [
            "Achieved 60% improvement in payroll processing efficiency",
            "Reduced system downtime by 95%",
            "Improved compliance reporting accuracy to 99.8%",
            "Saved $4.2M annually in operational costs"
          ],
          technologies: ["Microservices", "Kubernetes", "Azure", "MongoDB", "Apache Kafka", "React"]
        }
      },
      {
        id: 3,
        title: "Employee Experience Mobile App",
        subtitle: "Mobile-First Product Development",
        description: "Designed and launched mobile application serving 2M+ employees with self-service HR capabilities and personalized insights.",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["Mobile Development", "UX Design", "Employee Experience"],
        duration: "10 months",
        impact: "2M+ active users",
        details: {
          overview: "Conceptualized and delivered a comprehensive mobile application that transformed how employees interact with HR services, providing instant access to pay information, benefits, and career development tools.",
          challenges: [
            "Designing for diverse user base with varying technical literacy",
            "Ensuring consistent experience across iOS and Android platforms",
            "Integrating with complex backend HR systems",
            "Meeting accessibility standards for inclusive design"
          ],
          solutions: [
            "Conducted extensive user research across 12 demographic segments",
            "Implemented React Native for consistent cross-platform experience",
            "Built robust API gateway for seamless backend integration",
            "Achieved WCAG 2.1 AA compliance for accessibility"
          ],
          results: [
            "Reached 2M+ active users within 6 months of launch",
            "Achieved 4.7/5 app store rating",
            "Reduced HR service desk tickets by 40%",
            "Won 'Best Employee Experience App' industry award"
          ],
          technologies: ["React Native", "Node.js", "GraphQL", "Redis", "AWS Lambda", "Firebase"]
        }
      }
    ],
    cisco_cloud: [
      {
        id: 4,
        title: "Speech-to-Text AI Platform",
        subtitle: "AI Product Development",
        description: "Product Owner for enterprise AI platform that captured $80K ARR and secured 4 Fortune 100 pilot programs through persona-tuned deep learning models.",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["AI/ML", "Product Management", "Enterprise Sales"],
        duration: "18 months",
        impact: "$80K ARR + 4 F100 pilots",
        details: {
          overview: "Led product development for Cisco's flagship speech-to-text AI platform, transforming how enterprises handle voice data through advanced machine learning and natural language processing capabilities.",
          challenges: [
            "Achieving high accuracy across diverse accents and languages",
            "Real-time processing requirements for live conversations",
            "Scaling infrastructure to handle enterprise-level traffic",
            "Ensuring data privacy and security compliance"
          ],
          solutions: [
            "Developed persona-specific ML models for different user segments",
            "Implemented edge computing architecture for low-latency processing",
            "Built auto-scaling Kubernetes infrastructure on multi-cloud",
            "Created comprehensive data governance framework"
          ],
          results: [
            "Achieved 95% accuracy rate across 12 languages",
            "Processed 0.4M+ daily call transcripts",
            "Generated $80K ARR in first year",
            "Secured 4 Fortune 100 pilot programs"
          ],
          technologies: ["TensorFlow", "PyTorch", "Kubernetes", "Apache Kafka", "Elasticsearch", "React"]
        }
      },
      {
        id: 5,
        title: "Global AI Suite Rollout",
        subtitle: "Platform Scaling & Operations",
        description: "Achieved 99.99% availability for 50K concurrent users while scaling to 9 new regions, adding $0.5M revenue and reducing integration time by 2+ months.",
        image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["Platform Engineering", "Global Scaling", "DevOps"],
        duration: "15 months",
        impact: "99.99% uptime, $0.5M revenue",
        details: {
          overview: "Orchestrated the global expansion of Cisco's AI suite across 9 new regions, ensuring high availability and performance while maintaining strict SLA requirements for enterprise customers.",
          challenges: [
            "Managing complex multi-region deployments",
            "Ensuring consistent performance across global infrastructure",
            "Coordinating with regional compliance and legal teams",
            "Minimizing customer impact during expansion"
          ],
          solutions: [
            "Implemented infrastructure-as-code for consistent deployments",
            "Built comprehensive monitoring and alerting systems",
            "Established regional data residency compliance framework",
            "Created automated rollback and disaster recovery procedures"
          ],
          results: [
            "Maintained 99.99% platform availability",
            "Supported 50K+ concurrent users globally",
            "Reduced customer integration time by 2+ months",
            "Generated additional $0.5M in regional revenue"
          ],
          technologies: ["AWS", "Terraform", "Prometheus", "Grafana", "Jenkins", "Docker"]
        }
      },
      {
        id: 6,
        title: "Topic-Modeling Analytics Engine",
        subtitle: "Data Analytics & NLP",
        description: "Engineered $1.7M pipeline that auto-clusters 0.4M+ daily call transcripts, lifting NPS by 35 points across 13 enterprises.",
        image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["NLP", "Analytics", "Data Engineering"],
        duration: "12 months",
        impact: "$1.7M pipeline, +35 NPS",
        details: {
          overview: "Developed an advanced topic modeling and analytics engine that automatically processes and categorizes massive volumes of call transcripts, providing actionable insights for customer experience improvement.",
          challenges: [
            "Processing 0.4M+ daily transcripts in real-time",
            "Extracting meaningful insights from unstructured voice data",
            "Scaling ML models for enterprise-level throughput",
            "Providing intuitive visualizations for complex data"
          ],
          solutions: [
            "Built distributed processing pipeline using Apache Spark",
            "Implemented advanced NLP models for topic extraction and sentiment analysis",
            "Created auto-scaling ML inference infrastructure",
            "Designed interactive dashboards with drill-down capabilities"
          ],
          results: [
            "Generated $1.7M in sales pipeline",
            "Improved customer NPS by 35 points on average",
            "Processed 0.4M+ daily transcripts with 99.5% accuracy",
            "Deployed across 13 enterprise customers"
          ],
          technologies: ["Apache Spark", "scikit-learn", "NLTK", "D3.js", "PostgreSQL", "Redis"]
        }
      },
      {
        id: 7,
        title: "Agent-Answers Knowledge Platform",
        subtitle: "Knowledge Management System",
        description: "Built intelligent knowledge platform that reduced agent response time by 45% and improved first-call resolution rates across customer support teams.",
        image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["Knowledge Management", "AI Search", "Customer Support"],
        duration: "14 months",
        impact: "45% faster responses",
        details: {
          overview: "Created an AI-powered knowledge management platform that intelligently surfaces relevant information to customer support agents, dramatically improving response times and resolution rates.",
          challenges: [
            "Organizing vast amounts of unstructured knowledge content",
            "Providing contextually relevant search results",
            "Integrating with existing support workflows",
            "Training AI models on domain-specific terminology"
          ],
          solutions: [
            "Implemented semantic search using transformer models",
            "Built context-aware recommendation engine",
            "Created seamless integration with major CRM platforms",
            "Developed continuous learning system for model improvement"
          ],
          results: [
            "Reduced average agent response time by 45%",
            "Improved first-call resolution rate by 32%",
            "Achieved 92% agent satisfaction with the platform",
            "Deployed across 25+ customer support teams"
          ],
          technologies: ["Elasticsearch", "BERT", "FastAPI", "Vue.js", "MongoDB", "Docker"]
        }
      }
    ],
    cisco_consulting: [
      {
        id: 8,
        title: "Vienna VoIP Infrastructure Recovery",
        subtitle: "Mission-Critical System Recovery",
        description: "Averted rollback of $5M secure VoIP project with Magistrate of Vienna's office (50K+ employees) by leading critical client and product team coordination.",
        image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["Crisis Management", "VoIP", "Enterprise Solutions"],
        duration: "3 months",
        impact: "$5M project saved",
        details: {
          overview: "Led critical recovery efforts for a failing $5M VoIP infrastructure deployment at Vienna's Magistrate office, coordinating between multiple stakeholders to prevent complete project rollback.",
          challenges: [
            "System failures affecting 50K+ government employees",
            "Tight deadline pressure with potential contract cancellation",
            "Complex integration with legacy government systems",
            "Coordinating across multiple vendor teams and government departments"
          ],
          solutions: [
            "Established war room with 24/7 monitoring and rapid response",
            "Implemented phased recovery plan with incremental testing",
            "Created comprehensive communication plan for all stakeholders",
            "Developed custom integration adapters for legacy system compatibility"
          ],
          results: [
            "Successfully prevented $5M project cancellation",
            "Restored full service to 50K+ employees within deadline",
            "Achieved 99.9% system reliability post-recovery",
            "Strengthened client relationship leading to additional contracts"
          ],
          technologies: ["Cisco Unified Communications", "SIP", "LDAP", "Oracle Database", "VMware", "Linux"]
        }
      },
      {
        id: 9,
        title: "Customer Pulse NLP Dashboard",
        subtitle: "Customer Experience Analytics",
        description: "Built NLP-driven dashboard reducing customer escalations by 18%, earning Cisco 'Best of We' CX award as the sole annual winner.",
        image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["NLP", "Customer Experience", "Analytics Dashboard"],
        duration: "8 months",
        impact: "18% reduction in escalations",
        details: {
          overview: "Developed an innovative NLP-powered dashboard that analyzes customer feedback and support interactions to predict and prevent escalations, significantly improving customer satisfaction.",
          challenges: [
            "Processing diverse customer feedback from multiple channels",
            "Identifying early warning signals for potential escalations",
            "Creating actionable insights for support teams",
            "Integrating with existing customer support workflows"
          ],
          solutions: [
            "Built multi-channel data ingestion pipeline",
            "Developed sentiment analysis and escalation prediction models",
            "Created real-time alerting system for at-risk customers",
            "Designed intuitive dashboard with drill-down analytics"
          ],
          results: [
            "Reduced customer escalations by 18%",
            "Won Cisco 'Best of We' Customer Experience award",
            "Improved customer satisfaction scores by 22%",
            "Adopted by 15+ customer support teams globally"
          ],
          technologies: ["Python", "NLTK", "Tableau", "Apache Kafka", "MySQL", "REST APIs"]
        }
      },
      {
        id: 10,
        title: "Amman CX Centre Establishment",
        subtitle: "Global Operations Expansion",
        description: "Founded Amman customer experience center, up-skilling 150+ consultants and hiring 50 graduates, lifting customer acquisition 14% and adding $50M ARR.",
        image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["Operations", "Team Building", "Global Expansion"],
        duration: "24 months",
        impact: "$50M ARR, 14% acquisition lift",
        details: {
          overview: "Spearheaded the establishment of Cisco's customer experience center in Amman, Jordan, building a world-class team and operations from the ground up to serve EMEA customers.",
          challenges: [
            "Building operations in a new geographic market",
            "Recruiting and training large technical team quickly",
            "Establishing cultural alignment with global Cisco standards",
            "Meeting aggressive customer acquisition targets"
          ],
          solutions: [
            "Developed comprehensive local recruitment and training programs",
            "Created cultural integration initiatives and mentorship programs",
            "Established partnerships with local universities for graduate hiring",
            "Implemented performance management and career development frameworks"
          ],
          results: [
            "Successfully hired and trained 200+ team members",
            "Achieved 14% improvement in customer acquisition rates",
            "Generated $50M in additional annual recurring revenue",
            "Established Amman as a key strategic hub for EMEA operations"
          ],
          technologies: ["Cisco Technologies", "CRM Systems", "Training Platforms", "Analytics Tools"]
        }
      },
      {
        id: 11,
        title: "Enterprise Security Framework",
        subtitle: "Cybersecurity Infrastructure",
        description: "Designed and implemented comprehensive security framework for Fortune 500 clients, achieving 99.7% threat detection rate and zero security breaches.",
        image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["Cybersecurity", "Enterprise Architecture", "Risk Management"],
        duration: "16 months",
        impact: "99.7% threat detection",
        details: {
          overview: "Architected and deployed enterprise-grade security framework for multiple Fortune 500 clients, providing comprehensive protection against evolving cyber threats while maintaining operational efficiency.",
          challenges: [
            "Addressing diverse threat vectors across different industries",
            "Balancing security requirements with business operations",
            "Integrating with existing enterprise infrastructure",
            "Ensuring compliance with multiple regulatory frameworks"
          ],
          solutions: [
            "Implemented layered security architecture with AI-powered threat detection",
            "Created industry-specific security policies and procedures",
            "Built seamless integration adapters for legacy systems",
            "Established comprehensive compliance monitoring and reporting"
          ],
          results: [
            "Achieved 99.7% threat detection and prevention rate",
            "Maintained zero security breaches across all client deployments",
            "Reduced security incident response time by 65%",
            "Achieved full compliance with SOC 2, ISO 27001, and industry regulations"
          ],
          technologies: ["Cisco Security", "SIEM", "AI/ML Security", "Zero Trust Architecture", "Cloud Security"]
        }
      }
    ]
  };

  const tabConfig = {
    adp: { label: "ADP Experience", count: 3, color: "blue" },
    cisco_cloud: { label: "Cisco Cloud Engineer", count: 4, color: "green" },
    cisco_consulting: { label: "Technical Consulting", count: 4, color: "purple" }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        hover: "hover:bg-blue-100",
        active: "bg-blue-600 text-white"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200", 
        text: "text-green-600",
        hover: "hover:bg-green-100",
        active: "bg-green-600 text-white"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600", 
        hover: "hover:bg-purple-100",
        active: "bg-purple-600 text-white"
      }
    };
    return colors[color] || colors.blue;
  };

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Project Detail View */}
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Projects
              </button>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Project Details</span>
              </div>
            </div>

            {/* Project Hero */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="aspect-video w-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{selectedProject.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{selectedProject.subtitle}</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{selectedProject.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-blue-600" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold">{selectedProject.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="text-green-600" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Impact</p>
                      <p className="font-semibold">{selectedProject.impact}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="text-purple-600" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Technologies</p>
                      <p className="font-semibold">{selectedProject.details.technologies.length} tools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.details.overview}</p>
                </div>

                {/* Challenges */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Challenges</h2>
                  <div className="space-y-4">
                    {selectedProject.details.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Solutions Implemented</h2>
                  <div className="space-y-4">
                    {selectedProject.details.solutions.map((solution, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{solution}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Results & Impact</h2>
                  <div className="space-y-4">
                    {selectedProject.details.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                          ✓
                        </div>
                        <p className="text-gray-700">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Technologies */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Project Duration</p>
                      <p className="font-semibold text-gray-900">{selectedProject.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Business Impact</p>
                      <p className="font-semibold text-gray-900">{selectedProject.impact}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Key Technologies</p>
                      <p className="font-semibold text-gray-900">{selectedProject.details.technologies.slice(0, 3).join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
                {['home', 'about', 'experience', 'skills', 'achievements', 'projects', 'contact'].map((item) => (
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
              {['home', 'about', 'experience', 'skills', 'achievements', 'projects', 'contact'].map((item) => (
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

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my portfolio of impactful projects across product management, AI development, and technical consulting
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(tabConfig).map(([key, config]) => {
              const colors = getColorClasses(config.color);
              const isActive = activeTab === key;
              
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive 
                      ? colors.active 
                      : `${colors.bg} ${colors.text} ${colors.hover} border ${colors.border}`
                  }`}
                >
                  {config.label}
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    isActive ? 'bg-white/20' : 'bg-white'
                  }`}>
                    {config.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects[activeTab].map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{project.tags.length - 2} more
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">{project.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-gray-500">
                        <Calendar size={14} />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-blue-600 font-semibold">
                      <span>View Details</span>
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Project Portfolio Impact</h3>
              <p className="text-gray-600">Cumulative results across all featured projects</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$8.6M+</div>
                <div className="text-gray-600 text-sm">Total Revenue Impact</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2M+</div>
                <div className="text-gray-600 text-sm">Users Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-gray-600 text-sm">Average Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Enterprise Clients</div>
              </div>
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