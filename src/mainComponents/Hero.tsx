import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Video from '../assets/Video'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); 
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => { 
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);  
    return () => {
      window.removeEventListener('resize', handleResize);
      
    };
  }, []);

  return (
    <section className={`bg-black text-white min-h-screen flex flex-col ${isMobile ? "items-center justify-start pt-16" : "px-20 items-start pt-12 justify-center "}`}>  
      <div className={`${isMobile ? "space-y-2 m-5" : "space-y-4 w-3/6"}`}>
        <div className='z-10 relative'>
          <motion.h1
            className="text-6xl md:text-9xl font-sten leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Hello!!!
          </motion.h1>
          <motion.h2
            className="text-6xl md:text-9xl font-sten leading-tight text-lime-400"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            I'm Rodrigo <span className="text-white">'NeoEx'</span>
          </motion.h2>        
        </div>          
          { isMobile
          ? <React.Fragment/>
          : <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} z-0`}>
              <Video onLoaded={() => setIsLoaded(true)}/>
            </div>
          }          
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full mt-5">
        <motion.div
          className={`text-4xl md:text-5xl font-helv ${isMobile ? "pl-6" : ""}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >     
          <p>Project Mananger</p>
          <p>FrontEnd Developer</p>  
        </motion.div>       
      </div>  
    </section>
  );
};

export default Hero;
