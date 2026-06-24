// Navbar pill-style floating — redesign total.
// Desktop: pill mengambang di tengah atas (dark glassmorphism), icon + label.
// Mobile: pill tetap tapi bisa expand ke bawah.
import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { navItems } from '../data/profile'
import { HiHome, HiUser, HiFolder, HiMail } from 'react-icons/hi'

// Pemetaan icon key → komponen
const navIconMap = {
  home: HiHome,
  user: HiUser,
  folder: HiFolder,
  mail: HiMail,
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Tutup menu mobile saat navigasi berubah
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Tutup menu mobile saat layar dibesarkan
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`${
          open ? 'rounded-2xl' : 'rounded-full'
        } border border-white/10 bg-ink-900/70 px-2 py-2 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 md:rounded-full`}
      >
        {/* Brand (kiri) + menu items (tengah) — desktop */}
        <div className="flex items-center gap-1">
          {/* Brand */}
          <Link
            to="/"
            className="mr-1 flex items-center gap-1.5 px-3 py-2 text-base font-extrabold uppercase italic tracking-tight text-bone-light transition-colors hover:text-ember"
          >
            Whanss<span className="text-ember">.</span>
          </Link>

          {/* Separator */}
          <div className="mx-1 hidden h-5 w-px bg-white/10 md:block" />

          {/* Menu desktop — pill items */}
          <ul className="hidden items-center gap-0.5 md:flex">
            {navItems.map(({ label, path, icon }) => {
              const Icon = navIconMap[icon]
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      [
                        'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                        isActive
                          ? 'bg-ember/15 text-ember shadow-sm shadow-ember/20'
                          : 'text-bone-muted hover:bg-white/5 hover:text-bone-light',
                      ].join(' ')
                    }
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{label}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>

          {/* Hamburger mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-bone-light transition-colors hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              className="h-4 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                d={
                  open
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Menu mobile — expand dropdown */}
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
            open ? 'mt-2 max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-0.5 border-t border-white/5 pt-2">
            {navItems.map(({ label, path, icon }) => {
              const Icon = navIconMap[icon]
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'bg-ember/15 text-ember'
                          : 'text-bone-muted hover:bg-white/5 hover:text-bone-light',
                      ].join(' ')
                    }
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{label}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
