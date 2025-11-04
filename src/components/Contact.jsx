import { useMemo, useState } from 'react';
import { Linkedin, Github, Twitter, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  const errors = useMemo(() => {
    const e = {};
    if (!values.name.trim()) e.name = 'Please enter your name.';
    if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email address.';
    if (values.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
    return e;
  }, [values]);

  const hasErrors = Object.keys(errors).length > 0;

  const onSubmit = (ev) => {
    ev.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (hasErrors) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name}\n${values.email}`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  const downloadResume = () => {
    const resume = `Name: Alex Doe\nRole: Full‑stack Developer\n\nSummary:\nProduct‑minded engineer with a focus on performance and accessibility.\n\nSkills:\nReact, TypeScript, Node.js, FastAPI, MongoDB, Tailwind, Testing Library\n\nExperience:\n• Senior Frontend Engineer — Acme Inc (2021—Present)\n• Full‑stack Developer — Startup Co (2019—2021)\n`;
    const blob = new Blob([resume], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Alex-Doe-Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="grid gap-8 md:grid-cols-2"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Let’s work together</h2>
          <p className="mt-3 text-foreground/80">
            Have a project in mind or just want to say hi? Drop a line and I’ll get back within 1–2 business days.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-foreground/15 px-3 py-2 hover:bg-foreground/5" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4"/> LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-foreground/15 px-3 py-2 hover:bg-foreground/5" aria-label="GitHub">
              <Github className="h-4 w-4"/> GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-foreground/15 px-3 py-2 hover:bg-foreground/5" aria-label="Twitter">
              <Twitter className="h-4 w-4"/> X / Twitter
            </a>
            <button onClick={downloadResume} className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-3 py-2 hover:opacity-90" aria-label="Download resume">
              <Download className="h-4 w-4"/> Download Resume
            </button>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-xl border border-foreground/10 p-6 bg-background/60 backdrop-blur">
          <div className="grid gap-4">
            <label className="grid gap-1">
              <span className="text-sm font-medium">Name</span>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={(e) => setValues(v => ({ ...v, name: e.target.value }))}
                onBlur={() => setTouched(t => ({ ...t, name: true }))}
                className="h-11 rounded-md border border-foreground/15 bg-transparent px-3 outline-none focus:ring-2 focus:ring-primary/40"
                aria-invalid={touched.name && !!errors.name}
                aria-describedby="name-error"
                required
              />
              {touched.name && errors.name && (
                <span id="name-error" className="text-sm text-red-500">{errors.name}</span>
              )}
            </label>

            <label className="grid gap-1">
              <span className="text-sm font-medium">Email</span>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={(e) => setValues(v => ({ ...v, email: e.target.value }))}
                onBlur={() => setTouched(t => ({ ...t, email: true }))}
                className="h-11 rounded-md border border-foreground/15 bg-transparent px-3 outline-none focus:ring-2 focus:ring-primary/40"
                aria-invalid={touched.email && !!errors.email}
                aria-describedby="email-error"
                required
              />
              {touched.email && errors.email && (
                <span id="email-error" className="text-sm text-red-500">{errors.email}</span>
              )}
            </label>

            <label className="grid gap-1">
              <span className="text-sm font-medium">Message</span>
              <textarea
                name="message"
                rows={5}
                value={values.message}
                onChange={(e) => setValues(v => ({ ...v, message: e.target.value }))}
                onBlur={() => setTouched(t => ({ ...t, message: true }))}
                className="rounded-md border border-foreground/15 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                aria-invalid={touched.message && !!errors.message}
                aria-describedby="message-error"
                required
              />
              {touched.message && errors.message && (
                <span id="message-error" className="text-sm text-red-500">{errors.message}</span>
              )}
            </label>

            <button type="submit" disabled={hasErrors} className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-primary-foreground disabled:opacity-60">
              <Mail className="h-4 w-4 mr-2"/> Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
