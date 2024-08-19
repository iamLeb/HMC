import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontLayout from "./layouts/FrontLayout.jsx";
import Home from "./pages/front/Home.jsx";
import About from "./pages/front/About.jsx";
import Service from "./pages/front/Service.jsx";
import Single from "./pages/front/Single.jsx";
import ScrollToTop from "./components/frontComponents/ScrollToTop.js";
import Contact from "./pages/front/Contact.jsx";
import Career from "./pages/front/Career.jsx";
import CareerSingle from "./pages/front/CareerSingle.jsx";

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
                    <Route path={'/career'} element={<Career />} />
                    <Route path={'/career/1'} element={<CareerSingle />} />
                    <Route path={'/refer'} element={<CareerSingle />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
