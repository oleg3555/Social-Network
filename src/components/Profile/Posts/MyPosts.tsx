import React from "react";
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {postType} from "../../../redux/state";
import {AddItemForm} from "../../common/AddItemForm/AddItemForm";

type MyPostsPropsType = {
    postsData: Array<postType>,
    addPost: (text: string) => void
}
export const MyPosts: React.FC<MyPostsPropsType> = ({postsData, ...props}) => {
    const postElements = postsData.map(post =>
        <Post key={post.id} post={post}/>
    );
    return (
        <div>
            <h3>My Posts</h3>
            <div className={styles.form}>
                <AddItemForm buttonText="Post" addItem={props.addPost}/>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    )
}