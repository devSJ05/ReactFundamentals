export const RestaurantCard = (props) => {
  console.log(props);
  const restaurants = props.restaurants;
  console.log(restaurants);
  return (
    <div className='res-container'>
      {restaurants.map((res, index) => {
        return (
          <div key={index} className='res-card'>
            <img
              className='res-logo'
              src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/6/6/a380b487-e336-41fa-966a-2b1490e475c9_49f5550e-15a1-42cc-96f9-46e416891bff.jpg'
            />
            <h3>{res.info.name}</h3>
            <h4>{res.info.cuisines.toString()}</h4>
            <h4>{res.info.avgRating}</h4>
            <h4>{`${res.info.sla.deliveryTime} minutes`}</h4>
          </div>
        );
      })}
    </div>
  );
};
