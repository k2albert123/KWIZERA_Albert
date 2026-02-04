import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface Skill {
  name: string;
  level?: string;
  description?: string;
  icons?: string[];
  category?: string;
}

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

const getSkillBackground = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes("java")) return "/assets/java.png";
  if (lower.includes("frontend") || lower.includes("react"))
    return "/assets/react.jpeg";
  if (lower.includes("python")) return "/assets/python.webp";
  if (lower.includes("desktop") || lower.includes("c++"))
    return "/assets/cpp.jpg";
  if (lower.includes("web3") || lower.includes("solidity"))
    return "/assets/solidity.png";
  if (lower.includes("mobile") || lower.includes("native"))
    return "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000";
  if (lower.includes("database"))
    return "https://images.unsplash.com/photo-1544383835-2ce296c09b27?auto=format&fit=crop&q=80&w=1000";
  if (lower.includes("devops") || lower.includes("tooling"))
    return "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1000";
  return undefined;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, index = 0 }) => {
  const bg = getSkillBackground(skill.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full flex flex-col"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-500/50 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity blur-md duration-500" />

      <div className="relative flex flex-col h-full glass-dark border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        {/* Visual Header */}
        <div className="relative h-52 overflow-hidden bg-black/40">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 brightness-[0.2] group-hover:brightness-[0.4] blur-sm"
            style={
              bg
                ? { backgroundImage: `url(${bg})` }
                : { backgroundColor: "black" }
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />

          {/* Main Icon */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {skill.icons && skill.icons[0] && (
              <img
                src={skill.icons[0]}
                alt={skill.name}
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(var(--primary),0.6)] group-hover:scale-110 transition-transform duration-500"
              />
            )}
          </div>

          {/* Category Block */}
          {skill.category && (
            <div className="absolute top-6 left-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-primary/20 text-primary border border-primary/20 px-3 py-1.5 rounded-full backdrop-blur-md">
                {skill.category}
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-8 flex flex-col flex-grow relative z-10">
          <h3 className="text-2xl font-bold font-headings mb-3 group-hover:text-primary transition-colors tracking-tighter text-white">
            {skill.name}
          </h3>
          <p className="text-neutral-400 text-base leading-relaxed mb-8 flex-grow line-clamp-3 font-medium">
            {skill.description}
          </p>

          {/* Footer Row */}
          <div className="flex items-center justify-between pt-6 border-t border-white/5">
            <div className="flex -space-x-3">
              {skill.icons?.slice(1).map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-[#0B1120] bg-[#161F31] p-2 backdrop-blur-sm"
                >
                  <img
                    src={icon}
                    alt="tech"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                {skill.level}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
