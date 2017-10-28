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
                    <Link to="/home" activeClassName="is-active" className="button is-primary is-small is-outlined"> Home </Link>
                    <Link to="/books" activeClassName="is-active" className="button is-primary is-small is-outlined"> Books </Link>
                    <Link to="/about" activeClassName="is-active" className="button is-primary is-small is-outlined"> About </Link>
                    <Link to="/add" activeClassName="is-active" className="button is-primary is-small is-outlined"> Submit a book </Link>
                </nav>
            </article>
        );
    }
}

export default Header;
