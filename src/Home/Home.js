import React, { Component } from 'react';
import './Home.css';
import Navigation from '../Navigation/Navigation';
import Title from '../Logo/Title/Title';
import NavigationBar from '../NavigationBar/NavigationBar';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="landing">
                    <NavigationBar />
                    <h1 className="landing-msg">Where Dream Homes <br></br>Do Come True</h1>
                </div>
            </div>
        )
    }
}

export default Home;