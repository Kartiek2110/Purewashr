import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
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
    <section ref={ref} className="py-16 p-10 w-full bg-gray-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={mainControls}
        className="container mx-auto px-4 flex flex-wrap"
      >
        <motion.div variants={itemVariants} className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-blue-600 mb-2">
            The PureWashr Story
          </motion.h3>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-800 mb-4">
            From Frustration to Fresh Starts
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed">
            Our laundry woes started locally, with clothes consistently damaged by unreliable dhobis. Seeking a solution, we spoke to one such dhobi and discovered a hidden pain point: 80% of their time went to pickups and deliveries. This sparked a 3-month journey to find a better way. Our winning pitch at the AKGEC Startup Conclave secured seed funding, and PureWashr was born. Through market research, we connected with skilled dhobis and built an online platform to offer comprehensive laundry services, streamlined by efficient delivery partners. Now, we're transforming laundry – one fresh start at a time.
          </motion.p>
        </motion.div>
        <motion.div 
          variants={itemVariants} 
          className="w-full lg:w-1/2 bg-cover bg-center rounded-lg shadow-xl"
          style={{ 
            backgroundImage: "url('public/Banner/pixlr-image-generator-3ec7121d-299e-4e11-b85f-4eed10bcf6d7.png')", 
            height: "400px"
          }}
        />
      </motion.div>
    </section>
  );
}

export default Story;
