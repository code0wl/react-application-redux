import React from "react"
import {Route} from "react-router-dom";
import Home from "./components/pages/home/home";
import About from "./components/pages/about/about";
import AddBook from "./components/pages/add-book/add-book";
import Books from "./components/pages/books/books";

export default () => {
    return (
        <div className="app-canvas">
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/categories" component={About}></Route>
            <Route path="/books" component={Books}></Route>
            <Route path="/add" component={AddBook}></Route>
        </div>
    );
}