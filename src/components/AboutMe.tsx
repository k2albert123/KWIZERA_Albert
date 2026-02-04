import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function AboutMe() {
  return (
    <div className="flex items-center justify-center w-full py-12 px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-dark p-8 md:p-16 rounded-[2.5rem] max-w-4xl border border-white/10 shadow-3xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -ml-48 -mb-48" />

        <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold font-headings mb-10 tracking-tighter"
            >
              The Story <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Behind the Code</span>
            </motion.h2>

            <div className="space-y-8 text-lg md:text-xl text-neutral-400 leading-relaxed font-medium">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  I’m a <span className="text-white font-bold">curious</span> and 
                  <span className="text-primary font-bold"> passionate</span> designer of systems who loves exploring 
                  <span className="text-white font-bold"> technology</span>,
                  building useful applications, and refining my craft through 
                  <span className="text-accent font-bold italic"> deep experimentation</span>.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="space-y-6"
                >
                  <span className="block">
                    I enjoy creating everything from high-fidelity interfaces to robust, low-latency backends. Coding, for me, is about 
                    <span className="text-primary font-bold underline decoration-primary/30 underline-offset-8"> human impact</span> and 
                    <span className="text-white font-bold"> solving tangible problems</span>.
                  </span>

                  <span className="block italic text-base border-l-2 border-primary/40 pl-6 py-2 bg-primary/5 rounded-r-lg">
                    Expertise: React, Spring Boot, Node.js, and PostgreSQL. Focused on clean, maintainable, and type-safe architectures.
                  </span>

                  <span className="block">
                    My background is rooted in experimentation—breaking things, fixing them, and building them stronger. This drive extends from API development to 
                    <span className="text-white font-bold"> mobile ecosystems</span> and 
                    <span className="text-primary font-bold"> system automation</span>.
                  </span>
                </motion.p>
            </div>
        </div>
      </motion.div>
    </div>
  );
}
