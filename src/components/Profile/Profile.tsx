import React from "react";
import styles from "./Profile.module.css";
import {MyPosts} from "./Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePageData: profilePageType
}
export const Profile: React.FC<ProfilePropsType> = ({profilePageData}) => {
    const {postsData} = profilePageData;
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}