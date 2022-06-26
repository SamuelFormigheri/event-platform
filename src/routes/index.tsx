import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Event } from "../pages/event";
import { Subscribe } from "../pages/subscribe";

export function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Subscribe />} />
                <Route path="/event" element={<Event />} />
                <Route path="/event/lesson/:slug" element={<Event />} />
            </Routes>
        </BrowserRouter>
    )
}