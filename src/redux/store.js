import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store ={
  _state:{
    profilePage: {
      posts: [
        { id: 1, message: "Hi", likesCount: 12 },
        { id: 2, message: "Hello what are you doing?", likesCount: 15 },
      ],
      newPostText:"it-kamasutra"
    },
    dialogsPage: {
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
    },
    sidebar:{

    }
  },
  _callSubscriber(){
    console.log('State was changed')
  },
  
  getState(){
    return this._state
  },
  subscribe(observer){
    this._callSubscriber = observer;  //Паттерн наблюдатель(observer)
  },
  _addPost(){
    let newPost ={
      id:5,
      message:this._state.profilePage.newPostText,
      likesCount:0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText){
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  dispatch(action){ //{ type:'ADD_POST'}
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state); 
  }
}


export default store;
window.store = store;