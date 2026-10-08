export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string | null;
  githubUrl: string;
  featured: boolean;
  iconName: 'Globe' | 'Code2' | 'Cpu' | 'Cloud' | 'ShoppingBag' | 'Terminal';
}

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Portfolio Website is a modern, responsive platform designed to showcase professional skills, projects, experience, and achievements.",
    technologies: ["Html", "CSS", "Javascript", "Bootstrap"],
    liveUrl: "https://portfolio-sage-delta-98.vercel.app/",
    githubUrl: "https://github.com/Rehan419/portfolio",
    featured: true,
    iconName: "Globe"
  },
  {
    id: "taskflow",
    title: "Medical Drone Service System",
    description: "Medical Drone Service System is a smart platform designed to manage and track drone-based delivery of medicines and medical supplies.",
    technologies: ["React", "Node.js", "Typescript", "Tailwind CSS"],
    liveUrl: "https://meddrone-tau.vercel.app/", // "Live Demo Coming Soon"
    githubUrl: "https://github.com/Rehan419/meddrone",
    featured: true,
    iconName: "Code2"
  },
  {
    id: "ai-chatbot",
    title: "BookBridge",
    description: "BookBridge is a modern online bookstore that allows users to explore a wide range of books and conveniently place orders online. ",
    technologies: ["Python", "FastAPI", "OpenAI API", "React"],
    liveUrl: "https://bookbridge-seven.vercel.app/", // "Live Demo Coming Soon"
    githubUrl: "https://github.com/Rehan419/bookbridge",
    featured: true,
    iconName: "Cpu"
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "Real-time weather application with live meteorological data, automatic geolocation search, and interactive forecasts.",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    liveUrl: "https://weather-bay-six-99.vercel.app/", // "Live Demo Coming Soon"
    githubUrl: "https://github.com/Rehan419/weather",
    featured: true,
    iconName: "Cloud"
  },
  {
    id: "ecommerce-backend",
    title: "Scentora Luxe",
    description: "Scalable backend service featuring JWT authorization, product catalog management, shopping cart, and order processing.",
    technologies: ["React", "Node.js", "Typescript", "Tailwind CSS"],
    liveUrl: "https://scentora-luxe.vercel.app/",
    githubUrl: "https://github.com/Rehan419/scentora_luxe",
    featured: false,
    iconName: "ShoppingBag"
  }
];
