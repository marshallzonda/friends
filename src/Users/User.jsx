import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../src/assets/images/avatar.svg'
import { NavLink } from 'react-router-dom';



let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div key={user.id} className={style.userContainer}>
            <div className={style.userItem}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" className={style.usersPhoto} />
                </NavLink>
            </div>
            <div className={style.userItem}>
                {user.followed
                    ? <button className={style.btnFollow} disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => { unfollow(user.id) }}>Unfollow</button>
                    : <button className={style.btnUnfollow} disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => { follow(user.id) }}>Follow</button>}

            </div>
            <div className={style.userItem}>Name: {user.name}</div>
            {/* <div>{user.status}</div> */}
        </div>
    )
}


export default User