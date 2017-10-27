import React, {Component} from "react";
import PropTypes from 'prop-types';
import logo from "./logo.svg";
import "./App.css";
import Routes from './routes';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo"/>
                <Routes />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};