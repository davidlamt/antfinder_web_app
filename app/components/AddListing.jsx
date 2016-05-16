import React, { Component } from 'react';

class AddListing extends Component {
    render() {
        return (
            <div>
                <h1 className='text-center menu-page-heading'>Add Listing</h1>
                    <div className='row'>
                        <form className='col-md-4'>
                            <div className={ `form-group` }>
                                <label>Type</label>
                                <br />
                                <select>
                                    <option value='Misc'>Misc</option>
                                    <option value='Book'>Book</option>
                                    <option value='Phone'>Phone</option>
                                    <option value='Car'>Car</option>
                                </select>
                            </div>
                            <div className={ `form-group` }>
                                <label>Title</label>
                                <input type='text' className='form-control'/>
                            </div>
                            <div className={ `form-group` }>
                                <label>Description</label>
                                <textarea type='text' className='form-control'/>
                            </div>
                            <div className={ `form-group` }>
                                <label>Condition</label>
                                <br />
                                <select>
                                    <option value='New'>New</option>
                                    <option value='Used'>Used</option>
                                </select>
                            </div>
                            <div className={ `form-group` }>
                                <label>Price</label>
                                <input type='number' className='form-control'/>
                            </div>
                            <div className={ `form-group` }>
                                <label>Contact</label>
                                <input type='tel' className='form-control'/>
                            </div>
                            <button type='submit' className='btn btn-primary'>Add Listing</button>
                        </form>
                    </div>
            </div>
        );
    }
}

export default AddListing;
