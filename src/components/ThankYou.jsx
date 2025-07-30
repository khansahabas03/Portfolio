import React from "react";
import { Link } from "react-router-dom";
import "./ThankYou.scss";
const ThankYou = () => {
    return (
        <div className="thank-you-container">
            <h1>✅ Thank You!</h1>
            <p>Your message has been successfully sent. I’ll get back to you soon.</p>
            <Link to="/" className="thank-you-home-btn">
                ⬅️ Back to Home
            </Link>
        </div>
    );
};

export default ThankYou;
