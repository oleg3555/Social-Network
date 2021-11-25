import React from 'react'
import styles from './Message.module.css';
import {messageType} from "../../../redux/state";

type MessagePropsType = {
    message: messageType
}
export const Message:React.FC<MessagePropsType> = ({message}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.avatar}>
                <img src={message.avatar} alt="avatar"/>
            </div>
            <div className={styles.message}>
                <div className={styles.name}>{message.name}</div>
                <div className={styles.data}>
                    <div className={styles.text}>{message.text}</div>
                    <div className={styles.time}>{message.time}</div>
                </div>
            </div>
        </div>
    )
}

