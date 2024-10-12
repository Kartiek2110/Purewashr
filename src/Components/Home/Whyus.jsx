import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBolt, FaTruck, FaCoins, FaMicrochip, FaWater, FaBroom, FaLeaf, FaClock, FaShieldAlt, FaBox } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const containerRef = useRef(null);
  const reasonsRef = useRef([]);
  const iconsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const reasons = [
    { icon: FaBolt, text: "Quick Service" },
    { icon: FaTruck, text: "Doorstep Pick up and Drop" },
    { icon: FaCoins, text: "Affordable per kilo pricing" },
    { icon: FaMicrochip, text: "State-of-the-art Technology" },
    { icon: FaWater, text: "Water Conservation" },
    { icon: FaBroom, text: "Professional cleaning" },
    { icon: FaLeaf, text: "Eco-friendly Detergents" },
    { icon: FaClock, text: "On-demand service" },
    { icon: FaShieldAlt, text: "100% Sanitized Clothes" },
    { icon: FaBox, text: "Custom Packaging Options" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const reasonElements = reasonsRef.current;
    const iconElements = iconsRef.current;

    gsap.set(container, { opacity: 0 });
    gsap.set(reasonElements, { opacity: 0, scale: 0.5 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 60%",
        end: "60% center",
        once: true,
      }
    });

    tl.to(container, { opacity: 1, duration: 0.8 });

    reasonElements.forEach((element, index) => {
      const delay = index * 0.05;
      let fromVars = {};
      
      if (!isMobile) {
        if (index < 3) {
          fromVars = { x: '-100%', y: 0 }; // Left
        } else if (index < 6) {
          fromVars = { x: '100%', y: 0 }; // Right
        } else {
          fromVars = { x: 0, y: '-100%' }; // Top
        }
      } else {
        fromVars = { y: '50px' }; // From bottom for mobile
      }

      tl.fromTo(element, 
        { ...fromVars, opacity: 0, scale: 0.5 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "back.out(1.7)",
          delay: delay
        },
        "-=0.25"
      );
    });

    // Add moving animation to icons
    iconElements.forEach((icon) => {
      gsap.to(icon, {
        y: -10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    return () => {
      tl.kill();
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="bg-gray-100 py-16 flex justify-center items-center min-h-screen"
    >
      <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Why Choose PureWashr?
        </h2>
        {!isMobile ? (
          <div className="relative w-full h-[600px] mx-auto flex justify-center mb-10 items-center">
            {/* Washing machine image (top view) */}
            <div className="absolute w-[200px] h-[200px] rounded-full bg-gray-200 overflow-hidden">
              <img src="https://media.istockphoto.com/id/166667897/vector/dirty-clothes-and-washer-machine.jpg?s=612x612&w=0&k=20&c=tLOw4_UkAJoi35z9uETAPBGbkU8kPB47e8rp2OkpYSQ=" alt="Washing Machine Top View" className="w-full h-full object-cover" />
            </div>
            
            {/* Main logo at the center */}
            <div className="absolute w-[320px] h-[320px] rounded-full bg-white shadow-lg flex items-center justify-center z-10">
              <img src="/Images/Main_Logo-removebg-preview.png" alt="PureWashr Logo" className="w-[350px] h-[350px] object-contain" />
            </div>
            
            {reasons.map((reason, index) => {
              const angle = index * (2 * Math.PI / reasons.length);
              const radius = 250;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={index}
                  ref={el => reasonsRef.current[index] = el}
                  className="absolute flex flex-col items-center justify-center"
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: 'translate(-50%, -50%)',
                    width: '150px',
                  }}
                >
                  <div className="w-24 h-24 rounded-full shadow-md mb-3 overflow-hidden flex items-center justify-center bg-white mx-auto relative">
                    <div className="absolute inset-0 border-4 border-blue-500 rounded-full"></div>
                    <reason.icon ref={el => iconsRef.current[index] = el} className="w-12 h-12 text-blue-500 z-10" />
                  </div>
                  <span className="text-sm font-medium text-center">{reason.text}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                ref={el => reasonsRef.current[index] = el}
                className="flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full shadow-md mb-3 overflow-hidden flex items-center justify-center bg-white mx-auto relative">
                  <div className="absolute inset-0 border-4 border-blue-500 rounded-full"></div>
                  <reason.icon ref={el => iconsRef.current[index] = el} className="w-10 h-10 text-blue-500 z-10" />
                </div>
                <span className="text-xs font-medium text-center">{reason.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyUs;
