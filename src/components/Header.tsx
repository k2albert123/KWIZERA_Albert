import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkToggle from './DarkToggle';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
    ];

    return (
        <header 
            className={cn(
                "sticky top-4 z-50 transition-all duration-300 px-4",
                isScrolled ? "max-w-4xl mx-auto" : "max-w-6xl mx-auto"
            )}
        >
            <nav className={cn(
                "flex items-center justify-between py-3 px-6 rounded-full border border-border/50 transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-xl shadow-2xl shadow-primary/5" : "bg-transparent"
            )}>
                <Link to="/" className="group flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-primary-foreground text-sm">
                        <img src="assets/logo.png" alt="Logo" />
                    </div>
                    <span className="hidden sm:inline-block font-headings font-bold text-lg tracking-tight">
                        Kwizera Albert
                    </span>
                </Link>

                <div className="flex items-center gap-6">
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link 
                                    to={item.path}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary relative py-1",
                                        location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                                    )}
                                >
                                    {item.name}
                                    {location.pathname === item.path && (
                                        <motion.div 
                                            layoutId="nav-underline"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 pl-4 border-l border-border/50">
                        <DarkToggle />
                        <Link 
                            to="/contact" 
                            className="hidden sm:inline-flex px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold transition-transform hover:scale-105 active:scale-95"
                        >
                            Hire Me
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;