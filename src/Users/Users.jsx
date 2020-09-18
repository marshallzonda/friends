import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../src/assets/images/avatar.jpg'


class  Users extends React.Component{
    
    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response =>{
            this.props.setUsers(response.data.items);
        }) 
    }
    render(){
        let pagesCount

        return (
            <div>
                <div> 
                    <span className={style.selectedPage}>1</span>
                    <span className={style.selectedPage}>2</span>
                    <span className={style.selectedPage}>3</span>
                    <span className={style.selectedPage}>4</span>
                    <span className={style.selectedPage}>5</span>
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div><img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={style.usersPhoto} /></div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
    
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
}

export default Users