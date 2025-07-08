import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import { createContext, useContext } from 'react';

import Not from './components/Not';

function App() {
  return (
    <div className="App">
      
      
      <Routes>
         <Route index path="/" element={<Signup/>}/>  
         <Route path="/Login" element={<Login/>}/>  
         <Route path="/Home" element={<Home/>}/> 
         <Route path='*' element={<Not/>}/>

      </Routes>
      
      
    </div>
  );
}

export default App;
