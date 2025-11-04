import { useEffect, useState } from 'react';
import { Sun, Moon, Home, User, FolderGit2, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function useDarkMode() {
  const [enabled, setEnabled] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  useEffect(() => {
    const root = document.documentElement;
    if (enabled) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [enabled]);
  return { enabled, setEnabled } as const;
}

export default function App() {
  const { enabled, setEnabled } = useDarkMode();

  useEffect(() => {
    document.title = 'Alex Doe — Portfolio';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Portfolio website of Alex Doe — full‑stack developer focused on performance, accessibility, and delightful UX.');
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/60 border-b border-foreground/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className="inline-flex items-center gap-2 font-semibold focus:outline-none focus:ring-2 focus:ring-foreground/20" aria-label="Go to home">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">A</span>
            <span>Alex Doe</span>
          </button>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            <button onClick={() => scrollTo('home')} className="inline-flex items-center gap-2 rounded-md px-3 py-2 hover:bg-foreground/5 focus:ring-2 focus:ring-foreground/20"><Home className="h-4 w-4"/> Home</button>
            <button onClick={() => scrollTo('about')} className="inline-flex items-center gap-2 rounded-md px-3 py-2 hover:bg-foreground/5 focus:ring-2 focus:ring-foreground/20"><User className="h-4 w-4"/> About</button>
            <button onClick={() => scrollTo('projects')} className="inline-flex items-center gap-2 rounded-md px-3 py-2 hover:bg-foreground/5 focus:ring-2 focus:ring-foreground/20"><FolderGit2 className="h-4 w-4"/> Projects</button>
            <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-2 rounded-md px-3 py-2 hover:bg-foreground/5 focus:ring-2 focus:ring-foreground/20"><Mail className="h-4 w-4"/> Contact</button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setEnabled(!enabled)}
              className="inline-flex items-center gap-2 rounded-md border border-foreground/15 px-3 py-2 hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-foreground/20"
              aria-label="Toggle dark mode"
            >
              {enabled ? <Moon className="h-4 w-4"/> : <Sun className="h-4 w-4"/>}
              <span className="hidden sm:inline text-sm">{enabled ? 'Dark' : 'Light'}</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-foreground/10 mt-10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between text-sm text-foreground/70">
          <p>© {new Date().getFullYear()} Alex Doe. All rights reserved.</p>
          <p>
            Built with React • Tailwind • Spline
          </p>
        </div>
      </footer>
    </div>
  );
}
