import React from "react";
import styles from "./MyPosts.module.css"
import {Post, postType} from "./Post/Post";

export const MyPosts = () => {
    const postsData: Array<postType> = [
        {id: "1", text: "Smells like teen spirit", likesCount: 142},
        {id: "2", text: "Who sold the world", likesCount: 97},
        {id: "3", text: "Do you like drugs", likesCount: 78},
        {id: "4", text: "Nirvana", likesCount: 231},
    ];
    const postElements = postsData.map(post =>
        <Post id={post.id} text={post.text} likesCount={post.likesCount}/>
    );
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
                {postElements}
            </div>
        </div>
    )
}