import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/footer/footer.jsx'
import Hero from './components/homepage/hero/hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Footer />
  </StrictMode>,
)
