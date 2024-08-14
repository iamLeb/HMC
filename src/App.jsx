import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontLayout from "./layouts/FrontLayout.jsx";
import Home from "./pages/front/Home.jsx";
import About from "./pages/front/About.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontLayout />}>
                    <Route index element={<Home />} />
                    <Route path={'/about'} element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
