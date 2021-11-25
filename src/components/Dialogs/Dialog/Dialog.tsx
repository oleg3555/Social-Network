import {Message} from "../Message/Message";
import React from "react";
import {messageType} from "../../../redux/state";

type DialogPropsType = {
    messageData: Array<messageType>
}
export const Dialog: React.FC<DialogPropsType> = ({messageData}) => {
    return (
        <div>
            {messageData.map(mes =>
                <Message key={mes.id} message={mes}/>)
            }
        </div>
    )
}
