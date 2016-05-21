import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getListing } from '../actions/index';

class Listing extends Component {
    componentWillMount() {
        this.props.getListing(this.props.params.listingID);
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

        return (
            <div>
                <div className='row'>
                    <div className='col-md-4'>
                        <ol className="breadcrumb">
                            <li><Link to='app/listings'>Listings</Link></li>
                            <li>View Listing</li>
                        </ol>
                    </div>
                </div>
                <div className='panel panel-success listing-view'>
                    <div className="panel-heading">
                        <h3>{ listing.title }</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <li className="list-group-item"><strong>Category: </strong>{ listing.listing_type }</li>
                            <li className="list-group-item"><strong>Condition: </strong>{ listing.condition }</li>
                            <li className="list-group-item"><strong>Price: </strong>${ listing.price }</li>
                            <li className="list-group-item"><strong>Contact: </strong>{ listing.contact }</li>
                        </ul>
                    <div className='well'>
                        <p><strong>Description</strong></p>
                        <p>{ listing.description }</p>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { listing: state.listing.data };
};

export default connect(mapStateToProps, { getListing })(Listing);
