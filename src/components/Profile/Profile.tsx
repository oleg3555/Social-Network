import React from "react";
import styles from "./Profile.module.css";
import {MyPosts} from "./Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}