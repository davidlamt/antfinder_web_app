import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { searchListings } from '../actions/index';

class SearchListings extends Component {
    onSubmit(props) {
        this.props.searchListings(props.listing_type, props.query).then();
    }

    render() {
        const { fields: { listing_type, query }, handleSubmit } = this.props;

        return (
            <div className='search-listings col-md-8 col-md-offset-2'>
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                    <div className='row'>
                        <div className='col-sm-2'>
                            <div className={ `form-group ${ listing_type.touched && listing_type.invalid ? 'has-danger' : ''}` }>
                                <select className='form-control' { ...listing_type }>
                                    <option value=''></option>
                                    <option value='All'>All</option>
                                    <option value='Misc'>Misc</option>
                                    <option value='Book'>Book</option>
                                    <option value='Phone'>Phone</option>
                                    <option value='Car'>Car</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-sm-8'>
                            <div className='form-group'>
                                <input type='text' className='form-control' placeholder='Awesome things' { ...query } />
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <button type='submit' className='btn btn-primary'>Search</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.listing_type) errors.listing_type = 'Select a listing type';

    return errors;
};

export default reduxForm({
    form: 'SearchListingsForm',
    fields: ['listing_type', 'query'],
    validate
}, null, { searchListings })(SearchListings);
