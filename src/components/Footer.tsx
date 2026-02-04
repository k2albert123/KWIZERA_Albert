import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { cn } from '../lib/utils';

const Footer: React.FC = () => {
    return (
        <footer className="relative mt-32 border-t border-border/50 bg-background/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-primary-foreground text-sm">
                            <img src="/assets/logo.png" alt="Logo" />
                        </div>
                        <p className="text-muted-foreground max-w-xs text-sm">
                            Building digital experiences with passion and precision. Let's create something extraordinary.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="mailto:k2albert123@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
                        </div>
                        <p className="text-xs text-muted-foreground/60">
                            &copy; {new Date().getFullYear()} Kwizera Albert. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;