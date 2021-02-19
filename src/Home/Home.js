import React, { Component } from 'react';
import './Home.css';
import Navigation from '../Navigation/Navigation';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="landing">
                    <div className="nav-bar">
                        <Navigation />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;