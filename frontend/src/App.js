import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page1 from "./pages/Page-1";
import Page2 from "./pages/Page-2";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/page-1" element={<Page1/>}/>
                <Route path="/page-2" element={<Page2/>}/>
                <Route element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;