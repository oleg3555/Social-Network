import React from "react";
import styles from "./Dialogs.module.css";
import {Message, messageType} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {Route, Routes} from "react-router-dom";

type dialogDataType = {
    id: string,
    name: string,
}
type messagesDataType = {
    [key: string]: Array<messageType>
}
type dialogPropsType = {
    messageData: Array<messageType>
}
export const Dialog = (props: dialogPropsType) => {
    return (
        <div>
            {props.messageData.map(mes =>
                <Message avatar={mes.avatar}
                         name={mes.name}
                         message={mes.message}
                         time={mes.time}/>)
            }
        </div>
    )
}
export const Dialogs = () => {
    const avatars = {
        Artem: 'https://sun9-74.userapi.com/impf/c845420/v845420354/20540c/m5j3UygwOrc.jpg?size=607x1036&quality=96&sign=02cc4c35223f11c3e474404204b87077&type=album',
        Oleg: 'https://sun9-73.userapi.com/impf/c852036/v852036917/7aea3/sY5TQmD4Af4.jpg?size=1280x960&quality=96&sign=b81435282a1e1e332d82be9914ec84c6&type=album',
        Kurt: 'https://2.bp.blogspot.com/-KX_XNRWYQC4/V7wAGRDlqaI/AAAAAAAACdA/SA8_ff2oS_MyIiAD7Kzoy5oEhD3bLddwQCLcB/s1600/Kurt%2BCobain.jpg',
        Alesya: 'https://sun9-73.userapi.com/impg/nM1YxZqIEVZKKt9hn-kEIPrBYBhNku4M95w_ww/YWF82RlPxDs.jpg?size=746x1080&quality=96&sign=5f7a12a9fece445c91c1814930bcb597&type=album'
    }
    const dialogsData: Array<dialogDataType> = [
        {id: "1", name: "Artem"},
        {id: "2", name: "Kurt"},
        {id: "3", name: "Alesya"},
    ]
    const messageData: messagesDataType = {
        "1": [
            {
                avatar: avatars.Oleg,
                name: 'Oleg',
                message: 'Hey, do you like to learn React?',
                time: '22:00',
            },
            {
                avatar: avatars.Artem,
                name: 'Artem',
                message: 'Hey, I think it\'s very hard?',
                time: '22:03',
            },
            {
                avatar: avatars.Oleg,
                name: 'Oleg',
                message: 'Try to include React in your project',
                time: '22:07',
            },
        ],
        "2": [
            {
                avatar: avatars.Oleg,
                name: 'Oleg',
                message: 'I love your songs',
                time: '23:12',
            },
            {
                avatar: avatars.Oleg,
                name: 'Oleg',
                message: 'You are really best!!!',
                time: '23:13',
            },
            {
                avatar: avatars.Kurt,
                name: 'Kurt',
                message: 'Thank you, I hope it\'s true',
                time: '22:07',
            },
        ],
        "3": [
            {
                avatar: avatars.Alesya,
                name: 'Alesya',
                message: 'How are you?',
                time: '23:46',
            },
            {
                avatar: avatars.Oleg,
                name: 'Oleg',
                message: 'Nice, what about you?',
                time: '23:49',
            },
            {
                avatar: avatars.Alesya,
                name: 'Alesya',
                message: 'I\'m happy:)',
                time: '23:54',
            },
        ]
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.chats}>
                {dialogsData.map(dialog =>
                    <DialogItem id={dialog.id}
                                name={dialog.name}
                                key={dialog.id}
                    />)}
            </div>
            <div className={styles.conversation}>
                <Routes>
                    {dialogsData.map(dialog =>
                        <Route path={`/${dialog.id}`} element={
                            <Dialog key={dialog.id}
                                    messageData={messageData[dialog.id]}/>
                        }/>
                    )}
                </Routes>
            </div>
        </div>
    )
}