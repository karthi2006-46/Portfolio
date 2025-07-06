import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Target, Code, ExternalLink } from 'lucide-react';

interface CodingProfile {
  platform: string;
  username: string;
  stats: {
    label: string;
    value: string;
    icon: React.ElementType;
  }[];
  url: string;
  color: string;
  description: string;
}

const CodingProfiles: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const profiles: CodingProfile[] = [
    {
      platform: 'LeetCode',
      username: 'johndoe_dev',
      stats: [
        { label: 'Problems Solved', value: '487', icon: Target },
        { label: 'Contest Rating', value: '1842', icon: Trophy },
        { label: 'Global Ranking', value: '15,234', icon: Star },
      ],
      url: '#',
      color: 'from-orange-500 to-red-500',
      description: 'Consistent problem solver with focus on algorithms and data structures.',
    },
    {
      platform: 'CodeForces',
      username: 'johndoe',
      stats: [
        { label: 'Current Rating', value: '1654', icon: Star },
        { label: 'Max Rating', value: '1789', icon: Trophy },
        { label: 'Contests', value: '42', icon: Target },
      ],
      url: '#',
      color: 'from-blue-500 to-purple-500',
      description: 'Active competitive programmer with strong mathematical problem-solving skills.',
    },
    {
      platform: 'HackerRank',
      username: 'john_doe_dev',
      stats: [
        { label: 'Stars', value: '5★', icon: Star },
        { label: 'Certificates', value: '12', icon: Trophy },
        { label: 'Badges', value: '28', icon: Target },
      ],
      url: '#',
      color: 'from-green-500 to-teal-500',
      description: 'Certified in multiple domains including algorithms, data structures, and SQL.',
    },
    {
      platform: 'GeeksforGeeks',
      username: 'johndoe_gfg',
      stats: [
        { label: 'Score', value: '1,247', icon: Star },
        { label: 'Articles', value: '15', icon: Code },
        { label: 'Contributions', value: '89', icon: Target },
      ],
      url: '#',
      color: 'from-emerald-500 to-green-500',
      description: 'Active contributor with articles on advanced algorithms and system design.',
    },
    {
      platform: 'Codewars',
      username: 'johndoe_warrior',
      stats: [
        { label: 'Rank', value: '3 kyu', icon: Star },
        { label: 'Honor', value: '2,156', icon: Trophy },
        { label: 'Completed', value: '234', icon: Target },
      ],
      url: '#',
      color: 'from-red-500 to-pink-500',
      description: 'Skilled in multiple programming languages with focus on clean code practices.',
    },
    {
      platform: 'AtCoder',
      username: 'johndoe_ac',
      stats: [
        { label: 'Rating', value: '1,234', icon: Star },
        { label: 'Rank', value: 'Brown', icon: Trophy },
        { label: 'Contests', value: '18', icon: Target },
      ],
      url: '#',
      color: 'from-indigo-500 to-blue-500',
      description: 'Regular participant in Japanese competitive programming contests.',
    },
  ];

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

  return (
    <section id="coding-profiles" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Coding Profiles
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              My journey through competitive programming and coding challenges across various platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.platform}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  {/* Platform Header */}
                  <div className={`bg-gradient-to-r ${profile.color} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold">{profile.platform}</h3>
                        <p className="text-white/90 text-sm">@{profile.username}</p>
                      </div>
                      <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {profile.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="flex justify-center mb-2">
                            <div className="p-2 bg-white/10 rounded-full">
                              <stat.icon className="w-5 h-5 text-white/80" />
                            </div>
                          </div>
                          <div className="text-lg font-bold text-white">{stat.value}</div>
                          <div className="text-xs text-white/60">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {profile.description}
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 bg-gradient-to-r ${profile.color} rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      <span>View Profile</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Overall Stats */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Overall Achievement Summary</h3>
                <p className="text-white/70">
                  Cumulative progress across all competitive programming platforms
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-orange-400 mb-2">1,000+</div>
                  <div className="text-white/80">Problems Solved</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                  <div className="text-white/80">Contests Participated</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-white/80">Certificates Earned</div>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-3xl font-bold text-purple-400 mb-2">5★</div>
                  <div className="text-white/80">Highest Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;