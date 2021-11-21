import React from 'react'
import styles from './Message.module.css';

type messagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

export const Message = (props: messagePropsType) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={styles.message}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.data}>
                    <div className={styles.text}>{props.message}</div>
                    <div className={styles.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

