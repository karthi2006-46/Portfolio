import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, FileText, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, href: '#hero' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Projects', icon: Briefcase, href: '#projects' },
    { name: 'Skills', icon: Code, href: '#skills' },
    { name: 'Resume', icon: FileText, href: '#resume' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 group"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{item.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 bottom-0 w-64 bg-black/90 backdrop-blur-md z-50 md:hidden"
      >
        <div className="flex flex-col pt-20 px-6 space-y-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              onClick={() => scrollToSection(item.href)}
              className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-200 py-3 border-b border-white/10"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;