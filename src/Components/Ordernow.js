import React, { useState } from 'react';
import './Ordernowstyle.css';

function OrderNow() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [payment, setPayment] = useState('credit-card');

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform action on form submission, such as sending data to server
  }

  return (
    <div className="order-now-container">
      <h1 className='title'>Order Now</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="address">Delivery Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />


        {/* <label htmlFor="payment">Payment Method:</label>
        <select
          id="payment"
          value={payment}
          onChange={(event) => setPayment(event.target.value)}
          required
        >
          <option value="credit-card">Credit Card</option>
          <option value="debit-card">Debit Card</option>
          <option value="paypal">Paypal</option>
        </select> */}

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default OrderNow;
