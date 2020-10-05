import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

import { createStore, combineReducers, applyMiddleware } from 'redux';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddlewere from 'redux-thunk';
import {reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer,
    
});

let store = createStore(reducers,applyMiddleware(thunkMiddlewere));

window.store = store

export default store