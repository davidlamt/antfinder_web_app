import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import MainPageNav from 'MainPageNav';

class MainMenu extends Component {
    render() {
        return (
            <div>
                <div className='main-page'>
                    <MainPageNav />
                    <div className='main-page-info'>
                        <h1 className='main-page-text'>A one stop shop for UCI students.</h1>
                        <Link className='btn-register' to='register'>Register</Link>
                    </div>
                </div>
                <footer>
                    <div class="container">
                        <p>&copy; 2016 &mdash; A project by <a href="http://davidtranscend.com/" target="_blank">David Tran</a></p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default MainMenu;
