import { Link } from 'react-router-dom'
import { C } from '../content.js'

const row = 'flex flex-wrap justify-center gap-[18px] uppercase tracking-[.06em] [&>*:hover]:text-white'

export default function Footer() {
  return (
    <footer className="relative z-[1] flex flex-col items-center gap-3.5 px-[5vw] pb-8 pt-14 text-center text-[10px] text-[#a9a9b8]">
      <strong className="font-head text-[22px] font-bold text-white">Turning Ideas Into Brands People Notice.</strong>
      <div className={row}>{C.nav.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}</div>
      <div className={row}>{C.social.map((s) => <a key={s.label} href={s.href}>{s.label}</a>)}</div>
     <span>© {new Date().getFullYear()} {C.name}. All Rights Reserved.</span>
    </footer>
  )
}
