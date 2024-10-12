import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircleChevronRight } from "react-icons/fa6";
import { GiWashingMachine } from "react-icons/gi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "Washing",
    price: "Rs. 30",
    discountedPrice: "Rs. 25*",
    image:"/Banner/pixlr-image-generator-4313fb0e-2d19-4cc2-a5ee-977dfdd1a520.png",
    q1: "Premium Quality",
    q2: "Iron Included",
    q3: "Stain Removal Expertise",
    showSquare: true,
  },
  {
    title: "Ironing Clothes",
    price: "Rs. 15",
    discountedPrice: "Rs. 10*",
    image: "/Banner/pixlr-image-generator-d1aafd7e-c701-49ca-9d8e-260ca8000434.png",
    q1: "Premium Quality",
    q2: "Expert Ironing Included",
    q3: "Garment Care Mastery",
    showSquare: true,
  },
  {
    title: "Dry Cleaning",
    price: "Rs. 120",
    discountedPrice: "Rs. 100*",
    image: "/Banner/pixlr-image-generator-486e85ac-465b-4394-9a4c-db8dc784c273.png",
    q1: "Premium Quality",
    q2: "Expert Dry Cleaning Included",
    q3: "Additional Charges ",
    showSquare: true,
  },
  {
    title: "Bleaching",
    price: "Rs. 250",
    discountedPrice: "Rs. 200*",
    image: "/Images/bleaching.jpg",
    q1: "Fabric Safety Assurance",
    q2: "Expert Bleaching Included",
    q3: "Premium Quality",
    showSquare: true,
  },
  {
    title: "Mini Subscription",
    price: "Rs. 599",
    discountedPrice: "Rs. 499*",
    image: "/Images/1.webp",
    q1: "Convenient Rotation",
    q2: "Up to 25 Pairs of Clothes",
    q3: "For 1 Month",
    showSquare: false,
  },
  {
    title: "Full Subscription",
    price: "Rs. 1,499",
    discountedPrice: "Free for orders above Rs. 999*",
    image: "/Images/1.webp",
    q1: "Convenient Rotation",
    q2: "Up to 50 Pairs of Clothes",
    q3: "For 1 Month",
    showSquare: false,
  },
];

const Cards = () => {
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

  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const handleMakeOrder = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  return (
    <section className="py-16 p-3 text-white bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-5xl mt-10 mb-20 font-bold text-[#042B56] text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-[#222222] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <hr />
                <div className="flex flex-col mt-2 mb-2 gap-2">
                    <span className="text-white  text-md ">Market Price: <strike>{card.price}</strike></span>
                    <span className="text-white  text-2xl ">Our Price: {card.discountedPrice}</span>
                  </div>
                  <hr />
                <div className="flex flex-col mt-3 text-sm">
                  <div className="flex flex-col gap-2">
                    <h1 className="flex items-center gap-2"><GiWashingMachine/>{card.q1}</h1>
                    <h1 className="flex items-center gap-2"><GiWashingMachine/>{card.q2}</h1>
                    <h1 className="flex items-center gap-2"><GiWashingMachine/>{card.q3}</h1>
                    
                  </div>
                  
                  <motion.button
                    className="bg-[#042B56] rounded-full font-bold text-sm py-2 px-4 mt-4 w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleMakeOrder}
                  >
                    Make an Order
                  </motion.button>
                </div>
              </div>
              {card.showSquare && (
                <motion.div
                  className="absolute square w-1/3 top-0 right-0 p-2"
                  initial={{ opacity: 0, scale: 0, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                >
                  <div className="bg-white text-black rounded-lg shadow-md p-2">
                    <img src="/Images/Main_Logo-removebg-preview.png" alt="" />
                    <hr className="w-full mt-1 h-[1px] bg-black" />
                    <div className="overflow-hidden">
                      <div className="bg-red-600 text-white">
                        <marquee
                          className="text-xs"
                          behavior="scroll"
                          direction="left"
                          scrollamount="6"
                        >
                          <h1>Book Now</h1>
                        </marquee>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md mx-4 relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 15 }}
            >
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
              <div className="flex flex-col">
                <div className="bg-white text-black p-4">
                  <img
                    src="/Images/Main_Logo-removebg-preview.png"
                    alt=""
                    className="w-full max-w-xs mx-auto"
                  />
                  <div>
                    <h2 className="text-xl text-center font-bold mb-4">
                      Get Free Pickup Service
                    </h2>
                    <div className="flex items-center text-sm"><FaCircleChevronRight className="mr-2"/> Pickup Every Friday, Wednesday, Sunday</div>
                    <div className="flex items-center text-sm"><FaCircleChevronRight className="mr-2"/>Pickup and Delivery Time 5-8 pm</div>
                    <div className="flex items-center text-sm"><FaCircleChevronRight className="mr-2"/>Deliver Within 3 Days</div>
                    <div className="flex items-center text-sm"><FaCircleChevronRight className="mr-2"/>Premium Quality</div>
                  </div>
                </div>
                <form className="p-4 bg-white" onSubmit={handleSubmit}>
                  <h2 className="text-xl font-bold mb-4">REGISTER FORM</h2>
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
                  <motion.button
                    className="bg-blue-500 text-white py-2 px-4 rounded w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule a Slot
                  </motion.button>
                </form>
              </div>
              {errors.formSubmitted && (
                <motion.p
                  className="text-green-500 text-center py-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Form submitted successfully!
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Cards;
