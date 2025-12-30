import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Navbar from "./components/navbar/navbar.jsx";
import Footer from './components/footer/footer.jsx'
import Hero from './components/homepage/hero/hero.jsx'
import Stats from './components/homepage/stats/stats.jsx'
import Streamers from './components/homepage/streamers/streamers.jsx'
import CTA from './components/homepage/cta.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Navbar />
            <Hero />
            <Stats />
            <Streamers />
            <CTA />
            <Footer />
        </BrowserRouter>
    </StrictMode>,
)
