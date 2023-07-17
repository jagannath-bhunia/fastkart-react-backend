import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './component/login/Login';
import Main from './component/main/Main';
import { checkAuth } from './utils/auth'
import Home from './component/home/Home';
import User from './component/user/User';


function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          {/* <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<Main />}>

              <Route exact path='/' element={<Home />} />
              <Route exact path='/user' element={<User />} />
            </Route>
          </Route> */}
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Main />}></Route>
        </Routes>
      </Fragment>
    </Router>

  );
}

const PrivateRoute = () => {
  
  const auth = checkAuth.isAuthenticated;
  return auth ? <Outlet /> : <Navigate to="/login" />;
}
export default App;
