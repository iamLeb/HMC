import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Array of links with paths
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
        { name: 'Register', path: '/register' }
    ];

    return (
        <header className={'fixed z-50 w-full bg-white border-b'}>
            <div className={'container mx-auto flex justify-between items-center'}>
                <div className={'w-48 md:w-64'}>
                    <img className={'w-full h-full object-center object-cover cursor-pointer'} src={logo} alt="Logo" onClick={() => navigate('/')}/>
                </div>

                {/* Desktop Menu */}
                <ul className={'hidden md:flex space-x-4'}>
                    {navLinks.map((link, index) => (
                        <li key={index} onClick={() => navigate(link.path)}>
                            <div className={'cursor-pointer'}>
                                <span>{link.name}</span>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className={'hidden md:flex'}>
                    <button
                        className={'btn bg-primary hover:bg-primary-secondary text-xl px-5 md:px-10 py-4 text-white'}> +1
                        (204) 558 6856
                    </button>
                </div>

                {/* Hamburger Menu */}
                <div className={'block md:hidden text-3xl text-gray-600 mr-2'} onClick={toggleSidebar}>
                    {isSidebarOpen ? <HiX /> : <HiMenuAlt3 />}
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}>
                <div className={`fixed left-0 top-0 w-64 h-full bg-white p-4 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                    <div className={'flex justify-between items-center mb-6'}>
                        <img className={'w-32 cursor-pointer'} src={logo} alt="Logo" onClick={() => navigate('/')}/>
                        <HiX className={'text-3xl text-gray-600 cursor-pointer'} onClick={toggleSidebar} />
                    </div>
                    <ul className={'space-y-4'}>
                        {navLinks.map((link, index) => (
                            <li key={index} onClick={() => { navigate(link.path); toggleSidebar(); }}>
                                <div className={'cursor-pointer'}>
                                    <span>{link.name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
