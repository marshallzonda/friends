import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = (props) => {
    

  return (
    <BrowserRouter>
      <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route exact path="/dialogs" 
          render={()=><DialogsContainer/>}/>
        <Route path="/profile/:userId?" 
          render={()=><ProfileContainer />}/>
        <Route path="/news" 
          render={()=><News />} />
        <Route path="/users" 
          render={()=><UsersContainer />} />
          <Route path="/login" 
          render={()=><Login />} />
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
