import React from 'react';
import { motion } from 'framer-motion';
import { Major_Mono_Display, Playfair_Display_SC } from 'next/font/google';
import Image from 'next/image';
import bkg1 from '../public/bkg1.jpg';

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
            className="bg-black h-screen text-white text-4xl snap-start pt-2 pl-2"
            style={{
                backgroundImage: `url(${bkg1.src})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
            }}
        >
            {/* Header with name and socials - EXACT original spacing */}
            <div className="flex justify-between items-center w-full px-4">
                <div className={`${majorMono.className} text-4xl flex`}>
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

                <div className="socials flex pr-30">
                    <Image src="/github.svg" alt="GitHub" width={24} height={24} />
                    <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
                </div>
            </div>

            {/* Loading line - EXACT original */}
            <motion.div
                initial={{ width: 10 }}
                animate={{ width: 500 }}
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
                        className={`${playfair.className} text-9xl tracking-wide leading-none block mb-15`}
                    >
                        SOFTWARE <br /> DEVELOPER
                    </motion.div>
                </div>
                <div className={`font-serif mt-4 mb-20`}>
                    <p className='text-4xl'>
                        from India. <br />
                        I am a keen learner who likes to build and explore tech.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;