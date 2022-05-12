import React, { Component } from 'react';
import {Navigate} from "react-router-dom";
import TitleComponent from "./title";
import './header.css';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.handleClickLogout = this.handleClickLogout.bind(this)
    }

    state = {
        toDashboard: false,
    };

    handleClickLogout(){
        localStorage.removeItem('token');
        localStorage.setItem('isLoggedIn', false);
        this.setState({ toDashboard: true });
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Navigate to='/' />
        }
        return (
            <nav className="navbar navbar-expand navbar-dark bg-black static-top">
                <TitleComponent title="Covid Vaccination"></TitleComponent>

                <h2 style={{ color: "white" }}>COVID VACCINATION BOOKING</h2>
                <div style={{ paddingLeft: 1100 }}></div>
                <button
                    className="btn btn-primary btn-block" 
                    style={{width: '150px'}}
                    onClick={this.handleClickLogout.bind(this)}
                  >
                    Logout
                  </button>

            </nav>
        );
    }
}
