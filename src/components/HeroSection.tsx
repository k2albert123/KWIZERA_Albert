import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[60vh] space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl" />
        <div className="relative px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-primary">
          Available for freelance work
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-6xl md:text-7xl lg:text-9xl font-bold font-headings tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
      >
        Building <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white animate-gradient-x">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Digital Dreams</span>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-2xl text-lg md:text-xl text-neutral-400 font-medium leading-relaxed"
      >
        I'm a creative developer focused on crafting immersive and accessible web experiences. 
        I turn complex problems into simple, beautiful solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-8"
      >
        <Link 
            to="/projects"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-primary text-primary-foreground font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] active:scale-95"
        >
            View Work <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link 
            to="/contact"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full glass-dark text-white font-bold transition-all hover:scale-105 border border-white/10 active:scale-95"
        >
            Contact Me
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="fixed bottom-10 left-10 hidden lg:flex flex-col gap-6 text-muted-foreground"
      >
        <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 duration-200"><Github className="w-6 h-6" /></a>
        <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 duration-200"><Linkedin className="w-6 h-6" /></a>
        <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 duration-200"><Twitter className="w-6 h-6" /></a>
        <div className="w-px h-24 bg-border mx-auto" />
      </motion.div>
    </section>
  );
};
