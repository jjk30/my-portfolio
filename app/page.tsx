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
                I am a Computer Engineering student at Illinois Institute of Technology, graduating December 2025. 
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
                  { name: "OpenMP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg" },
                  { name: "CUDA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nvidia/nvidia-original.svg" },
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

      {/* Contact */}
      <section id="contact" className="py-24 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
          <p className="text-zinc-400 mb-8 max-w-lg">
            Looking for software engineering roles starting 2026. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:jishnujanardanan2003@gmail.com" className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition-colors text-center">
              Email Me
            </a>
            <a href="https://linkedin.com/in/jishnu-janardanan" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 rounded-lg font-medium transition-colors text-center">
              LinkedIn
            </a>
            <a href="https://github.com/jjk30" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-zinc-700 hover:border-zinc-500 rounded-lg font-medium transition-colors text-center">
              GitHub
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
