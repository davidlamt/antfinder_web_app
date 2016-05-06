import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { modal } from 'react-redux-modal';

import { loginUser } from '../actions/index';

import Footer from 'Footer';
import ModalComponent from 'ModalComponent';

class Login extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    onSubmit(props) {
        this.props.loginUser(props).then(result => {
            if (result.error) return this.addModal();
            this.context.router.push('/app/dashboard');
        });
    }

    addModal() {
        modal.add(ModalComponent, {
            title: 'Invalid Credentials',
            size: 'medium',
            closeOnOutsideClick: true,
            message: 'Your username and password combination is invalid.'
        });
    }

    render() {
        const { fields: { username, password }, handleSubmit } = this.props;

        return (
            <div>
                <div className='login-page'>
                    <div className='container vertical-center'>
                        <div className='row'>
                            <div className='col-md-4 col-md-offset-4 text-center'>
                                <Link className='platform-name' to='/'>AntFinder</Link>
                                <div className='well'>
                                    <h2 className='login-header'>Sign In</h2>
                                    <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                                        <div className={ `form-group ${ username.touched && username.invalid ? 'has-danger' : ''}` }>
                                            <div className='input-group'>
                                                <span className='input-group-addon'>
                                                    <span className='glyphicon glyphicon-user' aria-hidden='true' />
                                                </span>
                                                <input type='text' className='form-control' placeholder='Username' { ...username } />
                                            </div>
                                            <div className='text-help'>
                                                { username.touched ? username.error: '' }
                                            </div>
                                        </div>
                                        <span className={ username.touched && username.invalid ? 'vertical-spacer' : '' } />
                                        <div className={ `form-group ${ password.touched && password.invalid ? 'has-danger' : ''}` }>
                                            <div className='input-group'>
                                                <span className='input-group-addon'>
                                                    <span className='glyphicon glyphicon-lock' aria-hidden='true'/>
                                                </span>
                                                <input type='password' className='form-control' placeholder='Password' { ...password } />
                                            </div>
                                            <div className='text-help'>
                                                { password.touched ? password.error: '' }
                                            </div>
                                        </div>
                                        <button type='submit' className='btn btn-primary btn-block'>Log In</button>
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

    if (!values.username) errors.username = 'Enter your username';
    if (!values.password) errors.password = 'Enter your password';

    return errors;
};

export default reduxForm({
    form: 'LoginForm',
    fields: ['username', 'password'],
    validate
}, null, { loginUser })(Login);
