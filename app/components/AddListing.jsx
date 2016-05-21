import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { addListing } from '../actions/index';

class AddListing extends Component {
    onSubmit(props) {
        console.log(props);
    }

    render() {
        const { fields: { listing_type, title, description, condition, price, contact }, handleSubmit } = this.props;


        return (
            <div>
                <h1 className='text-center menu-page-heading'>Add Listing</h1>
                    <div className='row'>
                        <form className='col-md-4' onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                            <div className={ `form-group ${ listing_type.touched && listing_type.invalid ? 'has-danger' : ''}` }>
                                <label>Type</label>
                                <br />
                                <select {...listing_type }>
                                    <option value=''></option>
                                    <option value='Misc'>Misc</option>
                                    <option value='Book'>Book</option>
                                    <option value='Phone'>Phone</option>
                                    <option value='Car'>Car</option>
                                </select>
                                <br />
                                <div className='text-help'>
                                    { listing_type.touched ? listing_type.error: '' }
                                </div>
                            </div>
                            <span className={ listing_type.touched && listing_type.invalid ? 'vertical-spacer' : '' } />
                            <div className={ `form-group ${ title.touched && title.invalid ? 'has-danger' : ''}` }>
                                <label>Title</label>
                                <input type='text' className='form-control' placeholder='LG G4' { ...title } />
                                <div className='text-help'>
                                    { title.touched ? title.error: '' }
                                </div>
                            </div>
                            <span className={ title.touched && title.invalid ? 'vertical-spacer' : '' } />
                            <div className={ `form-group ${ description.touched && description.invalid ? 'has-danger' : ''}` }>
                                <label>Description</label>
                                <textarea type='text' className='form-control' placeholder='Awesome phone!' { ...description } />
                                <div className='text-help'>
                                    { description.touched ? description.error: '' }
                                </div>
                            </div>
                            <span className={ description.touched && description.invalid ? 'vertical-spacer' : '' } />
                            <div className={ `form-group ${ condition.touched && condition.invalid ? 'has-danger' : ''}` }>
                                <label>Condition</label>
                                <br />
                                <select { ...condition }>
                                    <option value=''></option>
                                    <option value='New'>New</option>
                                    <option value='Used'>Used</option>
                                </select>
                                <br />
                                <div className='text-help'>
                                    { condition.touched ? condition.error: '' }
                                </div>
                            </div>
                            <span className={ condition.touched && condition.invalid ? 'vertical-spacer' : '' } />
                            <div className={ `form-group ${ price.touched && price.invalid ? 'has-danger' : ''}` }>
                                <label>Price</label>
                                <input type='number' className='form-control' placeholder='200' { ...price }/>
                                <div className='text-help'>
                                    { price.touched ? price.error: '' }
                                </div>
                            </div>
                            <span className={ price.touched && price.invalid ? 'vertical-spacer' : '' } />
                            <div className={ `form-group ${ contact.touched && contact.invalid ? 'has-danger' : ''}` }>
                                <label>Contact</label>
                                <input type='tel' className='form-control' placeholder='(123)456-7890' { ...contact } />
                                <div className='text-help'>
                                    { contact.touched ? contact.error: '' }
                                </div>
                            </div>
                            <span className={ contact.touched && contact.invalid ? 'vertical-spacer' : '' } />
                            <button type='submit' className='btn btn-primary'>Add Listing</button>
                        </form>
                    </div>
            </div>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.title) errors.title = 'Enter a title';
    if (!values.description) errors.description = 'Enter a description';
    if (!values.price) errors.price = 'Enter a price';
    if (!values.contact) errors.contact = 'Enter a contact number'
    if (!values.listing_type) errors.listing_type = 'Select a listing type';
    if (!values.condition) errors.condition = 'Select a condition';

    return errors;
};

export default reduxForm({
    form: 'AddListingForm',
    fields: ['listing_type', 'title', 'description', 'condition', 'price', 'contact'],
    validate
}, null, { addListing })(AddListing);
