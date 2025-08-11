import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Award, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const education = [
    {
      institution: 'Dr. M.G.R. Educational And Research Institute',
      degree: 'Bachelor of Computer Applications (BCA)',
      period: '2025 ("Pursuing")',
      description:
        'Currently pursuing BCA with a focus on programming, web development, and database management. Gaining practical knowledge through academic projects and continuous hands-on learning in technologies such as Java, HTML/CSS, SQL, and JavaScript.',
    },
    {
      institution: 'ICF Higher Secondary School',
      degree: 'HSC – Higher Secondary Certificate',
      period: '2021 – 2023',
      description:
        'Completed Higher Secondary education under Tamil Nadu State Board with a specialization in Commerce with Computer Applications. Gained foundational knowledge in programming, accounting, business studies, and economics.',
    },
    {
      institution: 'Britannia High School',
      degree: 'SSLC – Secondary School Leaving Certificate',
      period: '2019 – 2021',
      description:
        'Completed 10th standard with a strong base in Mathematics, Science, Social Science, and Computer basics. Developed early interest in computer applications and digital systems.',
    },
  ];

  const achievements = [
    // 'Apolo Certified Solutions Architect',
    // 'Java Developer Certification',
    'Software Testing - 2024',
    'Currently pursuing Java Full Stack Development – 2025'
    // 'Open Source Contributor - 50+ repositories',
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/certificates/resume.pdf';
    link.download = 'Karthikeyan_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Resume
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Download my complete resume or explore my professional journey, education, and achievements below.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-6 h-6" />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education as Main Content */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-green-500/20 rounded-full">
                    <GraduationCap className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="border-l-2 border-green-500/30 pl-6 pb-6 last:pb-0"
                    >
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <p className="text-green-400 font-medium">{edu.institution}</p>
                      <p className="text-blue-400 text-sm mb-2">{edu.period}</p>
                      <p className="text-white/70 text-sm">{edu.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Achievements in Sidebar */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-yellow-500/20 rounded-full">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Achievements</h3>
                </div>

                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-white/80 text-sm">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

         {/* Resume Preview */}
<motion.div variants={itemVariants} className="mt-12 text-center">
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
    <div className="flex items-center justify-center space-x-3 mb-4">
      <FileText className="w-8 h-8 text-blue-400" />
      <h3 className="text-2xl font-bold text-white">Professional Resume</h3>
    </div>
    <p className="text-white/60 mb-6">
      Get a snapshot of my academic background, skills, certifications, and early technical contributions as a passionate and driven fresher.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
        Actively Seeking Internships
      </span>
      <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">
       Academic Projects
      </span>
      <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
        Certified in Java, Git & Testing
      </span>
    </div>
  </div>
</motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
