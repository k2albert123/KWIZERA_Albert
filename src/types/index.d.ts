// This file contains TypeScript type definitions used throughout the project.

export interface Skill {
    name: string;
    level: string; // e.g., "Beginner", "Intermediate", "Expert"
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string; // URL to the project
}

export interface PortfolioData {
    skills: Skill[];
    projects: Project[];
    databases: string[];
    backendExperience: string[];
    frontendProjects: string[];
    mobileDevelopmentKnowledge: string[];
    otherKnowledgeAreas: string[];
    strengths: string[];
}