import React, {useEffect, useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/img/logo.svg'
import './navigation.scss'
import {links} from '../../db'
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(window.innerWidth > 992)
        const updateScreenSize = () => {
            setIsOpen(window.innerWidth > 992)
        };

        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

    return (
        <header className="header">
            <nav className=" nav container">
                <img src={logo} alt="логотип"/>
                <div className="nav_hamburger-menu">
                    {isOpen ? (
                        <FaTimes onClick={toggleMenu} />
                    ) : (
                        <FaBars onClick={toggleMenu}  />
                    )}
                </div>
                {isOpen && (
                    <div className="nav_wrapp-menu">
                        <img className="nav_wrapp-menu_logo" src={logo} alt="логотип"/>
                        <ul className="nav_links">
                            {links.map(link => (
                                <li key={link.name}><a href={link.href}>{link.name}</a></li>
                            ))}
                            <li className="nav_links-button"><a href="#">Личный кабинет</a></li>
                        </ul>
                    </div>

                )}
                {isOpen && <div className="blur-background"></div>}


            </nav>
            <svg className="header_elipse" width="712" height="707" viewBox="0 0 712 707" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_2_330)">
                    <circle cx="331.962" cy="326.961" r="207.451" transform="rotate(11.9685 331.962 326.961)" fill="url(#paint0_linear_2_330)" fillOpacity="0.35"/>
                </g>
                <defs>
                    <filter id="filter0_f_2_330" x="-47.5321" y="-52.5321" width="758.987" height="758.987" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="86" result="effect1_foregroundBlur_2_330"/>
                    </filter>
                    <linearGradient id="paint0_linear_2_330" x1="296.657" y1="215.212" x2="352.386" y2="566.216" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#5F38FF"/>
                        <stop offset="1" stopColor="#FF0EDE"/>
                    </linearGradient>
                </defs>
            </svg>

        </header>
    );
};

export default Navigation;
