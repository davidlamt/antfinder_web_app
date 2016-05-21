import React, { Component } from 'react';

class Listing extends Component {
    componentWillMount() {
        console.log(this.props.params.listingID);
    }

    render() {
        if (!this.props.listing) return (
            <div className='loading-spinner'>
                <div className='text-center vertical-center'>
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );

        return (
            <div>
                Listing
            </div>
        );
    }
}

export default Listing;
