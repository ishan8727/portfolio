import React from 'react'
import { Major_Mono_Display, Playfair_Display_SC } from 'next/font/google';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Ripple from '@/components/ui/Ripple';

const majorMono = Major_Mono_Display({
  subsets: ['latin'],
  weight: '400',
});

const playfair = Playfair_Display_SC({
  subsets: ['latin'],
  weight: '700',
});

const techList = [
  { name: "React", logo: "/logosTech/React.png", link: "https://reactjs.org" },
  { name: "Next.js", logo: "/logosTech/Next.png", link: "https://nextjs.org" },
  { name: "Tailwind CSS", logo: "/logosTech/Tailwind.png", link: "https://tailwindcss.com" },
  { name: "JavaScript", logo: "/logosTech/JS.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", logo: "/logosTech/TS.png", link: "https://www.typescriptlang.org" },
  { name: "Node.js", logo: "/logosTech/Node.png", link: "https://nodejs.org" },
  { name: "Express.js", logo: "/logosTech/Express.svg", link: "https://expressjs.com" },
  { name: "Java", logo: "/logosTech/Java.png", link: "https://www.java.com" },
  { name: "Python", logo: "/logosTech/Python.png", link: "https://www.python.org" },
  { name: "Postman", logo: "/logosTech/Postman.svg", link: "https://www.postman.com" },
  { name: "PostgreSQL", logo: "/logosTech/Postgres.svg", link: "https://www.postgresql.org" },
  { name: "Django", logo: "/logosTech/Django.png", link: "https://www.djangoproject.com" },
  { name: "NPM", logo: "/logosTech/NPM.png", link: "https://www.npmjs.com" },
  { name: "Git", logo: "/logosTech/GIT.png", link: "https://git-scm.com" },
  { name: "GitHub", logo: "/logosTech/Github.png", link: "https://github.com" },
  { name: "Figma", logo: "/logosTech/Figma.png", link: "https://www.figma.com" },
];

const Contact = () => {
  return (
    < div
      id="contact"
      className="snap-start min-h-screen w-full relative flex flex-col"
      style={{
        backgroundImage: "url(/backgrounds/bkg4.webp)",
        backgroundSize: 'cover',
        backgroundPosition: "center",
      }
      }
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Header */}
        <div className='absolute top-10 left-6 z-20'>
          <motion.div
            className={`${majorMono.className} text-5xl text-white ml-6`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SOME OTHER INFO
          </motion.div>
          {/* underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 700 }}
            transition={{ duration: 0.7 }}
            className="bg-white h-[2px] mt-2 mb-15"
          />

        {/* Tech Badges */}
        <div className=" max-w-5xl rounded-lg bg-gradient-to-br from-[#0f1115]/80 to-[#181c24]/80 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
          <p className={`font-mono text-2xl text-white`}>
            Technologies I work with (but not limited to)...
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-7">
            {techList.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="tech-badge group flex items-center gap-4 rounded-md border border-white/10 bg-gradient-to-b from-white/5 to-white/10 px-4 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition-transform hover:scale-105 hover:shadow-lg cursor-pointer"
                onClick={() => window.open(tech.link, '_blank')}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Image src={tech.logo} alt={`${tech.name} Logo`} width={32} height={32} className="filter invert" />
                <span className="tech-name font-medium text-white/90">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-8 text-center">
            <p className="text-white/80 text-base inline-block px-4 py-2 rounded-md border border-slate-400">
              ...and always exploring more!
            </p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 shadow-lg w-full flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Image src={'/logosTech/Code.png'} alt='code' width={28} height={28} className="filter invert" />
              </div>
              <h3 className={`text-xl font-bold text-white`}>End-to-End SaaS Products</h3>
            </div>
            <p className="text-slate-300 font-medium">
              Building scalable, production-ready SaaS products — from frontend to backend, with clean code and cloud-ready deployments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 shadow-lg w-full flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Image src={'/logosTech/Growth.png'} alt='growth' width={28} height={28} className="filter invert" />
              </div>
              <h3 className={`text-xl font-bold text-white`}>Continuous Learning & Growth</h3>
            </div>
            <p className="text-slate-300 font-medium">
              Constantly evolving with new frameworks, tools, and best practices to deliver cutting-edge solutions that grow with your business.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
