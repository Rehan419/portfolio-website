export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  badge: string;
  location: string;
  description: string;
  technologies: string[];
  isCurrent?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2026",
    role: "Full-Stack Development",
    organization: "NextSoft Solutions",
    badge: "Full-Stack",
    location: "Remote",
    description: "Architecting modern full-stack web applications, exploring backend API workflows, integrating Python automation scripts, and maintaining clean component-based architectures with React and TypeScript.",
    technologies: ["Full-Stack", "React", "TypeScript", "Tailwind CSS"],
    isCurrent: true
  },
  {
    id: "exp-2",
    period: "2026 – Present",
    role: "Freelancer",
    organization: "Fiverr",
    badge: "Software Engineering",
    location: "Lahore, Pakistan",
    description: "Designed and implemented collaborative coursework software, built responsive database-driven client portals, and practiced version control using Git branching strategies and peer code reviews.",
    technologies: ["Web Development", "Python", "Git & GitHub"]
  }
  // {
  //   id: "exp-3",
  //   period: "2022 – 2023",
  //   role: "Computer Science Foundations & Problem Solving",
  //   organization: "@ Core Computing Curriculum",
  //   badge: "Algorithms & OOP",
  //   location: "Lahore, Pakistan",
  //   description: "Built rigorous foundational competence in Object-Oriented Programming (OOP), Data Structures & Algorithms, discrete mathematical logic, and relational database management systems.",
  //   technologies: ["Data Structures", "Algorithms", "C++", "Python", "OOP", "DBMS"]
  // }
];
