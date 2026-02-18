import { NavLink } from 'react-router-dom'

const linkBase =
  'rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition hover:text-white'
const linkActive = 'bg-white/10 text-white'

function NavBar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-midnight/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-mist/70">
          Davsite
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ''}`.trim()
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ''}`.trim()
            }
          >
            Projects
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
