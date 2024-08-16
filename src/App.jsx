import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontLayout from "./layouts/FrontLayout.jsx";
import Home from "./pages/front/Home.jsx";
import About from "./pages/front/About.jsx";
import Service from "./pages/front/Service.jsx";
import Single from "./pages/front/Single.jsx";
import ScrollToTop from "./components/frontComponents/ScrollToTop.js";
import Contact from "./pages/front/Contact.jsx";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<FrontLayout />}>
                    <Route index element={<Home />} />
                    <Route path={'/about'} element={<About />} />
                    <Route path={'/services'} element={<Service />} />
                    <Route path={'/services/:id'} element={<Single />} />
                    <Route path={'/contact'} element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
