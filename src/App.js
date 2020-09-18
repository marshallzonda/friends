import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';


const App = (props) => {
    

  return (
    <BrowserRouter>
      <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route exact path="/dialogs" 
          render={()=><DialogsContainer/>}/>
        <Route path="/profile" 
          render={()=><Profile />}/>
        <Route path="/news" 
          render={()=><News />} />
           <Route path="/users" 
          render={()=><UsersContainer />} />
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
