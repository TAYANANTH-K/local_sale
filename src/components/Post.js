import React, { useState } from 'react';
import axios from 'axios';

export default function Post() {
  const [det, setd] = useState({
    producttype: "",
    name: "",
    price: "",
    image: "",
    details: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { producttype, ...productData } = det;

    axios.post(`http://localhost:4001/products/${producttype}`, productData)
      .then((res) => {
        console.log("Posted successfully", res.data);
      })
      .catch((err) => {
        console.error("Error posting data", err);
      });
  };

  return (
    <div>
      <h1>Post for Sale</h1>
      <form style={{ border: "2px solid black", padding: "10px" }} onSubmit={handleSubmit}>
        <label>Product type:</label>
        <select value={det.producttype} onChange={(e) => setd({ ...det, producttype: e.target.value })}>
          <option value="">Select</option>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="kitchen">Kitchen</option>
          <option value="fishtank">Fishtank</option>
          <option value="laptop">Laptop</option>
          <option value="mobile">Mobile</option>
          <option value="Tv">Tv</option>
        </select>
        <br /><br />

        <label>Name:</label>
        <input
          type="text"
          value={det.name}
          onChange={(e) => setd({ ...det, name: e.target.value })}
        />
        <br /><br />

        <label>Price:</label>
        <input
          type="number"
          value={det.price}
          onChange={(e) => setd({ ...det, price: e.target.value })}
        />
        <br /><br />

        <label>Image URL:</label>
        <input
          type="text"
          value={det.image}
          onChange={(e) => setd({ ...det, image: e.target.value })}
        />
        <br /><br />

        <label>Product details:</label>
        <input
          type="text"
          value={det.details}
          onChange={(e) => setd({ ...det, details: e.target.value })}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
