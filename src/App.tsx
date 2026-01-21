import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download, ExternalLink, Code, Brain, Target, Award, TrendingUp, Calendar, MapPin, Star, Eye, ArrowRight, Volume2, VolumeX, Lightbulb, Rocket, Database, Globe, Cpu, Layers,  Terminal, Heart, FileText } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  // const [isMuted, setIsMuted] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const roles = [
    'B.Tech Computer Science Student',
    'Full Stack Developer', 
    'AI/ML Enthusiast',
    'Problem Solver',
    'Deep Learning interested',
    'DSA Enthusiast',
    'backend Developer',
  ];

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading animation
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Real projects from your LinkedIn profile
  const projects = [
    {
      id:1,
      title:"AI Startup Idea Validator",
      description:"AI-Powered Startup Validator is a platform designed to help entrepreneurs validate their startup ideas efficiently. It combines an interactive AI agent, data-driven validation, and real-time chat to guide founders in improving their problem statements, solutions, target markets, teams, and business models. Users can submit their ideas and receive instant feedback and scoring, while experts provide deeper analysis, suggestions, and mentorship.Three-Tier Client-Server Architecture with AI Integration.software development lifecycle (SDLC) with an Agile/Iterative approach",
      image:"/sivimg.png",
      technologies:["React.js", "Node.js (Express)", "JWT", "MongoDB"," PineconeDB", "FastAPI"," LangChain"],
      category:"AI",
      duration:" Aug 2025 – Oct 2025 ",
      status:"Completed",
      github:"https://github.com/mad674/startupideavalidator",
      demo:"https://startupideavalidator.vercel.app/",
      highlights:["AI Agent for startup idea validation","Enhanced featues like experts real time chat, MCP chatbot, suggestions."],
      impact:"simplified startup idea validation",
      complexity:"Medium"
    },
    {
      id: 2,
      title: "Financial Question Answering System using FinQA",
      description: "Built a modular neuro-symbolic architecture for answering complex financial questions over tables, integrating a BERT-based retriever, LSTM-based program generator, and symbolic executor. Followed a structured ML lifecycle—including data preprocessing, modular training, component integration, and iterative evaluation—to ensure accuracy, interpretability, and scalability. The architecture combines neural networks for learning with symbolic reasoning for precise and interpretable decision-making, enabling robust and explainable QA over financial data. Developed end-to-end training and evaluation pipelines, and collaborated with domain experts to align model outputs with real-world financial reasoning and ensure practical applicability.",
      image: "/finimg.png",
      technologies: ["Python", "BERT", "LSTM", "Flutter", "Firebase", "Flask","AWS"],
      category: "AI/ML",
      duration: "Feb 2025 - Jun 2025",
      status: "Completed",
      github: "https://github.com/mad674/qa",
      demo: "https://financegptapp.netlify.app/",
      highlights: [
        "Neuro-symbolic architecture for financial QA",
        "BERT-based retriever, LSTM program generator",
        "End-to-end ML lifecycle, real-world evaluation"
      ],
      impact: "Improved interpretability and accuracy in financial QA",
      complexity: "medium"
    },
    {
      id: 3,
      title: "Jewelry Design Pattern Generation Project",
      description: "Developed a deep learning GAN-based system to generate creative and realistic jewelry design patterns. Leveraged generative adversarial networks to synthesize new designs, supporting the creative process for jewelry designers.",
      image: "/jewimg.png",
      technologies: ["Python", "GANs", "TensorFlow", "web scraping", "react","Flask","express","node.js","mongodb"],
      category: "Generative AI",
      duration: "2024",
      status: "Completed",
      github: "https://github.com/mad674/mlmodel",
      demo: "https://jewelrydesignpatterngen.netlify.app/",
      highlights: [
        "GAN-based pattern generation",
        "Enhanced creative workflow for designers"
      ],
      impact: "Enabled rapid prototyping of jewelry designs",
      complexity: "Medium"
    }
  ];

  const skills = [
    { name: "JavaScript/TypeScript", level: 72, category: "Frontend", icon: <Code />},
    { name: "Python", level: 88, category: "Backend", icon: <Terminal /> },
    { name: "React/Next.js", level: 70, category: "Frontend", icon: <Layers /> },
    { name: "Node.js", level: 75, category: "Backend", icon: <Database /> },
    { name: "Machine Learning", level: 72, category: "AI/ML", icon: <Brain /> },
    // { name: "Blockchain", level: 78, category: "Web3", icon: <Shield /> },
    // { name: "Cloud Computing", level: 80, category: "DevOps", icon: <Globe /> },
    // { name: "System Design", level: 85, category: "Architecture", icon: <Cpu /> }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Maintaining 8.5/10 CGPA in B.Tech Computer Science",
      icon: <Award className="text-yellow-400" size={24} />,
      metric: "8.5/10 CGPA"
    },
    {
      title: "Coding Champion",
      description: "Solved 200+ problems across multiple platforms",
      icon: <Code className="text-green-400" size={24} />,
      metric: "200+ Problems"
    }
  ];

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-purple-500 border-b-transparent rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Loading Portfolio</h2>
          <p className="text-gray-300">Preparing something amazing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <div
        className="fixed w-6 h-6 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isPlaying ? 1.5 : 1})`
        }}
      />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Madhav Meruva
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 capitalize relative group ${
                      activeSection === item ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
                    }`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                      activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                ))}
                <a
                  href="/madhavmeruva_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Resume
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 capitalize w-full text-left transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Profile Image with Holographic Effect */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto mb-6 relative flex items-center justify-center">
              <img
                src="/ma2.jpg"
                alt="Madhav Meruva profile"
                className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover shadow-lg bg-white"
                style={{ objectPosition: 'top center ', background: '#fff' }}
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-pulse">
              Madhav Meruva
            </h1>
            
            <div className="h-20 mb-8 flex items-center justify-center">
              <div className="relative">
                <p className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-500 transform">
                  {roles[currentRole]}
                </p>
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Generative AI Enthusiast | B.Tech CSE KMIT'27 | Python | DL Projects | Creative Problem Solver<br/>
            I’m an undergraduate B.Tech Computer Science student with a strong passion for Artificial Intelligence and Machine Learning. I’ve completed hands-on projects using Python, scikit-learn, and NumPy, and I'm continuously learning through online courses and self-initiated work. Currently, I'm seeking an internship where I can contribute, learn, and grow under real-world AI/ML challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <a
              href="https://www.linkedin.com/in/madhav-meruva-2b559b288/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { label: "Projects", value: "2+", icon: <Rocket /> },
              { label: "Technologies", value: "10+", icon: <Cpu /> },
              { label: "Problems Solved", value: "200+", icon: <Code /> },
              // { label: "Coffee Cups", value: "∞", icon: <Coffee /> }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-blue-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-cyan-500/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400 flex items-center">
                  <Lightbulb className="mr-3" size={28} />
                  Innovation Mindset
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate B.Tech Computer Science student who believes in the transformative power of technology. 
                  My journey is driven by curiosity and a desire to solve real-world problems through innovative solutions.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center">
                  <Target className="mr-3" size={28} />
                  Future Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I envision a future where AI and blockchain technologies converge to create more transparent, 
                  efficient, and equitable systems. My goal is to be at the forefront of this technological revolution.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <Brain className="text-blue-400" size={32} />,
                  title: "AI/ML Engineering",
                  description: "Building intelligent systems that learn and adapt",
                  progress: 70
                },
                {
                  icon: <Globe className="text-purple-400" size={32} />,
                  title: "Full Stack Development",
                  description: "End-to-end web application development",
                  progress: 70
                },
                {
                  icon: <Cpu className="text-cyan-400" size={32} />,
                  title: "System Architecture",
                  description: "Designing scalable and robust systems",
                  progress: 62
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-lg font-semibold ml-3 text-white">{item.title}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-400 mt-1">{item.progress}% Proficiency</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                  <div
                    className="relative overflow-hidden h-56 cursor-pointer"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent pointer-events-none"></div>
                    
                    {/* Floating badges */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600/80 text-white text-xs rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs rounded-full text-white backdrop-blur-sm ${
                        project.status === 'Completed' ? 'bg-green-600/80' : 'bg-orange-600/80'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Complexity indicator */}
                    <div className="absolute bottom-4 left-4 flex items-center space-x-1">
                      {[...Array(project.complexity === 'High' ? 3 : project.complexity === 'Medium' ? 2 : 1)].map((_, i) => (
                        <Star key={i} size={12} className="text-yellow-400 fill-current" />
                      ))}
                      <span className="text-xs text-white ml-1">{project.complexity}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    {/* Impact metric */}
                    <div className="flex items-center gap-2 mb-4 text-xs text-green-400">
                      <TrendingUp size={14} />
                      <span>{project.impact}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
                      <Calendar size={14} />
                      <span>{project.duration}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600/50 text-gray-300 text-xs rounded-full border border-gray-600">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-medium text-blue-400">Key Highlights:</h4>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {project.highlights.slice(0, 2).map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium group"
                      >
                        <Github size={16} className="group-hover:rotate-12 transition-transform" />
                        View Code
                      </a>
                      
                      <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium group" onClick={() => window.open(project.demo, '_blank')}>
                        <Eye size={16} className="group-hover:scale-110 transition-transform" />
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                    {skill.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{skill.name}</h3>
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Problem-Solving Showcase */}
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/50">
            <h3 className="text-3xl font-semibold mb-6 text-blue-400 flex items-center">
              <Target className="mr-3" size={32} />
              Problem-Solving Excellence
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Animated Stat Card: Problems Solved */}
              <div className="text-center group relative transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-blue-400 mb-2 animate-pulse group-hover:text-blue-300 transition-colors">
                  {/* Animated Counter */}
                  <span
                    className="transition-all duration-700"
                    title="Total number of coding problems solved on various platforms"
                  >
                    200+
                  </span>
                </div>
                <div className="text-gray-300">Problems Solved</div>
                {/* Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity bg-gray-800 text-xs text-blue-200 px-3 py-1 rounded shadow-lg z-10">
                  Across LeetCode, Codeforces, and more!
                </div>
              </div>
              {/* Animated Stat Card: Contests Participated */}
              <div className="text-center group relative transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-purple-400 mb-2 animate-pulse group-hover:text-purple-300 transition-colors">
                  <span
                    className="transition-all duration-700"
                    title="Number of coding contests participated"
                  >
                    5+
                  </span>
                </div>
                <div className="text-gray-300">Contests Participated</div>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity bg-gray-800 text-xs text-purple-200 px-3 py-1 rounded shadow-lg z-10">
                  LeetCode, Codeforces, and college events!
                </div>
              </div>
              {/* Add more stat cards if needed */}
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://leetcode.com/u/123mad/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 focus:outline-none focus:ring-4 focus:ring-orange-400/40"
                title="View my LeetCode profile"
              >
                <Code size={20} />
                View LeetCode Profile
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center group hover:transform hover:scale-105">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{achievement.title}</h3>
                <div className="text-2xl font-bold text-blue-400 mb-2">{achievement.metric}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
          
          {/* Professional Profiles */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                platform: "GitHub",
                icon: <Github size={32} />,
                description: "Open source contributions",
                link: "https://github.com/mad674",
                color: "text-gray-400",
                stats: "20+ Repos"
              },
              {
                platform: "LinkedIn",
                icon: <Linkedin size={32} />,
                description: "Professional network",
                link: "https://www.linkedin.com/in/madhav-meruva-2b559b288/",
                color: "text-blue-400",
                stats: "50+ Connections"
              },
              {
                platform: "LeetCode",
                icon: <Code size={32} />,
                description: "Competitive programming",
                link: "https://leetcode.com/u/123mad/",
                color: "text-orange-400",
                stats: "200+ Solved"
              },
              {
                platform: "Hugging Face",
                icon: <Brain size={32} />,
                description: "AI/ML models",
                link: "https://huggingface.co/madhi9",
                color: "text-yellow-400",
                stats: "5+ Models"
              }
            ].map((profile, index) => (
              <a
                key={index}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center group"
              >
                <div className={`flex justify-center mb-3 ${profile.color} group-hover:scale-110 transition-transform`}>
                  {profile.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">{profile.platform}</h4>
                <div className="text-sm font-medium text-blue-400 mb-2">{profile.stats}</div>
                <p className="text-gray-300 text-sm">{profile.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Universe Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Profile Universe
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            {/* GitHub */}
            <a href="https://github.com/mad674" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 rounded-2xl p-6 border-2 border-gray-700 hover:border-blue-500 shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
              <Github size={40} className="mb-3 text-gray-400 group-hover:text-blue-400 transition-colors" />
              <div className="font-bold text-lg text-white mb-1">GitHub</div>
              <div className="text-blue-400 text-sm mb-2">Open Source</div>
              <div className="text-gray-300 text-xs">mad674</div>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/madhav-meruva-2b559b288/" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900 rounded-2xl p-6 border-2 border-gray-700 hover:border-blue-500 shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
              <Linkedin size={40} className="mb-3 text-blue-400 group-hover:text-blue-500 transition-colors" />
              <div className="font-bold text-lg text-white mb-1">LinkedIn</div>
              <div className="text-blue-400 text-sm mb-2">Professional</div>
              <div className="text-gray-300 text-xs">Madhav Meruva</div>
            </a>
            {/* LeetCode */}
            <a href="https://leetcode.com/u/123mad/" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-700 rounded-2xl p-6 border-2 border-gray-700 hover:border-yellow-500 shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
              <Code size={40} className="mb-3 text-orange-400 group-hover:text-yellow-400 transition-colors" />
              <div className="font-bold text-lg text-white mb-1">LeetCode</div>
              <div className="text-orange-400 text-sm mb-2">Problem Solving</div>
              <div className="text-gray-300 text-xs">123mad</div>
            </a>
            {/* Hugging Face */}
            <a href="https://huggingface.co/madhi9" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-400 rounded-2xl p-6 border-2 border-gray-700 hover:border-yellow-400 shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
              <Brain size={40} className="mb-3 text-yellow-400 group-hover:text-yellow-500 transition-colors" />
              <div className="font-bold text-lg text-white mb-1">Hugging Face</div>
              <div className="text-yellow-400 text-sm mb-2">AI/ML Models</div>
              <div className="text-gray-300 text-xs">madhi9</div>
            </a>
            {/* Resume */}
            <a href="/madhavmeruva_resume.pdf" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-gray-800 via-gray-900 to-pink-500 rounded-2xl p-6 border-2 border-gray-700 hover:border-pink-400 shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
              <FileText size={40} className="mb-3 text-pink-400 group-hover:text-pink-500 transition-colors" />
              <div className="font-bold text-lg text-white mb-1">Resume</div>
              <div className="text-pink-400 text-sm mb-2">PDF</div>
              <div className="text-gray-300 text-xs">Download/View</div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
                  <Heart className="mr-3 text-red-400" size={28} />
                  Get In Touch
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always excited to discuss innovative projects, collaborate on cutting-edge solutions, 
                  or explore new opportunities in technology. Let's build the future together!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group">
                    <Mail className="text-blue-400 group-hover:scale-110 transition-transform" size={20} />
                    <a href="mailto:madhavmeruva690@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                      madhavmeruva690@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <Linkedin className="text-blue-400 group-hover:scale-110 transition-transform" size={20} />
                    <a 
                      href="https://www.linkedin.com/in/madhav-meruva-2b559b288/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <MapPin className="text-blue-400 group-hover:scale-110 transition-transform" size={20} />
                    <span className="text-gray-300">India</span>
                  </div>
                </div>
                
                <a href="/madhavmeruva_resume.pdf" download className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700/50 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Madhav Meruva. Crafted with passion and innovation.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://github.com/mad674" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/madhav-meruva-2b559b288/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform">
                <Linkedin size={20} />
              </a>
              <a href="mailto:madhavmeruva690@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform">
                <Mail size={20} />
              </a>
              <a href="https://huggingface.co/madhi9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors hover:scale-110 transform">
                <Brain size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
