import React from "react";
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea/>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={styles.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}