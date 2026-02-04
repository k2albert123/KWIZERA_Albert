import React from 'react';
import { motion } from 'framer-motion';
import GridMotion from '../components/ui/GridMotion';
import { cn } from '../lib/utils';
import { Briefcase, Code, Database, Cpu, Globe, GraduationCap } from 'lucide-react';

const SkillBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 transition-all hover:bg-primary hover:text-primary-foreground">
        {children}
    </span>
);

const SectionCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode; index: number }> = ({ title, icon, children, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="glass p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all group"
    >
        <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h2 className="text-2xl font-bold font-headings">{title}</h2>
        </div>
        {children}
    </motion.div>
);

    const gridItems =["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUMHEQxsDgUTj320ea5yetMr2Nwzqjx_bKqQ&s",
        "https://plugins.jetbrains.com/files/25358/screenshot_d2dcf328-4a03-41e7-869f-5f41fc187b86",
        "https://thumbs.dreamstime.com/b/creative-coding-backdrop-dark-text-programming-future-concept-d-rendering-147291480.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjADaceLyCXeg6QERLp6B1thjQovcfV-wYWA&s",
        "https://images.stockcake.com/public/3/c/9/3c95a770-7877-4d70-965f-c558d4f99326_large/coding-in-dark-stockcake.jpg",
        "https://images.unsplash.com/photo-1520583457224-aee11bad5112?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMGNvZGV8ZW58MHx8MHx8fDA%3D",
        "https://c1.wallpaperflare.com/preview/552/758/364/computer-laptop-macbook-coding.jpg",
        "https://wallpapercave.com/wp/wp12498725.png",
        "https://w0.peakpx.com/wallpaper/157/626/HD-wallpaper-java-glitter-logo-programming-language-grid-metal-background-java-creative-programming-language-signs-java-logo.jpg",
        "https://miro.medium.com/0*QQ9EGS4uBADBG8aP.gif",
        "https://wallpapers.com/images/hd/angular-js-to-angular-migration-gfiq1mjry6s16ql4.jpg",
        "https://w0.peakpx.com/wallpaper/1021/44/HD-wallpaper-python-black-logo-programming-language-grid-metal-background-python-artwork-creative-programming-language-signs-python-logo.jpg",
        "https://iq.opengenus.org/content/images/2023/07/Next.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*mBR6k8EfSPDS4OHelMrfLA.jpeg",
        "https://wallpapercave.com/wp/wp8114615.jpg",
        "https://thumbs.dreamstime.com/b/creative-coding-backdrop-dark-text-programming-future-concept-d-rendering-147291480.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjADaceLyCXeg6QERLp6B1thjQovcfV-wYWA&s",
        "https://images.stockcake.com/public/3/c/9/3c95a770-7877-4d70-965f-c558d4f99326_large/coding-in-dark-stockcake.jpg",
        "https://images.unsplash.com/photo-1520583457224-aee11bad5112?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMGNvZGV8ZW58MHx8MHx8fDA%3D",
        "https://c1.wallpaperflare.com/preview/552/758/364/computer-laptop-macbook-coding.jpg",
        "https://wallpapercave.com/wp/wp12498725.png",
        "https://w0.peakpx.com/wallpaper/157/626/HD-wallpaper-java-glitter-logo-programming-language-grid-metal-background-java-creative-programming-language-signs-java-logo.jpg",
        "https://miro.medium.com/0*QQ9EGS4uBADBG8aP.gif",
        "https://wallpapers.com/images/hd/angular-js-to-angular-migration-gfiq1mjry6s16ql4.jpg",
        "https://w0.peakpx.com/wallpaper/1021/44/HD-wallpaper-python-black-logo-programming-language-grid-metal-background-python-artwork-creative-programming-language-signs-python-logo.jpg",
        "https://iq.opengenus.org/content/images/2023/07/Next.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*mBR6k8EfSPDS4OHelMrfLA.jpeg",
        "https://wallpapercave.com/wp/wp8114615.jpg",
    ]

const About: React.FC = () => {
    return (
        <div className="relative min-h-screen pt-32 pb-24">
            <GridMotion items={gridItems} className="fixed inset-0 z-0 opacity-10" />
            
            <div className="relative z-10 container mx-auto px-6 max-w-6xl">
                <motion.header 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold font-headings mb-6 tracking-tight">About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Myself</span></h1>
                    <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                        Cross-disciplinary developer focused on clean, accessible interfaces and robust backend systems. 
                        I bridge the gap between complex engineering and human-centric design.
                    </p>
                </motion.header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <SectionCard title="Programming" icon={<Code />} index={1}>
                        <p className="text-muted-foreground mb-6">Experienced in enterprise Java and modern JavaScript ecosystems.</p>
                        <div className="flex flex-wrap gap-2">
                            <SkillBadge>Spring Boot</SkillBadge>
                            <SkillBadge>React</SkillBadge>
                            <SkillBadge>TypeScript</SkillBadge>
                            <SkillBadge>Jakarta EE</SkillBadge>
                            <SkillBadge>Python</SkillBadge>
                            <SkillBadge>C++ / Qt</SkillBadge>
                        </div>
                    </SectionCard>

                    <SectionCard title="Architecture" icon={<Database />} index={2}>
                        <p className="text-muted-foreground mb-6">Specializing in scalable backend architectures and database management.</p>
                        <div className="flex flex-wrap gap-2">
                            <SkillBadge>PostgreSQL</SkillBadge>
                            <SkillBadge>REST APIs</SkillBadge>
                            <SkillBadge>JWT Auth</SkillBadge>
                            <SkillBadge>Microservices</SkillBadge>
                            <SkillBadge>MongoDB</SkillBadge>
                        </div>
                    </SectionCard>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SectionCard title="Mobile" icon={<Globe />} index={3}>
                        <p className="text-sm text-muted-foreground">React Native (Expo/CLI) and Flutter for cross-platform app development.</p>
                    </SectionCard>
                    <SectionCard title="Blockchain" icon={<Cpu />} index={4}>
                        <p className="text-sm text-muted-foreground">Smart contract development using Solidity, Hardhat, and Truffle.</p>
                    </SectionCard>
                    <SectionCard title="Experience" icon={<Briefcase />} index={5}>
                        <ul className="text-sm text-muted-foreground space-y-2">
                            <li>• Full-stack systems design</li>
                            <li>• Adaptive AI interfaces</li>
                            <li>• High-performance backends</li>
                        </ul>
                    </SectionCard>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <GraduationCap className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold font-headings">Vision & Strengths</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <p className="text-muted-foreground leading-relaxed">
                            I believe in building software that is not just functional, but also accessible and delightful to use. 
                            My background in both physics and mechanics allows me to approach algorithmic problems with a unique structural perspective.
                        </p>
                        <ul className="grid grid-cols-1 gap-4 text-sm font-medium">
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> End-to-end full-stack capability
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Focus on accessibility (A11y)
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Enterprise Java & Node.js proficiency
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> AI/ML adaptive interface enthusiast
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;