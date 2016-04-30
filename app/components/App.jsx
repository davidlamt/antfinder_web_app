import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { authenticateUser } from '../actions/index';

class App extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.authenticateUser().then(response => {
            if (response.error) this.context.router.push('/');
        });
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-3 col-lg-2'>
                        <nav className='navbar navbar-default navbar-fixed-side'>
                        </nav>
                    </div>
                    <div className='col-sm-9 col-lg-10'>
                        { this.props.children }
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { authenticateUser })(App);
