import React from 'react'
import { motion } from 'framer-motion'
import { Major_Mono_Display, Playfair_Display_SC } from 'next/font/google';

const majorMono = Major_Mono_Display({
  subsets: ['latin'],
  weight: '400',
});

const playfair = Playfair_Display_SC({
  subsets: ['latin'],
  weight: '700',
});


const AboutDivs = () => {
  // Smooth scroll function to navigate to specific sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className='flex flex-col'>

      {/* HOME */}
      {/* <motion.div
        className='project mb-15 cursor-pointer'
        whileHover={{ scale: 1, backgroundColor: "#dc2626" }}
        transition={{ type: "spring", stiffness: 900, damping: 50 }}
        onClick={() => scrollToSection('about')}
      >
        <motion.p
          className='text-8xl bg-white text-black font-medium p-4'
          transition={{ type: "spring", stiffness: 900, damping: 50 }}
        >
          HOME
        </motion.p>
      </motion.div> */}

      {/* PROJECTs */}
      <motion.div
        className='project mb-5 cursor-pointer'
        whileHover={{ scale: 1.2, backgroundColor: "#dc2626" }}
        transition={{ type: "spring", stiffness: 900, damping: 50 }}
        onClick={() => scrollToSection('projects')}
      >
        <motion.p
          className={`text-4xl ${majorMono.className}`}
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 900, damping: 50 }}
        >
          Projects
        </motion.p>
      </motion.div>



      {/* MORE info */}
      <motion.div
        className='Contact mb-5 cursor-pointer'
        whileHover={{ scale: 1.2, backgroundColor: "#dc2626" }}
        transition={{ type: "spring", stiffness: 900, damping: 50 }}
        onClick={() => scrollToSection('contact')}
      >
        <motion.p
          className={`text-4xl text-white ${majorMono.className}`}
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 900, damping: 50 }}
        >
          More?
        </motion.p>

      </motion.div>

      {/* CONTACT */}
      <motion.div
        className='Contact mb-12 cursor-pointer'
        whileHover={{ scale: 1.2, backgroundColor: "#dc2626" }}
        transition={{ type: "spring", stiffness: 900, damping: 50 }}
        onClick={() => scrollToSection('footer')}
      >
        <motion.p
          className={`text-4xl text-white ${majorMono.className}`}
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 900, damping: 50 }}
        >
          Go Down
        </motion.p>
      </motion.div>

      {/* EXIT */}
      <motion.div
        className='Exit cursor-pointer w-full'
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 900, damping: 50 }}
        onClick={() => window.history.back()}
      >
        <motion.p
          className={`text-5xl bg-red-800 text-black p-2 ${majorMono.className}`}
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 900, damping: 50 }}
        >
          EXIT?
        </motion.p>
      </motion.div>

    </div>
  )
}

export default AboutDivs;