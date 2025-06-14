import { createRoot } from 'react-dom/client';

const Applayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
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

const BodyComponent = () => {
  return (
    <>
      <div className='body'>
        <div className='search'>
          <h3>Search</h3>
        </div>
        <div className='res-container'>
          <RestaurantCard />
        </div>
      </div>
    </>
  );
};

const RestaurantCard = () => {
  return (
    <>
      <div className='res-card'>
        <img
          className='res-logo'
          src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/6/6/a380b487-e336-41fa-966a-2b1490e475c9_49f5550e-15a1-42cc-96f9-46e416891bff.jpg'
        />
        <h3>Meghana foods</h3>
        <h4>Biryani, North Indian</h4>
        <h4>4.4 stars</h4>
        <h4>38 minutes</h4>
      </div>
    </>
  );
};

const root = createRoot(document.getElementById('root'));

root.render(<Applayout />);
