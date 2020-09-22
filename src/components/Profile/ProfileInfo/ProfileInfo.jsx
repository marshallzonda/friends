import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt=""/>
        avatar+description
      </div>
    </div>

  )
}

export default ProfileInfo