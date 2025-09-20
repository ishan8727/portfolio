import React from 'react';
import { motion } from 'framer-motion';
import { Major_Mono_Display, Playfair_Display_SC } from 'next/font/google';
import Image from 'next/image';
import AboutDivs from '@/components/AboutDivs';
import Tooltip from '../components/ui/Tooltip';

const majorMono = Major_Mono_Display({
    subsets: ['latin'],
    weight: '400',
});

const playfair = Playfair_Display_SC({
    subsets: ['latin'],
    weight: '700',
});

const About = () => {

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Resume.pdf';
        link.download = 'Ishan_SDE_Resume.pdf';
        link.click();
    };

    return (
        <section
            id="about"
            className="relative bg-black h-screen text-white text-4xl snap-start pt-2 pl-2 overflow-hidden"
            style={{
                backgroundImage: "url('/backgrounds/bkg1.jpg')",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay layer */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header with name and socials */}
                <div className="flex justify-between items-center w-full px-4">
                    <div className="nameUnderline">
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
                        <motion.div
                            className='bg-white w-150 h-[1px] border-2 mt-4'
                            initial={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.1 }}
                            animate={{ opacity: 1, y: 0 }}
                        >

                        </motion.div>
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
                                    whileHover={{ scale: 1.3 }}
                                    className="inline-block"
                                >
                                    <Tooltip text={'Github?'}>
                                        <Image
                                            className="rounded-md cursor-pointer invert"
                                            src="/backgrounds/githubIMG.png"
                                            alt="GitHub"
                                            height={30}
                                            width={50}
                                        />
                                    </Tooltip>
                                </motion.a>

                                {/* LinkedIn Link */}
                                <motion.a
                                    href="https://www.linkedin.com/in/ishanch08"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.3 }}
                                    className="inline-block ml-5 invert"
                                >
                                    <Tooltip text={'LinkedIn?'}>
                                        <Image
                                            className="rounded-md cursor-pointer"
                                            src="/backgrounds/linkedin.png"
                                            alt="LinkedIn"
                                            height={30}
                                            width={50}
                                        />
                                    </Tooltip>

                                </motion.a>
                                {/* { Resume } */}
                                <motion.a
                                    onClick={downloadResume}
                                    whileHover={{ scale: 1.3 }}
                                    className="inline-block ml-5 mr-2 invert"
                                >

                                    <Tooltip text={'Resume'}>
                                        <Image
                                            className="rounded-md cursor-pointer "
                                            src="/backgrounds/resume.png"
                                            alt="LinkedIn"
                                            height={30}
                                            width={50}
                                        />
                                    </Tooltip>
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Loading line */}
                <motion.div
                    initial={{ width: 10 }}
                    animate={{ width: 700 }}
                    transition={{ duration: 0.5 }}
                    className="bg-amber-50 h-[1px] mt-[10px]"
                />

                {/* Main content */}
                <div className='flex flex-col justify-end h-screen w-full mt-[50vh]'>
                    <div className="text-intro w-[90vw]">
                        <span className={`text-4xl tracking-wide leading-none block ml-3`}>
                            I am a &#10733;
                        </span>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className={`font-serif font-bold text-9xl tracking-wide leading-none block mb-5`}
                        >
                            SOFTWARE <br /> DEVELOPER
                        </motion.div>
                    </div>
                    <div className={`mt-0 mb-55`}>
                        <p className='text-4xl'>
                            from India. <br />
                            I am a keen learner who likes to build and explore tech.
                        </p>
                    </div>
                </div>

                {/* Floating Divs */}
                <div className='absolute right-4 bottom-10 z-10'>
                    <AboutDivs />
                </div>
            </div>
        </section>
    );
};

export default About;
