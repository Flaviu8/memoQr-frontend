import React, {useState, useEffect} from 'react';
import { NavLink, Link } from "react-router-dom";
import Logo from "../../icons/memo.svg"
import './navbar.css'
import hamburgerIcon from "../../assets/menu-icon.svg"
import xIcon from "../../assets/x-symbol.svg"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function NavigationBar () {
  const [showMenu, setShowMenu] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()
  const randomQueryParam = `?random=${Math.random()}`

  useEffect(() => {
    // Check authentication status when the component mounts
    checkAuthenticationStatus();
  }, []);

  const checkAuthenticationStatus = async () => {
    try {
      // Make a request to your server to check if the user is authenticated
      const response = await axios.get(`http://localhost:8010/check-authentication${randomQueryParam}`, {
        method: 'POST',
        withCredentials: true,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'x-www-form-urlencoded',
        }, // Send and receive cookies
        });

      // If the response indicates successful authentication, set the user's email and mark them as logged in
      if (response.data.authenticated) {
        setUserEmail(response.data.email);
        setIsLoggedIn(true);
      }
      
    } catch (error) {
      // Handle errors or unauthenticated state
      console.error(error);
      navigate('/login')
    }
  };

  const handleLogout = async () => {
    try {
      // Make a request to your server to log the user out (clear the authentication token or session)
      await axios.post('http://localhost:8010/logout', {
          method: 'POST',
          withCredentials: true,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'x-www-form-urlencoded',
          },
      })

      // Reset the user's email and authentication status
      setUserEmail('');
      setIsLoggedIn(false);

    } catch (error) {
      console.error(error);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
 
 
  
  // React.useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(`https://app-ab8d0f9a-3cea-43eb-a9e5-97eb4e13c3b9.cleverapps.io/user/${id}`);
  //         setUser(response.data)
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  
  //     fetchData();
  //   }, [id]);



          //  const filteredUsers = user.filter((item) => item.id === "ea4251d2-5cd1-4451-aecb-bd8855ac4bfc");

  return (
    <div className='nav_main'>
      <img className='hamburger' src={hamburgerIcon} alt='menu' onClick={toggleMenu}/>
        <Link className='logo' href="/"><img src={Logo} alt="memoqr.com"></img></Link>
        <ul className={`navigation ${showMenu ? 'showMenu' : ''}`}>
        <div className='close_btn'>
            <img src={xIcon} alt='x-symbol' onClick={toggleMenu}/>
        </div>
            <li><NavLink to="/">Acasă</NavLink></li>
            <li><NavLink to="/despre">Despre</NavLink></li>
            <li><NavLink to="/contactează-ne">Contactează-ne</NavLink></li>
            <li><NavLink to={`/demo`}>Pagină Demo</NavLink></li>
           
            <li><NavLink className="list_of_user" to="/list">Lista</NavLink></li>
          <div className='login'>
            <button>Login</button>
          </div>
          </ul>
          <div className='login_btn'>
           {
            isLoggedIn ?<div className="dropdown">
            <span>{userEmail}</span>
            <div className="dropdown-content">
            <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
               : <></>
           } 
          </div>
    </div>
  );
}

export default NavigationBar;