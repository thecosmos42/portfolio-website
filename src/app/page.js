'use client';
import Navbar from "./components/Navbar";
import Header from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Projects />
    <Contact />
    </>
  );
}
