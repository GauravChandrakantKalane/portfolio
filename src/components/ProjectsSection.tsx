import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Ultimate — Parenting App",
    description:
      "A high-performance parenting application for Android and iOS built with React Native. Features optimized UI rendering, native module integration, and a seamless cross-platform experience.",
    tech: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    github: "#",
  },
  {
    title: "UltimateBond — Web Platform",
    description:
      "A comprehensive web platform built with Next.js featuring Server-Side Rendering (SSR), SEO optimizations, and significantly reduced page load times for maximum organic discoverability.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "ExpressJS", "PostgreSQL"],
    live: "https://ultimatebond.in/",
  },
  {
    title: "Chit-Chat Chat Application",
    description:
      "A high-performance messaging platform built with React, Express, and MongoDB. Leverages WebSockets and Redis for real-time delivery, optimized with Virtualized Lists and Infinite Scroll to handle large message histories efficiently. Implemented Debouncing on search and input handlers to minimize re-renders and API overhead.",
    tech: ["ReactJs", "MongoDb", "Redis", 'ExpressJS', 'WebSocket'],
  },
  // {
  //   title: "Remote Desktop Control App",
  //   description:
  //     "A desktop application enabling remote control capabilities with multi-monitor and multi-screen sharing functionality, built with ElectronJS.",
  //   tech: ["ElectronJS", "ReactJS", "TypeScript"],
  // },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Things I've built</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6 md:p-8 flex flex-col hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  {project.github && (
                    <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-secondary text-secondary-foreground text-xs font-mono px-2.5 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
