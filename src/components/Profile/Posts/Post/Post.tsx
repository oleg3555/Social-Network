import React from "react";
import styles from "./Post.module.css"

type postPropsType = {
    text: string,
    likesCount: number
}

export const Post = (props: postPropsType) => {
    return (
        <div>
            <div className={styles.post}>
                <img alt="avatar"
                     src="https://2.bp.blogspot.com/-KX_XNRWYQC4/V7wAGRDlqaI/AAAAAAAACdA/SA8_ff2oS_MyIiAD7Kzoy5oEhD3bLddwQCLcB/s1600/Kurt%2BCobain.jpg"
                />
                <div className={styles.item}>{props.text}</div>
            </div>
            <div className={styles.item}>
                likes: {props.likesCount}
            </div>
        </div>

    )
}