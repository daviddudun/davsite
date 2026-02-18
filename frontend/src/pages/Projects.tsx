import { ProjectCard } from '../components'

const projects = [
  {
    name: 'Davsite',
    description: 'A personal portfolio website',
    githubUrl: 'https://github.com/xlightningstar/davsite',
    stack: ['Django', 'React', 'TypeScript', 'Tailwind'],
  }
]

function Projects() {
  return (
    <main className="app-shell bg-midnight text-white flex-1">
      <section className="w-full max-w-6xl rounded-3xl border border-white/10 bg-steel/90 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Projects
        </h1>
        <p className="mt-4 text-base text-mist/80 md:text-lg">
          A selection of projects I've built while exploring different areas of software.
          Each one reflects something new I've learned or experimented with.
        </p>
        <div className="mt-6 border-t border-white/10 pt-6"></div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Projects
