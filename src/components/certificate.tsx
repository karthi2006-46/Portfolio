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
      title: 'SOFTWARE TESTING  (Both Manual and Automated)',
      organization: 'TAMILNADU ADVANCED TECHNICAL TRAINING INSTITUTE',
      date: '2024-11-19',
      category: 'Testing',
      image:  'https://www.keenesystems.com/hs-fs/hubfs/software-testing.jpg?width=900&name=software-testing.jpg',


      pdfUrl: '/certificates/testing.pdf',
      description: 'Validates expertise in designing distributed systems on AWS platform.',
      skills: ['SDLC & STLC', 'Test Case Design', 'Bug Reporting and Tracking','Java / Python ', 'Requirement Analysis'],
    },
    {
      id: 2,
      title: '',
      organization: '',
      date: '',
      category: '',
      image: '',
      pdfUrl: '#',
      description: '',
      skills: [''],
    },
    {
      id: 3,
      title: '',
      organization: '',
      date: '',
      category: '',
      image: '',
      pdfUrl: '#',
      description: '',
      skills: [''],
    },
    {
      id: 4,
      title: '',
      organization: '',
      date: '',
      category: '',
      image: '',
      pdfUrl: '#',
      description: '',
      skills: [''],
    },
    
  ];

  const categories = ['All', 'Testing', 'Web Development', 'AI/ML', 'DevOps', 'Security'];

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
                  <motion.a
  href={selectedCertificate.pdfUrl}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
>
  <ExternalLink className="w-5 h-5" />
  <span>View Certificate</span>
</motion.a>

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