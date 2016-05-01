import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../actions/index';

class ModalComponent extends Component {
    constructor(props) {
        super(props);

        this.removeThisModal = this.removeThisModal.bind(this);
        this.logout = this.logout.bind(this);
    }

    removeThisModal() {
        this.props.removeModal();
    }

    logout() {
        const { context } = this.props;

        this.props.logoutUser().then(() => {
            this.removeThisModal();

            return context.push('/');
        });
    }

    determineLayout(modalType) {
        switch (modalType) {
            case 'logout':
                return (
                    <div>
                        <button onClick={ this.logout } className='btn btn-danger pull-left'>Log out</button>
                        <button onClick={ this.removeThisModal } className='btn btn-default pull-right'>Cancel</button>
                    </div>
                );
        }
    }

    render() {
        const { message, modalType } = this.props;

        return (
            <div className='my-modal'>
                <p>{ message }</p>
                { this.determineLayout(modalType) }
            </div>
        );
    }
}

export default connect(null, { logoutUser })(ModalComponent);
