import React from "react"
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
            </div>
        </BrowserRouter>
    )
}