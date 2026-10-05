import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Particles from './Particles.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { ParticleContext } from '../ParticleContext.js'

export default function Layout() {
  const [p, setP] = useState({ shape: 'brain', cx: 0.42, scale: 0.34 })
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <ParticleContext.Provider value={setP}>
      <Particles shape={p.shape} cx={p.cx} scale={p.scale} />
      <Navbar />
      <Outlet />
      <Footer />
    </ParticleContext.Provider>
  )
}
