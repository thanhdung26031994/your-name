import { Component } from "react";


const name = "Your name";

export default class Your extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <h1 style={{ textAlign: "center" }}>{name}</h1>
        )
    }
}
