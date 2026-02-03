"use client";

import { useState, useEffect } from "react";

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
            {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm transition-colors ${activeSection === item.toLowerCase() ? "text-cyan-400" : "text-zinc-400 hover:text-white"}`}
              >
                {item}
              </button>
            ))}
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
            <p className="text-xl text-zinc-300 mb-4">Software Engineer | B.S. in Computer Engineering at Illinois Institute of Technology</p>
            <p className="text-zinc-500 mb-8 max-w-md">
              Building scalable web applications with React and AWS. Passionate about clean code and delivering great user experiences.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition-colors"
              >
                Get in Touch
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 rounded-lg font-medium transition-colors"
              >
                Resume
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
                I am a Computer Engineering student at Illinois Institute of Technology, recently graduated in December 2025. 
                I like building things that work well and look good.
              </p>
              <p className="text-zinc-400">
                When I am not coding, you will find me watching cricket, playing basketball, or checking out new sneaker drops.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Education</h3>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                <p className="font-medium">B.S. Computer Engineering</p>
                <p className="text-cyan-400">Illinois Institute of Technology</p>
                <p className="text-zinc-500 text-sm mt-1">Dec 2025</p>
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
                  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
                  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
                  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                ].map((skill) => (
                  <span key={skill.name} className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 flex items-center gap-2">
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Frontend Development</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
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

            {/* Backend & Cloud */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Backend & Cloud</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
                  { name: "Lambda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
                  { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg" },
                  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
                  { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
                ].map((skill) => (
                  <span key={skill.name} className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 flex items-center gap-2">
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & DevOps */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Tools & DevOps</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
                  { name: "Linux/Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
                  { name: "OpenMP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg" },
                  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                ].map((skill) => (
                  <span key={skill.name} className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 flex items-center gap-2">
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
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
                desc: "Sneaker price comparison site. React frontend with Firebase auth, serverless AWS backend.",
                tech: ["React", "AWS Lambda", "DynamoDB"],
                link: "https://sneakersforless.org",
                live: true,
              },
              {
                title: "Old Is Gold",
                desc: "Fitness app for seniors with workout plans and nutrition tracking.",
                tech: ["React", "AWS Lambda", "CloudFront"],
                link: "https://oldisgold.fit",
                live: true,
              },
              {
                title: "Think Fast!",
                desc: "Hardware trivia game using Raspberry Pi and Arduino with physical buttons.",
                tech: ["Python", "Raspberry Pi", "Arduino"],
                link: null,
                live: false,
              },
              {
                title: "Neural Network Engine",
                desc: "Optimized C++ inference engine for MNIST. Improved cache hit rate by 8%.",
                tech: ["C++", "MNIST"],
                link: null,
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
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-sm hover:underline">
                    Visit Site →
                  </a>
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
          
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Professor Won-Jae Yi</h3>
            <p className="text-cyan-400 mb-3">Associate Professor, Computer Engineering</p>
            <p className="text-zinc-400 mb-4">Illinois Institute of Technology</p>
            <div className="text-zinc-400 text-sm space-y-1">
              <p>3301 S Dearborn St, Chicago, IL 60616</p>
              <p>Email: <a href="mailto:wyi3@iit.edu" className="text-cyan-400 hover:underline">wyi3@iit.edu</a></p>
              <p>Phone: (312) 567-3327</p>
              <p>Office: Seigel Hall 316</p>
            </div>
          </div>
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