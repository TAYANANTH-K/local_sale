import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Profile(props) {
  const [prdata, setprdata] = useState([]);
  const [userr, setuserr] = useState([]);
  const {email}=useParams()
  console.log("email:",email);
  useEffect(() => {
    
    axios
      .get(`http://localhost:4002/products?email=${email}`)
      .then((res) => {
        setprdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });


    axios
      .get(`http://localhost:4000/users?email=${email}`)
      .then((res) => {
        console.log(res.data)
        setuserr(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.email]);

  
  const del = (id) => {
    axios
      .delete(`http://localhost:4002/products/${id}`)
      .then(() => {
        
          console.log("deleted successfully")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>UserProfile</h1>

      {userr.map((val) => (
        <div key={val.id}>
          <h1>Name : {val.name}</h1>
          <h1>Email : {val.email}</h1>
        </div>
      ))}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {prdata.map((val) => (
          <div
            key={val.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              width: '200px',
              borderRadius: '6px',
            }}
          >
            <img
              src={val.image}
              alt={val.name}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '4px',
              }}
            />
            <h3>{val.username}</h3>
            <p style={{ margin: '5px 0' }}>Price: ₹{val.price}</p>
            <p style={{ fontSize: '14px', color: '#555' }}>{val.details}</p>
            <button
              style={{ color: 'black', backgroundColor: 'red' }}
              onClick={() => del(val.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div> 
    </div>
  );
}
