import React from "react";
import styles from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";


type dialogItemPropsType = {
    id: string,
    name: string
}
export const DialogItem = (props: dialogItemPropsType) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={styles.item}>
            <NavLink to={path} className={({isActive}) => isActive ? styles.active : ""}>
                {props.name}
            </NavLink>
        </div>
    )
}