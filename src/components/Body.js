import { useState } from 'react';
import { RestaurantCard } from './RestaurantCard';

export const Body = () => {
  const data = [
    {
      name: 'Meghana Foods',
      cuisine: 'Biryani, North Indian',
      rating: '4.4',
      eta: '38 mins',
    },
    {
      name: 'Dominos',
      cuisine: 'Burgers, Pizzas',
      rating: '4.4',
      eta: '38 mins',
    },
    {
      name: 'KFC',
      cuisine: 'Burgers, Fried',
      rating: '3.8',
      eta: '38 mins',
    },
  ];

  // creation of first state variable
  const [list, setList] = useState(data);

  const filterTopRestaurants = () => {
    setList(list.filter((res) => res.rating > 4));
  };

  return (
    <>
      <div className='body'>
        <div className='search'>
          <h3>Search</h3>
          <button onClick={filterTopRestaurants}>Top rated restaurants</button>
        </div>
        <div>
          <RestaurantCard restaurantData={list} />
        </div>
      </div>
    </>
  );
};
