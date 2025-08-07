import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { ChevronDown, Download } from 'lucide-react';
import profileImage from '../assets/Profile.jpg';

const AnimatedSphere = () => (
  <Sphere visible args={[1, 100, 200]} scale={2}>
    <MeshDistortMaterial
      color="#3B82F6"
      attach="material"
      distort={0.3}
      speed={1.5}
      roughness={0.4}
    />
  </Sphere>
);

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />

      {/* 3D Background Sphere */}
      <div className="absolute inset-0 opacity-30">
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              autoRotate
              autoRotateSpeed={0.5}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            HI I'M KARTHIKEYAN
          </h1>
          <motion.p
            animate={{ x: [0, 10, -10, 0], opacity: [1, 0.7, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="text-white/80 text-lg md:text-xl mb-4 font-light"
          >
          Aspiring Java Full Stack Developer
          </motion.p>

          {/* Roles as Equal-Size Badges */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
            {['Java Learner', 'Frontend Developer', 'AI Enthusiast', 'Full Stack Student'].map((role) => (
              <span
                key={role}
                className="bg-white/10 text-white text-sm px-4 py-2 rounded-full font-medium shadow-md border border-white/20"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let's Connect
            </motion.button>

            {/* View Resume Button */}
            <motion.a
              href="public/certificates/resume.pdf" // Ensure the path is correct
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}o
              
              className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>View Resume</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full shadow-2xl bg-gradient-to-br from-blue-500/30 to-purple-600/30 p-1 hover:scale-105 transition-transform duration-300">
            <img
              src={profileImage} // Replace with your image path
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
