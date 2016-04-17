import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import LandingNav from 'LandingNav';

class Landing extends Component {
    render() {
        return (
            <div>
                <div className='landing-page'>
                    <LandingNav />
                    <div className='landing-page-info container'>
                        <h1 className='landing-page-text'>A one stop shop for UCI students.</h1>
                        <Link className='btn btn-success btn-register' to='register'>Register</Link>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <p>&copy; 2016 &mdash; A project by <a href="http://davidtranscend.com/" target="_blank">David Tran</a></p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Landing;
