import React, { Component } from 'react';

import SearchListings from 'SearchListings';
import SearchResults from 'SearchResults';

class Listings extends Component {
    render() {
        return (
            <div className='row'>
                <h1 className='text-center menu-page-heading'>Listings</h1>
                <SearchListings />
                <SearchResults />
            </div>
        );
    }
}

export default Listings;
