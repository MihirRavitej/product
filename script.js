// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to current link
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.timeline-item, .skill-category, .education-card, .achievement-card, .highlight-item');
    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });

    // Animated counter for stats
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200; // The lower the slower

        counters.forEach(counter => {
            const updateCount = () => {
                const target = counter.getAttribute('data-target') || counter.innerText;
                const count = +counter.innerText.replace(/[^\d.-]/g, '');
                
                // Extract number from target
                const targetNum = +target.replace(/[^\d.-]/g, '');
                const inc = targetNum / speed;

                if (count < targetNum) {
                    counter.innerText = target.replace(/[\d.-]+/, Math.ceil(count + inc));
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };

            // Set data-target if not exists
            if (!counter.getAttribute('data-target')) {
                counter.setAttribute('data-target', counter.innerText);
            }

            // Start animation when element comes into view
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        counter.innerText = counter.innerText.replace(/[\d.-]+/, '0');
                        updateCount();
                        counterObserver.unobserve(entry.target);
                    }
                });
            });

            counterObserver.observe(counter);
        });
    }

    // Initialize counter animation
    animateCounters();

    // Parallax effect for hero shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Typing effect for hero title (optional)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Initialize typing effect (uncomment if desired)
    // const heroTitle = document.querySelector('.hero-title');
    // if (heroTitle) {
    //     const originalText = heroTitle.textContent;
    //     setTimeout(() => typeWriter(heroTitle, originalText, 50), 500);
    // }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate hero elements on load
        const heroElements = document.querySelectorAll('.hero-text > *');
        heroElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.animation = `fadeInUp 0.8s ease forwards ${index * 0.1}s`;
        });
    });

    // Projects Section Functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    const themeToggle = document.getElementById('theme-toggle');

    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Save theme preference
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Load saved theme preference
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
    }

    // Tab switching functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Project card click functionality
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    // Modal close functionality
    modalClose.addEventListener('click', closeProjectModal);
    modalOverlay.addEventListener('click', closeProjectModal);

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });

    function openProjectModal(projectId) {
        const projectData = getProjectData(projectId);
        if (projectData) {
            renderProjectDetail(projectData);
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeProjectModal() {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function getProjectData(projectId) {
        const projects = {
            'ai-talent': {
                title: 'AI Talent Analytics Platform',
                subtitle: 'ADP Experience • Product Strategy & AI/ML',
                overview: 'Led the development of a comprehensive AI-powered talent analytics platform that revolutionized how organizations approach talent acquisition and retention. The platform leveraged advanced machine learning algorithms to predict employee success, identify flight risks, and optimize hiring decisions.',
                challenge: 'Organizations were struggling with high turnover rates and inefficient hiring processes. Traditional HR analytics provided limited insights, and there was no unified platform to predict talent outcomes or identify retention risks early.',
                solution: 'Designed and implemented a machine learning platform that analyzed multiple data sources including performance reviews, engagement surveys, career progression patterns, and external market data. Built predictive models for hiring success, retention risk, and career path optimization.',
                results: 'Generated $2.3M in revenue impact through improved hiring efficiency and reduced turnover. Achieved 85% accuracy in predicting employee success and 78% accuracy in identifying flight risks. Reduced time-to-hire by 40% and improved employee retention by 25%.',
                technologies: ['Python', 'TensorFlow', 'AWS SageMaker', 'PostgreSQL', 'React', 'D3.js', 'Apache Kafka', 'Docker'],
                duration: '18 months',
                team: '12 engineers',
                impact: '$2.3M revenue',
                users: '50+ enterprises'
            },
            'payroll-modern': {
                title: 'Global Payroll Modernization',
                subtitle: 'ADP Experience • Cloud Migration & API Design',
                overview: 'Spearheaded the modernization of legacy payroll systems across 40+ countries, transitioning from monolithic architecture to cloud-native microservices. This initiative involved redesigning core payroll processing engines and implementing new API frameworks.',
                challenge: 'Legacy payroll systems were causing significant operational overhead, with different implementations across countries leading to inconsistent user experiences and high maintenance costs. The systems couldn\'t scale to meet growing customer demands.',
                solution: 'Architected a unified cloud-native platform using microservices architecture. Implemented country-specific compliance modules while maintaining a consistent core engine. Designed RESTful APIs for seamless integration with third-party systems.',
                results: 'Successfully migrated 40+ country payroll systems to the cloud, reducing operational costs by 35%. Improved system reliability to 99.9% uptime and reduced processing time by 50%. Enabled rapid expansion into 8 new markets.',
                technologies: ['Java', 'Spring Boot', 'AWS', 'Kubernetes', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Terraform'],
                duration: '24 months',
                team: '25 engineers',
                impact: '40+ countries',
                users: '2M+ employees'
            },
            'employee-exp': {
                title: 'Employee Experience App',
                subtitle: 'ADP Experience • Mobile Development & UX Design',
                overview: 'Built a comprehensive mobile application that transformed how employees interact with HR services. The app provided self-service capabilities, real-time notifications, and personalized experiences based on employee roles and preferences.',
                challenge: 'Employees were frustrated with complex HR processes and lack of mobile access to essential services. The existing web portal had poor mobile experience and limited functionality, leading to high support ticket volumes.',
                solution: 'Developed native iOS and Android applications with intuitive UX design. Implemented features like pay stub access, time-off requests, benefits enrollment, and push notifications. Created personalized dashboards based on user roles.',
                results: 'Achieved 85% employee adoption rate within 6 months. Reduced HR support tickets by 60% and improved employee satisfaction scores by 40%. The app received 4.8/5 rating in app stores.',
                technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'AWS Lambda', 'GraphQL', 'Jest', 'Figma'],
                duration: '12 months',
                team: '8 engineers',
                impact: '85% adoption',
                users: '500K+ employees'
            },
            'speech-platform': {
                title: 'Speech-to-Text Platform',
                subtitle: 'Cisco Cloud Engineer • AI/ML & Product Ownership',
                overview: 'Served as Product Owner for an AI-powered speech-to-text platform that transformed customer service operations. The platform processed real-time voice data and provided actionable insights for contact centers.',
                challenge: 'Contact centers struggled with manual call analysis and quality assurance. There was no scalable way to analyze customer sentiment, agent performance, or identify training opportunities from voice interactions.',
                solution: 'Built a comprehensive platform that combined speech recognition, natural language processing, and sentiment analysis. Implemented real-time transcription with speaker identification and emotion detection.',
                results: 'Captured $80K ARR and secured 4 Fortune 100 pilot programs. Improved call center efficiency by 30% and reduced quality assurance time by 70%. Platform processed over 1M minutes of audio daily.',
                technologies: ['Python', 'TensorFlow', 'AWS Transcribe', 'Elasticsearch', 'React', 'WebRTC', 'Docker', 'Kubernetes'],
                duration: '15 months',
                team: '10 engineers',
                impact: '$80K ARR',
                users: '4 Fortune 100'
            },
            'global-ai': {
                title: 'Global AI Suite Rollout',
                subtitle: 'Cisco Cloud Engineer • Global Scale & High Availability',
                overview: 'Led the global rollout of AI services across 9 new regions, ensuring high availability and performance for 50K concurrent users. This involved complex infrastructure planning and cross-regional coordination.',
                challenge: 'Scaling AI services globally while maintaining 99.99% availability presented significant challenges including latency optimization, data sovereignty compliance, and regional infrastructure variations.',
                solution: 'Implemented multi-region deployment strategy with intelligent load balancing and edge computing. Built automated failover systems and comprehensive monitoring across all regions.',
                results: 'Achieved 99.99% availability for 50K concurrent users across 9 regions. Added $0.5M in revenue and reduced integration time by 2+ months. Zero major outages during rollout period.',
                technologies: ['AWS', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'Redis', 'PostgreSQL', 'CDN'],
                duration: '18 months',
                team: '15 engineers',
                impact: '99.99% uptime',
                users: '50K concurrent'
            },
            'topic-modeling': {
                title: 'Topic-Modeling Analytics Engine',
                subtitle: 'Cisco Cloud Engineer • NLP & Data Pipeline',
                overview: 'Engineered a sophisticated topic-modeling and analytics engine that automatically processes and clusters 0.4M+ daily call transcripts, providing actionable insights for enterprise customers.',
                challenge: 'Enterprise customers were drowning in unstructured call data with no efficient way to identify trends, issues, or opportunities. Manual analysis was time-consuming and inconsistent.',
                solution: 'Built an automated pipeline using advanced NLP techniques including topic modeling, sentiment analysis, and trend detection. Implemented real-time processing with scalable architecture.',
                results: 'Generated $1.7M pipeline value and improved customer NPS by 35 points across 13 enterprises. Reduced analysis time from weeks to minutes and identified 40% more actionable insights.',
                technologies: ['Python', 'Apache Spark', 'Kafka', 'Elasticsearch', 'scikit-learn', 'NLTK', 'Docker', 'AWS'],
                duration: '20 months',
                team: '12 engineers',
                impact: '$1.7M pipeline',
                users: '0.4M+ transcripts'
            },
            'agent-answers': {
                title: 'Agent-Answers Platform',
                subtitle: 'Cisco Cloud Engineer • AI Assistant & Enterprise Solutions',
                overview: 'Developed an AI-powered agent assistance platform that provides real-time suggestions and answers to customer service representatives, significantly improving customer satisfaction and agent productivity.',
                challenge: 'Customer service agents struggled with complex product knowledge and inconsistent responses. Training new agents was time-consuming, and customer satisfaction varied significantly across different agents.',
                solution: 'Created an intelligent assistant that analyzes customer queries in real-time and provides agents with relevant answers, suggested responses, and contextual information. Implemented machine learning to improve suggestions over time.',
                results: 'Lifted NPS by 35 points across 13 enterprises. Reduced average call handling time by 25% and improved first-call resolution by 40%. Agent satisfaction scores increased by 30%.',
                technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB', 'WebSocket', 'AWS Lambda', 'Docker'],
                duration: '16 months',
                team: '14 engineers',
                impact: '+35 NPS points',
                users: '13 enterprises'
            },
            'vienna-voip': {
                title: 'Vienna VoIP Recovery Project',
                subtitle: 'Technical Consulting • Crisis Management & Government Solutions',
                overview: 'Led a critical recovery project for the Magistrate of Vienna\'s $5M secure VoIP implementation serving 50K+ employees. The project was at risk of complete rollback due to technical and operational challenges.',
                challenge: 'The VoIP deployment was failing due to integration issues, security concerns, and user adoption problems. The government was considering a complete rollback, which would have resulted in significant financial and reputational damage.',
                solution: 'Conducted comprehensive system analysis, identified root causes, and implemented targeted fixes. Coordinated between client stakeholders and product teams to address technical issues while managing change management.',
                results: 'Successfully averted project rollback, saving $5M investment. Achieved 95% user adoption and met all security compliance requirements. Project became a reference implementation for other government deployments.',
                technologies: ['Cisco CUCM', 'SIP', 'SRTP', 'Active Directory', 'VMware', 'Windows Server', 'PowerShell', 'Wireshark'],
                duration: '8 months',
                team: '6 specialists',
                impact: '$5M saved',
                users: '50K+ employees'
            },
            'customer-pulse': {
                title: 'Customer Pulse Dashboard',
                subtitle: 'Technical Consulting • NLP & Customer Experience',
                overview: 'Built an innovative NLP-driven dashboard that analyzed customer feedback across multiple channels to provide real-time insights into customer sentiment and satisfaction trends.',
                challenge: 'Customer feedback was scattered across multiple channels with no unified view. Manual analysis was slow and subjective, making it difficult to identify trends or take proactive action on customer issues.',
                solution: 'Developed a comprehensive dashboard that aggregated data from surveys, support tickets, social media, and call transcripts. Implemented sentiment analysis and trend detection algorithms.',
                results: 'Reduced customer escalations by 18% and improved response time to customer issues by 50%. Earned Cisco "Best of We" CX award as the sole annual winner. Dashboard became standard tool across organization.',
                technologies: ['Python', 'NLTK', 'D3.js', 'PostgreSQL', 'Apache Kafka', 'React', 'Docker', 'AWS'],
                duration: '10 months',
                team: '5 engineers',
                impact: '-18% escalations',
                users: 'CX Award Winner'
            },
            'amman-centre': {
                title: 'Amman CX Centre Build-out',
                subtitle: 'Technical Consulting • Team Building & Revenue Growth',
                overview: 'Founded and built the Amman Customer Experience centre from the ground up, establishing a world-class facility that became a key revenue driver for the organization.',
                challenge: 'The organization needed to expand customer support capabilities in the EMEA region while managing costs. There was no existing infrastructure or team in the region.',
                solution: 'Established complete CX centre including facility setup, team hiring, training programs, and operational processes. Developed comprehensive onboarding and certification programs for new consultants.',
                results: 'Successfully up-skilled 150+ consultants and hired 50 graduates. Lifted customer acquisition by 14% and added $50M ARR. Centre became a model for other regional expansions.',
                technologies: ['Cisco Contact Center', 'Salesforce', 'Tableau', 'Zoom', 'Slack', 'Jira', 'Confluence', 'AWS'],
                duration: '24 months',
                team: '150+ consultants',
                impact: '$50M ARR',
                users: '14% acquisition lift'
            },
            'security-framework': {
                title: 'Enterprise Security Framework',
                subtitle: 'Technical Consulting • Security & Compliance',
                overview: 'Developed a comprehensive security framework for Fortune 500 enterprise deployments, ensuring compliance with industry standards while maintaining operational efficiency.',
                challenge: 'Enterprise customers required robust security frameworks that met various compliance requirements (SOX, HIPAA, PCI-DSS) while maintaining system performance and user experience.',
                solution: 'Created modular security framework with configurable compliance modules. Implemented zero-trust architecture principles with comprehensive monitoring and audit capabilities.',
                results: 'Achieved 100% compliance across all major standards and reduced security incident response time by 60%. Framework was adopted as standard for all Fortune 500 deployments.',
                technologies: ['Cisco ISE', 'Splunk', 'Ansible', 'Terraform', 'Vault', 'LDAP', 'PKI', 'SIEM'],
                duration: '14 months',
                team: '8 specialists',
                impact: '100% compliance',
                users: 'Fortune 500'
            },
            'voip-analyzer': {
                title: 'VOIP Traffic Analyzer (VTA)',
                subtitle: 'Technical Consulting • Real-time Analytics & Docker Architecture',
                overview: 'Developed a comprehensive Docker-based VOIP Traffic Analyzer that empowers network and voice operations teams to proactively monitor, analyze, and optimize VOIP traffic quality. The solution features a modular architecture with real-time data ingestion via NETCONF-YANG and protocol-specific collectors.',
                challenge: 'Network operations teams lacked real-time visibility into VOIP call quality and performance metrics. Existing solutions were monolithic, difficult to scale, and provided limited protocol support, making it challenging to identify and resolve voice quality issues quickly.',
                solution: 'Architected a modular, containerized platform using Docker with microservices for each protocol (SIP, RTP/RTCP). Implemented NETCONF-YANG for standardized data normalization, real-time analytics engine, and comprehensive alerting system with role-based access and multi-tenant support.',
                results: 'Achieved >99.9% system uptime with alert latency under 5 seconds. Reduced mean time to resolution (MTTR) for VOIP issues significantly. Enhanced operational visibility and responsiveness for network teams, leading to improved user satisfaction and decreased support tickets.',
                technologies: ['Docker', 'NETCONF-YANG', 'SIP', 'RTP/RTCP', 'Time-series DB', 'Microservices', 'REST APIs', 'RBAC'],
                duration: '5 weeks',
                team: '2 engineers',
                impact: '99.9% uptime',
                users: 'Multi-tenant'
            }
        };
        
        return projects[projectId];
    }

    function renderProjectDetail(project) {
        const content = `
            <div class="project-detail-header">
                <h1 class="project-detail-title">${project.title}</h1>
                <p class="project-detail-subtitle">${project.subtitle}</p>
            </div>
            
            <div class="project-detail-body">
                <div class="project-main-content">
                    <div class="project-section">
                        <h4>📋 Project Overview</h4>
                        <p>${project.overview}</p>
                    </div>
                    
                    <div class="project-section">
                        <h4>🎯 Challenge</h4>
                        <p>${project.challenge}</p>
                    </div>
                    
                    <div class="project-section">
                        <h4>💡 Solution</h4>
                        <p>${project.solution}</p>
                    </div>
                    
                    <div class="project-section">
                        <h4>📈 Results & Impact</h4>
                        <p>${project.results}</p>
                    </div>
                </div>
                
                <div class="project-sidebar">
                    <div class="sidebar-section">
                        <h5>Quick Stats</h5>
                        <div class="quick-stats">
                            <div class="quick-stat">
                                <span class="quick-stat-label">Duration</span>
                                <span class="quick-stat-value">${project.duration}</span>
                            </div>
                            <div class="quick-stat">
                                <span class="quick-stat-label">Team Size</span>
                                <span class="quick-stat-value">${project.team}</span>
                            </div>
                            <div class="quick-stat">
                                <span class="quick-stat-label">Key Impact</span>
                                <span class="quick-stat-value">${project.impact}</span>
                            </div>
                            <div class="quick-stat">
                                <span class="quick-stat-label">Users/Reach</span>
                                <span class="quick-stat-value">${project.users}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="sidebar-section">
                        <h5>Technologies Used</h5>
                        <div class="tech-stack">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.querySelector('.project-detail-content').innerHTML = content;
    }

    // Contact form handling (if you add a form later)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
        });
    }

    // Add click tracking for analytics (optional)
    document.addEventListener('click', function(e) {
        if (e.target.matches('.btn') || e.target.closest('.btn')) {
            const button = e.target.matches('.btn') ? e.target : e.target.closest('.btn');
            console.log('Button clicked:', button.textContent.trim());
            // Add your analytics tracking here
        }
    });

    // Smooth reveal animation for sections
    const revealSections = document.querySelectorAll('section');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.15 });

    revealSections.forEach(section => {
        revealObserver.observe(section);
    });
});

// Add CSS for fade in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .loaded .hero-text > * {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    section:first-of-type {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);