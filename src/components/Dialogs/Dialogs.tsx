import React from "react";
import styles from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";

const messageData = {
    avatar: 'https://sun9-73.userapi.com/impf/c852036/v852036917/7aea3/sY5TQmD4Af4.jpg?size=1280x960&quality=96&sign=b81435282a1e1e332d82be9914ec84c6&type=album',
    name: 'Oleg',
    message: 'Hey, do you like to learning React?',
    time: '22:00',
}

export const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.chats}>
                <DialogItem id="1" name="Artem"/>
                <DialogItem id="2" name="Kurt"/>
                <DialogItem id="3" name="Alesya"/>
                <DialogItem id="4" name="Andrew"/>
                <DialogItem id="5" name="Nick"/>
                <DialogItem id="6" name="Vanya"/>
            </div>
            <div className={styles.conversation}>
                <Message avatar={messageData.avatar}
                         name={messageData.name}
                         message={messageData.message}
                         time={messageData.time}
                />
                <Message avatar={messageData.avatar}
                         name={messageData.name}
                         message={messageData.message}
                         time={messageData.time}
                />
                <Message avatar={messageData.avatar}
                         name={messageData.name}
                         message={messageData.message}
                         time={messageData.time}
                />
            </div>
        </div>
    )
}