import { createRoot } from 'react-dom/client';

const Applayout = () => {
  return (
    <>
      <HeaderComponent />
    </>
  );
};

const HeaderComponent = () => {
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
          </ul>
        </div>
      </div>
    </>
  );
};

const root = createRoot(document.getElementById('root'));

root.render(<Applayout />);
