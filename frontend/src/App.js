import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page2 from "./pages/Page-2";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { ChakraProvider } from "@chakra-ui/react";
import Plans from "./pages/Plans";
import Customize from "./pages/Customize";
import EditPlan from "./pages/EditPlan";

function App() {
    return (
        <ChakraProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/plans" element={<Plans/>}/>
                <Route path="/customize" element={<Customize/>}/>
                <Route path='/editplan' element={<EditPlan />}/>
                <Route element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
        </ChakraProvider>
    )
}

export default App;