import { Route, Routes } from 'react-router-dom';
import About from './pages/about/about';
import Home from './pages/home/home';
import UserDetails from './pages/users-details/users-details';
import Demo from './pages/demo/demo';
import ContactUs from './pages/contact-us/contact-us';
import Terms from './pages/terms and conditions/terms';
import Users from './components/users/users';
import List from './pages/list/List';
import Login from './pages/login/login';
import Register from './pages/register/register';



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/despre' element={<About />} />
      <Route path='/contactează-ne' element={<ContactUs />} />
      <Route path='/demo' element={<Demo />} />
      <Route path='/formular' element={<UserDetails />} />
      <Route path='/termeni' element={<Terms />} />
      <Route path='/user/:id' element={<Users />} />
      <Route path='/list' element={<List />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      </Routes>
      </>
      
  
  );
}

export default App;
