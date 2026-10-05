import { Sec, Head, Cards, Btn } from '../ui.jsx'
import { C } from '../content.js'

export default function Pricing() {
  return (
    <>
      <Sec id="pricing" shape="scatter">
        <Head eyebrow="Pricing" title="Flexible Plans. Serious Creative." />
        <Cards items={C.plans} />
      </Sec>
      <Sec id="custom" shape="swirl" scale={0.32}>
        <Head big title="Need Something Custom?" text="Tell us your requirements and we'll build a plan around your business." />
        <Btn to="/contact">Build Your Custom Plan</Btn>
      </Sec>
    </>
  )
}
