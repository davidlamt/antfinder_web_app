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
        this.props.createUser(props).then(res => {
            if (res.error) return this.addModal('A user with that username / email already exists.');
            this.context.router.push('/app/dashboard');
        }, err => {
            return this.addModal('An error occured.');
        });
    }

    addModal(message) {
        modal.add(ModalComponent, {
            title: 'Please Try Again',
            size: 'medium',
            closeOnOutsideClick: true,
            message
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
                                            <div className='input-group'>
                                                <span className="input-group-addon">First Name</span>
                                                <input type='text' className='form-control' { ...firstName } />
                                            </div>
                                            <div className='text-help'>
                                                { firstName.touched ? firstName.error: '' }
                                            </div>
                                        </div>
                                        <span className={ firstName.touched && firstName.invalid ? 'vertical-spacer' : '' } />
                                        <div className={ `form-group ${ lastName.touched && lastName.invalid ? 'has-danger' : ''}` }>
                                            <div className='input-group'>
                                                <span className="input-group-addon">Last Name</span>
                                                <input type='text' className='form-control' { ...lastName } />
                                            </div>
                                            <div className='text-help'>
                                                { lastName.touched ? lastName.error: '' }
                                            </div>
                                        </div>
                                        <span className={ lastName.touched && lastName.invalid ? 'vertical-spacer' : '' } />
                                        <div className={ `form-group ${ email.touched && email.invalid ? 'has-danger' : ''}` }>
                                            <div className='input-group'>
                                                <span className="input-group-addon">Email</span>
                                                <input type='text' className='form-control' { ...email } />
                                            </div>
                                            <div className='text-help'>
                                                { email.touched ? email.error: '' }
                                            </div>
                                        </div>
                                        <span className={ email.touched && email.invalid ? 'vertical-spacer' : '' } />
                                        <div className={ `form-group ${ username.touched && username.invalid ? 'has-danger' : ''}` }>
                                            <div className='input-group'>
                                                <span className="input-group-addon">Username</span>
                                                <input type='text' className='form-control' { ...username } />
                                            </div>
                                            <div className='text-help'>
                                                { username.touched ? username.error: '' }
                                            </div>
                                        </div>
                                        <span className={ username.touched &&  username.invalid ? 'vertical-spacer' : '' } />
                                        <div className={ `form-group ${ password.touched && password.invalid ? 'has-danger' : ''}` }>
                                            <div className='input-group'>
                                                <span className="input-group-addon">Password</span>
                                                <input type='password' className='form-control' { ...password } />
                                            </div>
                                            <div className='text-help'>
                                                { password.touched ? password.error: '' }
                                            </div>
                                        </div>
                                        <span className={ password.touched && password.invalid ? 'vertical-spacer' : '' } />
                                        <div className={ `form-group ${ confirmPassword.touched && confirmPassword.invalid ? 'has-danger' : ''}` }>
                                            <div className='input-group'>
                                                <span className="input-group-addon">Confirm Password</span>
                                                <input type='password' className='form-control' { ...confirmPassword } />
                                            </div>
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
