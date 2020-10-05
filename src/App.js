import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { getAuthUserData } from './redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';

class App  extends React.Component{
    componentDidMount(){
      this.props.initializeApp();
  }
  render(){
    if(!this.props.initialized){
      return <Preloader />
    }

    return ( 
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
      
    );
  } 
}
const mapStateToprops = (state) =>({
  initialized: state.app.initialized
})
export default compose(
  withRouter,
  connect(mapStateToprops,{initializeApp})
)(App) 