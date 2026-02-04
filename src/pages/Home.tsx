import React from 'react';
import SkillCard from '../components/SkillCard';
import ProjectList from '../components/ProjectList';
import ContactForm from '../components/ContactForm';
import { portfolioData } from '../data/portfolio';
import AboutMe from '../components/AboutMe';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import GridMotion from '../components/ui/GridMotion';

const Home: React.FC = () => {
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
    return (
        <div className="relative min-h-screen">
            {/* Animated Background */}
            <GridMotion items={gridItems} gradientColor="black" className="fixed inset-0 z-0" />
            
            <div className="relative z-10 space-y-32 pb-24">
                {/* Hero section replaces old header */}
                <HeroSection />

                {/* About Me Section with Animation */}
                <motion.section 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold font-headings mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">About Me</span></h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                    </div>
                    <AboutMe />
                </motion.section>

                <motion.section 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold font-headings mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Mastered Tech</span></h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Continuous learning and implementation of modern technologies.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioData.skills.map((skill, idx) => (
                            <SkillCard key={skill.name} skill={skill} index={idx} />
                        ))}
                    </div>
                </motion.section>

                <motion.section 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold font-headings mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Featured Work</span></h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                    </div>
                    <ProjectList />
                </motion.section>

                <motion.section 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-4"
                >
                    <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-16 border border-primary/20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold font-headings mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Let's Connect</span></h2>
                            <p className="text-muted-foreground">Have a project in mind? Reach out and let's build something amazing together.</p>
                        </div>
                        <ContactForm />
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default Home;
