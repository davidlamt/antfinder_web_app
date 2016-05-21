import React, { Component } from 'react';

class SearchListings extends Component {
    render() {
        return (
            <div>
                <form className='col-md-4 col-offset-md-4'>
                    <input type='text' />
                    <button type='submit' className='btn btn-primary'>Search</button>
                </form>
            </div>
        );
    }
}

export default SearchListings;
