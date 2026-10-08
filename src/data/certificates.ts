export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  technologies: string[];
  certificateUrl?: string | null;
  iconName: 'Terminal' | 'Code2' | 'Brain' | 'GitBranch' | 'Award';
}

export const certificates: Certificate[] = [
  {
    id: "python-programming",
    title: "Prompt Engineering essentials",
    issuer: "Google",
    date: "2025",
    description: "Learned core About how to used AI , Prompt Engineering ,Better Results .",
    technologies: ["Generative AI", "Prompt Engineering", "Google AI Tools", "LLMs"],
    certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/DR2T12J6EDCE", // "Certificate Coming Soon"
    iconName: "Terminal"
  },
  {
    id: "web-dev-bootcamp",
    title: "Use AI as a Creative or Expert Partner",
    issuer: "Google",
    date: "2025",
    description: "A practical course focused on using AI as a creative and expert partner for generating ideas, solving problems, improving workflows, and making better decisions.",
    technologies: ["Generative AI", "Prompt Engineering", "Google AI Tools", "LLMs"],
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/ZK4H8F84Y5T4",
    iconName: "Code2"
  },
  {
    id: "ai-machine-learning",
    title: "Frontend Developement",
    issuer: "JHONS HOPKINS Univertsity",
    date: "2026",
    description: "Frontend Development focuses on building responsive, interactive, and user-friendly web interfaces",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design", "Git"],
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/VFQQXRHT0Q6N",
    iconName: "Brain"
  }
//   {
//     id: "git-github-mastery",
//     title: "Git & GitHub",
//     issuer: "GitHub Global Campus",
//     date: "2023",
//     description: "Learned version control, merge conflict management, pull requests, and collaborative repository maintenance.",
//     technologies: ["Git", "GitHub", "CLI", "Version Control"],
//     certificateUrl: null,
//     iconName: "GitBranch"
//   }
];
