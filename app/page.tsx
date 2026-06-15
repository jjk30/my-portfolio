"use client";

import { useState, useEffect } from "react";

function GithubIcon({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View source on GitHub"
      className="text-gray-400 hover:text-white transition-colors"
    >
      <svg viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    </a>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/90 backdrop-blur border-b border-zinc-800" : ""}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold">
            <span className="text-cyan-400">JJ</span>
            <span className="text-zinc-500">30</span>
          </span>
          <div className="hidden md:flex gap-8">
            {["Home", "About", "Experience", "Projects", "Certifications", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm transition-colors ${activeSection === item.toLowerCase() ? "text-cyan-400" : "text-zinc-400 hover:text-white"}`}
              >
                {item}
              </button>
            ))}
            <a
              href="/Jishnu_Janardanan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo on LEFT */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-72 h-80 rounded-2xl overflow-hidden border-2 border-zinc-800">
                <img
                  src="/profile.jpg"
                  alt="Jishnu Janardanan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Text on RIGHT */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm Jishnu
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Janardanan
              </span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4">Software Engineer | B.S. in Computer Engineering from Illinois Institute of Technology</p>
            <p className="text-zinc-500 mb-8 max-w-md">
              Building scalable applications with React and AWS. Passionate about clean code and delivering great user experiences.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition-colors"
              >
                Get in Touch
              </button>
              <a
                href="/Jishnu_Janardanan_Resume.pdf"
                download="Jishnu_Janardanan_Resume.pdf"
                className="px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 rounded-lg font-medium transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-zinc-400 mb-4">
                I am a Computer Engineering student from Illinois Institute of Technology, graduated in May 2026. 
                I like building things that work well and look good.
              </p>
              <p className="text-zinc-400">
                When I am not coding or designing systems, you will find me watching cricket, playing basketball, or checking out new sneaker drops.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Education</h3>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <p className="font-medium">B.S. Computer Engineering</p>
                <p className="text-cyan-400">Illinois Institute of Technology</p>
                <p className="text-zinc-500 text-sm mt-1">May 2026</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Languages */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
                  { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
                  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
                  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                ].map((skill) => (
                  <span key={skill.name} className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 flex items-center gap-2">
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
                  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
                  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
                  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                  { name: "JUnit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg" },
                  { name: "OpenMP", icon: null },
                ].map((skill) => (
                  <span key={skill.name} className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 flex items-center gap-2">
                    {skill.icon && <img src={skill.icon} alt={skill.name} className="w-5 h-5" />}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Databases</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                  { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg" },
                  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
                  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
                ].map((skill) => (
                  <span key={skill.name} className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 flex items-center gap-2">
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "AWS (Lambda, EC2, API Gateway, S3, CloudFront, SES, EventBridge, IAM, Bedrock)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
                  { name: "GCP (YouTube API, Firebase Auth)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
                  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
                  { name: "Linux/Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg" },
                  { name: "MQTT", icon: null },
                ].map((skill) => (
                  <span key={skill.name} className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 flex items-center gap-2">
                    {skill.icon && <img src={skill.icon} alt={skill.name} className="w-5 h-5" />}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Distributed Systems & System Design */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Distributed Systems & System Design</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Caching Strategies",
                  "Message Queues (Pub/Sub)",
                  "Sharding & Replication",
                  "Load Balancing",
                  "Microservices",
                  "Rate Limiting",
                  "Idempotency",
                  "Fault Tolerance",
                ].map((skill) => (
                  <span key={skill} className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 flex items-center gap-2">
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* EDA & VLSI Tools */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">EDA & VLSI Tools</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Synopsys Design Compiler",
                  "Cadence SOC Encounter",
                  "ModelSim",
                  "VLSI CAD (RTL to GDSII)",
                ].map((skill) => (
                  <span key={skill} className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 flex items-center gap-2">
                    <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 2v2H7v2H5v2H3v8h2v2h2v2h2v2h6v-2h2v-2h2v-2h2V8h-2V6h-2V4h-2V2H9zm0 2h6v2h2v2h2v8h-2v2h-2v2H9v-2H7v-2H5V8h2V6h2V4zm1 4v2h4v2h-4v2h4v2h-4v2h4v-2h2v-2h-2v-2h2v-2h-2V8h-4z"/>
                    </svg>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* AI/ML & Performance */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">AI/ML & Performance</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Neural Network Design (MLP, CNN)",
                  "Tensor Optimization (NCHW/NHWC)",
                  "OpenMP Parallelization",
                  "Cache Optimization",
                ].map((skill) => (
                  <span key={skill} className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 flex items-center gap-2">
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* AI-Assisted Development */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">AI-Assisted Development</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Prompt Engineering",
                  "Claude Code",
                  "Cursor",
                  "AI-Native Workflows",
                  "Anthropic API",
                ].map((skill) => (
                  <span key={skill} className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 flex items-center gap-2">
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Claude 101",
                issuer: "Anthropic Academy",
                desc: "Foundational certification in AI-assisted workflows: prompt engineering and working effectively across Claude's feature set (Projects, Artifacts, Agent Skills, Connectors, Research).",
                link: "https://verify.skilljar.com/c/n6t9irspjyr3",
              },
            ].map((cert) => (
              <div key={cert.title} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium">{cert.title}</h3>
                </div>
                <p className="text-cyan-400 text-sm mb-3">{cert.issuer}</p>
                <p className="text-zinc-400 text-sm mb-4">{cert.desc}</p>
                {cert.link && (
                  <div className="flex items-center gap-4">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-sm hover:underline">
                      Verify Credential →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-3">
                <div>
                  <h3 className="text-lg font-medium">Backend Developer Intern</h3>
                  <p className="text-cyan-400">FoodCLUB</p>
                </div>
                <p className="text-zinc-500 text-sm">Jan - May 2024</p>
              </div>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>• Built Node.js backend services on AWS EC2, handling 100+ API requests daily</li>
                <li>• Developed REST APIs for auth and data retrieval, cut response times by 30%</li>
                <li>• Worked in Agile sprints with Git and bi-weekly releases</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-3">
                <div>
                  <h3 className="text-lg font-medium">Hardware Research</h3>
                  <p className="text-cyan-400">IIT Motorsports (FSAE)</p>
                </div>
                <p className="text-zinc-500 text-sm">Jan - May 2024</p>
              </div>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>• Researched hardware architecture for quad inverter in Formula SAE electric vehicle</li>
                <li>• Contributed to power switch selection and component specifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "SneakersForLess",
                desc: "Price comparison engine ranking sneaker quotes across 25+ retailers. Firebase-authenticated serverless backend with automated price alerts via EventBridge and SES.",
                tech: ["React", "AWS Lambda", "DynamoDB", "Firebase", "Docker"],
                link: "https://www.sneakersforless.org",
                github: "https://github.com/jjk30/sneakers-for-less",
                live: true,
              },
              {
                title: "Old Is Gold",
                desc: "Fitness platform for users 55+ with personalized workout plans, nutrition tracking, and sub-200ms dashboard loads via single-partition DynamoDB design. JWT auth with per-user rate limiting.",
                tech: ["JavaScript", "AWS Lambda", "DynamoDB"],
                link: "https://oldisgold.fit",
                github: "https://github.com/jjk30/old-is-gold",
                live: true,
              },
              {
                title: "IoT Smart Device Hub",
                desc: "Spring Boot device management backend syncing state in real time across HTTP and MQTT using pub/sub and the observer pattern. 94% test coverage with 30+ JUnit tests.",
                tech: ["Java", "Spring Boot", "MQTT", "JUnit"],
                link: null,
                github: null,
                live: false,
              },
              {
                title: "Neural Network Inference Engine",
                desc: "C++ engine running MLP and CNN models end-to-end. 97.5% MNIST accuracy, 8% cache hit rate gain from NCHW/NHWC tensor layout optimization, parallelized with OpenMP.",
                tech: ["C++", "OpenMP", "MNIST"],
                link: null,
                github: null,
                live: false,
              },
              {
                title: "ThinkFast Embedded Trivia Game",
                desc: "Raspberry Pi + Arduino trivia system over UART serial with sub-100ms LED feedback. Co-authored paper under review at IEEE EIT 2026.",
                tech: ["Python", "Raspberry Pi", "Arduino"],
                link: null,
                github: null,
                live: false,
              },
              {
                title: "CTA Database System",
                desc: "Relational database with 6-8 entities, Python CRUD app with complex SQL queries, window functions, and OLAP analytics.",
                tech: ["Python", "SQL", "MySQL", "PostgreSQL"],
                link: null,
                github: null,
                live: false,
              },
              {
                title: "32-bit Pipelined CPU",
                desc: "Custom RISC processor based on MIPS ISA with modular ALU and pipeline synchronization.",
                tech: ["VHDL", "Verilog", "Synopsys DC"],
                link: null,
                github: null,
                live: false,
              },
              {
                // TODO: edit desc and tech to match what you actually built
                title: "Chatbot using AWS Bedrock",
                desc: "Conversational chatbot built on AWS Bedrock foundation models, with a serverless Lambda backend.",
                tech: ["AWS Bedrock", "Python", "Lambda"],
                link: null,
                github: "https://github.com/jjk30/bedrock-chatbot",
                live: false,
              },
              {
                title: "EasyNN Matrix Operations",
                desc: "Matrix and tensor operations in C++ for the EasyNN framework with automated validation.",
                tech: ["C++", "Python"],
                link: null,
                github: null,
                live: false,
              },
            ].map((project) => (
              <div key={project.title} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  {project.live && (
                    <span className="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded">Live</span>
                  )}
                </div>
                <p className="text-zinc-400 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-zinc-800 rounded text-zinc-400">{t}</span>
                  ))}
                </div>
                {(project.link || project.github) && (
                  <div className="flex items-center gap-4">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-sm hover:underline">
                        Visit Site →
                      </a>
                    )}
                    {project.github && <GithubIcon href={project.github} />}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">References</h2>
          
          <a
            href="https://www.iit.edu/directory/people/won-jae-yi"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400"
          >
            <h3 className="text-lg font-semibold mb-2">Professor Won-Jae Yi</h3>
            <p className="text-cyan-400 mb-3">Associate Teaching Professor of Electrical and Computer Engineering</p>
            <p className="text-zinc-400 mb-4">Illinois Institute of Technology</p>
            <div className="text-zinc-400 text-sm space-y-1">
              <p>3301 S Dearborn St, Chicago, IL 60616</p>
              <p>Email: wyi3@iit.edu</p>
              <p>Phone: (312) 567-3327</p>
              <p>Office: Seigel Hall 316</p>
            </div>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-zinc-900/30">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          
          <div className="space-y-4 mb-8">
            {/* Email */}
            <a href="mailto:jishnujanardanan2003@gmail.com" className="flex items-center gap-4 p-5 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
              <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-zinc-400">jishnujanardanan2003@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+13128520631" className="flex items-center gap-4 p-5 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
              <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-zinc-400">+1 (312)-852-0631</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-5 bg-zinc-900/50 border border-zinc-800 rounded-xl">
              <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-zinc-400">Chicago, IL, U.S.A (Authorized to Work)</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/jishnu-janardanan/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/jjk30" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 text-center text-zinc-500 text-sm">
          © 2026 Jishnu Janardanan
        </div>
      </footer>
    </main>
  );
}