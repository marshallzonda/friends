const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
let initialState ={
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello what are you doing?" },
        { id: 3, message: "It is what you hear listen." },
      ],
      newMessageBody:"",
      dialogs: [
        { id: 1, name: "Katya" },
        { id: 2, name: "Marina" },
        { id: 3, name: "Andrew" },
        { id: 4, name: "Bohdan" },
        { id: 5, name: "Vika" },
      ]
}

const dialogsReducer = (state = initialState, action)=>{
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id:6, message:body});
            return state;
        default: 
            return state;
    }
   
}
export const sendMessageCreator = () =>({type:SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body)=>
  ({
      type:UPDATE_NEW_MESSAGE_BODY,
      body:body
  })
export default dialogsReducer