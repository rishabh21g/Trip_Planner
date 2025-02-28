import React, { useEffect } from 'react'
import image from "../assets/trip.webp"

const DailyPlan = ({ trips }) => {

  console.log(trips)
  return (
    <div>
      <h1 className='mt-3 font-bold text-3xl'> Places to visit</h1>
      <div>
        {
          trips?.TripData?.itinerary.map((dailyPlan, index) => {
            return (
              <div key={index} className='w-full flex flex-col gap-5 mt-3'>

                <div className=' rounded-md hover:brightness-110 bg-gray-200 h-auto shadow-md p-5 flex gap-x-5'>

                  <div className='w-[300px] h-auto'>
                    <img src={image} alt="place image" className='shadow-sm rounded-md' />
                  </div>
                  <div className='flex flex-col'>
                    <h2 className='text-lg font-semibold'>Day: {dailyPlan.day}</h2>
                    <h3 className='font-medium'>Theme: {dailyPlan.theme}</h3>

                  </div>


                </div>



              </div>
            )

          })
        }
      </div>
    </div>
  )
}

export default DailyPlan