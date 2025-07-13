import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // optional, remove if not needed

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 bg-black relative overflow-hidden">
      {/* Light effect corners */}
      <div className="corner-light-premium"></div>
      <div className="corner-light-premium" style={{ right: '0', left: 'auto', transform: 'rotate(90deg)' }}></div>

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold text-white"
      >
        Hi, I'm Sakstiks <span className="text-purple-400">Sakstiks</span>
      </motion.h1>

      {/* Animated Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="mt-4 text-xl text-gray-300"
      >
        Aspiring Web Dev & Coder 🚀
      </motion.p>
    </section>
  );
};

export default HeroSection;


