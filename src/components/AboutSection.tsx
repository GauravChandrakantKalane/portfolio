import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a full-stack developer with a strong focus on frontend and
              backend systems, holding a{" "}
              <span className="text-foreground font-medium">
                Master's in Computer Science (MScCS)
              </span>
              . I build robust, scalable applications across web and mobile
              platforms.
            </p>
            <p>
              My core tech stack includes{" "}
              <span className="text-foreground font-medium">
                React-Native, NestJS, ReactJS, TypeScript, Tailwind CSS,
                Node.js, and Express.js
              </span>
              , supported by solid experience with{" "}
              <span className="text-foreground font-medium">
                MongoDB, PostgreSQL, Redis
              </span>{" "}
              and RESTful APIs. I've also worked with{" "}
              <span className="text-foreground font-medium">
                {" "}
                Expo and React Native{" "}
              </span>{" "}
              for mobile projects.
            </p>
            <p>
              I'm passionate about solving real-world problems with clean
              architecture and reliable systems. Recent projects include
              Parenting Mobile Application, Chat Application built for
              performance and reliability.
            </p>
            <p className="text-foreground font-medium">
              Let's connect and build something impactful. 🌍
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <div className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase size={14} className="text-primary" />
                <p className="font-mono text-primary text-xs uppercase tracking-wider">
                  Experience
                </p>
              </div>
              <p className="text-xl font-bold">2+ Years</p>
              <p className="text-xs text-muted-foreground mt-1">
                Full-Stack Development
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap size={14} className="text-primary" />
                <p className="font-mono text-primary text-xs uppercase tracking-wider">
                  Education
                </p>
              </div>
              <p className="text-sm font-semibold">MScCS</p>
              <p className="text-xs text-muted-foreground mt-1">
                Fergusson College, Pune
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <Code2 size={14} className="text-primary" />
                <p className="font-mono text-primary text-xs uppercase tracking-wider">
                  Focus
                </p>
              </div>
              <p className="text-sm text-secondary-foreground">
                Mobile and Web Application Development with Scalable Architecture
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
