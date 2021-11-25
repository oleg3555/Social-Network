import {Message} from "../Message/Message";
import React from "react";
import {messageType} from "../../../redux/state";
import styles from "./Dialog.module.css";
import {AddItemForm} from "../../common/AddItemForm/AddItemForm";

type DialogPropsType = {
    dialogId: string,
    messageData: Array<messageType>,
    addMessage: (id: string, text: string) => void
}
export const Dialog: React.FC<DialogPropsType> = ({messageData, dialogId, ...props}) => {
    const addMessage = (text: string) => {
        props.addMessage(dialogId, text);
    }
    return (
        <div className={styles.dialog}>
            <div>
                {messageData.map(mes =>
                    <Message key={mes.id} message={mes}/>)
                }
            </div>
            <div className={styles.form}>
                <AddItemForm buttonText="Send" addItem={addMessage}/>
            </div>
        </div>
    )
}
