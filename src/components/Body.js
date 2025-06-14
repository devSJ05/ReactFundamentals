import { RestaurantCard } from './RestaurantCard';

export const Body = () => {
  return (
    <>
      <div className='body'>
        <div className='search'>
          <h3>Search</h3>
        </div>
        <div className='res-container'>
          <RestaurantCard
            resName='Meghana Foods'
            cuisine='Biryani, North Indian'
            rating='4.4'
            eta='38 minutes'
          />
        </div>
      </div>
    </>
  );
};
