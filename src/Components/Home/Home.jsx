import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
  });
  const [showForm, setShowForm] = useState(true);

  const carouselItems = [
    {
      title: "PureWashr: Fresh & Clean, Every Time",
      description:
        "At PureWashr, we ensure your clothes are washed and ironed with premium care, leaving them fresh, spotless, and ready to wear! 🧺✨",
      
      backgroundImage: "public/Banner/pixlr-image-generator-3ec7121d-299e-4e11-b85f-4eed10bcf6d7.png",
      formTitle: "Book Your Dry Cleaning Service",
    },
    {
      title: "PureWashr Dry Cleaning: Premium Care for Delicate Fabrics",
      description:
        "Whether it’s formal wear or delicate items, our dry cleaning service offers top-notch care, keeping your special garments in perfect condition. 👗💼",
    
      backgroundImage: "public/Banner/pixlr-image-generator-32b7e5d1-6e7a-4165-b3f9-18779adf3ce6.png",
      formTitle: "Schedule Your Laundry Pickup",
    },
    {
      title: "PureWashr: Delivered Within 72 Hours",
      description:
        "Say goodbye to long waits! We guarantee your clothes will be cleaned and delivered back to your door within 72 hours. 🚚⏳",
    
      backgroundImage: "public/Banner/pixlr-image-generator-58bbd645-df12-4be1-9555-41979a615fe5.png",
      formTitle: "Book a Simple Laundry",
    },

    // Add more items as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleOpenForm = () => {
    setShowForm(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[100vh] overflow-hidden"
    >
      <div className="w-full h-full relative">
        {/* Carousel Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
          >
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 ${
                  currentIndex === index ? "block" : "hidden"
                }`}
              >
                {/* Background Image */}
                <motion.div
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.backgroundImage}')` }}
                ></motion.div>

                {/* Black transparent overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content Container */}
                <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between px-4 md:px-20">
                  {/* Left Side: Title, Description, and Button */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-full md:w-1/2 text-white text-center md:text-left mt-20 md:mt-0"
                  >
                    <motion.h1
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 mt-8 sm:mt-0"
                    >
                      {item.title}
                    </motion.h1>
                    <motion.p
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="text-base sm:text-lg md:text-xl mb-6 text-white font-thin"
                    >
                      {item.description}
                    </motion.p>
                    
                  </motion.div>

                  {/* Right Side: Animated Form */}
                  <AnimatePresence>
                    {showForm && (
                      <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-8 md:mt-0 mb-8 md:mb-0"
                      >
                        <motion.form
                          initial={{ y: 50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          onSubmit={handleSubmit}
                          className="bg-white p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-md relative"
                        >
                          <h2 className="text-md sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
                            {item.formTitle}
                          </h2>
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-3 sm:mb-4"
                          >
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Enter your name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline text-sm sm:text-base"
                              required
                            />
                          </motion.div>
                          
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mb-3 sm:mb-6"
                          >
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              placeholder="Enter your phone number"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm sm:text-base"
                              required
                            />
                          </motion.div>
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mb-3 sm:mb-6"
                          >
                            <input
                              type="text"
                              id="address"
                              name="address"
                              placeholder="Enter your address"
                              value={formData.address}
                              onChange={handleInputChange}
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm sm:text-base"
                              required
                            />
                          </motion.div>
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mb-3 sm:mb-6"
                          >
                            <div className="relative">
                              <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8 text-sm sm:text-base"
                                required
                              >
                                <option value="">Select a service</option>
                                <option value="washing">Friday</option>
                                <option value="drycleaning">Sunday</option>
                                <option value="ironing">Wednesday</option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                              </div>
                            </div>
                          </motion.div>
                          <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            type="submit"
                            className="bg-[#162479] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-sm sm:text-base"
                          >
                            Submit
                          </motion.button>
                        </motion.form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Home;
