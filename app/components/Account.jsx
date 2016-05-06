import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { modal } from 'react-redux-modal';

import { getUserInfo, changeUserPassword } from '../actions/index';

import ModalComponent from 'ModalComponent';

class Account extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getUserInfo();
    }

    determineAgeOfAccount(createdAt) {
        return moment().diff(moment(createdAt), 'days');
    }

    addModal(title, message) {
        modal.add(ModalComponent, {
            title,
            size: 'medium',
            closeOnOutsideClick: true,
            message
        });
    }

    onSubmit(props) {
        const { oldPassword, newPassword } = props;
        this.props.changeUserPassword(oldPassword, newPassword).then(res => {
            if (res.error) return this.addModal('Please Try Again', 'Your old password is not correct.');
            return this.addModal('Password changed!', 'Please use your new password from now on.');
        }, err => {
            return this.addModal('Please Try Again', 'An error occured.');
        });
    }

    render() {
        if (!this.props.user) return (
            <div className='loading-spinner'>
                <div className='text-center vertical-center'>
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );

        const { firstName, lastName, email, username, status, createdAt } = this.props.user;
        const { fields: { oldPassword, newPassword, confirmNewPassword }, handleSubmit } = this.props;
        return (
            <div>
                <h1 className='text-center menu-page-heading'>Account</h1>
                <div className='row'>
                    <div className='form-group col-md-4'>
                        <label>First Name</label>
                        <input className='form-control' value={ firstName } disabled></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='form-group col-md-4'>
                        <label>Last Name</label>
                        <input className='form-control' value={ lastName } disabled></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='form-group col-md-4'>
                        <label>Email</label>
                        <input className='form-control' value={ email } disabled></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='form-group col-md-4'>
                        <label>Username</label>
                        <input className='form-control' value={ username } disabled></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='form-group col-md-4'>
                        <label>Account Status</label>
                        <input className='form-control' value={ status } disabled></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='form-group col-md-12'>
                        <label>Creation</label>
                        <p>Your account was created { this.determineAgeOfAccount(createdAt) } days ago!</p>
                    </div>
                </div>

                <h2>Change Password</h2>
                <div className='row'>
                    <form className='col-md-4' onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                        <div className={ `form-group ${ oldPassword.touched && oldPassword.invalid ? 'has-danger' : ''}` }>
                            <label>Old Password</label>
                            <input type='password' className='form-control' { ...oldPassword } />
                            <div className='text-help'>
                                { oldPassword.touched ? oldPassword.error: '' }
                            </div>
                        </div>
                        <span className={ oldPassword.touched && oldPassword.invalid ? 'vertical-spacer' : '' } />
                        <div className={ `form-group ${ newPassword.touched && newPassword.invalid ? 'has-danger' : ''}` }>
                            <label>New Password</label>
                            <input type='password' className='form-control' { ...newPassword } />
                            <div className='text-help'>
                                { newPassword.touched ? newPassword.error: '' }
                            </div>
                        </div>
                        <span className={ newPassword.touched && newPassword.invalid ? 'vertical-spacer' : '' } />
                        <div className={ `form-group ${ confirmNewPassword.touched && confirmNewPassword.invalid ? 'has-danger' : ''}` }>
                            <label>Confirm New Password</label>
                            <input type='password' className='form-control' { ...confirmNewPassword } />
                            <div className='text-help'>
                                { confirmNewPassword.touched ? confirmNewPassword.error: '' }
                            </div>
                        </div>
                        <span className={ confirmNewPassword.touched && confirmNewPassword.invalid ? 'vertical-spacer' : '' } />
                        <button type='submit' className='btn btn-primary'>Change Password</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.users.info };
};

const validate = values => {
    const errors = {};

    if (!values.oldPassword) errors.oldPassword = 'Enter your old password';
    if (!values.newPassword) errors.newPassword = 'Enter a new password';
    if (!values.confirmNewPassword) errors.confirmNewPassword = 'Confirm your new password';
    else if (values.newPassword !== values.confirmNewPassword) errors.confirmNewPassword = 'Your new passwords do not match';

    return errors;
};

export default reduxForm({
    form: 'ChangePasswordForm',
    fields: ['oldPassword', 'newPassword', 'confirmNewPassword'],
    validate
}, mapStateToProps, { getUserInfo, changeUserPassword })(Account);
