import { useEffect, useState } from 'react';
import { RestaurantCard } from './RestaurantCard';
import Shimmer from './Shimmer';

export const Body = () => {
  // creation of first state variable
  const [restaurantsInfo, setRestaurantsInfo] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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
    setFilteredRestaurants(restaurantData);
  };

  const filterRestaurants = () => {
    console.log('Searching for:', searchText);
    const searchedRestaurants = restaurantsInfo.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(searchedRestaurants);
  };

  return (
    <>
      {restaurantsInfo.length === 0 ? (
        <Shimmer />
      ) : (
        <div className='body'>
          <div className='search'>
            <div className='search-container'>
              <input
                type='text'
                placeholder='Search for restaurants...'
                className='search-input'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className='search-button' onClick={filterRestaurants}>
                Search
              </button>
            </div>
            <button onClick={filterTopRestaurants}>
              Top rated restaurants
            </button>
          </div>
          <div>
            <RestaurantCard restaurants={filteredRestaurants} />
          </div>
        </div>
      )}
    </>
  );
};
