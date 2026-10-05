import { Sec, Head, Chips } from '../ui.jsx'
import { C } from '../content.js'

export default function Blog() {
  return (
    <Sec id="blog" shape="bulb" scale={0.4}>
      <Head eyebrow="Blog" title="Ideas, Insights & Everything Social." text="Articles are coming soon. Topics we will cover:" />
      <Chips items={C.blog} />
    </Sec>
  )
}
