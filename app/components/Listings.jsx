import React, { Component } from 'react';

import SearchListings from 'SearchListings';

class Listings extends Component {
    render() {
        return (
            <div>
                <h1>Listings Page</h1>
                <SearchListings />
            </div>
        );
    }
}

export default Listings;
