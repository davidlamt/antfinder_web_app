import React, { Component } from 'react';

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
        return (
            <div className='col-md-12'>
                { this.renderTable() }
            </div>
        );
    }
}

export default SearchResults;
