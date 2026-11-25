export const RESUME_PATH = "/Jishnu_Janardanan_Resume.pdf?v=2026-09";

/* ---------- Nav ---------- */

export type NavLink = { label: string; id: string };

export const navLinks: NavLink[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

/** Every section on the page, in order. "references" has no nav link. */
export const sectionIds = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "certifications",
  "references",
  "contact",
];

/* ---------- Stats row ---------- */

export type Stat = { source: string; value: string; line: string };

export const stats: Stat[] = [
  {
    source: "Trading Exchange (C++)",
    value: "111,842",
    line: "messages streamed to 4 clients with zero drops",
  },
  { source: "slice", value: "45%", line: "cost cut on a 50-prompt workload" },
  {
    source: "Changing The Present",
    value: "5 mo → 1 hr",
    line: "data lag, cut from 5 months to 1 hour (99.9%)",
  },
  { source: "slice", value: "608", line: "unit tests" },
];

/* ---------- Skills ---------- */

export type Skill = {
  name: string;
  /** File name (without extension) in public/logos. */
  logo?: string;
  /** Inline icon drawn in the accent color, for tools with no logo file. */
  icon?: "circuit";
};

export type SkillGroup = {
  title: string;
  /** Logo shown next to the tile heading: a file name (without extension) in public/logos. */
  logo?: string;
  /** Wide tiles take a full row; the others sit two per row. */
  wide: boolean;
  skills: Skill[];
};

const plain = (names: string[]): Skill[] => names.map((name) => ({ name }));

