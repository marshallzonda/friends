import React from 'react';
import style from './Users.module.css';
import Paginator from '../components/Common/Paginator/Paginator';
import User from './User';


let Users = ({currentPage,onPageChanged,pageSize,totalUsersCount,users,...props}) =>{
    
    return (
        <div>
            <div className={style.allUsersContainer}> 
                {
                users.map(u => <User
                    user={u} 
                    key={u.id}
                    followingInProgress={props.followingInProgress}
                    follow={props.follow}
                    unfollow={props.unfollow}/>
                )
            }
            </div>
            <Paginator 
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
             />
        </div>
    )
}


export default Users