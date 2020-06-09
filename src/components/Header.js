import React from "react";

function Header(props) {
    return(
    <header className="header">
    <h1>{props.title}</h1>
    <hr />
    </header>
    )
}

export default Header