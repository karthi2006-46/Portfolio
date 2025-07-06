import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter, Instagram, Mail, ExternalLink } from 'lucide-react';

const SocialMedia: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      platform: 'GitHub',
      username: '@johndoe',
      followers: '2.1K',
      icon: Github,
      url: 'https://github.com/johndoe',
      color: 'from-gray-700 to-gray-900',
      description: 'Open source projects and contributions',
    },
    {
      platform: 'LinkedIn',
      username: 'John Doe',
      followers: '3.5K',
      icon: Linkedin,
      url: 'https://linkedin.com/in/johndoe',
      color: 'from-blue-600 to-blue-800',
      description: 'Professional network and career updates',
    },
    {
      platform: 'Twitter',
      username: '@johndoe_dev',
      followers: '1.8K',
      icon: Twitter,
      url: 'https://twitter.com/johndoe_dev',
      color: 'from-sky-400 to-sky-600',
      description: 'Tech insights and industry discussions',
    },
    {
      platform: 'Instagram',
      username: '@johndoe.dev',
      followers: '892',
      icon: Instagram,
      url: 'https://instagram.com/johndoe.dev',
      color: 'from-pink-500 to-purple-600',
      description: 'Behind the scenes and lifestyle content',
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
    <section id="social" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-gray-900/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Follow me on social media for the latest updates, insights, and behind-the-scenes content.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-r ${social.color} rounded-full`}>
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-1">{social.platform}</h3>
                  <p className="text-white/60 text-sm mb-2">{social.username}</p>
                  <p className="text-white/80 text-sm mb-3">{social.description}</p>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-white">{social.followers}</span>
                    <span className="text-white/60 text-sm">followers</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="max-w-2xl mx-auto">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
                <p className="text-white/70 mb-6">
                  Subscribe to my newsletter for weekly insights, project updates, and exclusive content.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60">
                <p>&copy; 2024 John Doe. All rights reserved.</p>
              </div>
              
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;