import React, { Component, useState } from 'react'
//import { FaBars } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import { FaHome, FaUser, FaFileAlt, FaTools, FaLaptopCode, FaEnvelope, FaUserCircle, FaBars, FaSun, FaMoon } from 'react-icons/fa';

import './styles.scss'

const data = [
    {
        label: 'HOME',
        to: '/',
        icon: <FaHome />
    },
    {
        label: 'ABOUT ME',
        to: '/about',
        icon: <FaUser />
    },
    {
        label: 'RESUME',
        to: '/resume',
        icon: <FaFileAlt />
    },
    {
        label: 'SKILLS',
        to: '/skills',
        icon: <FaTools />
    },
    {
        label: 'PROJECTS',
        to: '/projects',
        icon: <FaLaptopCode />
    },
    {
        label: 'CONTACT',
        to: '/contact',
        icon: <FaEnvelope />
    }
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => {
        document.body.classList.toggle("light-theme", !darkTheme);
        setDarkTheme(!darkTheme);
    };

    return (
        <div>
            <nav className='navbar'>
                <div className="navbar__container">
                    <Link to='/' className='navbar__container__logo'>
                        <FaUserCircle size={35} />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className='navbar__container__menu__item'>

                                <NavLink
                                    className={({ isActive }) =>
                                        `navbar__container__menu__item__links ${isActive ? "active" : ""}`
                                    }
                                    to={item.to}
                                    onClick={handleToggleIcon}
                                >
                                    <span className="navbar__icon">{item.icon}</span>

                                    <span className="navbar__label">{item.label}</span>
                                </NavLink>

                            </li>

                        ))
                    }
                    {/* <li className="navbar__container__menu__item">
                        <button className="theme-toggle-btn" onClick={toggleTheme}>
                            {darkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
                        </button>
                    </li> */}


                </ul>
                {/* <button className="theme-toggle-btn" onClick={toggleTheme}>
                                        {darkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
                                    </button> */}
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>

            </nav>
        </div>
    );
};


export default Navbar;