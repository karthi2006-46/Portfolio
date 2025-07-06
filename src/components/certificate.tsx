import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, ExternalLink, X, Filter } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  category: string;
  image: string;
  pdfUrl: string;
  description: string;
  skills: string[];
}

const Certificates: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect - Associate',
      organization: 'Amazon Web Services',
      date: '2024-01-15',
      category: 'Cloud Computing',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      pdfUrl: '#',
      description: 'Validates expertise in designing distributed systems on AWS platform.',
      skills: ['AWS', 'Cloud Architecture', 'Security', 'Scalability'],
    },
    {
      id: 2,
      title: 'React Developer Certification',
      organization: 'Meta (Facebook)',
      date: '2023-11-20',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      pdfUrl: '#',
      description: 'Professional certification in React development and modern JavaScript.',
      skills: ['React', 'JavaScript', 'JSX', 'Hooks'],
    },
    {
      id: 3,
      title: 'Google Cloud Professional Developer',
      organization: 'Google Cloud',
      date: '2023-09-10',
      category: 'Cloud Computing',
      image: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=400',
      pdfUrl: '#',
      description: 'Demonstrates ability to build scalable applications on Google Cloud Platform.',
      skills: ['GCP', 'Kubernetes', 'Docker', 'Microservices'],
    },
    {
      id: 4,
      title: 'Machine Learning Specialization',
      organization: 'Stanford University (Coursera)',
      date: '2023-07-25',
      category: 'AI/ML',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      pdfUrl: '#',
      description: 'Comprehensive course covering machine learning algorithms and applications.',
      skills: ['Python', 'TensorFlow', 'Neural Networks', 'Data Science'],
    },
    {
      id: 5,
      title: 'Certified Kubernetes Administrator',
      organization: 'Cloud Native Computing Foundation',
      date: '2023-05-18',
      category: 'DevOps',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      pdfUrl: '#',
      description: 'Validates skills in Kubernetes cluster administration and management.',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Linux'],
    },
    {
      id: 6,
      title: 'Full Stack Web Development',
      organization: 'freeCodeCamp',
      date: '2023-03-12',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      pdfUrl: '#',
      description: 'Comprehensive certification covering front-end and back-end development.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    },
    {
      id: 7,
      title: 'Deep Learning Specialization',
      organization: 'DeepLearning.AI',
      date: '2023-01-30',
      category: 'AI/ML',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
      pdfUrl: '#',
      description: 'Advanced specialization in deep learning and neural network architectures.',
      skills: ['Deep Learning', 'CNN', 'RNN', 'PyTorch'],
    },
    {
      id: 8,
      title: 'Cybersecurity Fundamentals',
      organization: 'IBM',
      date: '2022-12-08',
      category: 'Security',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
      pdfUrl: '#',
      description: 'Foundation course in cybersecurity principles and best practices.',
      skills: ['Security', 'Risk Assessment', 'Incident Response', 'Compliance'],
    },
  ];

  const categories = ['All', 'Web Development', 'Cloud Computing', 'AI/ML', 'DevOps', 'Security'];

  const filteredCertificates = activeFilter === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="certificates" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-900/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
              Certificate Showcase
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Professional certifications and achievements that validate my expertise across various technologies and domains.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/20'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>{category}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Certificates Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredCertificates.map((certificate, index) => (
                <motion.div
                  key={certificate.id}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    rotateY: 5,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group cursor-pointer perspective-1000"
                  onClick={() => setSelectedCertificate(certificate)}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform-gpu">
                    <div className="relative overflow-hidden">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-2 rounded-full">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-yellow-300 transition-colors">
                        {certificate.title}
                      </h3>
                      
                      <p className="text-yellow-400 font-medium text-sm mb-2">
                        {certificate.organization}
                      </p>
                      
                      <div className="flex items-center space-x-2 text-white/60 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(certificate.date)}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium">
                          {certificate.category}
                        </span>
                        <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Certification Summary</h3>
                <p className="text-white/70">
                  Continuous learning and professional development across multiple domains
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{certificates.length}</div>
                  <div className="text-white/80">Total Certificates</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-orange-400 mb-2">{categories.length - 1}</div>
                  <div className="text-white/80">Specialization Areas</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">2024</div>
                  <div className="text-white/80">Latest Certification</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                  <div className="text-white/80">Pass Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
              className="bg-gray-900 border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">{selectedCertificate.category}</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{selectedCertificate.title}</h3>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div>
                    <p className="text-yellow-400 font-semibold text-lg">{selectedCertificate.organization}</p>
                    <div className="flex items-center space-x-2 text-white/60">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(selectedCertificate.date)}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-white/80 mb-6 leading-relaxed">{selectedCertificate.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View Certificate</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 border-2 border-white/30 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <Award className="w-5 h-5" />
                    <span>Verify</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;