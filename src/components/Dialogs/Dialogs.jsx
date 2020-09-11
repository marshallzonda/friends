import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItems/DialogsItems';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    
    let state = props.store.getState().dialogsPage;
    let dialogsElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    
    let messagesElements = props.messages.map( message => <Message message={message.message} />)
    let newMessageBody = props.messages.newMessageBody;
    let onSendMessageClick = ()=>{
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e)=>{
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div> 
                <div> <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message"></textarea></div>
                <div> <button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>

    )
}

export default Dialogs;