
import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Michael Mathan S",
  title: "Software Developer",
  tagline: "Building high-performance SPAs and scalable enterprise systems with Angular & .NET.",
  about: "A skilled <span class='text-cyan-400 font-bold'>Software Developer with 4+ years of experience</span> in <span class='text-cyan-400 font-bold'>Angular, TypeScript, .NET, and Web APIs</span>. Currently at <span class='text-cyan-400 font-bold'>TCS</span>, I specialize in developing robust SPAs with rich user interfaces using <span class='text-cyan-400 font-bold'>Angular 18+ and Bootstrap</span>. Experienced in Agile methodologies, framework upgrades, and backend optimization with <span class='text-cyan-400 font-bold'>Elasticsearch and Logstash</span>. Expertise in creating reusable components and ensuring application scalability. Skilled in integrating DevOps tools like Azure and GitLab for efficient project management.",
  careerGoals: "Passionate about delivering innovative solutions and staying updated with emerging technologies. Recognized for consistent quality, proactive issue resolution, and on-time delivery in Agile environments.",
  education: [
    {
      school: "Periyar Maniammai Institute of Science & Technology",
      degree: "Bachelor of Technology (CSE)",
      period: "2017 - 2021",
      description: "Thanjavur. Comprehensive study of Computer Science and Engineering principles."
    },
    {
      school: "Allwin Higher Secondary School",
      degree: "Higher Secondary Certificate",
      period: "2016 - 2017",
      description: "Thanjavur. Advanced study in Mathematics and Science."
    }
  ],
  skills: [
    { name: "TypeScript / JavaScript", level: 98, category: 'Tech' },
    { name: "HTML5 / CSS3", level: 98, category: 'Tech' },
    { name: "C# / ASP.NET", level: 85, category: 'Tech' },
    { name: "SQL", level: 85, category: 'Tech' },
    { name: "Angular 18+/19", level: 98, category: 'Tech' },
    { name: "Bootstrap / Angular Material", level: 95, category: 'Tech' },
    { name: "Kendo UI / Ag Grid", level: 92, category: 'Tech' },
    { name: "RESTful API Development", level: 90, category: 'Tech' },
    { name: "Elasticsearch / Logstash", level: 92, category: 'Tools' },
    { name: "Filebeat / Kibana", level: 88, category: 'Tools' },
    { name: "Azure DevOps / GitLab", level: 90, category: 'Tools' },
    { name: "Jira / Grafana / Mirai", level: 88, category: 'Tools' },
    { name: "Cypress / Postman", level: 85, category: 'Tools' },
    { name: "MySQL / Intersystem Cache", level: 85, category: 'Tools' }
  ],
  experience: [
    {
      company: "TCS (Tata Consultancy Services) - City Union Bank",
      role: "Software Developer",
      period: "Dec 2025 - Present",
      description: [
        "Architecting modern UI screens for the <span class='text-cyan-400 font-semibold'>City Union Bank Bill Pay module</span> using Angular 18+.",
        "Identifying and resolving customer-reported issues while optimizing existing features for better scalability.",
        "Developing custom UI controls and responsive layouts to ensure consistent performance across all browsers.",
        "Collaborating with bank stakeholders to integrate 10+ new billing partners into the CUB ecosystem."
      ]
    },
    {
      company: "TCS (Tata Consultancy Services) - ASML",
      role: "Software Developer",
      period: "June 2025 - Nov 2025",
      description: [
        "Led the front-end development for <span class='text-cyan-400 font-semibold'>ASML Validation Tools (AVT)</span>, focusing on seamless, user-friendly interfaces.",
        "Migrated enterprise applications from <span class='text-cyan-400 font-semibold'>Angular 18 to Angular 19</span> with zero downtime, improving load efficiency.",
        "Optimized 6p=P industrialization deliverables, reducing process iterations to a maximum of five.",
        "Integrated AVT with existing ASML systems like <span class='text-cyan-400 font-semibold'>GRE, AIR, and Coach</span> through automated data flows."
      ]
    },
    {
      company: "DH Healthcare Software Services India Private Limited (Dedalus)",
      role: "Software Developer",
      period: "Nov 2021 - May 2025",
      description: [
        "Engineered <span class='text-cyan-400 font-semibold'>LIMS</span> to automate workflows and track samples, experiments, and QA/QC results.",
        "Upgraded <span class='text-cyan-400 font-semibold'>Elasticsearch (v7.16.1 to v8.17.0)</span>, strengthening security with authentication measures.",
        "Designed and developed <span class='text-cyan-400 font-semibold'>Audit Viewer</span> and <span class='text-cyan-400 font-semibold'>Job Scheduler</span> modules for end-to-end medical compliance.",
        "Participated in Agile Scrum methodology, actively contributing to sprint retrospectives and process improvements.",
        "Successfully migrated legacy healthcare applications from Angular 12 to 14 and subsequently to Angular 18."
      ]
    }
  ],
  projects: [
    {
      id: "cub-billpay",
      title: "City Union Bank",
      tagline: "Current Project @ TCS",
      description: "Modernizing the bill payment ecosystem for City Union Bank using Angular 18+.",
      fullDetails: "Developing new user interface screens for the Bill Pay module. I focus on delivering seamless, user-friendly interfaces by identifying and resolving customer-reported issues. My work ensures responsive layouts and consistent performance across all platforms.",
      technologies: ["Angular 18+", "TypeScript", "Bootstrap"],
      image: "https://thumbs.dreamstime.com/b/digital-invoice-form-tax-management-concept-businessman-using-calculator-laptop-billing-e-invoicing-online-accounting-402775481.jpg",
      outcomes: [
        "Enhanced transaction flow efficiency and security.",
        "Delivered multiple new screens and custom UI controls.",
        "Zero-downtime integration of 10+ billing partners."
      ]
    },
    {
      id: "asml-avt",
      title: "ASML Validation Tools (AVT)",
      tagline: "Advanced Semiconductor Materials Lithography @ TCS",
      description: "Standardizes NPI process iterations for industrialization deliverables.",
      fullDetails: "AVT streamlines validation and verification of product-specific information for 6p=P industrialization deliverables. It standardizes the NPI process, reducing iterations to a maximum of five and accelerating time to market. It provides real-time visibility into validation status and follow-up actions while integrating with GRE, AIR, and Coach systems.",
      technologies: ["Angular 18/19", "JavaScript", "HTML5/CSS3", "Git", "JIRA", "Cypress"],
      image: "https://www.sec.gov/Archives/edgar/data/937966/000093796625000009/asml-20241231_g1.jpg",
      outcomes: [
        "Reduced NPI iterations to a maximum of five.",
        "Zero downtime migration from Angular 18 to 19.",
        "Boosted customer satisfaction through automated data flows and collaboration."
      ]
    },
    {
      id: "dedalus-healthcare",
      title: "Laboratory Information Management System (LIMS)",
      tagline: "Enterprise Medical Solutions @ Dedalus",
      description: "Automating medical diagnostic workflows and secure audit logging.",
      fullDetails: "Comprises three major modules: LIMS (automating lab workflows/tracking), Audit Viewer (tracking end-to-end workflow history), and Job Scheduler (managing background jobs). Integrated Elasticsearch 8.x to handle sub-second searches across millions of medical records with secure snapshot/restore procedures.",
      technologies: ["Angular 18+", "Elasticsearch 8.17.0", "Logstash", "Filebeat", "Web API", "Intersystem Cache", "SQL Server"],
      image: "https://media.licdn.com/dms/image/v2/D4D10AQGut7dG39caCw/image-shrink_800/B4DZYef.5tH4Ag-/0/1744268423302?e=2147483647&v=beta&t=M1VTUuJ5EYil5TxGRbioc6xcQG3br4JriKCfsvsRfGk",
      outcomes: [
        "Upgraded Elasticsearch from 7.16.1 to 8.17.0.",
        "Implemented secure authentication and reliable recovery procedures.",
        "Automated monitoring mechanisms for system health and query performance."
      ]
    }
  ],
  socials: {
    github: "github.com/Micheal-Madhan",
    linkedin: "linkedin.com/in/michael-mathan-s-aa1999171/",
    email: "michaelmathan.s7@gmail.com",
    phone: "+91 8870497573"
  }
};
