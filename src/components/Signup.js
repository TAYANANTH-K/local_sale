import React, { useState } from 'react';
import axios from 'axios';
import logo from './logos.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [detail,setdet] = useState({name:"",email:"",pass:""});
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {name:detail.name,email:detail.email,pass:detail.pass};

    try {
      const response = await axios.post('http://localhost:4000/users', newUser);
      if (response.status === 201) {
        alert('User registered successfully!');
        
        navigate('/Login'); 
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to register user.');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <form onSubmit={handleSubmit} style={{ marginRight: '30px', width: '100%' }}>
          <h2 style={{ textAlign: 'center' }}>Signup</h2>

          <input
            type="text"
            placeholder="Enter name"
            value={detail.name}
            onChange={(e) => setdet({...detail,name:e.target.value})}
            style={inputStyle}
            
          />

          <input
            type="email"
            placeholder="Enter email"
            value={detail.email}
            onChange={(e) => setdet({...detail,email:e.target.value})}
            style={inputStyle}
        
          />

          <input
            type="password"
            placeholder="Enter password"
            value={detail.pass}
            onChange={(e) => setdet({...detail,pass:e.target.value})}
            style={inputStyle}/>

          <button type="submit" style={buttonStyle}>Register</button>

          <p style={{ textAlign: 'center' }}>
            Already have an account? <Link to="/Login">Log in</Link>
          </p>
        </form>

        <img src={logo} alt="logo" style={{ width: '200px', borderRadius: '10px' }} />
      </div>
    </div>
  );
}

const containerStyle = {
  backgroundColor: '#e0f7fa',
  marginTop: '9%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px'
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px'
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#00796b',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  marginTop: '15px',
  cursor: 'pointer'
};
