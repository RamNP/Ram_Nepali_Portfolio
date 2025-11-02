import React from "react";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "E-Commerce Mobile App",
    description: "A cross-platform shopping application built with **Flutter** and **Firebase**. Features state management with Provider and real-time inventory.",
    technologies: ["Flutter", "Dart", "Firebase", "Provider"],
    imageUrl: "https://yavuzceliker.github.io/sample-images/image-1021.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  
  {
    title: "Portfolio Web UI",
    description: "A clean, responsive dashboard interface built with **React** and styled entirely using **Tailwind CSS**. Optimized for dark mode.",
    technologies: ["React", "Tailwind CSS", "Vite", "Next.js"],
   imageUrl: "https://yavuzceliker.github.io/sample-images/image-1021.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Bus Pass Management App",
    description: "A high-performance utility application developed using **Kotlin**. Focus on clean architecture (MVVM) and native features.",
    technologies: ["Kotlin Jetpack Compose", "Android Studio", "MVVM", "Room DB"],
    imageUrl: "https://yavuzceliker.github.io/sample-images/image-1021.jpg",
    liveLink: "#",
    githubLink: "https://github.com/RamNP/FYP-Frontend",
  },
];

export default function Portfolio() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            **My Portfolio**
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Check out some of my recent projects showcasing **Flutter apps** and **modern web interfaces**.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img 
                  className="w-full h-full object-cover" 
                  src={project.imageUrl} 
                  alt={project.title} 
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{project.description}</p>
                
                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Call-to-Action Buttons */}
                <div className="flex justify-start space-x-4 mt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-indigo-600 font-semibold hover:text-indigo-800 transition duration-150"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>View Live</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 font-semibold hover:text-gray-900 transition duration-150"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Optional: More Projects Link */}
        <div className="text-center mt-12">
            <a 
                href="#" 
                className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 shadow-lg"
            >
                View All Projects
            </a>
        </div>

      </div>
    </section>
  );
}