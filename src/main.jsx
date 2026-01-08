import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/home.jsx";
import Journey from "./pages/journey.jsx";
import Resources from "./pages/resources.jsx";
import Favorites from './pages/favorites.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/journey" element={<Journey />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </HashRouter>
    </StrictMode>,
)
