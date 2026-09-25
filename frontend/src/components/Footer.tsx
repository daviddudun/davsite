function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-midnight/60 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-8 text-sm text-mist/70 md:flex-row md:items-center">
        <div className="flex flex-wrap gap-4">
          <a className="transition hover:text-white" href="/">
            About
          </a>
          <a className="transition hover:text-white" href="/projects">
            Projects
          </a>
          <a className="transition hover:text-white" href="/blog">
            Blog
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-mist/60">
            Contact me
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="transition hover:text-white"
              href="mailto:david.dudun@gmail.com"
            >
              david.dudun@gmail.com
            </a>
            <a
              className="transition hover:text-white"
              href="https://github.com/daviddudun"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="transition hover:text-white"
              href="https://www.linkedin.com/in/david-dudun-8995bb180/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div>© {new Date().getFullYear()} David Dudun</div>
      </div>
    </footer>
  )
}

export default Footer
