type ProjectCardProps = {
  name: string
  description: string
  githubUrl: string
  stack: string[]
}

function ProjectCard({ name, description, githubUrl, stack }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/25 p-6 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold tracking-tight text-white font-mono">
        {name}
      </h2>
      <p className="mt-3 text-sm text-mist/80">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/70"
          >
            {tool}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-cyan-300/70 px-4 py-1.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200 hover:text-white"
        >
          GitHub
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
