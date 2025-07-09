import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Home() {
  const [prd, setpr] = useState([]);
  const [sear,setsear]=useState('');

  
  useEffect(() => {
    axios.get('http://localhost:4001/products')
      .then((res) => {
        setpr(res.data);
      })
      .catch((e) => {
        console.error('Error fetching products:', e);
      });
  }, []);

  
  const Me = (type) => {
    axios.get(`http://localhost:4001/products?type=${type}`)
      .then((res) => {
        setpr(res.data);
      })
      .catch((e) => {
        console.error('Error fetching products:', e);
      });
  };

  const findd=()=>
  {
    axios.get(`http://localhost:4001/products?name=${sear}`)
    .then((res)=>
    { 
       console.log(res.data);
       console.log({sear})
        setpr(res.data); 
    })
    .catch((e)=>{
      console.log('error');
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2 style={{ marginBottom: '20px' }}>Product Listings</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap',gap:"20px"}}>
        <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold' }}>
          Search
          <input
            type="search" onChange={(e)=>setsear(e.target.value)}
            placeholder="Search by product name"
            style={{
              padding: '8px',
              width: '200px',
              marginTop: '5px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </label>
        <button onClick={findd} style={{width:"60px",height:"28px",marginTop:"1.912%"}}> Enter </button>

       

        <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold' }}>
          Product Type
          <select
            onChange={(e) => Me(e.target.value)}
            style={{
              padding: '8px',
              width: '200px',
              marginTop: '5px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          >
            <option value="">Select Type</option>
            <option value="kitchen">Kitchen</option>
            <option value="bike">Bike</option>
            <option value="car">Car</option>
            <option value="fishtank">Fish Tank</option>
            <option value="laptop"> Laptop </option>
            <option value="mobile"> Mobile</option>
          </select>
        </label>

        <p style={{border:"2px",backgroundColor:"green",marginLeft:"75%",padding:"10px 5px"}}> <Link to="/Post"> Post Product</Link> </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {prd.map((val, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', width: '200px', borderRadius: '6px' }}>
            <img
              src={val.image}
              alt={val.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <h3 style={{ margin: '10px 0 5px' }}>{val.name}</h3>
            <p style={{ margin: '5px 0' }}>Price: ₹{val.price}</p>
            <p style={{ fontSize: '14px', color: '#555' }}>{val.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
