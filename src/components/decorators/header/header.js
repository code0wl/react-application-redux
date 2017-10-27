import React, {Component} from "react";
import "./header.css";
import logo from "../../../logo.svg";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <article className="header">
                <img src={logo} className="App-logo" alt="logo"/>
                <nav>
                    <Link to="/home" className="btn"> Home </Link>
                    <Link to="/about" className="btn"> About </Link>
                    <Link to="/add" className="btn"> Submit a book </Link>
                </nav>
            </article>
        );
    }
}

export default Header;
