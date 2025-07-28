// src/components/spinner.js
import React from 'react';
import './spinner.scss';

const Spinner = () => {
    return (
        <div className="spinner-overlay">
            <div className="spinner" />
        </div>
    );
};

export default Spinner;
