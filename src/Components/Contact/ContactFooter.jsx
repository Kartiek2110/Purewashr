import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function ContactFooter() {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.1
      } 
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.3 } }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8 md:py-16"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <motion.div variants={childVariants} className="mb-8 sm:mb-0">
            <img src="public/Images/Main_Logo-removebg-preview.png" alt="logo" className="w-[20vh] h-[7vh] sm:w-[30vh] sm:h-[10vh] bg-white rounded-full mb-4" />
            <p className="mb-6 text-gray-300 text-sm sm:text-base">Your trusted partner for all laundry needs. We bring freshness to your wardrobe and convenience to your life.</p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <motion.a 
                  key={index} 
                  href="#" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  whileHover="hover"
                  variants={socialIconVariants}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div variants={childVariants} className="mb-8 sm:mb-0">
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'About', 'Services', 'Pricing', 'FAQ', 'Contact'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={childVariants} className="mb-8 sm:mb-0">
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-400">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Wash & Fold', 'Dry Cleaning', 'Ironing', 'Stain Removal', 'Alterations', 'Express Service'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={childVariants}>
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-400">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start sm:items-center">
                <FaMapMarkerAlt className="mr-3 text-blue-400 mt-1 sm:mt-0" />
                <p className="text-sm sm:text-base">27th KM Milestone, Delhi - Meerut Expy, Ghaziabad, Uttar Pradesh 201015</p>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-blue-400 transform scale-x-[-1]" />
                <p className="text-sm sm:text-base">+918650589386</p>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                <p className="text-sm sm:text-base">contact@purewashr.com</p>
              </li>
            </ul>
           
          </motion.div>
        </div>
        <motion.div 
          className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center"
          variants={childVariants}
        >
          <p className="text-gray-400 text-sm sm:text-base">&copy; 2024 PureWashr Solutions Private Limited</p>
          <div className="mt-3 sm:mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 mx-2 transition-colors duration-300 text-sm sm:text-base">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-blue-400 mx-2 transition-colors duration-300 text-sm sm:text-base">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default ContactFooter;
