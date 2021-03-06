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
        localStorage.setItem('user_id', 0);
        this.setState({ toDashboard: true });
    }

    handleClickBookVaccine(){
        window.location.assign("/home");
    }

    handleClickVaccineHistory(){
        window.location.assign("/vaccineHistory");
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Navigate to='/' />
        }
        return (
            <nav className="navbar navbar-expand navbar-dark bg-black static-top">
                <TitleComponent title="Covid Vaccination"></TitleComponent>

                <h2 style={{ color: "white" }}>COVID VACCINATION BOOKING</h2>
                <div style={{ paddingLeft: 300 }}></div>
                <button
                    className="btn btn-primary btn-block" 
                    style={{width: '150px'}}
                    onClick={this.handleClickBookVaccine.bind(this)}
                  >
                    Book Vaccine
                  </button>
                  <div style={{ paddingLeft: 75 }}></div>
                  <button
                    className="btn btn-primary btn-block" 
                    style={{width: '150px'}}
                    onClick={this.handleClickVaccineHistory.bind(this)}
                  >
                    Vaccine History
                  </button>
                <div style={{ paddingLeft: 300 }}></div>
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
