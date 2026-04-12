import React, { useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import profileImage from "../assets/Ram_profile.jpg";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row min-h-screen overflow-hidden font-sans">
        {/* Left Side */}
        <div className="flex-1 bg-gray-200 p-10 md:p-20 flex flex-col justify-center relative z-10">
          {/* Logo */}
         
          {/* Intro Text */}
          <div className="max-w-lg mx-auto md:mx-0">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">
              Hi, I am
            </h2>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
              Ram Nepali
            </h1>
            <p className="text-gray-500 font-semibold mb-10">
              Flutter & Android Developer /{" "}
              <span className="text-gray-700">Front-end Developer</span>
            </p>

            {/* Social Icons */}
            <div className="flex gap-5">
              <a
                href="#"
                className="bg-gray-300 hover:bg-gray-400 p-3 rounded-md shadow-md transition"
              >
                <Mail className="w-5 h-5 text-gray-800" />
              </a>
              <a
                href="#"
                className="bg-gray-300 hover:bg-gray-400 p-3 rounded-md shadow-md transition"
              >
                <Github className="w-5 h-5 text-gray-800" />
              </a>
              <a
                href="#"
                className="bg-gray-300 hover:bg-gray-400 p-3 rounded-md shadow-md transition"
              >
                <Linkedin className="w-5 h-5 text-gray-800" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 bg-black relative flex flex-col justify-center items-center">
          {/* Top Navigation */}
          <nav className="absolute top-8 right-12 flex items-center gap-8 text-white text-sm font-medium">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-gray-400 transition"
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="hover:text-gray-400 transition"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection(portfolioRef)}
              className="hover:text-gray-400 transition"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-100 transition"
            >
              CONTACT ME
            </button>
          </nav>

          {/* Profile Image */}
          <img
            src={profileImage}
            alt="Profile"
            className="w-80 h-80 md:w-[420px] md:h-[420px] object-cover z-10"
          />

          {/* Diagonal Background Divider */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 clip-path-diagonal z-0"></div>
        </div>
      </section>

      {/* Sections Below */}
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}
