import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a href="/" className="navbar-brand">Hero's Haven DayZ</a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="rules#server-rules">Server Rules</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="rules#monetization">Monetization</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;