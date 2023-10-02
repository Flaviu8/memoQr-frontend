import React, { useState } from 'react';
import axios from 'axios';
import './register.css'

const RegisterN = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    lastName: '',
    firstName: '',
    password: '',
    repeatPassword: '',
  });

  const [errors, setErrors] = useState({
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      setErrors({
        password: 'Password and repeat password do not match',
      });
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setErrors({
        password:
          'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.',
      });
      return;
    }

    // Send registration data to the server
    try {
      const response = await axios.post('http://localhost:8010/register', formData);
      console.log(response.data); // Handle success
    } catch (error) {
      console.error(error); // Handle server error
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>LastName:</label>
          <input
            type="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>FirstName:</label>
          <input
            type="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label>Repeat Password:</label>
          <input
            type="password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterN;
