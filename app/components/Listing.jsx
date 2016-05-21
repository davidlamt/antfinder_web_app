import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getListing } from '../actions/index';

class Listing extends Component {
    componentWillMount() {
        this.props.getListing(this.props.params.listingID).then();
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

        const { listing } = this.props;

        console.log(listing);

        return (
            <div className='panel panel-success listing-view'>
                <div className="panel-heading">{ listing.title }</div>
                <div className="panel-body">
                    <ul className="list-group">
                        <li className="list-group-item">{ listing.listing_type }</li>
                        <li className="list-group-item">{ listing.condition }</li>
                        <li className="list-group-item">${ listing.price }</li>
                        <li className="list-group-item">{ listing.contact }</li>
                    </ul>
                <div className='well'>{ listing.description }</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { listing: state.listing.data };
};

export default connect(mapStateToProps, { getListing })(Listing);
