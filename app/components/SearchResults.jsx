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
        return (
            <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
            </tr>
        );
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
