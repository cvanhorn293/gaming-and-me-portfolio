import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Navbar from "./components/navbar/navbar.jsx";
import Footer from './components/footer/footer.jsx'
import ExternalLinks from './components/resources/resourcesHeader.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Navbar />
            <ExternalLinks />
            <Footer />
        </BrowserRouter>
    </StrictMode>,
)
