import React from "react";
import styles from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {dialogDataType} from "../../../redux/state";


type DialogItemPropsType = {
    dialogData: dialogDataType
}
export const DialogItem: React.FC<DialogItemPropsType> = ({dialogData}) => {
    const {id, name, avatar} = dialogData;
    const path = `/dialogs/${id}`;
    return (
        <div className={styles.item}>
            <NavLink to={path} className={({isActive}) => isActive ? styles.active : ""}>
                <img alt={avatar} src={avatar}/>
                <div className={styles.name}>
                    {name}
                </div>
            </NavLink>
        </div>
    )
}