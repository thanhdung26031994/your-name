import React, {Component} from "react";

const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Apricot",
    "Black rowan",
    "Cranberry",
];

export default class Fruits extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div>
                    <h1>List of fruits</h1>
                    <ul>
                        {fruits.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}