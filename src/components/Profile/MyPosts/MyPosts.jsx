import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
/* import {addPostActionCreator,updateNewPostTextActinCreator} from '../../../redux/profile-reducer'; */
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormControls';

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo((props)=>{
    
    let postsElements = [...props.posts].reverse().map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values)=>{
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})
const AddNewPostForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field className={s.messageTextarea} component={Textarea} name={'newPostText'} placeholder='Post message'
                      validate={[required,maxLength10]}/>
                    </div>
                <div>
                    <button className={s.btn}>Add post</button>
                </div>
            </form>
    )
}
const AddPostReduxForm = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts