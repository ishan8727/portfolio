import React from 'react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import axios from 'axios'

const Footer = () => {
    return (
        <div
            className="FOOTER  snap-start h-[65vh] w-full flex flex-col border-t border-gray-700 relative"
            style={{
                backgroundImage: "url('/backgrounds/bkg1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className=" inset-0 bg-gradient-to-b from-black/40 to-black/80 z-0" />

            {/* Content */}
            <div className="top flex flex-row flex-grow relative z-10">

                {/* SOCIALS */}
                <div className="LeftElements flex flex-col w-1/4 border-r border-gray-700 p-6">
                    <p className="text-white text-2xl font-semibold tracking-wide mb-6">
                        Connect ?.
                    </p>
                    <div className="LOGOS flex gap-6">
                        <a href="https://github.com/ishan8727" target="_blank">
                            <img src="/backgrounds/githubIMG.png" alt="GitHub" className="rounded-sm invert w-15 h-15 hover:scale-130 transition" />
                        </a>
                        <a href="https://linkedin.com/in/ishanch08" target="_blank">
                            <img src="/backgrounds/linkedin.png" alt="LinkedIn" className="rounded-sm invert w-15 h-15 hover:scale-130 transition" />
                        </a>
                        <a href="https://twitter.com/ishanch08" target="_blank">
                            <img src="/backgrounds/X.png" alt="Twitter" className="invert w-15 h-15 hover:scale-130 transition" />
                        </a>
                    </div>

                    <p className="text-gray-200 text-2xl font-semibold mt-15">
                        Freelancing Profiles....
                    </p>
                        <div className="FREELANCE flex flex-row gap-5 text-sm">
                            <a href="https://www.upwork.com/freelancers/~018b8562b383355127?mp_source=share" target="_blank">
                                <img src="/logosTech/upwork.svg" alt="Upwork" className="invert w-25 h-25 hover:scale-110 transition" />
                            </a>
                            <a href="https://www.fiverr.com/ishanch08" target="_blank">
                                <img src="/logosTech/fiverr.svg" alt="Fiverr" className="invert w-23 h-23 hover:scale-110 transition" />
                            </a>
                        </div>
                </div>

                {/* SERVICES */}
                <div className="services flex flex-col w-1/4 border-r border-gray-700 p-6">
                    <p className="text-white text-2xl font-semibold tracking-wide mb-4">
                        Services
                    </p>
                    <ul className="text-gray-300 text-sm leading-7 space-y-1">
                        <li className="hover:text-white transition text-lg">⚡ SaaS Product Development</li>
                        <li className="hover:text-white transition text-lg">🧩 Reusable UI Components</li>
                        <li className="hover:text-white transition text-lg">🚀 Next.js + Tailwind Apps</li>
                        <li className="hover:text-white transition text-lg">☁️ Cloud Integrations</li>
                        <li className="hover:text-white transition text-lg">🔒 Secure Auth Systems</li>
                        <li className="hover:text-white transition text-lg">📊 Dashboard & Analytics</li>
                        <li className="hover:text-white transition text-lg">🛠️ API Development & Integration</li>
                        <li className="hover:text-white transition text-lg">🎨 UI/UX Design Implementation</li>
                        <li className="hover:text-white transition text-lg">⚙️ Automation & Workflow Tools</li>
                    </ul>
                </div>

                {/* CONTACT FORM */}
                <ContactForm/>
            </div>

            {/* Bottom Section */}
            <div className="bottom border-t border-gray-700 text-center text-gray-400 text-xs p-3 relative z-10">
                <p>
                    Crafted with ❤️ by <span className="text-white font-medium">Ishan Chaudhary</span> — always building & learning
                </p>
                <p className="mt-1">© 2005 - {new Date().getFullYear()} All rights reserved</p>
            </div>
        </div>



    )
}

export default Footer
