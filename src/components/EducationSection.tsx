import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master's in Computer Science (MScCS)",
    institution: "Fergusson College, Pune",
    period: "May 2021 — Aug 2023",
  },
  {
    degree: "Bachelor's in Computer Science (BScCS)",
    institution: "Nowrosjee Wadia College, Pune",
    period: "Mar 2018 — Apr 2021",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Academic background</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={18} className="text-primary" />
                <p className="font-mono text-primary text-xs uppercase tracking-wider">{edu.period}</p>
              </div>
              <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
