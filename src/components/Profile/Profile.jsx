import React from 'react';
import profile from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={profile.content}>
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"></img>
      </div>
      <div>
        avatar+description
        </div>
      <MyPosts />
    </div>

  )
}

export default Profile