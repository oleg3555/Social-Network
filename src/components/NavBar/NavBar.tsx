import React from "react";
import styles from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
            <div>Settings</div>
        </nav>
    )
}