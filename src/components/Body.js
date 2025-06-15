import { useEffect, useState } from 'react';
import { RestaurantCard } from './RestaurantCard';
import Shimmer from './Shimmer';

export const Body = () => {
  // creation of first state variable
  const [restaurantsInfo, setRestaurantsInfo] = useState([]);

  const filterTopRestaurants = () => {
    setRestaurantsInfo(restaurantsInfo.filter((res) => res.info.avgRating > 4));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9720888&lng=77.694364&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();
    const restaurantData =
      json.data.cards['4']['card'].card.gridElements.infoWithStyle.restaurants;

    setRestaurantsInfo(restaurantData);
  };

  return (
    <>
      {restaurantsInfo.length === 0 ? (
        <Shimmer />
      ) : (
        <div className='body'>
          <div className='search'>
            <h3>Search</h3>
            <button onClick={filterTopRestaurants}>
              Top rated restaurants
            </button>
          </div>
          <div>
            <RestaurantCard restaurants={restaurantsInfo} />
          </div>
        </div>
      )}
    </>
  );
};
