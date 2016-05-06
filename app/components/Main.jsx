import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { authenticateUser } from '../actions/index';

class Main extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.authenticateUser().then(response => {
            if (!response.error) this.context.router.push('/app/dashboard');
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

const mapStateToProps = state => {
    return { status: state.users.status };
};

export default connect(mapStateToProps, { authenticateUser })(Main);
