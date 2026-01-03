import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/home.jsx";
import Journey from "./pages/journey.jsx";
import Resources from "./pages/resources.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/gaming-and-me-portfolio" element={<Home />} />
                <Route path="/gaming-and-me-portfolio/journey" element={<Journey />} />
                <Route path="/gaming-and-me-portfolio/resources" element={<Resources />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
