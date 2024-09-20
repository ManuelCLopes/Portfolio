import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const titles = ["Software Engineer", "Problem Solver", "Manuel Lopes"];

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  // Rotate the titles with a delay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
    }, 5000); // Change title every 5 seconds for smoother transitions

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 5, repeat: Infinity, repeatType: 'mirror' }} // Slow down the background
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"
      ></motion.div>

      <div className="relative flex flex-col items-center justify-center min-h-screen text-white p-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          {/* Title Text with Smooth Transition */}
          <motion.h1
            key={currentTitle}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5 }} // Smooth transition between titles
            className="text-7xl font-extrabold tracking-tight mb-4"
          >
            {titles[currentTitle]}
          </motion.h1>
          
          {/* Subtitle */}
          <p className="text-xl font-light text-gray-400 max-w-md mx-auto mb-8">
            There are two things that I enjoy very much to do: innovate and solve problems. 
            By doing those things, I'm able to make people's lives easier somehow, and that's great!
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-medium"
          >
            Explore My Work
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <div className="text-gray-400">Scroll Down</div>
          <div className="h-6 w-6 border-2 border-gray-400 rounded-full animate-bounce"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
