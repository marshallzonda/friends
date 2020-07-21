import React from 'react';
import profile from './Profile.module.css'

const Profile = () => {
    return (
        <div className={profile.content}>
        <div>
          <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"></img>
        </div>
        <div>
          avatar+description
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div className={profile.item}>
            post 1
          </div>
          <div className={profile.item}>
            post 2
          </div>
        </div>
      </div>
    
    )
}

export default Profile