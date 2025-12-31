import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Navbar from "./components/navbar/navbar.jsx";
import Footer from './components/footer/footer.jsx'
import JourneyHeader from './components/journey/header/journeyHeader.jsx'
import Timeline from './components/journey/timeline/timeline.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Navbar />
            <JourneyHeader />
            <Timeline />
            <Footer />
        </BrowserRouter>
    </StrictMode>,
)
