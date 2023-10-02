import React, { useState, useEffect } from "react";
import { UserDetailsMainContainer, UserDetailsMain, UserDetailsTitle, FormLeftContainer, FormRightContainer, FormMainContainer, MainBottomContainer } from './login.style'
import axios from "axios";
import logo from "../../icons/memo.svg"
import './login.css'
import { NavLink } from "react-router-dom";
import bcrypt from 'bcryptjs'
import { useNavigate } from "react-router-dom";


const Register = () => {
  const salt = bcrypt.genSaltSync(10)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    const hashedPassword = bcrypt.hashSync(formData.password, salt)

    const formDataWithHashedPassword = {
      ...formData,
      password: hashedPassword
    }

    try {
      const response = await axios.post('http://localhost:8010/login', formData, {
        withCredentials: true, // Send and receive cookies
      });
      console.log(response.data); // Handle success
      navigate('/')
    } catch (error) {
      console.error(error); // Handle server error
    }
  };


  return (
<div className="container_login">
  <div>
    <img className="logo" src={logo} alt="memoqr"></img>
    <h1>Creeaza un cod Qr pentru piatra funerara pentru a pastra amintirile celor dragi</h1>
    <NavLink className='link_demo' to='/demo' >Vizualizeaza pagina noastra demo</NavLink>
  </div>
    <UserDetailsMainContainer>
      <UserDetailsTitle>
          <h3>Login in cont</h3>
      </UserDetailsTitle>
        <UserDetailsMain>
    
         <form onSubmit={handleSubmit} encType="multipart/form-data">
          <FormMainContainer>
            <div className="label_container">
              <label>Email*</label>
              <label>Parola*</label>
              </div>
              <div className="register">

                     <input
                      type="email"
                      name="email"
                      value={formData.email}
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
                    
                    </div>
          </FormMainContainer>
          <MainBottomContainer>
          <p style={{marginTop: "16px"}}> Ai uitat parola?</p>
          <NavLink to="/register">Recupereaza parola</NavLink>
          <br></br>
            <p style={{marginTop: "14px"}}> Nu ai un cont activ?</p>
            <NavLink to="/register">Inregistrare</NavLink>
            <button type="submit">Login</button>
          </MainBottomContainer> 
        </form>

        </UserDetailsMain>
    </UserDetailsMainContainer>
    </div>
  )
}

export default Register
