import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import React, { createContext, useContext, useState } from 'react';
import Buy from './components/Buy';
import Not from './components/Not';
import Post from './components/Post';
import { Passmail } from './components/Login';
import Profile from './components/Profile';
export const Value=React.createContext();
function App() {

  const [eemail,settEmail]=useState('')
  return (
    <div className="App">
      
      <Value.Provider value={{eemail,settEmail}}>
      <Routes>
         <Route index path="/" element={<Signup/>}/>  
         <Route path="/Login" element={<Login/>}/>  
         <Route path="/Home" element={<Home/>}/> 
         <Route path='*' element={<Not/>}/>
             <Route path="/buy/:name" element={<Buy />} />
             <Route path="/Profile/:email" element={<Profile/>}/>
         <Route path='/Post' element={<Post/>}/>
         <Route path='/Profile' element={<Profile/>}/>

      </Routes>

      </Value.Provider>
    
      
    </div>
  );
}

export default App;
