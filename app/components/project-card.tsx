import type { Project } from "../data";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="project-card group rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
      <div className="flex items-start justify-between gap-5">
        <span className="font-mono text-xs tracking-[0.2em] text-cyan-300/80">{number}</span>
        {project.status && (
          <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-200">
            {project.status}
          </span>
        )}
      </div>

      <h3 className="mt-8 max-w-lg text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {project.name}
      </h3>
      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{project.description}</p>

      <div className="mt-7 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.technologies.map((technology) => (
          <span key={technology} className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-slate-300">
            {technology}
          </span>
        ))}
      </div>

      <details className="project-details mt-7 border-t border-white/10 pt-5">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white transition-colors hover:text-cyan-200">
          <span>View Details</span>
          <span aria-hidden="true" className="detail-icon text-cyan-300">+</span>
        </summary>
        <div className="pt-5">
          <p className="text-sm leading-7 text-slate-300">{project.detail}</p>
          <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Key features</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-7 rounded-xl border border-dashed border-white/10 px-4 py-3">
            <p className="text-xs leading-5 text-slate-400">
              Project detail structure is ready for {project.futureAssets.join(", ")} when they are available.
            </p>
          </div>
        </div>
      </details>
    </article>
  );
}
