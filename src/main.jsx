import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/footer/footer.jsx'
import Hero from './components/homepage/hero/hero.jsx'
import Stats from './components/homepage/stats/stats.jsx'
import Streamers from './components/homepage/streamers/streamers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Stats />
    <Streamers />
    <Footer />
  </StrictMode>,
)
