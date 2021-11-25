import React, {ChangeEvent, useState} from "react";
import styles from "./AddItemForm.module.css"

type AddItemFormPropsType = {
    buttonText: string
    addItem: (text: string) => void,
}
export const AddItemForm: React.FC<AddItemFormPropsType> = ({buttonText, ...props}) => {
    const [inputValue, setInputValue] = useState<string>("");

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    }
    const addItem = () => {
        const text = inputValue.trim();
        if (text) {
            props.addItem(text);
            setInputValue("");
        }
    }
    return (
        <div className={styles.messageForm}>
            <input value={inputValue}
                   placeholder="Write something..."
                   onChange={onChangeInputHandler}/>
            <button onClick={addItem}>{buttonText}</button>
        </div>
    )
}