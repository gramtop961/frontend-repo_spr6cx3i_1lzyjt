import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'Realtime Dashboard',
    desc: 'Live metrics with WebSocket updates and custom charts.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'WebSocket'],
    cat: ['web', 'data'],
    live: 'https://example.com',
    code: 'https://github.com'
  },
  {
    id: 2,
    title: 'E‑commerce Platform',
    desc: 'Headless storefront with performant product search.',
    img: 'https://images.unsplash.com/photo-1515165562835-c3b8c1ea9d1a?q=80&w=1200&auto=format&fit=crop',
    tech: ['React', 'TypeScript', 'Stripe'],
    cat: ['web'],
    live: 'https://example.com',
    code: 'https://github.com'
  },
  {
    id: 3,
    title: 'Portfolio 3D',
    desc: 'Interactive hero using Spline and smooth animations.',
    img: 'https://images.unsplash.com/photo-1545231027-637d2f6210f0?q=80&w=1200&auto=format&fit=crop',
    tech: ['Spline', 'Framer Motion', 'Tailwind'],
    cat: ['web', '3d'],
    live: 'https://example.com',
    code: 'https://github.com'
  },
  {
    id: 4,
    title: 'API Service',
    desc: 'FastAPI microservice with JWT auth and caching.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    tech: ['FastAPI', 'Python', 'Redis'],
    cat: ['backend'],
    live: 'https://example.com',
    code: 'https://github.com'
  },
  {
    id: 5,
    title: 'Design System',
    desc: 'Composable UI components with accessibility baked in.',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    tech: ['React', 'Storybook', 'A11y'],
    cat: ['web', 'design'],
    live: 'https://example.com',
    code: 'https://github.com'
  },
  {
    id: 6,
    title: 'Mobile Companion',
    desc: 'PWA with offline support and background sync.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    tech: ['PWA', 'Workbox', 'TypeScript'],
    cat: ['web'],
    live: 'https://example.com',
    code: 'https://github.com'
  }
];

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'backend', label: 'Backend' },
  { key: '3d', label: '3D' },
  { key: 'design', label: 'Design' }
];

export default function Projects() {
  const [active, setActive] = useState('all');

  const filtered = useMemo(() => {
    if (active === 'all') return PROJECTS;
    return PROJECTS.filter(p => p.cat.includes(active));
  }, [active]);

  return (
    <section id="projects" className="container mx-auto px-6 py-20 md:py-28">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>
          <p className="mt-2 text-foreground/80">A curated selection of projects showcasing design, performance, and craft.</p>
        </div>
        <div className="flex items-center gap-2">
          {TABS.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`rounded-full px-4 py-2 text-sm border transition ${active === t.key ? 'bg-primary text-primary-foreground border-primary' : 'border-foreground/15 hover:bg-foreground/5'}`}
              aria-pressed={active === t.key}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filtered.map(p => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="group rounded-xl overflow-hidden border border-foreground/10 bg-background hover:shadow-lg focus-within:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={`${p.title} preview`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-1 text-sm text-foreground/80">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs border border-foreground/10">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline" aria-label={`${p.title} live demo`}>
                    <ExternalLink className="h-4 w-4"/> Live
                  </a>
                  <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-foreground hover:underline" aria-label={`${p.title} GitHub repository`}>
                    <Github className="h-4 w-4"/> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
