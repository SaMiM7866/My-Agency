import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { C } from '../content.js'
import { btnCls } from '../ui.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <nav className="fixed inset-x-0 top-0 z-10 flex items-center justify-between bg-black/20 px-[5vw] py-3.5 backdrop-blur-[14px]">
      <Link to="/" onClick={close} className="flex items-center gap-2 font-head text-[13px] font-semibold text-white sm:text-sm">
        <i className="h-4 w-4 rounded-[5px] bg-[conic-gradient(#7c5cff,#4de0c0,#f5b93a,#7c5cff)]" />
        <span>{C.name}</span>
      </Link>
      <button className="text-2xl text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? '✕' : '☰'}</button>
      <div className={`${open ? 'flex' : 'hidden lg:flex'} absolute inset-x-0 top-full flex-col items-start gap-4 bg-black/60 px-[6vw] py-5 backdrop-blur-[14px] lg:static lg:flex-row lg:items-center lg:gap-5 lg:bg-transparent lg:p-0 lg:backdrop-blur-none`}>
        {C.nav.map((n) => (
          <NavLink key={n.to} to={n.to} end={n.to === '/'} onClick={close}
            className={({ isActive }) => `text-[11px] uppercase tracking-[.08em] transition-colors hover:text-white ${isActive ? 'text-white' : 'text-[#a9a9b8]'}`}>
            {n.label}
          </NavLink>
        ))}
        <Link className={btnCls} to="/contact" onClick={close}>Start your growth</Link>
      </div>
    </nav>
  )
}
