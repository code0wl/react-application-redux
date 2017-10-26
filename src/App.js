import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Home from "./components/home/home";
import {BrowserRouter} from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo"/>
                <BrowserRouter>
                    <Home/>
                </BrowserRouter>
            </div>
        );
    }
}
