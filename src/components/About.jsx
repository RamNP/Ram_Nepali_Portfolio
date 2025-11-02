import React from "react";
// No need to import ProfileImage anymore

// You may need to install react-icons for these: npm install react-icons
import { FaMobileAlt, FaCode, FaPaintBrush, FaReact, FaServer, FaCloud } from 'react-icons/fa';

// Array for key services/skills (I added a few more for a richer example)
const services = [
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description: "Expertise in cross-platform development using Flutter, React Native, and native Android."
  },
  {
    icon: FaCode,
    title: "Clean & Efficient Code",
    description: "Focus on writing readable, maintainable, and highly performant code with modern patterns."
  },
  {
    icon: FaPaintBrush,
    title: "Modern UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces using Tailwind CSS and Figma."
  },
  {
    icon: FaReact,
    title: "Front-End Development",
    description: "Building responsive, modern web applications with React.js and Next.js."
  },
  {
    icon: FaServer,
    title: "Backend Integration",
    description: "Experience with RESTful APIs, GraphQL, and connecting applications to databases."
  },
  {
    icon: FaCloud,
    title: "Cloud Services",
    description: "Familiar with deployment on platforms like Firebase, AWS, and Vercel."
  },
];

export default function About() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Area - Now full width for better focus */}
        <div className="lg:text-center max-w-4xl mx-auto">
          <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wider mb-2">
            Who I Am
          </h2>
          <h3 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            **A Passionate Developer**
          </h3>
          <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
            I’m a passionate developer focused on building creative and efficient **mobile applications**. 
            My professional journey is centered around Flutter, Android, and exploring modern **front-end technologies** to bring complex ideas to life with user-centric design.
          </p>
        </div>
        
        {/* Services/Skills Grid - Now a central feature */}
        <div className="mt-12">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 sm:gap-y-10">
            {services.map((service) => (
              <div key={service.title} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {service.title}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {service.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
        
      </div>
    </section>
  );
}