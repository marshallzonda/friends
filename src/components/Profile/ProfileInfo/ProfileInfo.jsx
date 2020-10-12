import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/avatar.svg';

const ProfileInfo = ({profile,status,updateStatus}) => {
  if (!profile){
    return <Preloader />
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
      <img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt="" className={s.usersPhoto} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>

  )
}

export default ProfileInfo