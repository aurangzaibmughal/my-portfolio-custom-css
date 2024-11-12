"use client";


import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




export default function Home() {
  useEffect (() => {
    aos.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset:160,
    });
    aos.refresh()
    },[]);
  return (
    <main>
      
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
      <Footer />
    </main>
  )
};

