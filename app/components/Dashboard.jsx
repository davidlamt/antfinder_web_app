import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import MyListings from 'MyListings';

class Dashboard extends Component {
    render() {
        return (
            <div className='row'>
                <h1 className='text-center menu-page-heading'>My Listings</h1>
                <MyListings />
            </div>
        );
    }
}

export default Dashboard;
