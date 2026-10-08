export interface Skill {
  id: string;
  name: string;
  percentage: number;
  category: 'languages' | 'backend' | 'frontend' | 'tools';
  barColor: string; // Tailwind gradient classes
}

export const skills: Skill[] = [
  {
    id: "js",
    name: "JavaScript (ES6+)",
    percentage: 85,
    category: "languages",
    barColor: "from-amber-400 to-amber-500",
  },
  {
    id: "java",
    name: "Java (OOP & Patterns)",
    percentage: 80,
    category: "languages",
    barColor: "from-red-500 to-rose-600",
  },
  {
    id: "python",
    name: "Python Automation",
    percentage: 88,
    category: "languages",
    barColor: "from-blue-500 to-cyan-400",
  },
  // {
  //   id: "sql",
  //   name: "SQL & Database Design",
  //   percentage: 78,
  //   category: "backend",
  //   barColor: "from-cyan-400 to-teal-400",
  // },
  // {
  //   id: "node",
  //   name: "Node.js & Express APIs",
  //   percentage: 82,
  //   category: "backend",
  //   barColor: "from-emerald-400 to-green-500",
  // },
  {
    id: "react",
    name: "React & Modern Frontend",
    percentage: 88,
    category: "frontend",
    barColor: "from-sky-400 to-blue-500",
  },
  {
    id: "htmlcss",
    name: "HTML5 & CSS3 Responsive",
    percentage: 90,
    category: "frontend",
    barColor: "from-amber-400 to-orange-500",
  },
  // {
  //   id: "mongodb",
  //   name: "MongoDB & SQLite",
  //   percentage: 75,
  //   category: "backend",
  //   barColor: "from-emerald-400 to-teal-500",
  // },
  {
    id: "git",
    name: "Git & GitHub Collaboration",
    percentage: 88,
    category: "tools",
    barColor: "from-indigo-400 to-purple-500",
  },
  {
    id: "vercel",
    name: "Vercel & Cloud CI/CD",
    percentage: 85,
    category: "tools",
    barColor: "from-cyan-400 to-blue-500",
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    percentage: 78,
    category: "languages",
    barColor: "from-purple-400 to-violet-500",
  },
  {
    id: "ai",
    name: "AI & LLM Workflows",
    percentage: 82,
    category: "tools",
    barColor: "from-rose-400 to-pink-500",
  },
];
