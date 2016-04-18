import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class LandingNav extends Component {
    render() {
        return (
            <nav className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-page-menu" aria-expanded="false">
                        <span className='sr-only'>Toggle Navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to='/'>AntFinder</Link>
                </div>
                <div className='collapse navbar-collapse' id='main-page-menu'>
                    <ul className='nav navbar-nav navbar-right'>
                        <li><Link className='btn-login' to='login'>Login</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default LandingNav;
