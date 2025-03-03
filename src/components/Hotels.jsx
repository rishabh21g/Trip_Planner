import React from 'react';
import HotelCard from './HotelCard';

const Hotels = ({ trips }) => {
 
  return (
    <div className="my-4 w-full">
      <h1 className="font-bold text-3xl mb-5">Hotels Recommendations</h1>
      <div className="flex flex-row flex-wrap  w-full gap-8 items-center justify-between">
        {trips?.TripData?.travelPlan?.hotelOptions.map((hotel, index) => {
          return (
           <HotelCard key={index} hotel={hotel} index={index}/>
          );
        })}
      </div>
    </div>
  );
};

export default Hotels;
