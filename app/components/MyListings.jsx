import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getMyListings } from '../actions/index';

class MyListings extends Component {
    componentWillMount() {
        this.props.getMyListings();
    }

    renderTable() {
        return (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Creation</th>
                            <th>Views</th>
                            <th>Deletion</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderResults() }
                    </tbody>
                </table>
        );
    }

    renderResults() {
        if (this.props.listings.length === 0) return (
            <div className='loading-spinner'>
                <div className='text-center vertical-center'>
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );

        const { listings } = this.props;

        return listings.map(listing => {
            return (
                <tr key={ listing._id }>
                    <td><Link to={ `/app/listing/${ listing._id }` }>{ listing.title }</Link></td>
                    <td>Created { this.determineAgeOfListing(listing.created_at) } days ago</td>
                    <td>{ listing.views }</td>
                    <td>Delete</td>
                </tr>
            );
        });
    }

    determineAgeOfListing(createdAt) {
        return moment().diff(moment(createdAt), 'days');
    }

    render() {
        if (!this.props.listings) return <div></div>;

        return(
            <div className='my-listings col-md-12'>
                { this.renderTable() }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { listings: state.listings.myListings }
};

export default connect(mapStateToProps, { getMyListings })(MyListings);
