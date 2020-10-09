import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../src/assets/images/avatar.jpg'
import { NavLink } from 'react-router-dom';
import Paginator from '../components/Common/Paginator/Paginator';


let Users = (currentPage,onPageChanged,pageSize,totalUsersCount,{...props}) =>{
    /* let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        
    let pages = [];
    for(let i=1; i <= pagesCount; i++){
        pages.push(i)
    } */
    return (
        <div>
            <Paginator 
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize} />
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={style.usersPhoto} />
                             </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id=> id === u.id)} 
                                onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id=> id === u.id)}
                                 onClick={() => {props.follow(u.id)}}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{/* u.location.city */}</div>
                            <div>{/* u.location.country */}</div>
                        </span>
                    </span>
                </div>
                )
            }
        </div>
    )
}


export default Users