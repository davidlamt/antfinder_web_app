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
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default connect(null, { authenticateUser })(App);
