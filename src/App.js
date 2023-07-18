import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './component/login/Login';
import Main from './component/main/Main';
import { checkAuth } from './utils/auth'
import Home from './component/home/Home';
import User from './component/user/User';
import Category from './component/category/Category';
import AddCategory from './component/category/AddCategory';

import SubCategory from './component/subcategory/SubCategory';
import AddSubCategory from './component/subcategory/AddSubCategory';
import EditSubCategory from './component/subcategory/EditSubCategory';

import SubSubCategory from './component/subsubcategory/SubSubCategory';
import AddSubSubCategory from './component/subsubcategory/AddSubSubCategory';
import EditSubSubCategory from './component/subsubcategory/EditSubSubCategory';
function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/login' element={<Login />} />

          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<Main />}>

              <Route exact path='/' element={<Home />} />
              <Route exact path='/user' element={<User />} />
              <Route exact path='/category' element={<Category />} />
              <Route exact path='/add-category' element={<AddCategory />} />

              <Route exact path='/subcategory' element={<SubCategory />} />
              <Route exact path='/add-subcategory' element={<AddSubCategory />} />
              <Route exact path='/edit-subcategory' element={<EditSubCategory />} />

              <Route exact path='/subsubcategory' element={<SubSubCategory />} />
              <Route exact path='/add-subsubcategory' element={<AddSubSubCategory />} />
              <Route exact path='/edit-subsubcategory' element={<EditSubSubCategory />} />
            </Route>
          </Route>

          
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
