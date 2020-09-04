import React from 'react';
import post from './Post.module.css';


const Post = (props) => {
    return (
        <div className={post.item}>
                <img src="https://i.pinimg.com/originals/5e/b3/42/5eb3428f012a89b19b623b6291e54928.png" alt=""/>
                {props.message}
                <br/>
    <span>like {props.likesCount}</span>
          </div>
    )
}

export default Post