import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';

function App  () {

  const [isLoggedIn, setisLoggedIn]=useState(false);
  return (
    <div className='w-screen h-screen bg-richblack-900 flex flex-col overflow-auto'>
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>

      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path='/login' element={<Login setIsLoggedIn={setisLoggedIn}/>}/>
        <Route path='/signup' element={<Signup setIsLoggedIn={setisLoggedIn}/>}/>
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
          }/>
      </Routes>
    </div>
  );
}

export default App;
