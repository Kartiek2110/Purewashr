import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTshirt, FaClipboardCheck, FaSmile, FaHeart } from "react-icons/fa";

const Us = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const statistics = [
    { icon: FaTshirt, value: 200, suffix: "+", text: "Customers Served" },
    { icon: FaClipboardCheck, value: 500, suffix: "+", text: "Clothes Washed" },
    { icon: FaSmile, value: 99.99, suffix: "%", text: "Satisfied" },
    { icon: FaHeart, value: "∞", text: "Love" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      const counters = document.querySelectorAll(".stat-value");
      counters.forEach((counter, index) => {
        const updateCount = () => {
          const target = statistics[index].value;
          const count = +counter.innerText.replace(/[^\d.-]/g, "");
          const increment = typeof target === "number" ? target / 40 : 0; // Increased speed by reducing divisions from 50 to 20

          if (typeof target === "number" && count < target) {
            counter.innerText = `${Math.ceil(count + increment)}${
              statistics[index].suffix || ""
            }`;
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = `${target}${statistics[index].suffix || ""}`;
          }
        };

        updateCount();
      });
    }
  }, [isInView, statistics]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-[#0099ff] to-[#0f1ddb] py-8 sm:py-16 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-16">
          What We have done till now
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center w-full sm:w-1/2 md:w-full"
              variants={itemVariants}
            >
              <div className="mb-4 sm:mb-6 text-5xl sm:text-7xl">
                <stat.icon />
              </div>
              <div className="stat-value text-3xl sm:text-5xl font-bold mb-2 sm:mb-3">
                {typeof stat.value === "number" ? "0" : stat.value}
                {stat.suffix || ""}
              </div>
              <p className="text-base sm:text-lg mt-2 sm:mt-3 text-center">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Us;
