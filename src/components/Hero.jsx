import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);

  // Ensure the Spline canvas fills the container height
  useEffect(() => {
    const onResize = () => {
      if (containerRef.current) {
        const vh = window.innerHeight;
        containerRef.current.style.minHeight = `${Math.max(640, vh * 0.9)}px`;
      }
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      <div ref={containerRef} className="relative w-full flex items-center">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20 md:py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 backdrop-blur px-3 py-1 text-xs text-foreground/80">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Available for freelance & full-time opportunities
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Building delightful, performant web experiences
            </h1>
            <p className="mt-4 text-foreground/80 text-lg leading-relaxed">
              I’m a full‑stack developer focused on crafting modern, accessible interfaces and scalable backends.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-primary-foreground shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label="View my projects"
              >
                <Rocket className="h-4 w-4" /> View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-5 py-3 hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-foreground/20"
                aria-label="Contact me"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="ml-1 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground/70 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
