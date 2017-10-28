import React, {Component} from "react";
import Book from "./book";

export default class Books extends Component {
    render() {
        return (
            <ul>
                <Book />
            </ul>
        );
    }
}