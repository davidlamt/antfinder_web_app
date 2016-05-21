import React, { Component } from 'react';

import SearchListings from 'SearchListings';

class Listings extends Component {
    render() {
        return (
            <div className='row'>
                <h1 className='text-center menu-page-heading'>Listings</h1>
                <SearchListings />
            </div>
        );
    }
}

export default Listings;
