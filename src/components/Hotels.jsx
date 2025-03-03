import React from 'react';
import HotelCard from './HotelCard';

const Hotels = ({ trips }) => {
 
  return (
    <div className="my-4 w-full">
      <h1 className="font-bold text-3xl mb-5">Hotels Recommendations</h1>
      <div className=" xl:grid-cols-3 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full xl:gap-24 gap-12  ">
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
