import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {
    renderTable() {
        return (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Condition</th>
                            <th>Price</th>
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
                    <td>{ listing.title }</td>
                    <td>{ listing.condition }</td>
                    <td>{ listing.price }</td>
                </tr>
            );
        });
    }

    render() {
        if (!this.props.listings) return <div></div>;

        return (
            <div className='col-md-12'>
                { this.renderTable() }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { listings: state.listings.data }
};

export default connect(mapStateToProps, null)(SearchResults);
