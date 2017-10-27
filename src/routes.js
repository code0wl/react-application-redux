import React from "react"
import {Route, Switch} from "react-router-dom";
import Home from "./components/pages/home/home";
import About from "./components/pages/about/about";

export default () => {
    return (
        <div className="app-canvas">
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/categories" component={About}></Route>
            <Route path="/categories/books" component={About}></Route>
        </div>
    );
}