import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  Clock3,
  Cloud,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Github,
  Handshake,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  School,
  Smartphone,
  Sparkles,
  Terminal,
  User,
  X,
} from "lucide-react";

const navItems = [
  ["Home", "top"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
  ["About", "about"],

];

const experience = [
  {
    company: "ING Skill Academy",
    location: "On-site",
    roles: [
      {
        title: "Android and Flutter Developer",
        type: "Full-time",
        dates: "Jul 2024 - Present",
        description:
          "Building and maintaining production mobile applications with Flutter and native Android, from responsive interfaces to reliable API and device integrations.",
        skills: [
          "Flutter Development",
          "Mobile App Development",
          "Dart",
          "Kotlin",
          "Android Jetpack",
          "REST APIs",
          "State Management",
          "IoT Integration",
        ],
      },
      {
        title: "Android Developer",
        type: "Internship",
        dates: "Mar 2022 - Jul 2024",
        description:
          "Developed and maintained Android applications using Kotlin, while integrating cross-platform functionality with Flutter and collaborating on polished mobile experiences.",
        skills: [
          "Mobile Application Development",
          "Android Framework",
          "Kotlin Coroutines",
          "Room Database",
          "REST APIs",
          "Android Design",
        ],
      },
    ],
  },
  {
    company: "Innovate Tech",
    location: "Kathmandu, Nepal",
    roles: [
      {
        title: "Android Developer",
        type: "Internship",
        dates: "Jun 2023 - Feb 2024",
        description:
          "Worked on Android application development with Kotlin, Jetpack components, local data storage, REST API integration, and structured state management.",
        skills: [
          "Mobile Application Development",
          "Kotlin",
          "Android Framework",
          "Kotlin Coroutines",
          "Android Jetpack",
          "Room Database",
          "REST APIs",
          "State Management",
        ],
      },
    ],
  },
];

const education = [
  {
    institution: "Islington College",
    title: "BSc (Hons) Computing – Mobile Application Development",
    dates: "2021 - 2024",
    description:
      "Developed strong skills in software development, web and mobile application development, databases, networking, and computing technologies through practical project work.",
    result: "Completed / Graduated",
    icon: GraduationCap,
    tone: "education-green",
  },

  {
    institution: "Xavier International College",
    title: "Higher Secondary (+2 Management) in Computer Science",
    dates: "2019 - 2020",
    description:
      "Built a strong foundation in computer science, programming fundamentals, business studies, mathematics, and problem-solving skills.",
    result: "Computer Science Stream",
    icon: BookOpen,
    tone: "education-amber",
  },
  {
    institution: "Terse Secondary School",
    title: "Secondary Education Examination (SEE)",
    dates: "2018",
    description:
      "Distinction-accredited track with a strong focus on foundational science, computer studies, and active technical club leadership.",
    result: "Class 10 Distinction",
    icon: School,
    tone: "education-dark",
  },
];

const projects = [
  {
    title: "Bus Pass Management System",
    type: "Android Native App",
    description:
      "Digital transit platform with QR validation, online renewals, payments, and offline route caching.",
    tags: ["Kotlin", "Jetpack Compose", "REST API"],
    category: "Mobile",
    tone: "project-green",
    icon: Smartphone,
  },
  {
    title: "Bus Pass Web app for Admins",
    type: "Web Admin App",
    description:
      "Full-stack dashboard for pass approvals, route and user management, payment monitoring, and transit reports.",
    tags: ["HTML & CSS", "Django REST", "PostgreSQL"],
    category: "Web",
    tone: "project-dark",
    icon: Layers3,
  },
  {
    title: "Robo Controller Mobile App",
    type: "Bluetooth IoT App",
    description:
      "Mobile controller for robot navigation, live sensor telemetry, custom commands, and reliable BLE pairing.",
    tags: ["Flutter", "Bluetooth BLE", "IoT Integration"],
    category: "Mobile",
    tone: "project-sage",
    icon: Bot,
  },
  {
    title: "Bus Attendance & Tracking",
    type: "Cross-Platform App",
    description:
      "Fleet tracking, automated boarding verification, route assistance, and real-time alerts for families.",
    tags: ["Flutter", "Firebase", "Cloud Functions"],
    category: "Mobile",
    tone: "project-amber",
    icon: CheckCircle2,
  },
  {
    title: "Ratnanagar Tourism",
    type: "Tourism & Travel App",
    description:
      "A city guide for cultural heritage, safari bookings, offline maps, and local homestay directories.",
    tags: ["Flutter", "REST API", "Mapbox SDK"],
    category: "Mobile",
    tone: "project-sage",
    icon: MapPin,
    link: "https://play.google.com/store/apps/details?id=com.ratnanagartourism&hl=en&pli=1",
  },
  {
    title: "Dajuvai User Mobile App",
    type: "Commercial Mobile App",
    description:
      "A full marketplace with dynamic catalogs, wallet payments, seller routing, and instant order tracking.",
    tags: ["Flutter", "Django REST", "Payment API"],
    tone: "project-dark",
    icon: BriefcaseBusiness,
    category: "Mobile",
  },
];

const services = [
  [
    Smartphone,
    "Mobile App Development",
    "Native Android and cross-platform Flutter applications built for high performance and smooth gestures.",
  ],
  [
    Layers3,
    "Web Application Development",
    "Fast, scalable web applications, analytics portals, and customer platforms built with React and Vite.",
  ],
  [
    Database,
    "API & Backend Integration",
    "Secure REST APIs, Firebase sync, JWT authentication, and relational database schemas.",
  ],
  [
    Sparkles,
    "UI/UX Implementation",
    "Pixel-perfect Flutter and React interfaces equipped with subtle motion and polished interactions.",
  ],
  [
    Code2,
    "Bluetooth & IoT Integration",
    "BLE peripheral pairing, telemetry transmission, sensor logging, and beacon alerts.",
  ],
  [
    Terminal,
    "Performance & Optimization",
    "Memory profiling, bundle minimization, framerate stabilization, and release readiness audits.",
  ],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("top");
  const [filter, setFilter] = useState("All Work");
  const [sent, setSent] = useState(false);
  const visibleProjects = projects.filter(
    (project) => filter === "All Work" || project.category === filter,
  );

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "top",
        "about",
        "experience",
        "education",
        "skills",
        "projects",
        "services",
        "process",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveNav(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [filter]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">
            <Terminal size={18} />
          </span>
          <span>
            <strong>Ram.nepali</strong>
            <small>PORTFOLIO</small>
          </span>
        </a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeNav === id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a className="button button-dark header-cta" href="#contact">
            Hire Me{" "}
            <span>
              <ArrowUpRight size={20} />
            </span>
          </a>
          <div className="header-avatar" title="Profile">
            <User size={20} />
          </div>
        </div>
        <button
          className="menu-button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>
      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow status" data-reveal="hero">
              <span /> Hello There! Available for hire
            </div>
            <h1 data-reveal="hero">
              I&apos;m a Mobile &amp; <em>Web Application</em> Developer.
            </h1>
            <p data-reveal="hero">
              Crafting fluid, modern mobile applications with Flutter, Kotlin
              &amp; Jetpack Compose, paired with robust web experiences using
              React, Vite &amp; Tailwind CSS. Specializing in scalable
              architecture, API integration, and delightful micro-interactions.
            </p>
            <div className="hero-actions" data-reveal="hero">
              <a className="button button-dark" href="#projects">
                View My Projects <ArrowRight size={17} />
              </a>
              <a className="button button-light" href="#contact">
                <Handshake size={17} /> Let&apos;s Work Together
              </a>
            </div>
            <div className="quick-stats" data-reveal="hero">
              <div>
                <CheckCircle2 size={25} />
                <span>
                  <b>99.8%</b>
                  <small>Code Reliability</small>
                </span>
              </div>
              <i />
              <div>
                <Sparkles size={25} />
                <span>
                  <b>50+</b>
                  <small>Releases Shipped</small>
                </span>
              </div>
            </div>
          </div>
          <div className="hero-visual relative mx-auto min-h-[430px] w-full max-w-[520px] lg:min-h-[520px]" data-reveal="hero-visual">
            <div className="sun-disc" />
            <div className="portrait-frame">
              <img src="/ram.png" alt="Ram Nepali, mobile and web developer" />
            </div>

            {/* Redesigned circular orbit badge: white ring, curved text, dark
                green center disc with icon — matches the reference badge. */}
            <div className="orbit-badge">
              <svg viewBox="0 0 100 100" className="orbit-badge-ring">
                <path
                  id="orbitTextPath"
                  d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                />
                <text className="orbit-badge-text">
                  <textPath href="#orbitTextPath" startOffset="0%">
                    AVAILABLE FOR PROJECTS • HIRE ME •
                  </textPath>
                </text>
              </svg>
              <div className="orbit-badge-core">
                <Terminal size={18} />
              </div>
            </div>
            <div className="float-tag tag-one">Flutter Specialist</div>
            <div className="float-tag tag-two">Android &amp; Compose</div>
            <div className="float-tag tag-three">React &amp; Tailwind</div>
          </div>
        </section>
        <div className="ticker">
          <div>
            Flutter <b>✦</b> Android Development <b>✦</b> Kotlin &amp; Jetpack
            Compose <b>✦</b> React &amp; Vite <b>✦</b> JavaScript <b>✦</b>{" "}
            Tailwind CSS <b>✦</b> Responsive Web Design <b>✦</b> Django REST API{" "}
            <b>✦</b> REST API Integration <b>✦</b> Firebase <b>✦</b> IoT App
            Integration <b>✦</b> Bluetooth / BLE <b>✦</b> State Management{" "}
            <b>✦</b> Clean Architecture <b>✦</b> Git &amp; GitHub
          </div>
        </div>
        <section className="about-section" id="about" data-reveal="section">
          <div className="section-wrap about-grid">
            <div className="about-visual" data-reveal="about-image">
              <div className="about-disc" />
              <div className="about-photo">
                <img
                  src="/ram_profile.jpg"
                  alt="Ram Nepali working as a developer"
                />
              </div>
              <div className="mini-tags">
                <span>Android</span>
                <span>Flutter</span>
                <span>Web & Mobile</span>
              </div>
            </div>
            <div className="about-copy" data-reveal="about-copy">
              <div className="eyebrow">— About Me</div>
              <h2>
                Who is this <em>Mobile &amp; Web Developer</em>?
              </h2>
              <p>
                I am a versatile software engineer with a deep passion for
                building high-performance cross-platform mobile apps and
                resilient full-stack web applications. With mastery in Flutter,
                Android native, and modern React ecosystems, I bridge elegant UI
                with scalable architecture.
              </p>
              <p>
                Whether designing reactive state pipelines, structuring Django
                REST backends, or architecting real-time Firebase sync, I
                believe in writing testable, production-ready code.
              </p>
              <div className="metrics">
                <div data-reveal="metric">
                  <b>3+</b>
                  <span>Years Experience</span>
                </div>
                <div data-reveal="metric">
                  <b>25+</b>
                  <span>Projects Shipped</span>
                </div>
                <div data-reveal="metric">
                  <b>100%</b>
                  <span>Client Satisfaction</span>
                </div>
                <div data-reveal="metric">
                  <b>10+</b>
                  <span>Store Launches</span>
                </div>
              </div>
              <div className="signature-row">
                <a
                  className="button button-amber"
                  href="/Ram_Nepali_Resume.pdf"
                  download
                >
                  Download Resume <Download size={17} />
                </a>
                <span>
                  <strong>Ram Nepali</strong>
                  <small>
                    Android|Flutter|Web & Mobile Application Developer
                  </small>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="experience-section" id="experience">
          <div className="section-wrap">
            <div className="experience-list">
              {experience.map(({ company, location, roles }) => (
                <article className="experience-company" key={company} data-reveal="card">
                  <div className="company-heading">
                    <div className="company-icon">
                      <Building2 size={21} />
                    </div>
                    <div>
                      <h3>{company}</h3>
                      <span>{location}</span>
                    </div>
                  </div>
                  <div className="role-list">
                    {roles.map(
                      ({ title, type, dates, description, skills }) => (
                        <div
                          className="experience-role"
                          data-reveal="role"
                          key={`${company}-${title}`}
                        >
                          <div className="role-meta">
                            <div>
                              <h3>{title}</h3>
                              <span>{type}</span>
                            </div>
                            <time>{dates}</time>
                          </div>
                          <p>{description}</p>
                          <div className="chip-row">
                            {skills.map((skill) => (
                              <span key={skill}>{skill}</span>
                            ))}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="education-section" id="education">
          <div className="section-wrap">
            <div className="section-heading centered">
              <div className="eyebrow">— Academic Background</div>
              <h2>
                Education <em>&amp; Qualifications</em>
              </h2>
              <p>
                Academic foundations in computing, communication, and software
                engineering that power my work.
              </p>
            </div>
            <div className="education-grid">
              {education.map(
                ({
                  institution,
                  title,
                  dates,
                  description,
                  result,
                  icon: Icon,
                  tone,
                }) => (
                  <article className="education-card" key={institution} data-reveal="card">
                    <div className={`education-icon ${tone}`}>
                      {React.createElement(Icon, { size: 17 })}
                    </div>
                    <div className="education-meta">
                      <span>{institution}</span>
                      <b>{dates}</b>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <footer>
                      <span>{result}</span>
                      <span>
                        {institution === "Bellington College"
                          ? "Degree"
                          : institution === "Xavier International College"
                            ? "+2 Level"
                            : "SEE Board"}
                      </span>
                    </footer>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>
        <section className="section-wrap standard-section" id="skills" data-reveal="section">
          <div className="section-heading centered">
            <div className="eyebrow">— Tech Stack</div>
            <h2>
              Exploring the <em>Tools &amp; Technologies</em>
              <br /> Behind My Work
            </h2>
            <p>
              Modern tools, frameworks, and development practices I use to build
              reliable mobile and web applications.
            </p>
          </div>
          <div className="skill-grid">
            {[
              [
                Smartphone,
                "Mobile Engineering",
                "Build cross-platform and native mobile applications with modern architecture, state management, device integrations, smooth animations, and reliable performance.",
                ["Flutter & Dart", "Kotlin & Jetpack Compose", "Android Development"],
                "95% Mastery",
              ],
              [
                Code2,
                "Web & Frontend",
                "Build responsive, modern web applications with reusable components, clean interfaces, scalable frontend architecture, and smooth user experiences.",
                ["React.js", "Vite", "Tailwind CSS"],
                "90% Mastery",
              ],
              [
                Database,
                "Backend & API",
                "Integrate REST APIs and develop basic backend services with authentication, data handling, and database integration using Django.",
                ["Django REST", "REST API", "Authentication"],
                "75% Mastery",
              ],
              [
                Cloud,
                "Firebase & Cloud",
                "Integrate cloud services for authentication, real-time data, notifications, storage, and reliable application synchronization.",
                ["Firebase", "Firestore", "Cloud Messaging"],
                "82% Mastery",
              ],
              [
                Bot,
                "IoT & Device Integration",
                "Connect mobile applications with smart devices and embedded systems using Bluetooth, BLE, ESP32, and IoT technologies.",
                ["Bluetooth / BLE", "ESP32", "IoT Integration"],
                "80% Mastery",
              ],
              [
                Layers3,
                "Architecture & Development",
                "Apply clean architecture, state management, API integration, version control, and maintainable development practices across web and mobile projects.",
                ["Clean Architecture", "State Management", "Git & GitHub"],
                "88% Mastery",
              ],
            ].map(([Icon, title, text, tags, proficiency]) => (
              <article className="skill-card" key={title} data-reveal="card">
                <div className="icon-tile">
                  {React.createElement(Icon, { size: 21 })}
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="chip-row">
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <footer>
                  <span>Core Proficiency</span>
                  <b>{proficiency}</b>
                  <span className="proficiency-bar" aria-hidden="true">
                    <span style={{ "--progress": proficiency }} />
                  </span>
                </footer>
              </article>
            ))}
          </div>
        </section>
        <section className="projects-section" id="projects">
          <div className="section-wrap">
            <div className="section-heading project-heading">
              <div>
                <div className="eyebrow">— Featured Work</div>
                <h2>
                  Recent <em>Applications</em>
                </h2>
                <p>
                  Explore high-impact mobile and web applications built to
                  address real-world challenges.
                </p>
              </div>
              <div className="filter-row">
                {["All Work", "Mobile", "Web", "Full-Stack"].map((item) => (
                  <button
                    key={item}
                    className={filter === item ? "active" : ""}
                    onClick={() => setFilter(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="project-grid" key={filter}>
              {visibleProjects.map(
                ({ title, type, description, tags, tone, icon: Icon, link }) => (
                  <article className="project-card" key={title} data-reveal="card">
                    <div className={`project-art ${tone}`}>
                      {React.createElement(Icon, { size: 48 })}
                      <span>{type}</span>
                      <div className="art-window">
                        <div />
                        <div />
                        <div />
                        <div />
                      </div>
                    </div>
                    <div className="project-body">
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <div className="chip-row">
                        {tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a
                          href={link || "#contact"}
                          target={link ? "_blank" : undefined}
                          rel={link ? "noreferrer" : undefined}
                        >
                          View Project <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>
        <section className="section-wrap standard-section" id="services">
          <div className="section-heading service-heading">
            <div>
              <div className="eyebrow">— Services</div>
              <h2>
                Services <em>I Provide</em>
              </h2>
              <p>
                Full lifecycle software engineering from prototype architecture
                to enterprise release.
              </p>
            </div>
            <a className="button button-dark" href="#contact">
              View All Services <ArrowRight size={17} />
            </a>
          </div>
          <div className="service-grid">
            {services.map(([Icon, title, text]) => (
              <article className="service-card" key={title} data-reveal="card">
                <div className="icon-tile">
                  {React.createElement(Icon, { size: 21 })}
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact">
                  Learn more <ArrowRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </section>
        <section className="process-section" id="process">
          <div className="section-wrap">
            <div className="section-heading centered">
              <div className="eyebrow">— Workflow</div>
              <h2>
                My Streamlined <em>Development Process</em>
              </h2>
              <p>
                A disciplined roadmap that ensures transparency, predictable
                delivery, and durable software.
              </p>
            </div>
            <div className="process-grid">
              {[
                [
                  "01",
                  "Discovery & Scoping",
                  "Business goals, technical constraints, users, APIs, and prerequisites.",
                ],
                [
                  "02",
                  "Architecture & UX",
                  "Domain layers, state workflows, component contracts, and navigation maps.",
                ],
                [
                  "03",
                  "Build & QA Testing",
                  "Iterative sprints with clean architecture, unit, widget, and integration tests.",
                ],
                [
                  "04",
                  "Release & Scale",
                  "Store submissions, CI/CD automation, telemetry, and continuous updates.",
                ],
              ].map(([number, title, text]) => (
                <article className="process-card" key={number} data-reveal="card">
                  <b>{number}</b>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <i />
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="section-wrap contact-panel" data-reveal="contact">
            <div className="contact-copy">
              <div className="eyebrow">— Contact Me</div>
              <h2>
                Let&apos;s Build Something <em>Extraordinary</em> Together.
              </h2>
              <p>
                Have an upcoming mobile app idea, web platform requirement, or
                need an experienced full-stack engineer? Drop me a message and
                let&apos;s get building.
              </p>
              <div className="contact-detail" data-reveal="detail">
                <Mail size={18} />
                <span>
                  <small>Email Address</small>
                  <a href="mailto:pariyarram2023@gmail.com">
                    pariyarram2023@gmail.com
                  </a>
                </span>
              </div>
              <div className="contact-detail" data-reveal="detail">
                <MapPin size={18} />
                <span>
                  <small>Location</small>
                  <b>Kathmandu, Nepal • Open to Remote Worldwide</b>
                </span>
              </div>
              <div className="contact-detail" data-reveal="detail">
                <Clock3 size={18} />
                <span>
                  <small>Availability</small>
                  <b>Immediate for Q3/Q4 Projects</b>
                </span>
              </div>
              <div className="socials">
                <a href="https://github.com/RamNP" aria-label="GitHub">
                  <Github size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ram-pariyar-920942280/"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
                <a href="mailto:pariyarram2023@gmail.com" aria-label="Email">
                  <Mail size={17} />
                </a>
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
                event.currentTarget.reset();
              }}
            >
              <div className="form-row">
                <label>
                  Your Name
                  <input required placeholder="John Doe" />
                </label>
                <label>
                  Email Address
                  <input required type="email" placeholder="john@example.com" />
                </label>
              </div>
              <label>
                Project Scope
                <select>
                  <option>Cross-Platform Mobile App</option>
                  <option>Web Application / SPA</option>
                  <option>Full-Stack Solution</option>
                  <option>Architecture Consultation</option>
                </select>
              </label>
              <label>
                Project Description
                <textarea
                  required
                  rows="4"
                  placeholder="Tell me about your product requirements, roadmap, timeline..."
                />
              </label>
              {sent && (
                <div className="success">
                  <CheckCircle2 size={17} /> Thank you. I will get back to you
                  within 24 hours.
                </div>
              )}
              <button className="button button-dark form-submit" type="submit">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="section-wrap footer-grid">
          <div>
            <a className="brand" href="#top">
              <span className="brand-mark">
                <Terminal size={18} />
              </span>
              <span>
                <strong>Ram.nepali</strong>
                <small>PORTFOLIO</small>
              </span>
            </a>
            <p>
              Senior Mobile Engineer &amp; UI Architect crafting robust
              applications with meticulous design and modern architecture.
            </p>
          </div>
          <div>
            <h3>Navigation</h3>
            {navItems.slice(1, 6).map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>
          <div>
            <h3>Core Tech Stack</h3>
            <p className="footer-chips">
              <span>Flutter</span>
              <span>React</span>
              <span>Kotlin</span>
              <span>Django</span>
              <span>Firebase</span>
            </p>
          </div>
          <div>
            <h3>Connect</h3>
            <a href="https://github.com/RamNP">
              <Github size={14} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ram-pariyar-920942280/"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href="mailto:pariyarram2023@gmail.com">
              <Mail size={14} /> Email
            </a>
          </div>
        </div>
        <div className="footer-bottom section-wrap">
          <span>© 2026 Ram.nepali. All rights reserved.</span>
          <span>Crafted with precision &amp; care.</span>
        </div>
      </footer>
    </div>
  );
}
