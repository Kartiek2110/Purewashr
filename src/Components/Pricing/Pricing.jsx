import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const services = [
    { name: 'Washing + Iron', price: '₹25/pair' },
    { name: 'Dry Clean - Blazer', price: '₹150' },
    { name: 'Dry Clean - Coat Pant', price: '₹300' },
    { name: 'Dry Clean - Suit-Salwaar', price: '₹150' },
    { name: 'Dry Clean - Saree', price: '₹200' },
    { name: 'Dry Clean - Hoodie', price: '₹40' },
    { name: 'Dry Clean - Bed Cover', price: '₹40' },
    { name: 'Dry Clean - Curtains', price: '₹60' },
    { name: 'Dry Clean - Single Bed Sheet', price: '₹200' },
    { name: 'Dry Clean - Double Bed Sheet', price: '₹300' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, rotateX: 90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 80
      }
    }
  };

  return (
    <section className="bg-gradient-to-br mt-2 from-blue-100 to-indigo-200 py-20">
      <div className="container mx-auto px-4">
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
                Our Pricing
              </motion.h2>
              <motion.p
                className="text-xl text-white opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Affordable rates for premium laundry services
              </motion.p>
            </motion.div>
          </div>
        </motion.section>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
              <div className="p-8 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4 text-indigo-800 text-center">{service.name}</h3>
                <p className="text-4xl font-extrabold mb-6 text-indigo-600">{service.price}</p>
                <motion.div 
                  className="w-16 h-1 bg-indigo-500 rounded"
                  whileHover={{ width: '100%', transition: { duration: 0.3 } }}
                  initial={{ width: '4rem' }}
                  animate={{ width: '4rem' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-xl text-indigo-800 mb-6">
            **Price may vary depending on the type of fabric and the complexity of the cleaning process.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
