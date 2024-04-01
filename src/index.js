import React from "react";
import ReactDOM from "react-dom/client";
import Your from "./Your";
import Fruits from "./Fruits";


const root = ReactDOM.createRoot(document.getElementById("root"));
const tick = () => {
    root.render(
        <>
            <Your/>
            <Fruits/>
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        </>
    );
};
setInterval(tick, 1000);