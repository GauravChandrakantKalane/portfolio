import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's work together</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            I'm currently open to new opportunities. Whether you have a project in mind,
            want to collaborate, or just want to say hi — feel free to reach out.
          </p>

          <a
            href="mailto:gauravkalane28@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity glow"
          >
            <Mail size={18} />
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-8 mt-12">
            <a
              href="https://github.com/GauravChandrakantKalane/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Github size={22} />
              <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gaurav-kalane-740616211/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Linkedin size={22} />
              <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
            </a>
            <a
              href="mailto:gauravkalane28@gmail.com"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail size={22} />
              <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
            </a>
            <a
              href="tel:+917620118231"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Phone size={22} />
              <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">Phone</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
