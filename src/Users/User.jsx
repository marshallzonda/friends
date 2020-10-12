import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../src/assets/images/avatar.jpg'
import { NavLink } from 'react-router-dom';



let User = ({user,followingInProgress,unfollow,follow}) =>{
    
    return (
                 <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" className={style.usersPhoto} />
                             </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id=> id === user.id)} 
                                onClick={() => {unfollow(user.id)}}>Unfollow</button>
                                : <button disabled={followingInProgress.some(id=> id === user.id)}
                                 onClick={() => {follow(user.id)}}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{/* u.location.city */}</div>
                            <div>{/* u.location.country */}</div>
                        </span>
                    </span>
                </div>
                )
            }


export default User