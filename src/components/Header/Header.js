import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to={{ pathname: "/", hash: "#server-rules" }} className="navbar-brand">Hero's Haven DayZ</Link>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={{ pathname: "/rules", hash: "#server-rules" }} className="nav-link">Server Rules</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "/rules", hash: "#monetization" }} className="nav-link">Monetization</Link>
                        </li>
                    </ul>
                    <img src={logo} height="50px" />
                </div>
            </nav>
        )
    }
}

export default Header;