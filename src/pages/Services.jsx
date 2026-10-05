import { Sec, Head, Cards, Cta } from '../ui.jsx'
import { C } from '../content.js'

export default function Services() {
  return (
    <>
      <Sec id="services" shape="bulb" scale={0.4}>
        <Head eyebrow="Services" title="Everything Your Brand Needs to Win Social Media" />
        <Cards items={C.services} />
      </Sec>
      <Cta />
    </>
  )
}
