import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Charliehustler",
  initials: "NB",
  url: "https://charliehustler.vercel.app/",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  description: "I'm a backend-focused developer passionate about elegant system design and scalable architecture. Currently building with Next.js, Go, and event-driven systems.",
  summary: "I'm a undergraduate student at Jadavpur University with a passion for full-stack development. I've built interactive web applications serving 1000+ users, developed AI-powered SaaS platforms, and actively contribute to technical communities. I enjoy creating solutions that blend engineering principles with modern web technologies.",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "TypeScript", 
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kafka",
    "Kubernetes",
    "Linux",
    "AWS",
    "Git",
    "Github",
    "C++",
    "Go",
    "GraphQL",
    "Prisma",
    "CI/CD",
    "DevOps",
    "Monorepo",
    "WebSocket",
    "WebRTC",
    "OAuth",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nilangshubhattacharyya1234@gmail.com",
    tel: "+91 7980481642",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/charliehustlr1792",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn", 
        url: "https://www.linkedin.com/in/nilangshu-bhattacharyya-4586a8274",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X", 
        url: "https://x.com/charliehustler9",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nilangshubhattacharyya1234@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  /* work: [
    {
      company: "IEEE Jadavpur University Student Branch",
      href: "https://ieeejusb.org",
      badges: ["Technical Team"],
      location: "Kolkata, India",
      title: "Technical Team Member",
      logoUrl: "/ieeejusb.png",
      start: "May 2024",
      end: "Present",
      description: "Developed interactive 2D web application for Cypher 3331, enabling 1000+ participants using Next.js, Phaser.js, and PostgreSQL. Built official website for Double Slash 3.0 hackathon and IEEE JUSB events with responsive design.",
    },
  ], */
  education: [
    {
      school: "Jadavpur University",
      href: "https://jadavpuruniversity.in/",
      degree: "Bachelor of Engineering",
      logoUrl: "/julogo.png",
      start: "2023",
      end: "2027",
      description: "CGPA: 7.62",
    },
    {
      school: "Holy Cross School",
      href: "https://holycrossschoolbaruipur.com/",
      degree: "Higher Secondary Education",
      logoUrl: "/hcslogo.jpg", 
      start: "2021",
      end: "2023",
      description: "Achieved 94.0% in Higher Secondary examinations. Strong foundation in mathematics and science.",
    },
  ],
  projects: [
    {
      title: "Huddle – 2D Interactive Web Application",
      href: "https://huddlecypher3331.vercel.app/",
      dates: "2025",
      active: true,
      description: "Developed interactive 2D game platform serving 1000+ participants during Cypher 3331. Built with Next.js, Phaser.js, and Redux for game rendering and state management. Architected scalable backend with Node.js, Express.js, Prisma ORM, and PostgreSQL.",
      technologies: [
        "Next.js",
        "Phaser.js", 
        "Redux",
        "Node.js",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://huddlecypher3331.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/huddle.png",
    },
    {
      title: "SynthScrape – AI-Powered Visual Automated Data Extraction",
      href: "https://synth-scrape.vercel.app/",
      dates: "2025",
      active: true,
      description: "Built full-stack SaaS platform with drag and drop workflow builder for no-code automated data extraction. Implemented workflow builder using React Flow and integrated Puppeteer for browser automation with comprehensive credit-based payment system.",
      technologies: [
        "React Flow",
        "Puppeteer", 
        "Node.js",
        "Express.js",
        "Stripe",
        "Microservices",
        "Cron Jobs"
      ],
      links: [
        {
          type: "Website",
          href: "https://synth-scrape.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "PostPilot – Content Management System",
      href: "https://github.com/charliehustlr1792/postpilot",
      dates: "2025",
      active: true,
      description: "Developed content management system for content creation, scheduling, and cross-platform publishing. Integrated OpenAI GPT APIs for AI content generation and machine learning models for optimal posting times.",
      technologies: [
        "Node.js",
        "Express.js",
        "BullMQ",
        "OpenAI API",
        "OAuth 2.0",
        "Facebook API",
        "Twitter API",
        "Instagram API"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/charliehustlr1792/postpilot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "HelloIEEE (Freelance Project)",
      href: "https://hello.ieee-jaduniv.in/",
      dates: "2024",
      active: true,
      description: "Developed official website for Hello IEEE 2025 event which included a quiz application with real time leaderboard. Built with Next.js and integrated Supabase for real-time data handling and user authentication.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://hello.ieee-jaduniv.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/helloieee.png",
    },
    {
      title: "DoubleSlash 3.0 (Freelance Project)",
      href: "https://doubleslash3.ieee-jaduniv.in/",
      dates: "2025",
      active: true,
      description: "Developed official website for Double Slash 3.0 hackathon event. Implemented responsive design with Next.js and TailwindCSS, ensuring seamless user experience across devices.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://doubleslash3.ieee-jaduniv.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/doubleslash.png",
    },
  ],
  /* hackathons: [
    {
      title: "Snap Syntax, SRIJAN 2025",
      dates: "2025",
      location: "Jadavpur University, Kolkata",
      description: "Secured 2nd position in web development competition. Recreated web page from memory using HTML and CSS under time constraints, demonstrating strong frontend development skills.",
      image: "/srijan-logo.png",
      win: "2nd Place",
      links: [],
    },
    {
      title: "WBJEE 2023",
      dates: "2023",
      location: "West Bengal, India",
      description: "Secured All India Rank 1307 out of 98,000+ candidates in West Bengal Joint Entrance Examination 2023, demonstrating strong analytical and problem-solving abilities.",
      image: "/wbjee-logo.png",
      win: "AIR 1307",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1IoSC86tuOxMWxJRkDVOI_Is1-JRu8SFg/view",
        },
      ],
    },
  ] */
} as const;