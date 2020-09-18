import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

import { createStore, combineReducers } from 'redux';
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    
});

let store = createStore(reducers);

window.store = store

export default store