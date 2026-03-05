import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages & Frameworks",
    items: ["React Native", "ReactJS", "Next.js", "Node.js", "Express.js",  "TypeScript", "JavaScript (ES6)", "Python"],
  },
  {
    category: "Frontend",
    items: ["ReactJS", "Next.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "Expo"],
  },
  {
    category: "Backend & APIs",
    items: ["Express.js", "Node.js", "REST APIs",],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "SQL", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3, IAM, CloudWatch)", "Docker", "Jenkins", "Linux"],
  },
  {
    category: "Tools",
    items: ["VS Code", "Postman", "Git", "GitHub", "GitLab", "Jira"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Technologies I work with</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-mono text-primary text-xs uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground text-xs font-mono px-3 py-1.5 rounded-md"
                  >
                    {skill}
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

export default SkillsSection;
