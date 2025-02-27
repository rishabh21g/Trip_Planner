import React from 'react'
import image from '../assets/trip.webp'

const TripInfo = ({ trips }) => {
    return (
        <div>
            <div className='items-center flex justify-center'>
                <img src={image} alt='placeholder image' className='w-full max-w-[750px] h-auto object-contain shadow-md rounded-lg my-4' />
            </div>
            <div className='mt-6 gap-4'>
                
                 <h2 className=' text-3xl font-bold '> Location📍: {trips?.userChoice?.place}</h2>
                 <div className=' flex gap-5 my-3'>
                 <p className='rounded-full text-xs bg-gray-300 py-2 px-4'>Budget: {trips?.userChoice?.budget}</p>
                 <p className='rounded-full text-xs bg-gray-300 py-2 px-4'>No. of Days: {trips?.userChoice?.noOfDays}</p>
                 <p className='rounded-full text-xs bg-gray-300 py-2 px-4'>{trips?.userChoice?.travelerType}</p>
                 </div>
                

            </div>
        </div>
    )
}

export default TripInfo