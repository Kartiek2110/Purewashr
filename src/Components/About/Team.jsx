import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Deepak Singhal",
    role: "CO-Founder & CEO",
    image: "https://purewashr.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-28-at-9.59.56-AM.jpeg",
    description: "Passionate entrepreneur and skilled programmer, aligning both talents in a startup venture.",
    linkedin: "https://www.linkedin.com/in/devopsdeepak/",
    instagram: "https://www.instagram.com/devopsdeepak/",
    email: "mailto:deepak@purewashr.com"
  },
  {
    name: "Manas Srivastava",
    role: "CO-Founder",
    image: "https://purewashr.com/wp-content/uploads/2024/06/IMG-20240512-WA0003-1.jpg",
    description: "Block by block, I'm building the future 🚀",
    linkedin: "https://www.linkedin.com/in/manas-srivastava-7618371b5",
    instagram: "https://www.instagram.com/king_manas1",
    email: "mailto:manas@purewashr.com"
  },
  {
    name: "Gyanesh Dwivedi",
    role: "COO",
    image: "https://purewashr.com/wp-content/uploads/2024/07/Gyanesh.jpg",
    description: "Human with AI depth",
    email: "mailto:gyanesh@purewashr.com"
  },
  {
    name: "Apurva B Raj",
    role: "CTO",
    image: "https://purewashr.com/wp-content/uploads/2024/06/IMG_20240616_224409_430_11zon-1.jpg",
    description: "Tech world enthusiast with exceptional problem-solving skills.",
    linkedin: "https://www.linkedin.com/in/apurva-b-raj",
    instagram: "https://www.instagram.com/",
    email: "mailto:apurva@purewashr.com"
  }
];

const TeamMember = ({ member, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, filter: "blur(4px)" },
    visible: { 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.8, delay: index * 0.2 + 0.2 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-2xl"
    >
      <motion.div variants={imageVariants} className="relative h-64 overflow-hidden">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
          <p className="text-lg font-semibold">{member.role}</p>
        </div>
      </motion.div>
      <div className="p-6">
        <p className="text-gray-700 mb-4">{member.description}</p>
        <div className="flex space-x-4">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
          )}
          {member.instagram && (
            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
          )}
          {member.email && (
            <a href={member.email} className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <FaEnvelope size={24} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 p-10 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="text-5xl font-bold text-center mb-16 text-gray-800"
        >
          Our Visionary Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
