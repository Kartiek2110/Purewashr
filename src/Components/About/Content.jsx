import React from 'react';
import { motion } from 'framer-motion';
import About1 from './About1';
import Story from './Story';
import Team from './Team';
import AboutFooter from './AboutFooter';

function Content() {
  return (
    <>
      <motion.section 
        className="relative mt-[10vh] bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-extrabold text-white mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="text-xl text-white opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Discover the story behind our passion for clean clothes and happy customers
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <About1 />
        <Story />
        <Team />
        <AboutFooter />
      </motion.div>
    </>
  );
}

export default Content;
