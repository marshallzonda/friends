import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

import { createStore, combineReducers, applyMiddleware } from 'redux';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddlewere from 'redux-thunk';
import {reducer as fromReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:fromReducer,
    
});

let store = createStore(reducers,applyMiddleware(thunkMiddlewere));

window.store = store

export default store