import React from 'react';
import Header from "../components/frontComponents/Header.jsx";
import Footer from "../components/frontComponents/Footer.jsx";
import {Outlet} from "react-router-dom";

const FrontLayout = () => {
    return (
        <section>
            <Header />
            <main className={'bg-gray-100 py-14'}>
                <Outlet />
            </main>
            <Footer />
        </section>
    );
};

export default FrontLayout;