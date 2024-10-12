import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Arpit Rai",
    stars: 5,
    description: "Amazing",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjXiMalwNbc8R77P3C-lADSjRqbVb4LciBgNkyFgRaPN4iHKEe4=s120-c-rp-mo-br100",
  },
  {
    name: "Apurva B Raj",
    stars: 5,
    description: "Genuine services 🌞",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjWamwGOiI-2yMaEV3MlreGI-3aC8d62WZPgu114NHOkf2Ud5vTx=s120-c-rp-mo-br100",
  },
  {
    name: "Simaran Sahu",
    stars: 5,
    description: "It's really amazing like good service and work on time thanks",
    photo: "https://lh3.googleusercontent.com/a/ACg8ocKeObv7Ygb7_2eEwYX1miHrRv4t08OVtfQegNvfpgxJhyjwAg=s120-c-rp-mo-br100",
  },
  {
    name: "Manas Srivastava",
    stars: 5,
    description: "Love the packing that clothes come after wash..!",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjU8WJ-X3IOEIXgqpYcVqEK-5LGgSyIK0A5LMCb9rY0t2Som1TPo=s120-c-rp-mo-br100",
  },
  {
    name: "Radha Gupta",
    stars: 5,
    description: "Best place for laundry and dry cleaning 👍🏻. Go for it guys . It's totally worth it and also affordable 😃",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjVIq3G--mCkgblq513HbgUf560obIEmNJSUr1vUdbauhnaBCFF4=s120-c-rp-mo-ba2-br100",
  },
  {
    name: "Soumya Shukla",
    stars: 5,
    description: "Good service and on-time delivery.",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjXAiuQ29Tf_98pjs4BfFbduwFqCleW2MU3HtYkjNAaCmtCBtRg=s120-c-rp-mo-br100",
  },
  {
    name: "Ritika Tiwari",
    stars: 5,
    description: "Supportive team, had a good experience 👍",
    photo: "https://lh3.googleusercontent.com/a/ACg8ocIwjIq_ZUCjciK3kVmWYXh75fV5BodzmaL6jnkOaxAsVXYpEQ=s120-c-rp-mo-br100",
  },
];

const Testimonial = () => {
  const [position, setPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const containerWidth = testimonials.length * (isMobile ? 300 : 400); // Adjust width for mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        if (prevPosition <= -containerWidth / 2) {
          return 0;
        }
        return prevPosition - 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [containerWidth]);

  return (
    <section className="py-8 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-black">What Our Customers Say</h2>
        <div className="relative h-[350px] md:h-[400px]">
          <motion.div
            className="flex"
            style={{
              width: `${containerWidth * 2}px`,
            }}
            animate={{
              x: position,
            }}
            transition={{
              type: "tween",
              ease: "linear",
              duration: 0.1,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-[300px] md:w-[400px] flex-shrink-0 px-2 md:px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              >
                <motion.div 
                  className="bg-white rounded-lg shadow-2xl p-4 md:p-6 h-full flex flex-col justify-between relative overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                >
                  <motion.div 
                    className="absolute top-2 left-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                  >
                    <FaQuoteLeft className="text-2xl md:text-3xl text-gray-300" />
                  </motion.div>
                  <motion.div 
                    className="absolute top-2 right-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                  >
                    <img src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="Google icon" className="w-4 h-4 md:w-6 md:h-6" />
                  </motion.div>
                  <div className="relative z-10 mb-4 flex items-center">
                    <motion.img 
                      src={testimonial.photo} 
                      alt={testimonial.name} 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                    />
                    <div className="ml-4">
                      <motion.h3 
                        className="text-lg md:text-xl font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                      >
                        {testimonial.name}
                      </motion.h3>
                      <motion.div 
                        className="flex"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                      >
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-sm md:text-base" />
                        ))}
                      </motion.div>
                    </div>
                  </div>
                  <motion.div 
                    className="relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
                  >
                    <p className="text-gray-600 mb-4 italic text-sm md:text-base">{testimonial.description}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
