import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaCircleChevronRight } from "react-icons/fa6";

function Works() {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    mobileNumber: "",
    address: "",
    service: "",
  });
  const [errors, setErrors] = useState({
    formSubmitted: false,
  });

  const handleSchedulePickup = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setErrors((prevErrors) => ({
      ...prevErrors,
      formSubmitted: true,
    }));
    // Here you would typically send the form data to your backend
  };

  const workSteps = [
    { icon: '/Images/works-icon-1.png', number: 1, title: 'Book A Pickup', description: 'Choose when and where you wish us to collect & deliver your laundry.' },
    { icon: '/Images/works-icon-2.png', number: 2, title: 'We Collect', description: 'Our team collects your clothes from your doorstep.' },
    { icon: '/Images/works-icon-3.png', number: 3, title: 'Expert Processing', description: 'Choose when and where you wish us to collect & deliver your laundry.' },
    { icon: '/Images/works-icon-4.png', number: 4, title: 'We Deliver', description: 'We bring back your freshly cleaned and rejuvenated clothes' },
  ];

  const lineProgress = useTransform(
    scrollYProgress,
    [0.2, 1], // Start at 20% scroll and end at 80%
    [0, 1]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated && scrollYProgress.get() > 0.4) {
        setHasAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated, scrollYProgress]);

  return (
    <section ref={containerRef} className="w-full min-h-screen bg-cover bg-center py-16 relative" style={{ backgroundImage: "url(assets/img/works-section.jpg)" }}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <img src="/Images/heading-img.png" alt="heading-img" className="mx-auto mb-4" />
          <p className="text-blue-600 font-semibold mb-2">Follow A Few Easy Steps</p>
          <h2 className="text-3xl font-bold text-gray-800">How it Works</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center relative">
          <svg className="absolute top-12 left-0 w-full h-2 hidden md:block" preserveAspectRatio="none">
            <motion.path
              d="M0,0 L2000,0"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="4"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: hasAnimated ? 1 : 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </svg>
          
          {workSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 z-10 mb-8 md:mb-0"
            >
              <motion.div 
                className="relative mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-dashed border-blue-600">
                  <motion.img 
                    src={step.icon} 
                    alt={`Step ${step.number}`} 
                    className="w-12 h-12 sm:w-16 sm:h-16" 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <span className="absolute top-0 right-0 bg-blue-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm">{step.number}</span>
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button 
            onClick={handleSchedulePickup}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300"
          >
            Schedule a Pickup
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full relative">
              <button
                onClick={handleCloseForm}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 bg-white text-black p-4 sm:p-8">
                  <img
                    src="/Images/Main_Logo-removebg-preview.png"
                    alt=""
                    className="mx-auto mb-4"
                  />
                  <div>
                    <h2 className="text-xl sm:text-2xl text-center font-bold mb-4">
                      Get Free Pickup Service
                    </h2>
                    <div className="flex items-center mb-2"><FaCircleChevronRight className="mr-2"/> Pickup Every Friday, Wednesday, Sunday</div>
                    <div className="flex items-center mb-2"><FaCircleChevronRight className="mr-2"/>Pickup and Delivery Time 5-8 pm</div>
                    <div className="flex items-center mb-2"><FaCircleChevronRight className="mr-2"/>Deliver Within 3 Days</div>
                    <div className="flex items-center"><FaCircleChevronRight className="mr-2"/>Premium Quality</div>
                  </div>
                </div>
                <form className="w-full sm:w-1/2 p-4 sm:p-8 bg-white" onSubmit={handleSubmit}>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">REGISTER FORM</h2>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Name"
                      className="border p-2 w-full"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="tel"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                      className="border p-2 w-full"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="border p-2 w-full"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <select
                      name="service"
                      className="border p-2 w-full"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="drycleaning">Friday</option>
                      <option value="laundry">Sunday</option>
                      <option value="ironing">Wednesday</option>
                    </select>
                  </div>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
                    Schedule a Slot
                  </button>
                </form>
              </div>
              {errors.formSubmitted && (
                <p className="text-green-500 text-center py-2">
                  Form submitted successfully!
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Works;