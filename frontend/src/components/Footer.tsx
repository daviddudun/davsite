function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-midnight/60 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-6 text-sm text-mist/70 md:flex-row md:items-center">
        <div className="flex flex-wrap gap-4">
          <a className="transition hover:text-white" href="/">
            Home
          </a>
          <a className="transition hover:text-white" href="/projects">
            Projects
          </a>
        </div>
        <div>© {new Date().getFullYear()} David Dudun</div>
      </div>
    </footer>
  )
}

export default Footer
