import React, { Component } from 'react';
import { Link } from 'react-router';


class Registration extends Component {
    render() {
        return (
            <div className='registration-page'>
                <div className='container vertical-center'>
                    <div className='text-center'>
                        <Link className='platform-name' to='/'>AntFinder</Link>
                    </div>
                    <div className='row'>
                        <div className='well col-md-6 col-md-offset-3'>
                            <h2 className='text-center'>Sign Up</h2>
                            <form>
                                <div className='form-group'>
                                    <input type='text' className='form-control' placeholder='First Name'/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Registration;
