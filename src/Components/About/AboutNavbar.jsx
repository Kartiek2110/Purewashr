import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircleChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [activeSection] = useState("About");
  const [formData, setFormData] = useState({
    firstName: "",
    mobileNumber: "",
    address: "",
    service: "",
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
    // Add your form submission logic here
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:8650589386`;
  };

  const navRef = useRef(null);

  return (
    <div className="w-full chacha fixed top-0 left-0 bg-transparent z-50">
      <div className="w-full  h-20 p-2 flex justify-center items-center text-black bg-white bg-opacity-50 backdrop-blur-md">
        <div className="w-[90%] h-full">
          <div className="w-full h-full flex justify-between items-center relative">
            <div className="w-1/2 h-full flex justify-start items-center">
              <img
                src="/Images/Main_Logo-removebg-preview.png"
                alt="logo"
                className="w-[30vh] h-[10vh] md:w-[30vh] md:h-[10vh]"
              />
            </div>
            <div className="w-[75vw] h-[11vh] bg-[#162479] bg-opacity-90 absolute left-[22%] rounded-tl-[20px] rounded-bl-[80px] hidden md:block"></div>
            <div className="md:w-1/2 md:h-full md:flex md:justify-center md:items-center md:relative hidden">
              <div ref={navRef} className="w-[50vh] h-full flex justify-center gap-8 items-center ml-[-15vw] text-md text-white relative">
                <Link to="/" className={`relative ${activeSection === "Home" ? "font-bold" : ""} hover:text-yellow-400 transition-colors duration-300`}>
                  Home
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                    initial={{ width: activeSection === "Home" ? "100%" : "0%" }}
                    animate={{ width: activeSection === "Home" ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                <Link to="/about" className={`relative ${activeSection === "About" ? "font-bold" : ""} hover:text-yellow-400 transition-colors duration-300`}>
                  About
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                    initial={{ width: activeSection === "About" ? "100%" : "0%" }}
                    animate={{ width: activeSection === "About" ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                <Link to="/pricing" className={`relative ${activeSection === "Services" ? "font-bold" : ""} hover:text-yellow-400 transition-colors duration-300`}>
                  Pricing
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                    initial={{ width: activeSection === "Services" ? "100%" : "0%" }}
                    animate={{ width: activeSection === "Services" ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                <Link to="/contact" className={`relative ${activeSection === "Contact" ? "font-bold" : ""} hover:text-yellow-400 transition-colors duration-300`}>
                  Contact
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                    initial={{ width: activeSection === "Contact" ? "100%" : "0%" }}
                    animate={{ width: activeSection === "Contact" ? "100%" : "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </div>
              <div>
                <div className="flex justify-center items-center gap-8 ml-[5vw]">
                  <button className="border-2 border-white text-white px-5 py-3 rounded-full font-semibold" onClick={handlePhoneCall}>
                    8650589386
                  </button>
                  <button
                    className="bg-yellow-400 border-2 border-white text-black px-5 py-3 rounded-full font-bold"
                    onClick={handleSchedulePickup}
                  >
                    SCHEDULE A PICKUP
                  </button>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#162479] bg-opacity-90 text-white">
          <div className="flex flex-col items-center py-4">
            <Link to="/" className={`py-2 relative ${activeSection === "Home" ? "font-bold" : ""} hover:text-yellow-400 transition-colors duration-300`} onClick={() => setIsMenuOpen(false)}>
              Home
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                initial={{ width: activeSection === "Home" ? "100%" : "0%" }}
                animate={{ width: activeSection === "Home" ? "100%" : "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link to="/about" className={`py-2 relative ${activeSection === "About" ? "font-bold" : ""} hover:text-yellow-400 transition-colors duration-300`} onClick={() => setIsMenuOpen(false)}>
              About
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                initial={{ width: activeSection === "About" ? "100%" : "0%" }}
                animate={{ width: activeSection === "About" ? "100%" : "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link to="/pricing" className={`py-2 relative ${activeSection === "Services" ? "font-bold" : ""} hover:text-yellow-400 transition-colors duration-300`} onClick={() => setIsMenuOpen(false)}>
              Pricing
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                initial={{ width: activeSection === "Services" ? "100%" : "0%" }}
                animate={{ width: activeSection === "Services" ? "100%" : "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link to="/contact" className={`py-2 relative ${activeSection === "Contact" ? "font-bold" : ""} hover:text-yellow-400 transition-colors duration-300`} onClick={() => setIsMenuOpen(false)}>
              Contact
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                initial={{ width: activeSection === "Contact" ? "100%" : "0%" }}
                animate={{ width: activeSection === "Contact" ? "100%" : "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <button className="border-2 border-white text-white px-4 py-2 rounded-full my-2 hover:bg-white hover:text-[#162479] transition-colors duration-300" onClick={handlePhoneCall}>
              8650589386
            </button>
            <button
              className="bg-yellow-400 border-2 border-white text-black px-4 py-2 rounded-full my-2 hover:bg-white hover:text-[#162479] transition-colors duration-300"
              onClick={handleSchedulePickup}
            >
              SCHEDULE A PICKUP
            </button>
          </div>
        </div>
      )}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl relative">
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
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-white text-black p-4 md:p-8">
                  <img
                    src="/Images/Main_Logo-removebg-preview.png"
                    alt=""
                    className="w-full max-w-[200px] mx-auto mb-4"
                  />
                  <div>
                    <h2 className="text-xl md:text-2xl text-center font-bold mb-4">
                      Get Free Pickup Service
                    </h2>
                    {["Pickup Every Friday, Wednesday, Sunday", "Pickup and Delivery Time 5-8 pm", "Deliver Within 3 Days", "Premium Quality"].map((line, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <FaCircleChevronRight className="mr-2 flex-shrink-0"/>
                        <span className="text-sm md:text-base">{line}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <form className="w-full md:w-1/2 p-4 md:p-8 bg-white" onSubmit={handleSubmit}>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">REGISTER FORM</h2>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
