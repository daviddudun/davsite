import { useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BlogCard, CometField, ProjectCard, StarField } from '../components'
import { blogPosts } from '../data/blog'
import { projects } from '../data/projects'

const recentProjects = projects.slice(0, 2)
const recentPosts = blogPosts.slice(0, 2)

function About() {
  useEffect(() => {
    document.title = 'About'
  }, [])

  return (
    <main className="text-white flex-1">
      <section className="relative overflow-hidden bg-midnight/20 pb-16">
        <CometField count={5} />
        <StarField count={400} countLarge={100} />
        <div className="app-shell grid-cols-5">
          <div className="col-start-2 col-span-3 w-full max-w-3xl justify-self-start space-y-6">
            <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-transparent p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xs ring-1 ring-white/10 before:absolute before:inset-0 before:bg-[radial-gradient(120%_80%_at_10%_0%,rgba(255,255,255,0.25),transparent_60%)] before:opacity-70 before:pointer-events-none">
              <p className="text-sm uppercase tracking-[0.35em] text-mist/70">
                About
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Hi, I'm David.
              </h1>
              <p className="mt-4 text-base text-mist/80 md:text-lg">
                I'm a full-stack developer who enjoys creating clean interfaces,
                learning fast, and turning ideas into products.
              </p>
              <div className="rounded-2xl mt-6 border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-mist/60">
                  Currently
                </p>
                <p className="mt-2 text-base text-white">
                  2nd year Computer Science student at King's College London.
                  <br />
                  Building across the full stack, experimenting with different
                  languages, and strengthening my foundations in systems and
                  software design.
                </p>
              </div>
            </section>
            <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-transparent p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xs ring-1 ring-white/10 before:absolute before:inset-0 before:bg-[radial-gradient(120%_80%_at_10%_0%,rgba(255,255,255,0.25),transparent_60%)] before:opacity-70 before:pointer-events-none">
              <p className="text-xs uppercase tracking-[0.3em] text-mist/60">
                Connect
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <a
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/10 hover:backdrop-blur-md"
                  href="https://github.com/xlightningstar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/10 hover:backdrop-blur-md"
                  href="https://www.linkedin.com/in/david-dudun-8995bb180/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/10 hover:backdrop-blur-md"
                  href="mailto:david.dudun@gmail.com"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Email
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="bg-black/70 px-6 pt-20 pb-16">
        <div className="mx-auto w-full max-w-4xl text-mist/80">
          <p className="text-sm uppercase tracking-[0.35em] text-mist/60">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Check out some of my projects
          </h2>
          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="grid flex-1 gap-4 md:grid-cols-2">
              {recentProjects.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </div>
            <div className="lg:self-center">
              <Link
                to="/projects"
                className="btn-accent inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black/80 px-6 pb-20">
        <div className="mx-auto w-full max-w-4xl text-mist/80">
          <p className="text-sm uppercase tracking-[0.35em] text-mist/60">
            Blog
          </p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl font-semibold text-white">
              Latest writing
            </h2>
            <Link
              to="/blog"
              className="btn-accent inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold"
            >
              See more
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