export const skillGroups: SkillGroup[] = [
  {
    title: "AI/ML & LLM",
    wide: true,
    skills: [
      { name: "LangChain", logo: "langchain" },
      { name: "LangGraph", logo: "langgraph" },
      { name: "LangSmith", logo: "langchain" },
      { name: "NeMo Guardrails", logo: "nvidia" },
      { name: "Hugging Face", logo: "huggingface" },
      { name: "RAGAS", logo: "ragas" },
      { name: "FAISS", logo: "meta" },
      { name: "Model Context Protocol (MCP)", logo: "mcp" },
      { name: "Anthropic API", logo: "anthropic" },
      { name: "OpenAI API", logo: "openai" },
      { name: "Google Gemini API", logo: "gemini" },
      { name: "NVIDIA NIM", logo: "nvidia" },
    ],
  },
  {
    title: "Languages",
    wide: false,
    skills: [
      { name: "Python", logo: "python" },
      { name: "Java", logo: "java" },
      { name: "JavaScript", logo: "javascript" },
      { name: "C++", logo: "cplusplus" },
      { name: "Dart", logo: "dart" },
      { name: "Bash", logo: "bash" },
      { name: "SQL", logo: "azuresqldatabase" },
      { name: "HTML5", logo: "html5" },
      { name: "CSS3", logo: "css3" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    wide: false,
    skills: [
      { name: "React", logo: "react" },
      { name: "Vite", logo: "vitejs" },
      { name: "FastAPI", logo: "fastapi" },
      { name: "Flutter", logo: "flutter" },
      { name: "Node.js", logo: "nodejs" },
      { name: "Spring Boot", logo: "spring" },
      { name: "JUnit", logo: "junit" },
      { name: "OpenMP" },
      { name: "Vue 3", logo: "vuejs" },
      { name: "pandas", logo: "pandas" },
    ],
  },
  {
    title: "Databases",
    wide: false,
    skills: [
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "MySQL", logo: "mysql" },
      { name: "DynamoDB", logo: "dynamodb" },
      { name: "Redis", logo: "redis" },
      { name: "Firebase", logo: "firebase" },
    ],
  },
  {
    title: "Cloud & DevOps",
    wide: false,
    skills: [
      { name: "GCP (YouTube API, Firebase Auth)", logo: "googlecloud" },
      { name: "Docker", logo: "docker" },
      { name: "Git", logo: "git" },
      { name: "GitHub Actions", logo: "githubactions" },
      { name: "Bazel", logo: "bazel" },
      { name: "Linux/Ubuntu", logo: "ubuntu" },
      { name: "MQTT", logo: "mqtt" },
      { name: "Terraform", logo: "terraform" },
      { name: "Kubernetes", logo: "kubernetes" },
      { name: "Prometheus", logo: "prometheus" },
      { name: "Grafana", logo: "grafana" },
    ],
  },
  {
    title: "AWS",
    logo: "aws",
    wide: true,
    skills: plain([
      "Lambda",
      "EC2",
      "VPC",
      "ECR",
      "API Gateway",
      "RDS",
      "S3",
      "CloudFront",
      "SES",
      "EventBridge",
      "IAM",
      "Secrets Manager",
      "SSM",
      "Route 53",
      "CloudFormation",
      "CloudShell",
      "CloudWatch",
      "Cost Explorer",
      "Bedrock",
    ]),
  },
  {
    title: "Distributed Systems & System Design",
    wide: true,
    skills: plain([
      "Caching Strategies",
      "Message Queues (Pub/Sub)",
      "Sharding & Replication",
      "Load Balancing",
      "Microservices",
      "Rate Limiting",
      "Idempotency",
      "Fault Tolerance",
      "Lock-Free Programming",
      "Multithreading",
    ]),
  },
  {
    title: "EDA & VLSI Tools",
    wide: true,
    skills: [
      { name: "Synopsys Design Compiler", icon: "circuit" },
      { name: "Cadence SOC Encounter", icon: "circuit" },
      { name: "ModelSim", icon: "circuit" },
      { name: "VLSI CAD (RTL to GDSII)", icon: "circuit" },
    ],
  },
  {
    title: "AI/ML & Performance",
    wide: true,
    skills: plain([
      "Neural Network Design (MLP, CNN)",
      "Tensor Optimization (NCHW/NHWC)",
      "OpenMP Parallelization",
      "Cache Optimization",
    ]),
  },
  {
    title: "AI-Assisted Development",
    wide: true,
    skills: plain([
      "Prompt Engineering",
      "Claude Code",
      "Cursor",
      "AI-Native Workflows",
      "Anthropic API",
    ]),
  },
];

/* ---------- Experience ---------- */

export type Job = {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
  tech: string[];
};

export const experience: Job[] = [
  {
    role: "Cloud Engineer (Project Manager)",
    company: "Changing The Present",
    location: "New York, NY · Remote",
    dates: "June 2026 - Present",
    bullets: [
      "Audited a 23-table PostgreSQL database with Python (pandas) and pgAdmin, uncovering that 31% of applicants were silently dropped and 26% of tables were dead.",
      "Moved the Postgres superuser password out of plain-text config into AWS Secrets Manager and gave each service its own read-only role, with zero downtime during the cutover.",
      "Designed a BCNF schema and a re-runnable ETL sync (Python, AWS Lambda, EventBridge, VPC), cutting data lag from 5 months to 1 hour (99.9%).",
      "Led the team through written briefs and clear task delegation to ship a Google Sheets-to-Postgres ETL pipeline.",
    ],
    tech: ["Python", "pandas", "PostgreSQL", "AWS Lambda", "EventBridge", "Secrets Manager", "VPC"],
  },
  {
    role: "Backend Developer Intern",
    company: "FoodCLUB",
    location: "London, United Kingdom",
    dates: "Jan - May 2024",
    bullets: [
      "Held authentication and data APIs at 99% uptime by building and maintaining Node.js services on AWS EC2.",
      "Cut response latency 30% on the busiest endpoints by adding Redis caching.",
    ],
    tech: ["Node.js", "AWS EC2", "Redis"],
  },
  {
    role: "Hardware Research",
    company: "IIT Motorsports (FSAE)",
    location: "Chicago, IL",
    dates: "Jan - May 2024",
    bullets: [
      "Researched hardware architecture for quad inverter in Formula SAE electric vehicle",
      "Contributed to power switch selection and component specifications",
    ],
    tech: [],
  },
];

/* ---------- Projects ---------- */

export type Project = {
  title: string;
  desc: string;
  tech: string[];
  link?: string;
  github?: string;
  certificate?: string;
  live: boolean;
};

export const projects: Project[] = [
  {
    title: "SneakersForLess",
    desc: "Price comparison engine ranking sneaker quotes across 25+ retailers. Firebase-authenticated serverless backend with automated price alerts via EventBridge and SES.",
    tech: ["React", "AWS Lambda", "DynamoDB", "Firebase", "Docker"],
    link: "https://www.sneakersforless.org",
    github: "https://github.com/jjk30/sneakers-for-less",
    live: true,
  },
  {
    title: "slice – AI & Cloud Cost Gateway",
    desc: "Self-hosted LLM gateway that routes, caches, and caps AI spend across Anthropic, OpenAI, Gemini, and NVIDIA NIM behind one endpoint. A LangGraph router with a LoRA fine-tuned Qwen2.5-0.5B classifier (92% routing accuracy) cut a 50-prompt workload's cost 45%, with a RAGAS LLM-as-a-judge confirming 0.89 relevancy. NeMo Guardrails, fail-open Redis/Postgres paths, 608 unit tests, Terraform to arm64 EC2 with Prometheus/Grafana, and a 7-tool MCP server for Claude Code.",
    tech: ["Python", "FastAPI", "LangGraph", "Redis", "PostgreSQL", "Terraform", "Kubernetes", "AWS", "MCP"],
    link: "https://sliceapp.dev/",
    github: "https://github.com/jjk30/slice",
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
    title: "Low-Latency Trading Exchange (C++)",
    desc: "Low-latency trading exchange built from scratch in modern C++ (C++26, Bazel). Matching engine with price-time priority, a pre-allocated memory pool, a lock-free MPSC queue, and a live market data feed with a client-side book rebuilder. Verified with 113 tests; a live run streamed 111,842 messages to 4 clients that each rebuilt an 8,235-order book from the feed alone with zero drops.",
    tech: ["C++", "Bazel", "Multithreading", "Lock-Free", "GoogleTest"],
    github: "https://github.com/jjk30/cpp-trading-exchange",
    certificate: "/build-fellowship-certificate.pdf",
    live: false,
  },
  {
    title: "IoT Smart Device Hub",
    desc: "Spring Boot device management backend syncing state in real time across HTTP and MQTT using pub/sub and the observer pattern. 94% test coverage with 30+ JUnit tests.",
    tech: ["Java", "Spring Boot", "MQTT", "JUnit"],
    live: false,
  },
  {
    title: "Neural Network Inference Engine",
    desc: "C++ engine running MLP and CNN models end-to-end. 97.5% MNIST accuracy, 8% cache hit rate gain from NCHW/NHWC tensor layout optimization, parallelized with OpenMP.",
    tech: ["C++", "OpenMP", "MNIST"],
    live: false,
  },
  {
    title: "ThinkFast Embedded Trivia Game",
    desc: "Raspberry Pi + Arduino trivia system over UART serial with sub-100ms LED feedback. Co-authored paper under review at IEEE EIT 2026.",
    tech: ["Python", "Raspberry Pi", "Arduino"],
    live: false,
  },
  {
    title: "CTA Database System",
    desc: "Relational database with 6-8 entities, Python CRUD app with complex SQL queries, window functions, and OLAP analytics.",
    tech: ["Python", "SQL", "MySQL", "PostgreSQL"],
    live: false,
  },
  {
    title: "32-bit Pipelined CPU",
    desc: "Custom RISC processor based on MIPS ISA with modular ALU and pipeline synchronization.",
    tech: ["VHDL", "Verilog", "Synopsys DC"],
    live: false,
  },
  {
    // TODO: edit desc and tech to match what you actually built
    title: "Chatbot using AWS Bedrock",
    desc: "Conversational chatbot built on AWS Bedrock foundation models, with a serverless Lambda backend.",
    tech: ["AWS Bedrock", "Python", "Lambda"],
    github: "https://github.com/jjk30/bedrock-chatbot",
    live: false,
  },
  {
    title: "EasyNN Matrix Operations",
    desc: "Matrix and tensor operations in C++ for the EasyNN framework with automated validation.",
    tech: ["C++", "Python"],
    live: false,
  },
];

/* ---------- Certifications ---------- */

export const featuredCertification = {
  title: "NVIDIA Certified Professional: Agentic AI",
  issuer: "NVIDIA",
  desc: "Professional certification validating the ability to architect, develop, deploy, and govern advanced agentic AI systems, spanning agent architecture, cognition and memory, multi-agent orchestration, evaluation and tuning, and deployment at scale on NVIDIA platforms.",
  link: "https://www.credly.com/badges/859ccdbe-2269-4036-8909-e3137afe1502/public_url",
  linkText: "Verify Credential →",
  badge: "/logos/nvidia-badge.png",
  badgeAlt: "NVIDIA Certified Professional: Agentic AI badge",
};

export type Certification = {
  title: string;
  issuer: string;
  desc: string;
  link: string;
  date?: string;
  linkText?: string;
};

export const certifications: Certification[] = [
  {
    title: "C++ Systems for Finance: Build a Trading Exchange from Scratch",
    issuer: "Open Avenues Foundation — The Build Fellowship",
    date: "August 2026",
    desc: "8-week Build Project led by Yiwen Victor Song. Built a low-latency trading exchange from scratch in modern C++: price-time priority matching engine, pre-allocated memory pool, lock-free MPSC queue, and a live market data feed with client-side book rebuilding.",
    link: "/build-fellowship-certificate.pdf",
    linkText: "View Certificate →",
  },
  {
    title: "Building RAG Agents with LLMs",
    issuer: "NVIDIA Deep Learning Institute",
    desc: "Hands-on certification in retrieval-augmented generation: building LLM agents with vector stores, embedding-based retrieval, document ingestion pipelines, and multi-turn agent state management.",
    link: "https://learn.nvidia.com/certificates?id=oM6CidNTQTObshUARsioPg",
  },
  {
    title: "Building Agentic AI Applications with Large Language Models",
    issuer: "NVIDIA Deep Learning Institute",
    desc: "Hands-on certification in agent architectures: structured outputs and function calling, retrieval and knowledge graphs, and multi-agent orchestration with LangGraph and NVIDIA NIM for long-horizon reasoning and real-time operation at scale.",
    link: "https://learn.nvidia.com/certificates?id=X-lO2ywER9eDObMk82OKVw",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic Academy",
    desc: "Foundational certification in AI-assisted workflows: prompt engineering and working effectively across Claude's feature set (Projects, Artifacts, Agent Skills, Connectors, Research).",
    link: "https://verify.skilljar.com/c/n6t9irspjyr3",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic Academy",
    desc: "Foundational certification in agentic coding with Claude Code: driving development from the terminal, delegating multi-step engineering tasks, and integrating AI-native workflows into a real codebase.",
    link: "https://verify.skilljar.com/c/7uyuyusufw5k",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic Academy",
    desc: "Certification in the Model Context Protocol (MCP): connecting LLMs to external tools and data sources through standardized servers, enabling agents to access live context and act across systems.",
    link: "https://verify.skilljar.com/c/5v7unsrt4hef",
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic Academy",
    desc: "Framework for effective and responsible AI collaboration, covering task delegation, prompt engineering, critically evaluating AI outputs, and diligent, ethical use across the 4D model.",
    link: "https://verify.skilljar.com/c/nockqxzrfhy4",
  },
];
