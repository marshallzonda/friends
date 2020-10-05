import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../Common/FormsControls/FormControls';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItems/DialogsItems';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);

    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);
    /* let newMessageBody = state.newMessageBody; */
   
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    if (!props.isAuth) return <Redirect to='/login' />;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
            <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>

    )
}

let maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div> <Field 
                component={Textarea}
                validate={[required,maxLength50]}
                name={'newMessageBody'}
                placeholder="Enter your message" /></div>
            <div> <button>Send</button></div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;