import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { authenticateUser, getUserInfo } from '../actions/index';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { loaded: false, firstName: '' };
    }

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.authenticateUser().then(response => {
            if (response.error) this.context.router.push('/');
        });
    }

    componentDidMount() {
        this.props.getUserInfo().then(response => {
            this.setState({
                loaded: true,
                firstName: response.payload.data.firstName
            });
        });
    }

    render() {
        const { loaded, firstName } = this.state;

        if (!loaded) return (
            <div className='loading-spinner'>
                <div className='text-center vertical-center'>
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );

        return (
            <div className="container-fluid app-nav">
                <div className="row">
                <div className="col-sm-3 col-lg-2">
                    <nav className="navbar navbar-inverse navbar-fixed-side">
                        <div className='navbar-header'>
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-page-menu" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to='app' className='navbar-brand'>AntFinder</Link>
                        </div>
                        <div className='collapse navbar-collapse' id='app-page-menu'>
                            <ul className='nav navbar-nav'>
                                <li><Link activeClassName='active' to='app'>Dashboard</Link></li>
                                <li><Link activeClassName='active' to='listings'>Listings</Link></li>
                                <li><Link activeClassName='active' to='account'>Account</Link></li>
                                <li><Link activeClassName='active' to='logout'>Logout</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="col-sm-9 col-lg-10 remove-padding">
                    <div className='app-top-menu'>
                        <p className='top-greeting'>
                            Hello, { firstName }!
                        </p>
                    </div>
                    <div className='app-contents'>
                        { this.props.children }
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default connect(null, { authenticateUser, getUserInfo })(App);
