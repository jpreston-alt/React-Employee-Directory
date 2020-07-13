import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="uk-container header-container">
            <h1 className="subtitle">Employee Directory</h1>
            <p className="subtitle">Click on carrots to filter by heading or use search box to narrow your results</p>
        </div>
    )
};

export default Header;