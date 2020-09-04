import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: "Katya" },
        { id: 2, name: "Marina" },
        { id: 3, name: "Andrew" },
        { id: 4, name: "Bohdan" },
        { id: 5, name: "Vika" },
    ]
    let messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message:"Hello what are you doing?"},
        { id: 3, message:"It is what you hear listen." },
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message="Hello what are you doing?" />
                <Message message="It is what you hear listen." />
            </div>
        </div>

    )
}

export default Dialogs;