import React, { useState } from "react";
import { UserDetailsMainContainer, UserDetailsMain, UserDetailsTitle, FormMainContainer, MainBottomContainer } from './register.style'
import axios from "axios";
import logo from "../../icons/memo.svg"
import './register.css'
import { NavLink } from "react-router-dom";



const Register = () => {

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    lastName: '',
    firstName: '',
    password: '',
    repeatPassword: '',
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
    <>
<div className="container_register">
<div>
    <img className="logo" src={logo} alt="memoqr"></img>
    <h1>Creeaza un cod Qr pentru piatra funerara pentru a pastra amintirile celor dragi</h1>
    <NavLink className='link_demo' to='/demo' >Vizualizeaza pagina noastra demo</NavLink>
  </div>
    <UserDetailsMainContainer>
      <UserDetailsTitle>
          <h3>Inregistrare Utilizator</h3>
      </UserDetailsTitle>
        <UserDetailsMain>
    
         <form onSubmit={handleSubmit} encType="multipart/form-data">
          <FormMainContainer>
            <div className="label_container">
              <label>Nume*</label>
              <label>Prenume*</label>
              <label>Email*</label>
              <label>Telefon*</label>
              <label>Parola*</label>
              <label>Repeta Parola*</label>
              </div>
              <div className="register">
              <input
                      type="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                  />
                <input
                      type="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                  />     
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                  />

                  <input
                      type="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                  />
     
                         <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                  />
                    
                    <input
                      type="password"
                      name="repeatPassword"
                      value={formData.repeatPassword}
                      onChange={handleChange}
                      required
                  />
                    </div>
          </FormMainContainer>
          <MainBottomContainer>
            <p style={{marginTop: "14px"}}> Aveti un cont deja?</p>
            <NavLink to="/login">Logare</NavLink>
            <button type="submit">Inscriere</button>
          </MainBottomContainer> 
        </form>

        </UserDetailsMain>
    </UserDetailsMainContainer>
    </div>
    </>
  )
}

export default Register
