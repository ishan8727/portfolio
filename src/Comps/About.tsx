import React from 'react';
import { motion, scale } from 'framer-motion';
import { Major_Mono_Display, Playfair_Display_SC } from 'next/font/google';
import Image from 'next/image';
import { Link } from 'lucide-react';
import AboutDivs from '@/components/AboutDivs';

const majorMono = Major_Mono_Display({
    subsets: ['latin'],
    weight: '400',
});

const playfair = Playfair_Display_SC({
    subsets: ['latin'],
    weight: '700',
});

const About = () => {
    return (
        <section
            id="about"
            className="relative bg-black h-screen text-white text-4xl snap-start pt-2 pl-2"
            style={{
                backgroundImage: "url('/bkg1.jpg')",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
            }}
        >
            {/* Header with name and socials */}
            <div className="flex justify-between items-center w-full px-4">
                <div className={`${majorMono.className} text-5xl flex`}>
                    {"ISHAN CHAUDHARY".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </div>

                <div className="socials flex pt-2">
                    <motion.div
                        className='flex flex-row-reverse'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <motion.div className="flex items-center">
                            {/* GitHub Link */}
                            <motion.a
                                href="https://github.com/ishan8727"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 0.7 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="inline-block"
                            >
                                <Image
                                    className="rounded-2xl cursor-pointer"
                                    src="/githubIMG.png"
                                    alt="GitHub"
                                    height={40}
                                    width={160}
                                />
                            </motion.a>

                            {/* LinkedIn Link */}
                            <motion.a
                                href="https://www.linkedin.com/in/ishanch08"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 0.7 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="inline-block ml-10"
                            >
                                <Image
                                    className="rounded-2xl cursor-pointer"
                                    src="/linkedin.png"
                                    alt="LinkedIn"
                                    height={40}  // Changed from 1000 to match GitHub image proportion
                                    width={160}
                                />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Loading line - EXACT original */}
            <motion.div
                initial={{ width: 10 }}
                animate={{ width: 700 }}
                transition={{ duration: 0.5 }}
                className="bg-amber-50 h-[1px] mt-[10px]"
            />

            {/* Main content with ORIGINAL spacing */}
            <div className='flex flex-col justify-end h-screen w-full mb-[100px]'>
                <div className="text-intro w-[90vw]">
                    <span className={`font-serif text-5xl tracking-wide leading-none block ml-3`}>
                        I am a &#10733;
                    </span>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={`${playfair.className} text-9xl tracking-wide leading-none block mb-5`}
                    >
                        SOFTWARE <br /> DEVELOPER
                    </motion.div>
                </div>
                <div className={`font-serif mt-0 mb-55`}>
                    <p className='text-4xl'>
                        from India. <br />
                        I am a keen learner who likes to build and explore tech.
                    </p>
                </div>
            </div>
            <div className='absolute right-4 bottom-10'>
                <AboutDivs />
            </div>
        </section>
    );
};

export default About;