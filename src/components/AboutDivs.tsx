import React from 'react'
import { motion } from 'framer-motion'

const AboutDivs = () => {
  return (
    <div className='flex flex-col'>

      {/* HOME */}
      <motion.div
        className='project mb-15'
        whileHover={{ scale: 1, backgroundColor: "#dc2626" }}
        transition={{ type: "spring", stiffness: 900, damping: 50 }}
      >
        <motion.text
          className='text-8xl bg-white text-black font-medium p-4'
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 900, damping: 50 }}
        >
          HOME
        </motion.text>
      </motion.div>

      {/* PROJECTs */}
      <motion.div
        className='project mb-5'
        whileHover={{ scale: 1.2, backgroundColor: "#dc2626" }}
        transition={{ type: "spring", stiffness: 900, damping: 50 }}
      >
        <motion.text
          className='text-6xl'
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 900, damping: 50 }}
        >
          PROJECTs
        </motion.text>
      </motion.div>

      {/* SKILLS */}
      <motion.div
        className='Skills mb-5'
        whileHover={{ scale: 1.2, backgroundColor: "#dc2626" }}
        transition={{ type: "spring", stiffness: 900, damping: 50 }}
      >
        <motion.text
          className='text-6xl'
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 900, damping: 50 }}
        >
          Skills
        </motion.text>
      </motion.div>

      {/* CONTACT */}
      <motion.div
        className='Contact mb-15'
        whileHover={{ scale: 1.2, backgroundColor: "#dc2626" }}
        transition={{ type: "spring", stiffness: 900, damping: 50 }}
      >
        <motion.text
          className='text-6xl text-white'
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 900, damping: 50 }}
        >
          Contact
        </motion.text>
      </motion.div>

      {/* EXIT */}
      <motion.div
        className='border-amber-50 Exit w-[100px] cursor-pointer'
        whileHover={{ scale: 1.2, backgroundColor: "#dc2626" }}
        transition={{ type: "spring", stiffness: 900, damping: 50 }}
        onClick={() => window.history.back()}
      >
        <motion.text
          className='text-6xl bg-red-800 w-full text-black'
          whileHover={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 900, damping: 50 }}
        >
          EXIT?
        </motion.text>
      </motion.div>

    </div>
  )
}

export default AboutDivs