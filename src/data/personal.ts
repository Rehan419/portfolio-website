export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  subtitle: string;
  statusBadge: string;
  profileBadge1: string;
  profileBadge2: string;
  bio: string;
  aboutIntro: string;
  aboutHighlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  contact: {
    email: string;
    phone: string;
    whatsappNumber: string;
    whatsappUrl: string;
    location: string;
    locationMapUrl: string;
    githubUrl: string;
    githubUsername: string;
    linkedinUrl: string;
    linkedinUsername: string;
  };
  footer: {
    tagline: string;
    copyrightYear: number;
  };
}

export const personalInfo: PersonalInfo = {
  name: "REHAN",
  fullName: "Muhammad Rehan Irfan",
  title: "CS Student • Aspiring Developer",
  subtitle: "Rehan | Computer Science Undergraduate",
  statusBadge: "AVAILABLE FOR INTERNSHIPS & PROJECTS",
  profileBadge1: "Active Coder",
  profileBadge2: "Full Stack // Python",
  bio: "I'm a Computer Science student passionate about building modern web applications, backend systems, artificial intelligence, and continuously learning new technologies. I enjoy working with clean code, creative ideas, and scalable solutions.",
  aboutIntro: "I'm Rehan, a Computer Science undergraduate with a strong interest in web development, backend systems, artificial intelligence, and modern technologies. I love solving problems, building useful projects, and learning new skills every day.",
  aboutHighlights: [
    {
      title: "Problem Solver",
      description: "I turn complex problems into simple, efficient, and practical digital solutions.",
      icon: "Code2"
    },
    {
      title: "Team Player",
      description: "I work well in teams, value open collaboration, and practice agile workflows.",
      icon: "Users"
    },
    {
      title: "Fast Learner",
      description: "I quickly adapt to modern tech stacks, frameworks, and evolving development tools.",
      icon: "Zap"
    }
  ],
  contact: {
    email: "rehandin2007@gmail.com",
    phone: "+92 334 4013922",
    whatsappNumber: "923344013922",
    whatsappUrl: "https://wa.me/923344013922",
    location: "Lahore, Pakistan • Open to remote",
    locationMapUrl: "https://maps.google.com/?q=Lahore,Pakistan",
    githubUrl: "https://github.com/Rehan419?tab=repositories",
    githubUsername: "github.com/Rehan419",
    linkedinUrl: "https://www.linkedin.com/in/rehan-irfan-27b199371/",
    linkedinUsername: "linkedin.com/in/rehan-irfan"
  },
  footer: {
    tagline: "Build • Learn • Grow",
    copyrightYear: 2026
  }
};
