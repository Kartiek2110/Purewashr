import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section ref={ref} className="py-16 w-full bg-gray-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
        className="container mx-auto px-4"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <motion.img
            src="/Images/heading-img.png"
            alt="heading-img"
            className="mx-auto mb-4 w-10"
            variants={itemVariants}
          />
          <motion.p
            variants={itemVariants}
            className="text-blue-600 font-semibold mb-2 text-sm sm:text-base"
          >
            Welcome to Purewashr | The Premier Cleaning Service
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-gray-800"
          >
            Professional Cleaning Services for Home and Office
          </motion.h2>
        </motion.div>
        <div className="flex flex-wrap items-center -mx-4">
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2 px-4 mb-8 md:mb-0"
          >
            <div className="relative">
              <motion.img
                variants={itemVariants}
                alt="Professional cleaning"
                src="/Images/3.jpg"
                className="w-full rounded-lg shadow-lg"
              />
              <motion.div
                variants={itemVariants}
                className="absolute bottom-0 left-0 right-0 bg-white p-3 sm:p-4 m-2 sm:m-4 rounded-lg shadow-md flex items-center"
              >
                <img
                  alt="Phone icon"
                  src="/Images/phon-icon.png"
                  className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3"
                />
                <div>
                  <span className="block text-xs sm:text-sm text-gray-600">
                    Call Us Now:
                  </span>
                  <a
                    href="tel:+1234567890"
                    className="text-sm sm:text-lg font-bold text-blue-600 hover:text-blue-800 transition duration-300"
                  >
                   8650589386
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2 px-4"
          >
            <div className="professional">
              <motion.p
                variants={itemVariants}
                className="text-gray-600 mb-6 text-sm sm:text-base"
              >
                Experience hassle-free laundry with PureWashr. Our platform
                connects you to reliable laundry agents who pick up, wash, and
                deliver your clothes, ensuring a seamless and convenient
                service. Enjoy fresh, clean laundry without lifting a finger.
                PureWashr – making laundry day effortless. Quality care, quick
                turnaround, and affordable pricing, all at your fingertips. Let
                us handle the dirty work!
              </motion.p>
              <motion.ul
                variants={containerVariants}
                className="mb-8"
              >
                {[
                  "One-off, weekly or fortnightly visits",
                  "Vetted & background-checked cleaners",
                  "Keep the same cleaner for every visit",
                  "Book, manage & pay online",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center mb-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap items-center -mx-4"
              >
                <motion.div variants={itemVariants} className="w-auto px-4">
                  <div className="flex items-center">
                    <motion.img
                      src="/Images/Main_Logo-removebg-preview.png"
                      alt="Company Logo"
                      className="w-16 h-10 sm:w-20 sm:h-12 mr-3"
                      variants={itemVariants}
                    />
                    <div>
                      <span className="block text-xs sm:text-sm text-gray-600">
                        CEOs
                      </span>
                      <h6 className="font-semibold text-gray-800 text-sm sm:text-base">
                        Deepak & Manas
                      </h6>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
