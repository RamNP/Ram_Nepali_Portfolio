import React from "react";
import { 
  SiFlutter, 
  SiKotlin, 
  SiReact, 
  SiTailwindcss, 
  SiFirebase, 
  SiDjango,
  SiPython,
  SiHtml5,
  SiCss3,

  
} from 'react-icons/si';

const skills = [
  { name: "Flutter", icon: SiFlutter, color: "text-blue-500", bg: "bg-blue-50", hoverBg: "hover:bg-blue-100" },
  { name: "Kotlin", icon: SiKotlin, color: "text-purple-600", bg: "bg-purple-50", hoverBg: "hover:bg-purple-100" },
  { name: "React", icon: SiReact, color: "text-sky-400", bg: "bg-sky-50", hoverBg: "hover:bg-sky-100" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", bg: "bg-cyan-50", hoverBg: "hover:bg-cyan-100" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500", bg: "bg-yellow-50", hoverBg: "hover:bg-yellow-100" },
  { name: "Django", icon: SiDjango, color: "text-green-700", bg: "bg-green-50", hoverBg: "hover:bg-green-100" },
  { name: "Python", icon: SiPython, color: "text-blue-500", bg: "bg-blue-50", hoverBg: "hover:bg-blue-100" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500", bg: "bg-orange-50", hoverBg: "hover:bg-orange-100" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500", bg: "bg-blue-50", hoverBg: "hover:bg-blue-100" },
];

export default function Skills() {
  return (
    <section className="py-20 bg-white"> {/* Changed background to white for contrast */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900">
          **My Tech Stack**
        </h2>
        
        {/* Skills Grid - Using a modern, responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`
                flex flex-col items-center justify-center p-4 
                ${skill.bg} border-2 border-transparent rounded-xl 
                shadow-sm transition-all duration-300 transform 
                ${skill.hoverBg} hover:shadow-lg hover:scale-[1.02] 
                cursor-pointer
              `}
              // Removed dynamic background color for a cleaner look, using light background color instead
            >
              {/* Icon */}
              <skill.icon className={`h-10 w-10 mb-2 ${skill.color}`} aria-hidden="true" />
              
              {/* Skill Name */}
              <p className="text-sm font-bold text-gray-800 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}