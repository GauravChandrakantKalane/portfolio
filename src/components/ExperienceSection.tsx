import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer (Full-Stack)",
    company: "Adeptify Technologies Pvt Ltd",
    location: "Pune, India",
    period: "Jan 2023 — Present",
    highlights: [
      'Spearheaded the end-to-end development of "Ultimate," a high-performance parenting application for Android and iOS using React Native.',
      "Engineered a seamless cross-platform user experience by optimizing UI rendering and integrating essential native modules.",
      'Architected and deployed "UltimateBond," a comprehensive web platform built with Next.js.',
      "Implemented Server-Side Rendering (SSR) and SEO best practices to maximize organic discoverability and reduce initial page load times.",
      "Took ownership of backend architecture and infrastructure, focusing on scalability, security, and maintainability.",
      "Designed and implemented database schemas from scratch, including table creation, relational modeling, and constraints.",
      "Developed and optimized complex SQL queries for high-performance data retrieval and reporting.",
      "Improved API performance through optimized SQL queries, effective indexing, caching strategies, and code-level refactoring.",
      "Secured backend APIs by implementing validation middleware, authentication guards, authorization checks, and rate limiting.",
      "Coordinated with product managers for requirement analysis, sprint planning, estimations, and production releases.",
    ],
    tech: ["React Native", "Next.js", "Node.js", "PostgreSQL", "NestJS", "TypeScript", "Redis"],
  },
  {
    role: "Software Engineer Intern",
    company: "Spring Computing Technologies Pvt Ltd",
    location: "Pune, India",
    period: "Jan 2023 — Jun 2023",
    highlights: [
      "Collaborated with a development team to build and improve frontend features for real-world applications.",
      "Developed responsive user interfaces using HTML, CSS, JavaScript, ReactJS, TypeScript, and Bootstrap.",
      "Contributed to the development of a Remote Desktop Control Application using ElectronJS, ReactJS, and TypeScript.",
      "Designed and implemented fully responsive UI for multi-monitor and multi-screen sharing functionality.",
      "Collaborated with cross-functional teams to debug, optimize, and enhance frontend performance.",
    ],
    tech: ["ReactJS", "TypeScript", "ElectronJS", "Bootstrap", "JavaScript"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Where I've worked</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/30 transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground">
                    {exp.company} · <span className="text-sm">{exp.location}</span>
                  </p>
                </div>
                <p className="font-mono text-sm text-muted-foreground shrink-0">{exp.period}</p>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                    <span className="text-primary mt-1 shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {exp.tech.map((t) => (
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

export default ExperienceSection;
