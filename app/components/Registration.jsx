import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createUser } from '../actions/index';

import Footer from 'Footer';

class Registration extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createUser(props).then(() => {
            console.log('user created!');
        });
    }

    render() {
        const { fields: { firstName, lastName, email, username, password, confirmPassword }, handleSubmit } = this.props;

        return (
            <div>
                <div className='registration-page'>
                    <div className='container vertical-center'>
                        <div className='row'>
                            <div className='col-md-6 col-md-offset-3 text-center'>
                                <Link className='platform-name' to='/'>AntFinder</Link>
                                <div className='well'>
                                    <h2 className='register-header'>Sign Up</h2>
                                    <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' placeholder='First Name' { ...firstName } />
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' placeholder='Last Name' { ...lastName } />
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' placeholder='Email' { ...email } />
                                        </div>
                                        <div className='form-group'>
                                            <input type='text' className='form-control' placeholder='Username' { ...username } />
                                        </div>
                                        <div className='form-group'>
                                            <input type='password' className='form-control' placeholder='Password' { ...password } />
                                        </div>
                                        <div className='form-group'>
                                            <input type='password' className='form-control' placeholder='Confirm Password' { ...confirmPassword } />
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

const validate = values => {
    const errors = {};

    return errors;
};

export default reduxForm({
    form: 'RegistrationForm',
    fields: ['firstName', 'lastName', 'email', 'username', 'password', 'confirmPassword'],
    validate
}, null, { createUser })(Registration);
