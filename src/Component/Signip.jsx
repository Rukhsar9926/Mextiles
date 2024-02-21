import React from 'react'
import { useState } from 'react';

const Signip = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form Data:', formData);
  
  };
  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Sign In</h2>
      <form style={{ maxWidth: '300px', margin: 'auto' }} onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </label>
        <br />
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </label>
        <br />
        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>
          Sign In
        </button>
      </form>
    </div>
    </>
  )
}

export default Signip