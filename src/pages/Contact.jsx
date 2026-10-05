import { Sec, Head, btnCls, inputCls } from '../ui.jsx'
import { C } from '../content.js'

export default function Contact() {
  // No backend: submitting opens the visitor's email app with the details filled in
  const send = (e) => {
    e.preventDefault()
    const body = [...new FormData(e.target).entries()].map(([k, v]) => `${k}: ${v}`).join('\n')
    location.href = `mailto:${C.email}?subject=${encodeURIComponent('New enquiry from website')}&body=${encodeURIComponent(body)}`
  }
  return (
    <Sec id="contact" shape="swirl" scale={0.32}>
      <Head eyebrow="Contact" title="Let’s Create Something People Remember."
        text="Got a business, product or idea you want to grow? Tell us about it. We’ll bring the strategy, creativity and caffeine." />
      <form className="mt-2 grid w-full max-w-[560px] gap-3 text-left" onSubmit={send}>
        <input className={inputCls} name="Name" placeholder="Name" required />
        <input className={inputCls} name="Business Name" placeholder="Business Name" />
        <input className={inputCls} name="Phone Number" type="tel" placeholder="Phone Number" required />
        <input className={inputCls} name="Email" type="email" placeholder="Email" />
        <select className={inputCls} name="Service Required" defaultValue="">
          <option value="" disabled>Service Required</option>
          {C.services.map((s) => <option key={s.title}>{s.title}</option>)}
        </select>
        <input className={inputCls} name="Monthly Marketing Budget" placeholder="Monthly Marketing Budget" />
        <textarea className={inputCls} name="About the Brand" rows="4" placeholder="Tell Us About Your Brand" />
        <button className={`${btnCls} py-4 text-xs`} type="submit">Start a Conversation</button>
      </form>
    </Sec>
  )
}
