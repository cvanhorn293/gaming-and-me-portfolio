import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/home.jsx";
import Journey from "./pages/journey.jsx";
import Resources from "./pages/resources.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/journey" element={<Journey />} />
                <Route path="/resources" element={<Resources />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
