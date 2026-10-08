export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  description: string;
  current?: boolean;
}

export const educationList: EducationItem[] = [
  {
    id: "edu-1",
    period: "2022 – Present",
    degree: "BS Computer Science",
    institution: "University of the Punjab",
    description: "Studying core CS disciplines including Data Structures & Algorithms, Database Systems, Web Technologies, Software Engineering, and Artificial Intelligence.",
    current: true
  },
  {
    id: "edu-2",
    period: "2020 – 2022",
    degree: "Higher Secondary Education (FSc)",
    institution: "Pre-Engineering / ICS",
    description: "Completed intermediate studies with high academic standing, developing analytical problem-solving skills in Mathematics, Physics, and Computing.",
    current: false
  }
];
