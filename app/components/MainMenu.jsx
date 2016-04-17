import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class MainMenu extends Component {
    render() {
        return (
            <div className="main-page">
                <div className="main-menu">
                    <div className="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium">
                        <button className="menu-icon" type="button" data-toggle></button>
                        <div className="title-bar-title">Menu</div>
                    </div>
                    <div className="top-bar" id="main-menu">
                        <div className="top-bar-left">
                            <ul className="dropdown menu" data-dropdown-menu>
                                <li className="menu-text">AntFinder</li>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/registration'>Registration</Link></li>
                            </ul>
                        </div>
                        <div className="top-bar-right">
                            <ul className="menu">
                                <li><button type="button" className="button">Log In</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenu;
