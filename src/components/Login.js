import React, { useState } from 'react';
import axios from 'axios';
import logo from './logos.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:4000/users');
      const users = response.data;

      
      const user = users.find(u => u.email === email && u.pass === pass);

      if (user) {
        alert('Login successful!');
        navigate('/Home'); 
      } else {
        alert('Invalid email or password');
      }

    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong during login');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <form onSubmit={handleSubmit} style={{ marginRight: '30px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Signin</h2>

          <input 
            type="email" 
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />

          <input 
            type="password" 
            placeholder="Enter password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            style={inputStyle}
            required
          />

          <button 
            type="submit" 
            style={buttonStyle}
          >
            Login
          </button>

          <p style={{ marginTop: '15px', textAlign: 'center' }}>
            Create an account? <Link to="/">Sign up</Link>
          </p>
        </form>

        <img 
          src={logo}
          alt="logo" 
          style={{ width: '200px', height: 'auto', borderRadius: '10px' }} 
        />
      </div>
    </div>
  );
}

// Styles
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
