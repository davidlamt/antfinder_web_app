import React, { Component } from 'react';
import { Link } from 'react-router';

import Footer from 'Footer';

class Registration extends Component {
    render() {
        return (
            <div>
                <div className='registration-page'>
                    <div className='container vertical-center'>
                        <div className='row'>
                            <div className='col-md-6 col-md-offset-3 text-center'>
                                <Link className='platform-name' to='/'>AntFinder</Link>
                                <div className='well'>
                                    <h2 className='register-header'>Sign Up</h2>
                                    <form>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' placeholder='First Name'/>
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' placeholder='Last Name'/>
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' placeholder='Email'/>
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' placeholder='Username'/>
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' placeholder='Password' />
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' placeholder='Confirm Password' />
                                        </div>
                                        <button type='submit' className='btn btn-primary btn-block'>Register</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Registration;
