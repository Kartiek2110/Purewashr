import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const ContactUS = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    inquiryReason: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
                <img className='w-[30vw]' src="public/Images/Main_Logo-removebg-preview.png" alt="" />
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-600 mr-3" />
                  <span>27th KM Milestone, Delhi - Meerut Expy, Ghaziabad, Uttar Pradesh 201015</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-blue-600 mr-3" />
                  <span>purewashr@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="text-blue-600 mr-3" />
                  <span>+918650589386</span>
                </li>
              </ul>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF size={24} /></a>
                <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={24} /></a>
                <a href="#" className="text-red-600 hover:text-red-800"><FaYoutube size={24} /></a>
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-2 mb-4">
                  <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <select
                    name="inquiryReason"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                  >
                    <option value="">Inquiry Reason</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Franchise">Franchise</option>
                    <option value="Work for Us">Work for Us</option>
                  </select>
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-4">
                  {/* Add reCAPTCHA here */}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Get in Touch
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUS;
