const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
let initialState = {
     users: [
        { id: 1, followed: false, fullName:'Dmitry', status:'I am a boss', location:{city:'Minsk',country:'Belarus'}},
        { id: 2, followed: true,fullName:'Sasha', status:'I am a boss too', location:{city:'Moscow',country:'Russia'}},
        { id: 3, followed: false, fullName:'Andrew', status:'I am a boss also', location:{city:'Kiev',country:'Ukraine'}},
    ],
    newPostText:"it-kamasutra"
}

const usersReducer = (state = initialState, action)=>{
    switch(action.type){
        case FOLLOW:
            let stateCopy ={...state, 
                users:state.users.map(u => u),
            }
        case UNFOLLOW:

        default:
            return state;
    }
   
}
export const followAC= (userId) =>({type:FOLLOW, userId})
export const unfollowAC = (userId)=>({ type:UNFOLLOW, userId})
export default usersReducer