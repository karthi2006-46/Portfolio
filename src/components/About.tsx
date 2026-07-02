import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Lightbulb, Heart, Zap } from 'lucide-react';


const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and methodologies to solve complex problems.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuine love for creating digital experiences that make a difference.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing every aspect of development for speed, efficiency, and user experience.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-centered digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
                <p className="text-white/80 mb-4 leading-relaxed">
  I am a BCA graduate and an aspiring Java Full Stack Developer with hands-on experience in Java, Spring Boot, Angular, React, MySQL, HTML, CSS, JavaScript, and REST APIs.
</p>

<p className="text-white/80 mb-4 leading-relaxed">
  I completed my Java Full Stack Development training at Applo Institute and a Frontend Development Internship at TVK Technologies. Through these experiences, I developed real-world projects including a Lost & Found Portal, BUYZIO E-Commerce Platform, Online Examination & Learning Management System, and a Certificate Generator System.
</p>

<p className="text-white/80 leading-relaxed">
  I am passionate about building scalable and user-friendly applications, continuously learning new technologies, and seeking opportunities to grow as a Java Full Stack Developer while contributing to impactful software solutions.
</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;