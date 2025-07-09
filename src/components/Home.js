import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [prd, setpr] = useState([]);
  



  useEffect(() => {
    axios.get('http://localhost:4001/products')
      .then((res) => {
        const allProducts = [];
        const data = res.data;
        for (const category in data) {
          allProducts.push(...data[category]);
        }
        setpr(allProducts);
      })
      .catch((e) => {
        console.error('Error fetching products:', e);
      });
  }, []);
  
  const Me=(e)=>
  {
    
    axios.get('http://localhost:4001/products/${e}')
    .then((res) => {
        const allProducts = [];
        const data = res.data;
        for (const category in data) {
          allProducts.push(...data[category]);
        }
        setpr(allProducts);
      })
      .catch((e) => {
        console.error('Error fetching products:', e);
      });
     
     
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial'}}>
      <h2 style={{ marginBottom: '20px' }}>Product Listings</h2>

     <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
  <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold' }}>
    Search
    <input
      type="search"
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

  <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold' }}>
    Price Filter
    <select
      style={{
        padding: '8px',
        width: '200px',
        marginTop: '5px',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}
    >
      <option > </option>
      <option>500 - 1000</option>
      <option>greater than 1000</option>
      <option>less than 500</option>
    </select>
  </label>

  <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold' }}>
    Product Type
    <select
      style={{
        padding: '8px',
        width: '200px',
        marginTop: '5px',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}
    >
      <option onChange={(e)=>Me(e.target.value)}> </option>
      <option>Kitchen</option>
      <option>Bike</option>
      <option>Car</option>
      <option>Fish tank</option>
    </select>
  </label>

  
  <div style={{ marginLeft: 'auto' }}>
    <button style={{color:"black", padding: '10px 20px'}}
    onMouseOver={e => e.currentTarget.style.backgroundColor = '#218838'}
    onMouseOut={e => e.currentTarget.style.backgroundColor = '#28a745'}>
      Post to Sale
    </button>
  </div>
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
