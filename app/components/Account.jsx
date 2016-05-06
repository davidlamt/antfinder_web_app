import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserInfo } from '../actions/index';

class Account extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName, email, username, status, createdAt } = this.props.user;

        const determineAgeOfAccount = createdAt => moment().diff(moment(createdAt), 'days');

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
                        <p>Your account was created { determineAgeOfAccount(createdAt) } days ago!</p>
                    </div>
                </div>

                <h2>Change Password</h2>
                <div className='row'>
                    <div className='form-group col-md-12'>
                        <label>Creation</label>
                        <p>Your account was created { determineAgeOfAccount(createdAt) } days ago!</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.users.info };
}

export default connect(mapStateToProps, { getUserInfo })(Account);
