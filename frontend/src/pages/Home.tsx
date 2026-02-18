import { Github, Linkedin, Mail } from 'lucide-react'

function Home() {
  return (
    <main className="app-shell bg-midnight/60 text-white flex-1 grid-cols-5 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]">
      <div className="col-start-2 col-span-3 w-full max-w-3xl justify-self-start space-y-6">
        <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-transparent p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xs ring-1 ring-white/10 before:absolute before:inset-0 before:bg-[radial-gradient(120%_80%_at_10%_0%,rgba(255,255,255,0.25),transparent_60%)] before:opacity-70 before:pointer-events-none">
        <p className="text-sm uppercase tracking-[0.35em] text-mist/70">
          Profile
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
              Second year Computer Science student at King's College London.<br />
              Building across the full stack, experimenting with different languages, and strengthening my foundations in systems and software design.
            </p>
        </div>
        </section>
        <section className="relative overflow-hidden rounded-3xl border border-white/15 bg-transparent p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xs ring-1 ring-white/10 before:absolute before:inset-0 before:bg-[radial-gradient(120%_80%_at_10%_0%,rgba(255,255,255,0.25),transparent_60%)] before:opacity-70 before:pointer-events-none">
          <p className="text-xs uppercase tracking-[0.3em] text-mist/60">
            Connect
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <a
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40"
              href="https://github.com/xlightningstar"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              GitHub
            </a>
            <a
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40"
              href="https://www.linkedin.com/in/david-dudun-8995bb180/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40"
              href="mailto:david.dudun@gmail.com"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              Email
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
