import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import Footer from 'Footer';
import LandingNav from 'LandingNav';

class Landing extends Component {
    render() {
        return (
            <div>
                <div className='landing-page'>
                    <LandingNav />
                    <div className='landing-page-info container vertical-center'>
                        <h1 className='landing-page-text'>A one stop shop for UCI students.</h1>
                        <Link className='btn btn-success btn-register' to='register'>Register</Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Landing;
