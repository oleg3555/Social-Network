import {Message, messageType} from "../Message/Message";
import React from "react";

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
