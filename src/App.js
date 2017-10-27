import React, {Component} from "react";
import "mini.css";
import "./App.css";
import Header from "./components/decorators/header/header";
import {BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import Routes from "./routes";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    {this.props.children}
                    <Routes/>
                </div>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};