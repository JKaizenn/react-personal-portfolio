import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/siteplan">Site Plan</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                </ul>
            </nav>
            <h1><Link to="/" className="header-link">Jessen Forbush Portfolio</Link></h1>
        </header>
    );
}
