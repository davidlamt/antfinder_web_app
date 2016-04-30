import React, { Component } from 'react';

class ModalComponent extends Component {
    constructor(props) {
        super(props);
    }

    removeThisModal() {
        this.props.removeModal();
    }

    render() {
        const { message } = this.props;

        return (
            <div>
                <p>{ message }</p>
            </div>
        );
    }
}

export default ModalComponent;
