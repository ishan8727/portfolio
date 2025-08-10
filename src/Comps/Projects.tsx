'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Major_Mono_Display, Playfair_Display_SC } from 'next/font/google';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowLeft, ArrowRight } from 'lucide-react'

const majorMono = Major_Mono_Display({
    subsets: ['latin'],
    weight: '400',
});

const playfair = Playfair_Display_SC({
    subsets: ['latin'],
    weight: '700',
});

// Projects data: left is a scrollable/carousel gallery, right is description/details
const projects = [
    {
        id: 'portfolio',
        title: 'Portfolio Website',
        description:
            'A responsive personal portfolio with animated sections, theme toggle, and smooth scroll. Built with Next.js, Tailwind, and Framer Motion.',
        techs: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        images: ['/bkg1.jpg', '/bkg2.jpg', '/bkg3.jpg'],
        links: { demo: '#', github: '#' },
    },
    {
        id: 'dashboard',
        title: 'Analytics Dashboard',
        description:
            'Interactive dashboard featuring charts, filters, and real-time updates. Focus on accessibility and performance.',
        techs: ['React', 'Zustand', 'TailwindCSS', 'Embla Carousel'],
        images: ['/bkg2.jpg', '/bkg3.jpg', '/bkg4.jpg'],
        links: { demo: '#', github: '#' },
    },
    {
        id: 'landing',
        title: 'Product Landing Page',
        description:
            'High-converting landing page with testimonial slider, feature highlights, and sticky CTA.',
        techs: ['Next.js', 'TailwindCSS', 'SEO'],
        images: ['/bkg3.jpg', '/bkg4.jpg', '/bkgGOOD.jpg'],
        links: { demo: '#', github: '#' },
    },
];

const Projects = () => {
    const [current, setCurrent] = React.useState(0)
    const p = projects[current]

    const nextProject = () => setCurrent((i) => (i + 1) % projects.length)
    const prevProject = () => setCurrent((i) => (i - 1 + projects.length) % projects.length)

    return (
        <div>
            <section
                id="projects"
                className="bg-amber-50 h-screen  text-white text-4xl snap-start"
                style={{
                    backgroundImage: "url('/bkg3.jpg')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                }}
            >
                {/* START */}

                {/* Header with controls */}
                <div className='PROJECTheader pt-10 flex items-center justify-between pr-6 relative z-20 pointer-events-auto'>
                    <motion.div
                        className={`${majorMono.className} text-6xl text-red-500 ml-6`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        PROJECTS
                    </motion.div>
                    <div className='flex items-center gap-2'>
                        <button
                            onClick={prevProject}
                            aria-label='Previous project'
                            className='inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 hover:bg-white/20 text-white p-2 transition'
                        >
                            <motion.div
                                whileHover={{ scale: 1.5 }} 
                                whileTap={{ scale: 1 }}      
                                transition={{ type: "spring", stiffness: 200, damping:10 }}
                                className="cursor-pointer"
                            >
                                <ArrowLeft className="h-12 w-12" />
                            </motion.div>
                        </button>
                        <button
                            onClick={nextProject}
                            aria-label='Next project'
                            className='inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 hover:bg-white/20 text-white p-2 transition'
                        >
                            <motion.div
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                className="cursor-pointer"
                            >
                                <ArrowRight className="h-12 w-12" />
                            </motion.div>
                        </button>
                    </div>
                </div>
                {/* underline */}
                <motion.div
                    initial={{ width: 10 }}
                    animate={{ width: 700 }}
                    transition={{ duration: 0.5 }}
                    className="bg-amber-50 h-[2px] ml-0 mt-2 relative z-20"
                />

                {/* Project content */}
                <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="projectBox  w-full h-[85vh] grid grid-cols-1 md:grid-cols-2 gap-4 p-4 items-stretch bg-black/20 backdrop-blur-[1px] mt-4 relative z-10"
                >
                    {/* Left: image gallery (carousel) */}
                    {/* BORDER */}
                    <div className=' h-full p-4 flex items-center justify-center relative'>
                        <Carousel className='w-full h-full' opts={{ loop: true }}>
                            <CarouselContent className='h-full'>
                                {p.images.map((src, i) => (
                                    <CarouselItem key={i} className='h-full'>
                                        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden rounded-md">
                                            <img src={src} alt={`${p.title} image ${i + 1}`} className="w-full h-full object-cover" />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className='size-10 md:size-12 left-3' />
                            <CarouselNext className='size-10 md:size-12 right-3' />
                        </Carousel>
                    </div>

                    {/* Right: description & details */}
                    {/* BORDER */}
                    <div className=' h-full p-6 overflow-y-auto'>
                        <h3 className={`${playfair.className} text-3xl md:text-4xl text-white mb-4`}>{p.title}</h3>
                        <p className='text-white/90 text-base md:text-lg mb-4'>
                            {p.description}
                        </p>
                        <div className='flex flex-wrap gap-2 mb-6'>
                            {p.techs.map((t) => (
                                <span key={t} className='text-xs bg-white/10 text-white border border-white/20 px-2 py-1 rounded'>
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className='flex gap-3'>
                            {p.links.demo && (
                                <a href={p.links.demo} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 rounded-md border border-white/30 text-white px-3 py-2 hover:bg-white/10 transition'>
                                    Live Demo
                                </a>
                            )}
                            {p.links.github && (
                                <a href={p.links.github} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 rounded-md border border-white/30 text-white px-3 py-2 hover:bg-white/10 transition'>
                                    <img src='/githubIMG.png' alt='' className='h-5 w-5' />
                                    Code
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
                {/* DIV */}


            </section>
        </div>
    )
}

export default Projects