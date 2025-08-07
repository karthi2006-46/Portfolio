import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['All', 'Frontend', 'Backend', 'Language', 'Database', 'Version Control','IDE'];
  const [activeFilter, setActiveFilter] = React.useState('All');

  const skills = [
    // {
    //   name: 'React',
    //   level: 95,
    //   category: 'Frontend',
    //   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    //   color: '#61DAFB'
    // },
    // // {
    // //   name: 'TypeScript',
    // //   level: 90,
    // //   category: 'Language',
    // //   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    // //   color: '#3178C6'
    // // }
    // ,
 {
  name: 'Java',
  level: 90,
  category: ['Language', 'Backend'], 
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  color: '#007396'
},

{
  name: 'HTML',
  level: 95,
  category: 'Frontend',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  color: '#E34F26'
},
{
  name: 'CSS',
  level: 90,
  category: 'Frontend',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  color: '#1572B6'
},
{
  name: 'MySQL',
  level: 88,
  category: 'Database',
  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  color: '#4479A1'
},

  {
    name: 'Git',
    level: 85,
    category: 'Version Control',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    color: '#F05032'
  },
  {
    name: 'GitHub',
    level: 85,
    category: 'Version Control',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    color: '#181717'
  },
  {
    name: 'Visual Studio',
    level: 80,
    category: 'IDE',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg',
    color: '#5C2D91'
  },
  {
    name: 'Eclipse',
    level: 75,
    category: 'IDE',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg',
    color: '#2C2255'
  }




    // Add the remaining skill objects here...
  ];

  const filteredSkills = activeFilter === 'All'
  ? skills
  : skills.filter(skill =>
      Array.isArray(skill.category)
        ? skill.category.includes(activeFilter)
        : skill.category === activeFilter
    );


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks that I use to bring ideas to life.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Technology Stack</h3>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6"
              >
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={logoVariants}
                    whileHover={{ scale: 1.15, y: -8, rotateY: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex flex-col items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    style={{ boxShadow: `0 0 0 1px ${skill.color}20` }}
                  >
                    <div className="relative mb-3">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-12 h-12 object-contain transition-all duration-300 group-hover:drop-shadow-lg"
                        style={{
                          filter: `drop-shadow(0 0 8px ${skill.color}40)`,
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm hidden"
                        style={{ backgroundColor: skill.color }}
                      >
                        {skill.name.charAt(0)}
                      </div>
                    </div>

                    <h4 className="text-white text-xs font-medium text-center mb-2">{skill.name}</h4>

                    <div className="w-full bg-white/10 rounded-full h-1.5 mb-1">
                      <motion.div
                        className="h-1.5 rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.05 + 0.5 }}
                      />
                    </div>

                    <span className="text-xs text-white/60 font-medium">{skill.level}%</span>

                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
                        boxShadow: `0 0 20px ${skill.color}30`,
                      }}
                    />

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      {skill.category} • {skill.level}%
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
