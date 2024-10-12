import React from 'react'
import { motion } from 'framer-motion'
import ContactNavbar from './ContactNavbar'
import ContactUS from './ContectUS'
import Map from './Map'
import ContactFooter from './ContactFooter'

export default function Contact() {
  return (
    <div>
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
                Contact Us
              </motion.h2>
            </motion.div>
          </div>
        </motion.section>
        <ContactNavbar/>
        <ContactUS/>
        <Map/>
        <ContactFooter/>
    </div>
  )
}
