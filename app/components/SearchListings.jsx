import React, { Component } from 'react';

class SearchListings extends Component {
    render() {
        return (
            <div className='search-listings col-md-8 col-md-offset-2'>
                <form>
                    <div className='form-group'>
                        <div className='row'>
                            <div className='col-sm-2'>
                                <select className="form-control">
                                    <option value=''></option>
                                    <option value='All'>All</option>
                                    {/*<option value='Misc'>Misc</option>
                                    <option value='Book'>Book</option>
                                    <option value='Phone'>Phone</option>
                                    <option value='Car'>Car</option>*/}
                                </select>
                            </div>
                            <div className='col-sm-8'>
                                <input disabled type='text' className='form-control' placeholder='Awesome things' />
                            </div>
                            <div className='col-sm-2'>
                                <button type='submit' className='btn btn-primary'>Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchListings;
