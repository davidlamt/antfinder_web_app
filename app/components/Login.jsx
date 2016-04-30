import React, { Component } from 'react';
import { Link } from 'react-router';

import Footer from 'Footer';

class Login extends Component {
    render() {
        return (
            <div>
                <div className='login-page'>
                    <div className='container vertical-center'>
                        <div className='row'>
                            <div className='col-md-4 col-md-offset-4 text-center'>
                                <Link className='platform-name' to='/'>AntFinder</Link>
                                <div className='well'>
                                    <h2 className='login-header'>Sign In</h2>
                                    <form>
                                        <div className='form-group'>
                                            <div className='input-group'>
                                                <span className='input-group-addon'>
                                                    <span className='glyphicon glyphicon-user' aria-hidden='true'/>
                                                </span>
                                                <input type='text' className='form-control' placeholder='Username'/>
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <div className='input-group'>
                                                <span className='input-group-addon'>
                                                    <span className='glyphicon glyphicon-lock' aria-hidden='true'/>
                                                </span>
                                                <input type='password' className='form-control' placeholder='Password'/>
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

export default Login;
