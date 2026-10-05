import { Sec, Head, Cards, Chips, Btn, Cta, bodyText } from '../ui.jsx'
import { C } from '../content.js'

export default function Home() {
  return (
    <>
      <Sec id="hero" shape="brain" cx={0.42} scale={0.34} cls="">
        <div className="max-w-[640px]">
          <div className="mb-2.5 text-[10px] font-semibold uppercase tracking-[.1em] text-gold">{C.tagline}</div>
          <h1 className="mb-6 font-head text-[clamp(40px,6.4vw,84px)] font-extrabold leading-[.95] tracking-[-.04em]">
            <span className="bg-gradient-to-r from-[#c8b8ff] via-pur to-[#4de0c0] bg-clip-text text-transparent">We Make Brands</span><br />Impossible to Ignore.
          </h1>
          <p className={`mb-6 max-w-md ${bodyText}`}>Strategy. Content. Creatives. Ads.<br />Everything your brand needs to grow on social media — under one roof.</p>
          <div className="flex flex-wrap gap-3"><Btn to="/contact">Start Your Growth</Btn><Btn to="/work" ghost>View Our Work</Btn></div>
        </div>
      </Sec>
      <div className="relative z-[1] overflow-hidden whitespace-nowrap border-y border-[#26263a] bg-black/55 py-4">
        <div className="inline-block animate-marquee font-head text-base font-bold tracking-[.12em] text-[#8d8da8] md:text-[22px]">
          {[1, 2].map((k) => <span key={k}>STRATEGY ✦ CONTENT ✦ DESIGN ✦ REELS ✦ PERFORMANCE ✦ GROWTH ✦&nbsp;</span>)}
        </div>
      </div>
      <Sec id="highlight" shape="globe" scale={0.38}>
        <Head eyebrow="Who we are" title="3 Creative Minds. One Growth-Driven Team."
          text="We started with one simple idea — brands deserve social media that does more than just look good. It should connect, engage and drive business." />
      </Sec>
      <Sec id="what"><Head eyebrow="What we do" title="Everything Your Brand Needs to Stay Ahead." /><Cards items={C.what} /></Sec>
      <Sec id="why">
        <Head eyebrow="Why us" title="Not Just Another Social Media Agency."
          text="We combine creative thinking, strategy and performance marketing to turn social media into a real business asset." />
        <Cards items={C.why} />
      </Sec>
      <Sec id="process"><Head eyebrow="Our process" title="From First Call to Real Growth." /><Cards items={C.process} /></Sec>
      <Sec id="preview" shape="bulb" scale={0.4}>
        <Head eyebrow="Portfolio preview" title="Work That Speaks Before We Do." />
        <Chips items={C.chips} />
        <Btn to="/work">Explore Our Work</Btn>
      </Sec>
      <Cta />
    </>
  )
}
