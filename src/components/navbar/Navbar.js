import React from "react";

import { BsCart3 } from "react-icons/bs";
import "./navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <div>
                {" "}
                <img
                    src={require("./Etsy_logo.svg.png")}
                    alt="ETSY Logo"
                    width="80"
                    height="40"
                />
                <input type="text"></input>
                <button>Sign in</button>
                <BsCart3 />
            </div>
        </div>
    );
}
