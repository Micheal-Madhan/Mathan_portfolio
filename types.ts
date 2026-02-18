
export interface Education {
  school: string;
  degree: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Tech' | 'Science' | 'Soft Skills' | 'Tools';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDetails: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  outcomes: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  careerGoals: string;
  education: Education[];
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
  };
}
