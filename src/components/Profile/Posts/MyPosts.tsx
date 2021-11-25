import React from "react";
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {postType} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: Array<postType>
}
export const MyPosts: React.FC<MyPostsPropsType> = ({postsData}) => {
    const postElements = postsData.map(post =>
        <Post key={post.id} post={post}/>
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