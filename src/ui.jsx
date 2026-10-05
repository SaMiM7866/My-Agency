import { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ParticleContext } from './ParticleContext.js'

// ---- shared Tailwind class strings ----
export const btnCls = 'inline-block cursor-pointer rounded-full bg-pur px-5 py-2.5 font-head text-[11px] font-semibold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,92,255,.45)]'
export const ghostCls = 'inline-block rounded-full border border-[#4a4a66] px-5 py-2.5 font-head text-[11px] font-semibold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:border-pur'
export const gridCls = 'mt-9 grid w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[18px]'
export const inputCls = 'w-full rounded-xl border border-[#33334a] bg-black/65 px-4 py-3.5 text-sm text-white outline-none placeholder:text-[#8d8da8] focus:border-pur'
export const bodyText = 'text-sm leading-relaxed text-[#cfcfdc]'

// Section: switches the particle shape when it is in the middle of the screen
export function Sec({ id, shape = 'scatter', cx = 0, scale = 0.4, cls = 'col', children }) {
  const ref = useRef(null)
  const set = useContext(ParticleContext)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) set({ shape, cx, scale }) }, { rootMargin: '-50% 0px -50% 0px' })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [shape, cx, scale, set])
  const layout = cls === 'col' ? 'flex-col justify-center px-[6vw] text-center' : 'px-[7vw]'
  return <section id={id} ref={ref} className={`relative z-[1] flex min-h-screen items-center py-28 ${layout}`}>{children}</section>
}

export const Lines = ({ t }) => t.split('\n').map((x, i, a) => <span key={i}>{x}{i < a.length - 1 && <br />}</span>)

export const Btn = ({ to, href, ghost, children }) => {
  const c = ghost ? ghostCls : btnCls
  return href ? <a className={c} href={href}>{children}</a> : <Link className={c} to={to}>{children}</Link>
}

export const Head = ({ eyebrow, title, text, big }) => (
  <div className="mx-auto max-w-3xl">
    {eyebrow && <div className="mb-2.5 text-[10px] font-semibold uppercase tracking-[.1em] text-gold">{eyebrow}</div>}
    <h2 className={`mb-4 font-head font-bold leading-[1.1] tracking-tight ${big ? 'text-[clamp(40px,5.6vw,68px)]' : 'text-[clamp(26px,3.4vw,40px)]'}`}><Lines t={title} /></h2>
    {text && <p className={`mx-auto mb-6 max-w-xl ${bodyText}`}>{text}</p>}
  </div>
)

export const Card = ({ hot, className = 'p-6', children }) => (
  <div className={`rounded-[18px] border bg-[#0e0e16]/75 text-left backdrop-blur-md transition hover:-translate-y-1.5 hover:border-pur ${hot ? 'border-pur shadow-[0_0_40px_rgba(124,92,255,.25)]' : 'border-[#26263a]'} ${className}`}>{children}</div>
)

export const Cards = ({ items }) => (
  <div className={`${gridCls} max-w-[1100px]`}>
    {items.map((c, i) => (
      <Card key={i} hot={c.hot}>
        {c.num && <div className="mb-3.5 font-head text-[13px] tracking-[.12em] text-gold">{c.num}</div>}
        <h3 className="mb-2.5 font-head text-xl font-bold">{c.title}</h3>
        {c.sub && <p className="mb-3.5 text-sm text-gold">{c.sub}</p>}
        {c.text && <p className={bodyText}>{c.text}</p>}
        {c.list && <ul className="list-disc pl-[18px] text-[13px] leading-[1.9] text-[#cfcfdc]">{c.list.map((l) => <li key={l}>{l}</li>)}</ul>}
      </Card>
    ))}
  </div>
)

export const Chips = ({ items }) => (
  <div className="mx-auto mb-7 mt-1.5 flex max-w-[800px] flex-wrap justify-center gap-2.5">
    {items.map((c) => <span key={c} className="rounded-full border border-[#33334a] bg-[#0e0e16]/70 px-[18px] py-2 text-[13px]">{c}</span>)}
  </div>
)

export const Cta = () => (
  <Sec id="cta" shape="swirl" scale={0.32}>
    <Head big title={'Your Brand Has Potential.\nLet’s Make People Notice It.'}
      text="Whether you're starting from zero or looking to scale an existing brand, we're ready to build something worth following." />
    <Btn to="/contact">Let’s Work Together</Btn>
  </Sec>
)
