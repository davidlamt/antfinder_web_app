import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard Page</h1>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/registration'>Registration</Link></li>
            </div>
        );
    }
}

export default Dashboard;
