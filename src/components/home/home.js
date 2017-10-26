import React, {Component} from "react";
import "./home.css";
import {Link} from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="hero-image"></div>
                <h2> Books administration </h2>
                <p> A library of books I love to keep </p>
                <Link to="about" className="btn btn-primary"> To about page </Link>
            </div>
        );
    }
}

