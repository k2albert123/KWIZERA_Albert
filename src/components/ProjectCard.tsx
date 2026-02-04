import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '../lib/utils';

export interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    index?: number;
}

const getProjectBackground = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes('exam')) return '/assets/onlineExams.png';
    if (lower.includes('submission')) return '/assets/submissionplatform2.png';
    if (lower.includes('booking')) return '/assets/booking2.png';
    if (lower.includes('chat')) return '/assets/chat2.png';
    if (lower.includes('scheduler') || lower.includes('mqtt')) return '/assets/mqtt2.png';
    if (lower.includes('dapp') || lower.includes('prototype')) return '/assets/dapp.jpeg';
    return undefined;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link, github, index = 0 }) => {
    const bg = getProjectBackground(title);
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full flex flex-col"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur duration-500" />
            
            <div className="relative flex flex-col h-full glass-dark border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                {/* Visual Header / Image Area */}
                <div className="relative h-56 overflow-hidden">
                    <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 brightness-[0.3] group-hover:brightness-[0.8]"
                        style={bg ? { backgroundImage: `url(${bg})` } : { backgroundColor: 'black' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <div className="flex flex-wrap gap-2">
                            {technologies.slice(0, 3).map((tech, i) => (
                                <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-primary/90 text-primary-foreground px-2 py-1 rounded shadow-lg backdrop-blur-md">
                                    {tech}
                                </span>
                            ))}
                            {technologies.length > 3 && (
                                <span className="text-[10px] font-black uppercase tracking-widest bg-black/60 text-white/80 px-2 py-1 rounded backdrop-blur-md border border-white/5">
                                    +{technologies.length - 3}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="p-8 flex flex-col flex-grow relative z-10">
                    <h4 className="text-2xl font-bold font-headings mb-3 group-hover:text-primary transition-colors tracking-tight text-white">{title}</h4>
                    <p className="text-neutral-400 text-base leading-relaxed mb-8 flex-grow line-clamp-3 font-medium">
                        {description}
                    </p>
                    
                    <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                        {link && (
                            <a 
                                href={link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-all group/link"
                            >
                                <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" /> Live Demo
                            </a>
                        )}
                        {github && (
                            <a 
                                href={github} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-white transition-all group/github"
                            >
                                <Github className="w-4 h-4 transition-transform group-hover/github:scale-110" /> Source
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;