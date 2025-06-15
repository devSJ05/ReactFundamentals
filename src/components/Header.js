import { useState } from 'react';

export const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const handleLogin = () => {
    btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
  };
  return (
    <>
      <div className='header'>
        <div className='logo'>
          <img src='https://marketplace.canva.com/EAFMme8qKdk/1/0/1600w/canva-modern-restaurant-bar-and-grill-food-logo-qG0JgcwrqHQ.jpg' />
        </div>

        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
            <li>
              <button onClick={handleLogin}>{btnName}</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
