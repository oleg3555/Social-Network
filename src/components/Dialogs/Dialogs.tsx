import React from "react";
import styles from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Route, Routes} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {dialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPageData: dialogsPageType,
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPageData}) => {
    const {dialogsData, messagesData} = dialogsPageData;
    const dialogItems = dialogsData.map(dialog =>
        <DialogItem key={dialog.id}
                    dialogData={dialog}
        />);
    const dialogs = dialogsData.map(dialog =>
        <Route path={`/${dialog.id}`} element={
            <Dialog key={dialog.id}
                    messageData={messagesData[dialog.id]}/>
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