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

const projects = [
    {
        id: 'portfolio',
        title: 'Portfolio Website',
        description:
            'A responsive personal portfolio with animated sections, theme toggle, and smooth scroll. Built with Next.js, Tailwind, and Framer Motion.',
        techs: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        images: ['/backgrounds/bkg1.webp', '/backgrounds/bkg2.webp', '/backgrounds/bkg3.webp'],
        links: { demo: '#', github: '#' },
    },
    {
        id: 'dashboard',
        title: 'Analytics Dashboard',
        description:
            'Interactive dashboard featuring charts, filters, and real-time updates. Focus on accessibility and performance.',
        techs: ['React', 'Zustand', 'TailwindCSS', 'Embla Carousel'],
        images: ['/backgrounds/bkg2.webp', '/backgrounds/bkg3.webp', '/backgrounds/bkg4.webp'],
        links: { demo: '#', github: '#' },
    },
    {
        id: 'landing',
        title: 'Product Landing Page',
        description:
            'High-converting landing page with testimonial slider, feature highlights, and sticky CTA.',
        techs: ['Next.js', 'TailwindCSS', 'SEO'],
        images: ['/backgrounds/bkg3.webp', '/backgrounds/bkg4.webp', '/backgrounds/bkgGOOD.webp'],
        links: { demo: '#', github: '#' },
    },
];

const Projects = () => {
    const [current, setCurrent] = React.useState(0)
    const p = projects[current]

    const nextProject = () => setCurrent((i) => (i + 1) % projects.length)
    const prevProject = () => setCurrent((i) => (i - 1 + projects.length) % projects.length)

    return (
        <section
            id="projects"
            className="relative h-screen snap-start overflow-hidden"
        >
            {/* Background with overlay */}
            <motion.div
                key={p.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/backgrounds/bkg4.webp)` }}
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

            {/* Header */}
            <div className="relative z-20 pt-10 px-6 flex items-center justify-between">
                <motion.h2
                    className={`${majorMono.className} text-5xl text-white`}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    PROJECTS
                </motion.h2>
                <div className="flex gap-3">
                    <button onClick={prevProject} className="rounded-full p-2 border border-white/40 bg-white/10 hover:bg-white/20">
                        <ArrowLeft className="h-8 w-8 text-white" />
                    </button>
                    <button onClick={nextProject} className="rounded-full p-2 border border-white/40 bg-white/10 hover:bg-white/20">
                        <ArrowRight className="h-8 w-8 text-white" />
                    </button>
                </div>
            </div>

            {/* Divider underline */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: 500 }}
                transition={{ duration: 0.6 }}
                className="h-[2px] bg-white ml-6 mt-2 relative z-20"
            />

            {/* Project Box */}
            <div
                key={`${p.id}-${current}`}
                className="relative z-20 w-full h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-6"
            >
                {/* Carousel */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Carousel className="w-full h-full" opts={{ loop: true }}>
                        <CarouselContent>
                            {p.images.map((src, i) => (
                                <CarouselItem key={i}>
                                    <motion.img
                                        src={src}
                                        alt={`${p.title} ${i + 1}`}
                                        className="w-full h-[60vh] md:h-[70vh] object-cover rounded-2xl"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 120 }}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="size-10 md:size-12 left-3" />
                        <CarouselNext className="size-10 md:size-12 right-3" />
                    </Carousel>
                </div>

                {/* Text */}
                <div className="p-6 overflow-y-auto">
                    <h3 className={`font-mono text-3xl md:text-4xl text-white mb-4`}>
                        {p.title}
                    </h3>
                    <p className="text-white/90 text-base md:text-lg mb-4">
                        {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {p.techs.map((t) => (
                            <span key={t} className="text-xs bg-white/10 text-white border border-white/20 px-3 py-1 rounded-md">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        {p.links.demo && (
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href={p.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-lg border border-white/50 text-white hover:bg-white/20 transition"
                            >
                                Live Demo
                            </motion.a>
                        )}
                        {p.links.github && (
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href={p.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-lg border border-white/40 text-white hover:bg-white/10 flex items-center gap-2"
                            >
                                <img src="/backgrounds/githubIMG.png" alt="GitHub" className="h-5 w-5" />
                                Code
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
