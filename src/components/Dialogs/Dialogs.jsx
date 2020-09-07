import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItems/DialogsItems';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: "Katya" },
        { id: 2, name: "Marina" },
        { id: 3, name: "Andrew" },
        { id: 4, name: "Bohdan" },
        { id: 5, name: "Vika" },
    ]

    let messages = [
        { id: 1, message: "Hi" },
        { id: 2, message:"Hello what are you doing?"},
        { id: 3, message:"It is what you hear listen." },
    ]
    let dialogsElement = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    
    let messagesElements = messages.map( message => <Message message={message.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;