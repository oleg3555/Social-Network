import React from "react";
import styles from "./Post.module.css";
import {postType} from "../../../../redux/state";

type PostPropsType = {
    post: postType
}


export const Post: React.FC<PostPropsType> = ({post}) => {
    return (
        <div className={styles.post}>
            <div className={styles.part}>
                <img alt="avatar"
                     src="https://2.bp.blogspot.com/-KX_XNRWYQC4/V7wAGRDlqaI/AAAAAAAACdA/SA8_ff2oS_MyIiAD7Kzoy5oEhD3bLddwQCLcB/s1600/Kurt%2BCobain.jpg"
                />
                <div className={styles.item}>{post.text}</div>
            </div>
            <div className={styles.item}>
                likes: {post.likesCount}
            </div>
        </div>
    )
}