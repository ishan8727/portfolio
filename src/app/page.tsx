"use client";

import Footer from "@/Comps/Footer";
import About from "@/Comps/About";
import Projects from "@/Comps/Projects";
import Contact
 from "@/Comps/Contact";


export default function Home() {
  return (
    <>
      <div className="h-screen overflow-x-hidden overflow-y-auto snap-y snap-mandatory">
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </div>
    </>
  );
}


