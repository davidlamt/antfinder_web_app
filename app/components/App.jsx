import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { modal } from 'react-redux-modal';

import { authenticateUser, getUserInfo } from '../actions/index';
import ModalComponent from 'ModalComponent';

class App extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.addModal = this.addModal.bind(this);
    }

    addModal(event) {
        event.preventDefault();

        modal.add(ModalComponent, {
            title: 'Log Out?',
            size: 'small',
            closeOnOutsideClick: true,
            modalType: 'logout',
            context: this.context.router
        });
    }

    componentWillMount() {
        this.props.authenticateUser().then(response => {
            this.props.getUserInfo();
            if (response.error) return this.context.router.push('/');
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

        const { firstName } = this.props.user;

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
                                <Link to='app/dashboard' className='navbar-brand'>AntFinder</Link>
                            </div>
                            <div className='collapse navbar-collapse' id='app-page-menu'>
                                <ul className='nav navbar-nav'>
                                    <li><Link activeClassName='active' to='app/dashboard'>Dashboard</Link></li>
                                    <li><Link activeClassName='active' to='app/listings'>Listings</Link></li>
                                    <li><Link activeClassName='active' to='app/account'>Account</Link></li>
                                    <li><a onClick={ this.addModal }href='#'>Logout</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-sm-9 col-lg-10 remove-padding">
                        <div className='app-top-menu'>
                            <p className='top-greeting pull-right'>
                                Hello, { firstName }!
                            </p>
                            <Link to='app/add_listing' className="fa fa-plus pull-right add-icon" title='Add listing'></Link>
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

const mapStateToProps = state => {
    return { user: state.users.info };
}

export default connect(mapStateToProps, { authenticateUser, getUserInfo })(App);
