import React, { Component } from 'react';

class ModalComponent extends Component {
    constructor(props) {
        super(props);
    }

    removeThisModal() {
        this.props.removeModal();
    }

    render() {
        return (
            <div>
                <p>Yass</p>
                <button
                    type='button'
                    onClick={ this.removeThisModal.bind(this) }>
                    x
                </button>
            </div>
        );
    }
}

export default ModalComponent;
