import { skills, githubUrl, linkedinUrl } from "@/app/lib/constants";
import { getYearsOfExperience } from "@/app/lib/utils";
import projectsData from "@/public/data/projects.json";

export const name = "Connor Fitzsimmons";

export const tagline = "Full-stack engineer creating intuitive, user-focused web applications";

export const yearsExperience = getYearsOfExperience(2022);

export const toolCount = skills.reduce((sum, skill) => sum + skill.items.length, 0);

export const skillDomainCount = skills.length;

export const featuredProjects = (projectsData as Project[]).filter((project) => project.featured);

export const bioParagraphs = [
  `I'm a software developer with ${yearsExperience}+ years of experience building web and mobile applications. I focus on solving problems with clear, practical solutions.`,
  "My background in mechatronics engineering shapes how I approach software development. It enhances systems thinking, problem decomposition, and long-term reliability.",
  "My work emphasizes clarity, maintainability, and scalability."
];

export const philosophyNodes = [
  "Systems Thinking",
  "Problem Decomposition",
  "Long-Term Reliability",
  "Clarity",
  "Maintainability",
  "Scalability"
];

export const heroStats = [
  { label: "Years Experience", value: `${yearsExperience}+` },
  { label: "Tools & Technologies", value: `${toolCount}+` },
  { label: "Skill Domains", value: `${skillDomainCount}` },
  { label: "Featured Case Studies", value: `${featuredProjects.length}` }
];

/* Sourced directly from the South West Exposures case study outcomes copy
   already on the site (public/data/projects.json) — not invented metrics. */
export const impactStats = [
  { label: "Indexed Pages Growth", value: "+60%" },
  { label: "Site Traffic Growth", value: "+40%" },
  { label: "Time on Site Growth", value: "+30%" },
  { label: "Content Update Time", value: "-98%" }
];

export const contactInfo = {
  email: "connorkfitzsimmons@gmail.com",
  location: "Ajax, ON",
  githubUrl,
  linkedinUrl
};

export const skillCategories = skills;
