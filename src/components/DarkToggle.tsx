import React, { useState } from 'react';

const DarkToggle: React.FC = () => {
    const [isDark, setIsDark] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark', !isDark);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300 group"
            aria-label="Toggle Theme"
        >
            <span className="text-xs font-bold uppercase tracking-widest text-primary group-hover:scale-110 transition-transform inline-block">
                {isDark ? 'Light' : 'Dark'}
            </span>
        </button>
    );
};

export default DarkToggle;