import React, { Fragment } from 'react';
import './App.css';
import IncreDecremenet from './UserData/IncreDecrement';
import Auth from './UserData/Auth'
import { UserProfile } from './UserData/UserProfile';
import { Header } from './UserData/Header';
import { useSelector } from 'react-redux';

const App =()=>{
  const isAuth = useSelector( state => state.authentication.isAuthenticed)
  return  (
    <Fragment>
      <Header />
     {!isAuth &&  <Auth/>}
      {isAuth && <UserProfile />}
      <IncreDecremenet /> 
    </Fragment>
  )
}

export default App;
