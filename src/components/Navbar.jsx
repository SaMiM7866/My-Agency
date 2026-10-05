import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { C } from '../content.js'
import { btnCls } from '../ui.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  // menu খোলা থাকলে পেছনের page scroll হবে না
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // link গুলো একটার পর একটা আসার delay
  const delay = (i) => ({ transitionDelay: open ? `${250 + i * 70}ms` : '0ms' })
  const show = open ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[5vw] py-3.5 backdrop-blur-lg">
        <Link to="/" onClick={close} className="flex items-center gap-2 font-head text-[13px] font-semibold text-white sm:text-sm">
          <i className="h-4 w-4 rounded-[5px] bg-[conic-gradient(#7c5cff,#4de0c0,#f5b93a,#7c5cff)]" />
          <span>{C.name}</span>
        </Link>

        {/* desktop menu */}
        <div className="hidden items-center gap-5 lg:flex">
          {C.nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'}
              className={({ isActive }) => `text-[11px] uppercase tracking-[.08em] transition-colors hover:text-white ${isActive ? 'text-white' : 'text-[#a9a9b8]'}`}>
              {n.label}
            </NavLink>
          ))}
          <Link className={btnCls} to="/contact">Start your growth</Link>
        </div>

        {/* mobile: animated burger */}
        <button onClick={() => setOpen(!open)} aria-label="Menu" className="relative h-10 w-10 lg:hidden">
          <span className={`absolute left-2 h-0.5 w-6 bg-white transition-all duration-500 ${open ? 'top-[19px] rotate-45' : 'top-3'}`} />
          <span className={`absolute left-2 top-[19px] h-0.5 w-6 bg-white transition-all duration-300 ${open ? 'scale-x-0 opacity-0' : ''}`} />
          <span className={`absolute left-2 h-0.5 w-6 bg-white transition-all duration-500 ${open ? 'top-[19px] -rotate-45' : 'top-[26px]'}`} />
        </button>
      </nav>

      {/* mobile: full-screen menu, circle reveal from the top-right corner */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-3 bg-black/75 px-[8vw] backdrop-blur-2xl transition-[clip-path] duration-700 ease-[cubic-bezier(.76,0,.24,1)] lg:hidden ${
          open
            ? '[clip-path:circle(150%_at_calc(100%_-_2.5rem)_2.5rem)]'
            : 'pointer-events-none [clip-path:circle(0%_at_calc(100%_-_2.5rem)_2.5rem)]'
        }`}
      >
        {C.nav.map((n, i) => (
          <NavLink key={n.to} to={n.to} end={n.to === '/'} onClick={close} style={delay(i)}
            className={({ isActive }) => `flex items-baseline gap-3 font-head text-4xl font-bold transition-all duration-500 ${show} ${isActive ? 'text-white' : 'text-white/45'}`}>
            <span className="text-xs text-gold">0{i + 1}</span>
            {n.label}
          </NavLink>
        ))}
        <div style={delay(C.nav.length)} className={`mt-6 transition-all duration-500 ${show}`}>
          <Link className={btnCls} to="/contact" onClick={close}>Start your growth</Link>
        </div>
      </div>
    </>
  )
}