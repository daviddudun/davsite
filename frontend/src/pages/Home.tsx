function Home() {
  return (
    <main className="app-shell bg-midnight text-white flex-1">
      <section className="w-full max-w-3xl rounded-3xl border border-white/10 bg-steel/90 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">
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
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white/90 transition hover:border-white"
            href="https://github.com/xlightningstar"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white/90 transition hover:border-white"
            href="https://www.linkedin.com/in/david-dudun-8995bb180/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg"
            href="mailto:david.dudun@gmail.com"
          >
            Contact
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home
