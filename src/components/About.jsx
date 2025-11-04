import { motion } from 'framer-motion';
import { User, Briefcase, GraduationCap, Code } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="container mx-auto px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="grid gap-10 lg:grid-cols-2"
      >
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-3 py-1 text-xs text-foreground/80">
            <User className="h-3.5 w-3.5" /> About
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Hi, I’m Alex — a product‑minded engineer.</h2>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            I specialize in designing and building fast, accessible web apps with a focus on user experience
            and reliability. I enjoy collaborating with cross‑functional teams to ship impactful features.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['React','TypeScript','Node.js','FastAPI','MongoDB','Tailwind','Framer Motion','Accessibility'].map((s) => (
              <span key={s} className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-sm">{s}</span>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-foreground/10 p-5 bg-background/60 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <Briefcase className="h-5 w-5" />
              <h3 className="font-semibold">Experience</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              <li><span className="font-medium text-foreground">Senior Frontend Engineer</span> — Acme Inc (2021—Present)</li>
              <li><span className="font-medium text-foreground">Full‑stack Developer</span> — Startup Co (2019—2021)</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-xl border border-foreground/10 p-5 bg-background/60 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5" />
              <h3 className="font-semibold">Education</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              <li>B.S. in Computer Science — State University</li>
              <li>UX & Accessibility Certification — Online Program</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-foreground/10 p-5 bg-background/60 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <Code className="h-5 w-5" />
              <h3 className="font-semibold">What I’m into</h3>
            </div>
            <p className="mt-3 text-sm text-foreground/80">
              Design systems, 3D on the web, performance tuning, and creating delightful micro‑interactions.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
