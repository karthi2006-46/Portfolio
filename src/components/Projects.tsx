import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X } from 'lucide-react';


interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  techStack: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Student Database',
      description: 'Curd operations to add,delete,view,update',
      detailedDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, payment integration, inventory management, and real-time analytics.',
      techStack: ['Java', 'MySQL'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: 'https://github.com/karthi2006-46/studentdatabse.git',
      githubUrl: 'https://github.com/karthi2006-46/studentdatabse.git',
      featured: true,
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Interactive 3D portfolio with advanced animations',
      detailedDescription: 'A cutting-edge portfolio website featuring 3D animations...',
      techStack: ['React', 'Three.js', 'Framer Motion', 'GSAP', 'WebGL'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#', // ✅ Put actual link
      githubUrl: 'https://github.com/karthi2006-46/portfoliokarthi.git',  // ✅ Check this is correct
      featured: true,
    },

      {
      id: 3,
      title: ' Event Registration Form',
      description: 'A simple and responsive HTML & CSS form for user registration to an event.',
      detailedDescription: 'A clean, user-friendly web form built with HTML and styled using CSS, designed to collect participant details such as name, email, contact number, and event preferences for seamless event registration.',
      techStack: ['HTML', 'CSS'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_W-HEjNco3W3XWwlNUABayQp9acfWQlWaw&s',
      demoUrl: 'https://karthi2006-46.github.io/Event/',
      githubUrl: 'https://github.com/karthi2006-46/Event.git',
      featured: false,
    },
    // {
    //   id: 4,
    //   title: 'Weather App',
    //   description: 'Beautiful weather app with location-based forecasts',
    //   detailedDescription: 'A sleek weather application featuring location-based forecasts, interactive maps, weather alerts, and detailed meteorological data.',
    //   techStack: ['React Native', 'OpenWeather API', 'Maps SDK', 'Redux'],
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   demoUrl: '#',
    //   githubUrl: '#',
    //   featured: false,
    // },
    // {
    //   id: 5,
    //   title: 'Task Management App',
    //   description: 'Collaborative project management tool with real-time updates',
    //   detailedDescription: 'A modern task management application with real-time collaboration features, drag-and-drop interface, team management, and progress tracking.',
    //   techStack: ['React', 'TypeScript', 'Socket.io', 'Express', 'PostgreSQL'],
    //   image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   demoUrl: '#',
    //   githubUrl: '#',
    //   featured: true,
    // },
    // {
    //   id: 6,
    //   title: 'Learning Management System',
    //   description: 'Educational platform with course management and progress tracking',
    //   detailedDescription: 'A comprehensive learning management system with course creation tools, student progress tracking, interactive assignments, and video streaming capabilities.',
    //   techStack: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AWS S3'],
    //   image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   demoUrl: '#',
    //   githubUrl: '#',
    //   featured: false,
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // ✅ fixed
    },
  },
};


  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A collection of projects that showcase my skills and passion for creating exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/60 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-3 py-1 bg-white/10 text-white/60 rounded-full text-xs">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{selectedProject.detailedDescription}</p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View Demo</span>
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 border-2 border-white/30 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
