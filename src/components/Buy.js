import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Buy() {
  const { name } = useParams();
  const [prd, setPrd] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4002/products?name=${name}`)
      .then((res) => {
        setPrd(res.data);
      })
      .catch((err) => {
        console.log('Failed to fetch product:', err);
        setPrd([]);
      });
  }, [name]);   

  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <div>
        <h2>Product Details</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {prd.map((val, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                padding: '20px',
                width: '400px',
                borderRadius: '6px',
                height: '600px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'border-box',
              }}
            >
              <img
                src={val.image}
                alt={val.name}
                style={{ width: '80%', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
              />
              <h3 style={{ margin: '10px 0 5px' }}>{val.name}</h3>
              <h4 style={{ margin: '5px 0', color: '#888' }}>{val.username}</h4>
              <p style={{ margin: '5px 0' }}>Price: ₹{val.price}</p>
              <p style={{ fontSize: '14px', color: '#555', flexGrow: 1 }}>{val.details}</p>
              <p style={{ marginTop: 'auto' }}>Contact number: {val.mobile}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
