import React from "react";
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={styles.posts}>
                <Post text="Smells like teen spirit" likesCount={14}/>
                <Post text="Who did sell the world?" likesCount={21}/>
                <Post text="Nirvana" likesCount={1237}/>
            </div>
        </div>
    )
}