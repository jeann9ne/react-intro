import React from "react";

function Header(props) {
    return(
    <header className={styles.header}>
    <h1>{props.title}</h1>
    <hr />
    </header>
    )
}

const styles = {
    header: {
        fontFamily: "'Dosis', san-serif",
    }
}

export default Header