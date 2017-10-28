import React, {Component} from "react";

export default class AddBook extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className='input-group'>
                        <label> Title </label>
                        <input name="title"/>
                    </div>
                    <div className='input-group'>
                        <label> Author </label>
                        <input name="title"/>
                    </div>

                    <div className='input-group'>
                        <label> Published date </label>
                        <input type="date"/>
                    </div>

                    <button> Submit</button>
                </form>
            </div>
        );
    }
}