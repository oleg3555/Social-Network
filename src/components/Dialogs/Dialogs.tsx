import React from "react";
import styles from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Route, Routes} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {dialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPageData: dialogsPageType,
    addMessage: (id: string, text: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPageData, ...props}) => {
    const {dialogsData, messagesData} = dialogsPageData;
    const dialogItems = dialogsData.map(dialog =>
        <DialogItem key={dialog.id}
                    dialogData={dialog}
        />);
    const dialogs = dialogsData.map(dialog =>
        <Route key={dialog.id} path={`/${dialog.id}`} element={
            <Dialog messageData={messagesData[dialog.id]}
                    addMessage={props.addMessage}
                    dialogId={dialog.id}/>
        }/>
    );

    return (
        <div className={styles.dialogs}>
            <div className={styles.chats}>
                {dialogItems}
            </div>
            <div className={styles.conversation}>
                <Routes>
                    {dialogs}
                </Routes>
            </div>
        </div>
    )
}