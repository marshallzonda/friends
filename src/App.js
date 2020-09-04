import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route exact path="/dialogs" component={Dialogs} />
        <Route path="/profile" component={Profile}/>
        <Route path="/news" component={News} />
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
