import React from 'react'

const Tips = ({ trips }) => {
    return (
        <div className='mt-4'>
            <h1 className='font-bold text-3xl'>Know Before You Go: 📍{trips?.userChoice?.place}</h1>

            {
                trips?.TripData?.notes?.map((note, idx) => {
                    return (
                        < ul key={idx} className='flex flex-col my-3 gap-y-2 list-disc'>
                            <li className='text-lg font-semibold'>{note}</li>
                        </ul>
                    )
                })
            }


        </div>
    )
}

export default Tips