import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Language' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Python', level: 85, category: 'Language' },
    { name: 'MongoDB', level: 82, category: 'Database' },
    { name: 'PostgreSQL', level: 80, category: 'Database' },
    { name: 'Docker', level: 75, category: 'DevOps' },
    { name: 'AWS', level: 78, category: 'Cloud' },
    { name: 'GraphQL', level: 70, category: 'API' },
    { name: 'Redis', level: 72, category: 'Cache' },
  ];

  const categories = ['Frontend', 'Backend', 'Language', 'Database', 'DevOps', 'Cloud'];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks that I use to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Skills Visualization */}
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Technology Stack</h3>
                
                {/* Animated skill bubbles */}
                <div className="grid grid-cols-3 gap-4">
                  {skills.slice(0, 9).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative group"
                    >
                      <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-xl p-4 text-center hover:from-cyan-500/30 hover:to-blue-600/30 transition-all duration-300">
                        <div className="text-lg font-bold text-white mb-1">{skill.name}</div>
                        <div className="text-cyan-400 text-sm">{skill.level}%</div>
                        
                        {/* Skill level indicator */}
                        <div className="mt-2 w-full bg-white/10 rounded-full h-1">
                          <motion.div
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 h-1 rounded-full"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Skills List */}
            <div className="space-y-8">
              {categories.map((category, index) => (
                <motion.div key={category} variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-white mb-4">{category}</h3>
                  <div className="space-y-4">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill, skillIndex) => (
                        <div key={skill.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white font-semibold">{skill.name}</span>
                            <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Figma', 'Postman', 
                'Nginx', 'Linux', 'Firebase', 'Supabase', 'Vercel', 'Netlify'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-white text-sm hover:scale-105 transition-transform"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;