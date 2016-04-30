import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { modal } from 'react-redux-modal';

import { createUser } from '../actions/index';

import Footer from 'Footer';
import ModalComponent from 'ModalComponent';

class Registration extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createUser(props).then((result) => {
            if (result.error) return this.addModal();
            this.context.router.push('/app');
        });
    }

    addModal() {
        modal.add(ModalComponent, {
            title: 'Please Try Again',
            size: 'medium',
            closeOnOutsideClick: true,
            message: 'A user with that username / email already exists.'
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
                                        <div className={ `form-group ${ firstName.touched && firstName.invalid ? 'has-danger' : ''}` }>
                                            <input type='text' className='form-control' placeholder='First Name' { ...firstName } />
                                            <div className='text-help'>
                                                { firstName.touched ? firstName.error: '' }
                                            </div>
                                        </div>
                                        <div className={ `form-group ${ lastName.touched && lastName.invalid ? 'has-danger' : ''}` }>
                                            <input type='text' className='form-control' placeholder='Last Name' { ...lastName } />
                                            <div className='text-help'>
                                                { lastName.touched ? lastName.error: '' }
                                            </div>
                                        </div>
                                        <div className={ `form-group ${ email.touched && email.invalid ? 'has-danger' : ''}` }>
                                            <input type='text' className='form-control' placeholder='Email' { ...email } />
                                                <div className='text-help'>
                                                    { email.touched ? email.error: '' }
                                                </div>
                                        </div>
                                        <div className={ `form-group ${ username.touched && username.invalid ? 'has-danger' : ''}` }>
                                            <input type='text' className='form-control' placeholder='Username' { ...username } />
                                            <div className='text-help'>
                                                { username.touched ? username.error: '' }
                                            </div>
                                        </div>
                                        <div className={ `form-group ${ password.touched && password.invalid ? 'has-danger' : ''}` }>
                                            <input type='password' className='form-control' placeholder='Password' { ...password } />
                                            <div className='text-help'>
                                                { password.touched ? password.error: '' }
                                            </div>
                                        </div>
                                        <div className={ `form-group ${ confirmPassword.touched && confirmPassword.invalid ? 'has-danger' : ''}` }>
                                            <input type='password' className='form-control' placeholder='Confirm Password' { ...confirmPassword } />
                                            <div className='text-help'>
                                                { confirmPassword.touched ? confirmPassword.error: '' }
                                            </div>
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

    if (!values.firstName) errors.firstName = 'Enter your first name';
    if (!values.lastName) errors.lastName = 'Enter your last name';
    if (!values.email) errors.email = 'Enter your email address';
    if (!values.username) errors.username = 'Enter your username';
    if (!values.password) errors.password = 'Enter a password';
    if (!values.confirmPassword) errors.confirmPassword = 'Confirm your password';
    else if (values.password !== values.confirmPassword) errors.confirmPassword = 'Your passwords do not match';

    return errors;
};

export default reduxForm({
    form: 'RegistrationForm',
    fields: ['firstName', 'lastName', 'email', 'username', 'password', 'confirmPassword'],
    validate
}, null, { createUser })(Registration);
