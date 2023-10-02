import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    // Check authentication status when the component mounts
    checkAuthenticationStatus();
  }, []);

  const checkAuthenticationStatus = async () => {
    try {
      // Make a request to your server to check if the user is authenticated
      const response = await axios.get('http://localhost:8010/check-authentication', {
            withCredentials: true, // Send and receive cookies
        });

      // If the response indicates successful authentication, set the user's email and mark them as logged in
      if (response.data.authenticated) {
        setUserEmail(response.data.email);
        setIsLoggedIn(true);
      }
    } catch (error) {
      // Handle errors or unauthenticated state
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      // Make a request to your server to log the user out (clear the authentication token or session)
      await axios.post('http://localhost:8010/logout');

      // Reset the user's email and authentication status
      setUserEmail('');
      setIsLoggedIn(false);
      navigate('/login')

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
        {
            isLoggedIn ? <div>
            <p>Welcome {userEmail}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>  :
    
        <p>Please log in to access the homepage.</p>
    }
    </div>
  );
};

export default Homepage;
