import React from 'react'
import { motion } from 'framer-motion'

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

  const downloadResume = (():void => {
    const link = document.createElement("a");
    link.href = '/Resume.pdf';
    link.download = 'Ishan_SDE_Resume.pdf';
    link.click();
  })

  return (
    <div className='flex flex-col'>

      {/* HOME */}
      <motion.div
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
      </motion.div>

      {/* PROJECTs */}
      <motion.div
        className='project mb-5 cursor-pointer'
        whileHover={{ scale: 1.2, backgroundColor: "#dc2626" }}
        transition={{ type: "spring", stiffness: 900, damping: 50 }}
        onClick={() => scrollToSection('projects')}
      >
        <motion.p
          className='text-6xl'
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 900, damping: 50 }}
        >
          PROJECTs
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
          className='text-6xl text-white'
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 900, damping: 50 }}
        >
          More?
        </motion.p>

      </motion.div>

      {/* CONTACT */}
      <motion.button
        onClick={downloadResume}
        className='Contact mb-15 cursor-pointer'
        whileHover={{ scale: 1.2, backgroundColor: "#dc2626" }}
        transition={{ type: "spring", stiffness: 900, damping: 50 }}
      >
        <motion.p
          className='text-6xl text-white'
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 900, damping: 50 }}
        >
          Get Resume
        </motion.p>
      </motion.button>
      {/* EXIT */}
      <motion.div
        className='Exit cursor-pointer w-full'
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 900, damping: 50 }}
        onClick={() => window.history.back()}
      >
        <motion.p
          className='text-6xl bg-red-800 text-black p-2'
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 900, damping: 50 }}
        >
          EXIT?
        </motion.p>
      </motion.div>

    </div>
  )
}

export default AboutDivs