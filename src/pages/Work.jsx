import { Sec, Head, Cards, Cta } from '../ui.jsx'
import { C } from '../content.js'

export default function Work() {
  return (
    <>
      <Sec id="work" shape="globe" scale={0.4}>
        <Head eyebrow="Our work" title="Ideas Are Good. Results Are Better." text="Explore selected work across:" />
        <Cards items={C.work} />
      </Sec>
      <Cta />
    </>
  )
}
