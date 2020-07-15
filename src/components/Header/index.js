import React from "react";
import OffCanvas from "../Header/OffCanvas";
import "./style.css";

function Header() {
    return (
        <div className="uk-container header-container">
            <h1 className="subtitle">Employee Directory</h1>
            <button type="button" uk-toggle="target: #offcanvas-slide">About</button>
            <OffCanvas />
        </div>
    )
};

export default Header;