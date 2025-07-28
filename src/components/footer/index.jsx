import React, { useState, useEffect } from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa";
import "./styles.scss";

const Footer = () => {
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => {
        const nextTheme = !darkTheme;
        setDarkTheme(nextTheme);
        document.body.classList.toggle("light-theme", !nextTheme);
        localStorage.setItem("theme", nextTheme ? "dark" : "light");
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const isLight = storedTheme === "light";
        setDarkTheme(!isLight);
        document.body.classList.toggle("light-theme", isLight);
    }, []);

    return (
        <footer className="footer">
            <h3 className="footer__title">Connect With</h3>

            <div className="footer__icons">
                <a href="https://www.facebook.com/profile.php?id=100009726124345" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
                <a href="https://www.linkedin.com/in/sahabaskhan/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/khansahabas03" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
                <a href="https://www.instagram.com/khan_shahbaz__7/?hl=en" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>

            <div className="footer__actions">
                <button className="footer__btn" onClick={toggleTheme}>
                    {darkTheme ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
                <button className="footer__btn" onClick={scrollToTop}>
                    🔼 Scroll to Top
                </button>
            </div>

            <div className="footer__copyright">
                &copy; {new Date().getFullYear()} Sahabas Khan. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
