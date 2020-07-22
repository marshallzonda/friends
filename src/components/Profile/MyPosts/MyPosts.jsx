import React from 'react';
import myPosts from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
          </div>
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts