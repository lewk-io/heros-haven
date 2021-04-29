import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a href="/" className="navbar-brand">Hero's Haven DayZ</a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={{ pathname: "/rules", hash: "#server-rules" }} className="nav-link">Server Rules</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "/rules", hash: "#monetization" }} className="nav-link">Monetization</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;