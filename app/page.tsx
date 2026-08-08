import { Navbar } from "./components/navbar";
import { ProjectCard } from "./components/project-card";
import { education, projects, skills } from "./data";

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="overflow-x-clip">
      <Navbar />

      <section className="hero-grid relative isolate">
        <div className="glow glow-one" aria-hidden="true" />
        <div className="glow glow-two" aria-hidden="true" />
        <div className="shell relative flex min-h-[calc(100svh-4rem)] items-center py-24 sm:py-28">
          <div className="max-w-4xl">
            <p className="eyebrow animate-enter">Portfolio / 2026</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">
              Jana <span className="text-slate-400">Duraisamy</span>
            </h1>
            <p className="mt-7 text-base font-medium text-cyan-200 sm:text-lg">Python Developer <span className="mx-2 text-slate-600">|</span> Full-Stack Developer</p>
            <p className="mt-7 max-w-2xl break-words text-lg leading-8 text-slate-300 sm:text-xl">
              I build practical software solutions for real-world problems—thoughtfully designed, data-driven, and built to support everyday operations.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="button-primary">View Projects <span aria-hidden="true">→</span></a>
              <a href="/Jana_Duraisamy_Resume.pdf" download className="button-secondary">Download Resume <span aria-hidden="true">↓</span></a>
            </div>
            <div className="mt-14 flex max-w-full flex-col items-start gap-3 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              <a className="inline-link break-words" href="https://www.linkedin.com/in/jana-duraisamy-a4476b2a0/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a className="inline-link break-words" href="mailto:janajeeva203@gmail.com">janajeeva203@gmail.com</a>
              <a className="inline-link break-words" href="https://github.com/JanaDuraisamy" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section shell scroll-mt-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <SectionHeading eyebrow="About" title="Software with a practical point of view." />
          <div className="border-l border-white/10 pl-6 sm:pl-9">
            <p className="text-lg leading-8 text-slate-200">
              I’m Jana Duraisamy, a Python and full-stack developer based in Rasipuram, Namakkal, Tamil Nadu. I focus on creating useful web applications that bring clarity to business workflows and everyday management tasks.
            </p>
            <p className="mt-6 text-base leading-8 text-slate-400">
              My work spans Django, React, Next.js, relational databases, and clean interface design—combining frontend usability with dependable application logic.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-muted scroll-mt-20">
        <div className="shell">
          <SectionHeading eyebrow="Capabilities" title="A focused full-stack toolkit." description="Tools I use to build web applications from interface to database." />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {skills.map((group) => (
              <article key={group.label} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-300">{group.label}</h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((skill) => <li key={skill} className="rounded-md bg-white/[0.06] px-3 py-2 text-sm text-slate-200">{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section shell scroll-mt-20">
        <SectionHeading eyebrow="Selected work" title="Projects built around real workflows." description="A selection of applications focused on management, operations, and purposeful CRUD experiences." />
        <div className="mt-12 grid gap-5">
          {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
        </div>
      </section>

      <section id="education" className="section section-muted scroll-mt-20">
        <div className="shell">
          <SectionHeading eyebrow="Education" title="Computer science foundation." />
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            {education.map((item) => (
              <article key={item.qualification} className="grid gap-2 border-b border-white/10 bg-white/[0.02] p-5 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8 sm:p-6">
                <div>
                  <h3 className="text-base font-medium text-white">{item.qualification}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
                </div>
                <p className="font-mono text-sm text-cyan-200">{item.score}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section shell scroll-mt-20">
        <div className="rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.08] to-transparent px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">Let’s build something useful.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">For opportunities or conversations about practical software, feel free to get in touch.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="mailto:janajeeva203@gmail.com" className="button-primary">Email Jana <span aria-hidden="true">→</span></a>
            <a href="tel:9790290012" className="button-secondary">Call 9790290012</a>
          </div>
          <p className="mt-8 text-sm text-slate-400">Rasipuram, Namakkal, Tamil Nadu, India</p>
        </div>
      </section>

      <footer className="border-t border-white/[0.08]">
        <div className="shell flex flex-col gap-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jana Duraisamy.</p>
          <div className="flex items-center gap-5">
            <a href="mailto:janajeeva203@gmail.com" className="hover:text-slate-300">Email</a>
            <a href="https://www.linkedin.com/in/jana-duraisamy-a4476b2a0/" target="_blank" rel="noreferrer" className="hover:text-slate-300">LinkedIn</a>
            <a href="https://github.com/JanaDuraisamy" target="_blank" rel="noreferrer" className="hover:text-slate-300">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
